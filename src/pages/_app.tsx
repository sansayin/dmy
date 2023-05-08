import { type AppType } from "next/dist/shared/lib/utils";

import { ThemeProvider } from 'next-themes'
import "@/styles/globals.css";
import LayoutWrapper from "@/layout/main";
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
};

export default MyApp;
