import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header";
import Search from "@/components/search";
import HeroSection from "@/components/heroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Etherium (ETH) Blockchain Explorer</title>

        <meta property="og:url" content="https://etherscan-explorers.com" />
        <meta property="og:type" content="website" />

        <meta
          property="og:title"
          content="Etherium (ETH) Blockchain Explorer"
        />
        <meta
          property="og:description"
          content="Etherscan allows you to explore and search the Ethereum blockchain for transactions, addresses, tokens, prices and other activities taking place on Ethereum (ETH)"
        />

        <meta
          property="og:image"
          content="https://i.ibb.co/94nmBtc/etherscan-logo-circle.jpg"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://etherscan.io/images/favicon3-light.ico"
        />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <section className={styles.main}>
        <Header />
        <Search />
        <HeroSection />
      </section>
    </>
  );
}
