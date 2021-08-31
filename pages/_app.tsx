import { useCallback, useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import { AppProps } from 'next/app';
import Layout from '../src/components/Layout';
import theme from '../src/theme';
import '../src/styles/globals.css';
import StateContext from '../src/context/StateContext';
import DispatchContext from '../src/context/DispatchContext';
import {useImmerReducer} from 'use-immer';
import { UserWithToken } from '../src/types/User';
import { State } from '../src/types/State';
import { AlertSeverity } from '../src/types/Alert';
import Axios, { CancelTokenSource } from 'axios';
import { TodoListProps } from '../src/types/Todo';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  const defaultUser: UserWithToken = {
    token: "",
    id: "",
    name: ""
  };

  const defaultAlert = {
    severity: AlertSeverity.INFO,
    message: ""
  };

  const initialState: State = {
    user: defaultUser,
    userIsLoggedIn: false,
    todoLists: [],
    alert: defaultAlert,
    alertIsVisible: false
  };

  const myReducer = (draft, action) => {
    switch(action.type) {
      case "login":
        draft.user = action.user;
        draft.userIsLoggedIn = true;
        return draft;
      case "logout":
        draft.user = defaultUser;
        draft.userIsLoggedIn = false;
        return draft;
      case "showAlert":
        draft.alertIsVisible = true;
        draft.alert = action.alert;
        return draft;
      case "hideAlert":
        draft.alertIsVisible = false;
        return draft;
      case "setTodoLists":
        draft.todoLists = action.todoLists;
        return draft;
      default:
        break;   
    }
  };

  const [appState, appDispatch] = useImmerReducer(myReducer, initialState);

  const getTodoLists = useCallback(async (user: UserWithToken, cleanUpRef: CancelTokenSource): Promise<void> => {

    const headers = {
        "Authorization": `Bearer ${user.token}`
    }

    try {
        const response = await Axios
            .get(
                `${process.env.API_URL}/todo-lists?filter[where][userId]=${user.id}&[include][relation]=todos`,
                { headers, cancelToken: cleanUpRef.token }
                );

        const { status, data } = response;

        if (status === 200) appDispatch({type: "setTodoLists", todoLists: data});;

    } catch(err) {
        console.log(err);
    }
    }, [appDispatch]);

  useEffect(() => {
    const savedUser = localStorage.getItem("todosUser");

    if (savedUser) appDispatch({type: "login", user: JSON.parse(savedUser)})
  }, [appDispatch]);

  useEffect(() => {
    let myRequest: CancelTokenSource;
    
    if (appState.userIsLoggedIn) {
      localStorage.setItem("todosUser", JSON.stringify(appState.user));
      myRequest = Axios.CancelToken.source();
      getTodoLists(appState.user, myRequest);
    } else {
      localStorage.removeItem("todosUser");
    }

    return () => {
      if (myRequest) myRequest.cancel();
    }
  }, [appState.userIsLoggedIn, appState.user]);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Todos</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <StateContext.Provider value={appState}>
        <DispatchContext.Provider value={appDispatch}>
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  )
}

export default MyApp
