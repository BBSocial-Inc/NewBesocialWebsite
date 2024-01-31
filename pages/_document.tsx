import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>{"BeSocial | Endless Entertainment!"} </title>
        <meta name="title" content={"BeSocial | Endless Entertainment!"}></meta>
        <meta
          name="og:title"
          content={"BeSocial | Endless Entertainment!"}
        ></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://joinbesocial.com/"></meta>
        <meta name="description" content="Endless Entertainment!" />
        <meta name="og:description" content="Endless Entertainment!" />
        <link rel="icon" href="/icon.png" />
        <meta
          property="og:image"
          content={"https://joinbesocial.com/cover.png"}
        ></meta>

        <meta
          name="twitter:title"
          content={"BeSocial | Endless Entertainment!"}
        ></meta>
        <meta
          content="Endless Entertainment!"
          name="twitter:description"
        ></meta>
        <meta name="twitter:url" content="https://joinbesocial.com/"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          name="twitter:image"
          content={"https://joinbesocial.com/cover.png"}
        ></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
