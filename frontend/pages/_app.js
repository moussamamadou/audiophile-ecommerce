import App from "next/app"
import Head from "next/head"
import Layout from "../components/Layout"
import "../styles/index.css"
import { getGlobalData } from "../utils/api"
import Seo from "../components/elements/Seo"

const MyApp = ({ Component, pageProps }) => {
  console.log("PageProps - ", JSON.stringify(pageProps))
  return (
    <Layout global={pageProps.global}>
      <Seo metadata={pageProps.global.metadata} />
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx)
  // Fetch global site settings from Strapi
  const global = await getGlobalData()
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } }
}

export default MyApp
