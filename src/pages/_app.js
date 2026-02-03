import '@/styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        id="cookieyes"
        type="text/javascript"
        src="https://cdn-cookieyes.com/client_data/fb2a99afbc5c287d1c7a545406090a3c/script.js"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}
