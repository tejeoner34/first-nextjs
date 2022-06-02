import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page)=> page)

  return getLayout(<Component {...Component.pageProps} />)
}

export default MyApp
