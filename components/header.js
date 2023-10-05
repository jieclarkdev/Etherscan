import { useEffect, useState } from "react";
// import axios from "axios";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

// import Logo from "../public/assets/logo-etherscan-light.svg";
import Logo from "../public/assets/logo.png";
import GasfeeImg from "../public/assets/gasfee2.png";
import EthLogo from "../public/assets/ethLogo.png";
import SwitchMode from "../public/assets/moonLogo.png";
import MenuMobile from "../public/assets/menu.png";
import ProfileMobile from "../public/assets/user.png";

export default function Header() {
  const [ethPrice, setEthPrice] = useState("");

  // useEffect(() => {
  //   const getEthPrice = async () => {
  //     const response = await axios.get("http://localhost:5001/getethprice", {});
  //     setEthPrice(response.data.usdPrice);
  //   };
  //   getEthPrice();
  // });

  return (
    <section className={styles.header}>
      <section className={styles.topHeader}>
        <div className={styles.ethPriceGasContainer}>
          <p>
            ETH Price:
            {/* <span className={styles.blueText}>
              ${Number(ethPrice).toFixed(2)}
            </span> */}
            <span className={styles.blueText}> $1,656.13</span>{" "}
            <span className={styles.toRed}>(-2.12%)</span>
          </p>
          <div className={styles.gasFeeContainer}>
            <Image
              src={GasfeeImg}
              alt="gas icon"
              className={styles.gasFeeIcon}
            />
            <p>
              Gas: <span className={styles.blueText}>12 Gwei</span>
            </p>
          </div>
        </div>
        <div className={styles.ethSwitchContainer}>
          <Image
            src={SwitchMode}
            alt="Switch logo"
            className={styles.ethSwitch}
          />
          <Image src={EthLogo} alt="Eth logo" className={styles.ethSwitch} />
        </div>
      </section>
      <section className={styles.navbar}>
        <div className={styles.imgContainer}>
          <Image src={Logo} alt="Etherscan Logo" className={styles.logo} />
        </div>
        <div className={styles.navSignInContainer}>
          <div>
            <Image src={ProfileMobile} className={styles.profileMobileView} />
          </div>
          <p className={styles.navSignIn}>Sign In</p>
          <div className={styles.menuMobileContainer}>
            <Image src={MenuMobile} className={styles.menuMobileView} />
          </div>
        </div>
        <section className={styles.menu}>
          <p className={styles.selectedHome}>Home</p>
          <p className={styles.navFontSize}>
            Blockchain
            <span className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p className={styles.navFontSize}>
            Token
            <span className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p className={styles.navFontSize}>
            NFTs
            <span className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p className={styles.navFontSize}>
            Resources
            <span className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p className={styles.navFontSize}>
            Developers
            <span className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p className={styles.navFontSize}>
            More
            <span className={styles.arrow}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </p>
          <p>|</p>
          <p className={styles.navFontSize}>Sign In</p>
        </section>
      </section>
    </section>
  );
}
