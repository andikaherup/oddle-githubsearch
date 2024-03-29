/* pages/_app.tsx */
import Head from "next/head";
import { AppProps } from "next/app";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, css, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/createEmotionCache";
import PageProvider from "../src/PageProvider";
import { ThemeProvider } from "next-themes";
import { GlobalStyles } from "@mui/material";

import { wrapper } from "app/store";
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <ThemeProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <PageProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyles
            styles={css`
              :root {
                body {
                  background-color: #E5E5E5;
                  color: #121212;
                }
              }
[data-theme="dark"] {
                body {
                  background-color: #121212;
                  color: #fff;
                }
              }
            `}
          />
          <Component {...pageProps} />
        </PageProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);