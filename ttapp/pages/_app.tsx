import type { AppProps } from "next/app";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "../themes/theme";
// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={activeChain}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider>
        <Navbar />

        <Component {...pageProps} />
        <Footer />
        <Header />
      </ChakraProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
