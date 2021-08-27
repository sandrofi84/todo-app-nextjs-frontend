import { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import { AppProps } from 'next/app';
import Layout from '../src/components/Layout';
import theme from '../src/theme';
import '../src/styles/globals.css';
import StateContext from '../src/context/StateContext';
import DispatchContext from '../src/context/DispatchContext';
import {useImmerReducer} from 'use-immer';
import { User, UserWithToken } from '../src/types/User';
import { State } from '../src/types/State';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  const defaultUser: UserWithToken = {
    token: "",
    id: "",
    name: ""
  };

  const initialState: State = {
    user: defaultUser,
    isLoggedIn: false,
  };

  const myReducer = (draft, action) => {
    switch(action.type) {
      case "login":
        draft.user = action.user;
        draft.isLoggedIn = true;
        return draft;
      case "logout":
        draft.user = defaultUser;
        draft.isLoggedIn = false;
        return draft;
      default:
        break;   
    }
  };

  const [appState, appDispatch] = useImmerReducer(myReducer, initialState);

  useEffect(() => {
    const savedUser = localStorage.getItem("todosUser");

    if (savedUser) appDispatch({type: "login", user: JSON.parse(savedUser)})
  }, [appDispatch]);

  useEffect(() => {
    if (appState.isLoggedIn) {
      localStorage.setItem("todosUser", JSON.stringify(appState.user));
    } else {
      localStorage.removeItem("todosUser");
    }
  }, [appState.isLoggedIn, appState.user]);

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
