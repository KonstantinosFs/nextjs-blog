// #region JS
// import "../styles/global.css";
// import "../styles/utils.module.css";

// export default function App({ pageProps, Component }) {
//   return <Component {...pageProps} />;
// }
// #endregion

// #region TS
import { AppProps } from "next/app";
import "../styles/global.css";
import "../styles/utils.module.css";

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;
// #endregion
