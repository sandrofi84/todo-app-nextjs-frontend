import { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import { AppProps } from 'next/app';
import Layout from '../src/components/Layout';
import theme from '../src/theme';
import '../src/styles/globals.css';
import StateContext from '../src/context/stateContext';
import DispatchContext from '../src/context/DispatchContext';
import {useImmerReducer} from 'use-immer';
import { User } from '../src/types/User';
import { State } from '../src/types/State';

function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  const findUser = (): User => {
    const user = JSON.parse(localStorage.getItem('todosUser'));

    return user ? user : {id: "", name: ""}
  };

  const initialState: State = {
    user: {
      id: "",
      name: ""
    },
  };

  const myReducer = (draft, action) => {
    switch(action.type) {
      case "setUser":
        draft.user = findUser();
        return draft;
      default:
        break;   
    }
  };

  const [appState, appDispatch] = useImmerReducer(myReducer, initialState);

  useEffect(() => {
    appDispatch({type: "setUser"});
  }, [appDispatch])

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
        <title>My page</title>
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
