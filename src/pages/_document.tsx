import React from "react";
import Document from "next/document";
import { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { NextPageContext } from "next";
import { ServerStyleSheet } from "styled-components";
import CONSTANTS from "../config/constants";

const { DOMAIN } = CONSTANTS;

const structuredData = {
  "@context": "http://schema.org",
  "@type": "Organization",
  name: "ADOPCIÓNANIMAL.EC",
  description:
    "Descubre la variedad de nuestras mascotas en nuestros albergues.",
  url: DOMAIN,
  logo: `${DOMAIN}/favicon.ico`,
  address: {
    "@type": "PostalAddress",
    addressCountry: "Ecuador",
    Telephone: "0987654321",
  },
  sameAs: [
    "https://web.facebook.com/Adopci%C3%B3n-Animal-104500682296364",
    "https://www.instagram.com/adopcion_.animal",
  ],
};

interface Context extends NextPageContext {
  // any modifications to the default context, e.g. query types
  renderPage: (config: { enhanceApp: any }) => void;
}

interface GetInitialPropsRes {
  styles: JSX.Element;
  html: string;
  head?: (JSX.Element | null)[] | undefined;
}

class MyDocument extends Document {
  static async getInitialProps(ctx: Context): Promise<GetInitialPropsRes> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(
        ctx as DocumentContext
      );
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="es">
        <Head>
          <meta property="og:url" content={DOMAIN} key="ogurl" />
          <meta property="og:site_name" content="FALLACY" key="ogsitename" />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content={`${DOMAIN}/assets/images/logo.png`}
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
          <noscript>
            <iframe
              title="googletagmanager"
              src="https://www.googletagmanager.com/ns.html?id=GTM-595S23G"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
