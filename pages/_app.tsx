import "../styles/globals.css";
import type { AppProps } from "next/app";
import { EmptyLayout } from "@/components/layout";
import { AppPropsWithLayout } from "@/models/index";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.getLayout ?? EmptyLayout;
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
