import { Provider } from 'react-redux';
import { store } from '../app/store';
//import { Provider as AuthProvider } from 'next-auth/client';
import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

const MyApp = ({ Component, pageProps: {session, ...pageProps} }) => {
  return (
    <SessionProvider session={pageProps, session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>      
    </SessionProvider>
  );
};

export default MyApp;
