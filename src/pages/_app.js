import { MediumProvider } from "@/context/MediumContexxt";
import "../styles/globals.css";
import { ThemeProvider } from 'next-themes';
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
    <MediumProvider>
      <Component {...pageProps} />
    </MediumProvider>
    </ThemeProvider>
  );
}
