import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html className="m-0 p-0 box-border">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body className="bg-lightGray min-h-screen m-0 p-0 box-border font-outfit">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
