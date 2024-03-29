import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          BeSocial- Social App for creator monetization-Joinbesocial
        </title>
        <meta
          name="title"
          content={"BeSocial- Social App for creator monetization-Joinbesocial"}
        ></meta>
        <meta
          name="og:title"
          content={"BeSocial- Social App for creator monetization-Joinbesocial"}
        ></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://joinbesocial.com/"></meta>
        <meta
          name="description"
          content="Discover endless entertainment, creator monetization, and social commerce on BeSocial. join the community that truly pays."
        />
        <meta
          name="og:description"
          content="Discover endless entertainment, creator monetization, and social commerce on BeSocial. join the community that truly pays."
        />
        <link rel="icon" href="/icon.png" />
        <meta
          property="og:image"
          content={"https://joinbesocial.com/cover.png"}
        ></meta>

        <meta
          name="twitter:title"
          content={"BeSocial- Social App for creator monetization-Joinbesocial"}
        ></meta>
        <meta
          content="Discover endless entertainment, creator monetization, and social commerce on BeSocial. join the community that truly pays."
          name="twitter:description"
        ></meta>
        <meta name="twitter:url" content="https://joinbesocial.com/"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          name="twitter:image"
          content={"https://joinbesocial.com/cover.png"}
        ></meta>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SXKPP70MVL"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `    window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
        
            gtag('config', 'G-SXKPP70MVL')`,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
