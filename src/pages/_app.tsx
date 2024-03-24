import RootLayout from "@/layouts";
import StoreProvider from "@/redux/StoreProvider";
import { useAppSelector } from "@/redux/hooks";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Plus_Jakarta_Sans } from "next/font/google";


const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {


  return (
    <StoreProvider>
      <main className={`${plusJakarta.className}`}>
        <RootLayout>
          <Component {...pageProps} />;
        </RootLayout>
      </main>
    </StoreProvider>
  ) 
}
