import { useEffect } from 'react';
import TagManager from 'react-gtm-module';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-T5HFD6M' });
  }, []);

  return <Component {...pageProps} />
}
