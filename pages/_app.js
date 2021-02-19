import "../styles/globals.css";
import MUI from "next-mui";

function MyApp({ Component, pageProps }) {
  return (
    <MUI>
      <Component {...pageProps} />
    </MUI>
  );
}

export default MyApp;
