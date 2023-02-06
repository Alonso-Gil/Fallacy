import { AppProps as Props } from "next/app";
import Script from "next/script";
import Layout from "../components/global/Layout/Layout";
import Providers from "../containers/Providers/Providers";

const App: React.FC<Props> = (props) => {
  const { Component, pageProps } = props;

  return (
    <Providers>
      <Layout>
        <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-595S23G');`,
          }}
        ></Script>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
};

export default App;
