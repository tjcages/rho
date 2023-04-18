import "@/styles/_globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import main from "@/styles/_main.module.scss";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} ${main.styles}`}>
      <Component {...pageProps} />
    </main>
  );
}
