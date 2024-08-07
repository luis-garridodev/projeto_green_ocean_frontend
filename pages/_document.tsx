import HeaderApp from "@/src/components/layout/HeaderApp";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (

    <Html lang="en">
      <HeaderApp/>

     
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
