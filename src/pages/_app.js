import { MediumProvider } from "@/context/MediumContexxt";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MediumProvider>
      <Component {...pageProps} />
    </MediumProvider>
  );
}
