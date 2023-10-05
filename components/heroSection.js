import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import moment from "moment";
import styles from "@/styles/Home.module.css";
import {
  faCube,
  faGauge,
  faGlobe,
  faServer,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Chart from "../public/assets/chart.png";
import TransactionImg from "../public/assets/transactions1.png";
import FinalizeImg from "../public/assets/finalized1.png";
import EthPriceImg from "../public/assets/ether1.png";
import MarketCapImg from "../public/assets/marketcap.png";
import BoxImg from "../public/assets/box1.png";
import LatestTrans from "../public/assets/latestrans1.png";

import TwitterLogo from "../public/assets/twitter.png";
import MediumLogo from "../public/assets/medium.png";
import FacebookLogo from "../public/assets/facebook.png";
import RedditLogo from "../public/assets/reddit.png";
import ArrowUp from "../public/assets/arrow-up.png";

import FooterMap from "../public/assets/footerMap.png";
import EthLogoFooter from "../public/assets/ethLogoFooter.png";
import SponsorImg from "../public/assets/bcgame.png";

const randomNumbers = Array.from({ length: 8 }, () =>
  Math.floor(Math.random() * 10)
);

const randomNumberString = `${randomNumbers.join("")}`;
console.log(randomNumberString);

export default function HeroSection() {
  const [showResult, setShowResult] = useState(true);
  const [blockResult, setBlockResult] = useState([]);
  const [transactionsResult, setTransactionsResult] = useState([]);
  const [ethPrice, setEthPrice] = useState("");
  const [totalTransactions, setTotalTransactions] = useState("");
  const [latestBlock, setLatestBlock] = useState("");

  return (
    <section className={styles.heroSectionContainer}>
      {showResult && (
        <section>
          {/* ETHER PRICE , TRANSACTIONS, MARKET CAP , LAST FINALIZED BLOCK , TRANSACTION HISTORY IN 14 DAYS */}
          <section className={styles.latestResults_header}>
            {/* ETHER PRICE and MARKET CAP */}
            <section className={styles.firstSection}>
              <div className={styles.ethFlex}>
                <Image
                  src={EthPriceImg}
                  alt="Etherium Img"
                  className={styles.ethPriceImageMobile}
                />
                <div className={styles.ethPriceContainer}>
                  <p className={styles.heroNavFont}>ETHER PRICE </p>
                  <p className={styles.heroNavBelowFont}>
                    $1,656.13{" "}
                    <span className={styles.recentUpdate}>
                      @ 0.060021 BTC{" "}
                      <span className={styles.toRed}>(-4.38%)</span>
                    </span>
                  </p>
                </div>
              </div>
              {/* Market Cap */}
              <div className={styles.marketCapFlex}>
                <Image
                  src={MarketCapImg}
                  alt="Market Cap Img"
                  className={styles.marketCapImageMobile}
                />
                <div>
                  <p className={styles.heroNavFont}>MARKET CAP </p>
                  <p className={styles.heroNavBelowFont}>$199,134,150,060.00</p>
                </div>
              </div>
            </section>
            {/* TRANSACTIONS and  LAST FINALIZED BLOCK*/}
            <section className={styles.middleNav}>
              <div className={styles.flexSeparatorOne}>
                <div className={styles.transactionFlex}>
                  <Image
                    src={TransactionImg}
                    alt="Transaction Img"
                    className={styles.transactionImgMobile}
                  />
                  <div>
                    <p className={styles.heroNavFont}>TRANSACTIONS</p>
                    <p className={styles.heroNavBelowFont}>
                      2,113.22 M{" "}
                      <span className={styles.recentUpdate}>(12.1 TPS)</span>
                    </p>
                  </div>
                </div>
                <div>
                  <p className={styles.heroNavFont}>MED GAS PRICE</p>
                  <p className={styles.heroNavBelowFont}>
                    <span className={styles.fontWhite}>7 Gwei</span> ($0.24)
                  </p>
                </div>
              </div>
              {/* LAST FINALIZED BLOCK and LAST SAFE BLOCK  */}
              <div className={styles.flexSeparatortwo}>
                <div className={styles.finalizedFlex}>
                  <Image
                    src={FinalizeImg}
                    alt="Finalized img"
                    className={styles.finalizingImgMobile}
                  />
                  <div>
                    <p className={styles.heroNavFont}>LAST FINALIZED BLOCK</p>
                    <p className={styles.heroNavBelowFont}>18269345</p>
                  </div>
                </div>
                <div>
                  <p className={styles.heroNavFont}>LAST SAFE BLOCK</p>
                  <p className={styles.heroNavBelowFont}>18269366</p>
                </div>
              </div>
            </section>
            {/* TRANSACTION HISTORY IN 14 DAYS */}
            <section>
              <p className={styles.heroNavFont}>
                TRANSACTION HISTORY IN 14 DAYS
              </p>
              <Image src={Chart} alt="Chart" className={styles.chart} />
            </section>
          </section>

          {/* adSection */}
          <section className={styles.adSectionMobile}>
            <a href="https://goto.etherscan.com/rd/APIF3YT8G7A3EWTWMJB5SFSC7">
              <Image
                src={SponsorImg}
                alt="sponsor image"
                className={styles.sponsorImgRadius}
              />
            </a>
          </section>

          <section className={styles.latestResults_body}>
            <section>
              <section className={styles.latestResults_body_title}>
                <h3 className={styles.latestBlockFontSize}>Latest Blocks</h3>
              </section>
              {/* Parent latest block container */}
              <div>
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={BoxImg}
                      alt="Box Img"
                      className={styles.boxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>18268211</p>
                      <p className={styles.timeFontSize}>18 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      Fee Recipient{" "}
                      <span className={styles.blueText}>rsync-builder</span>
                    </p>
                    <p className={styles.timeFontSize}>
                      {" "}
                      <span className={styles.blueText}>142 txns</span> in 12
                      secs
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.00943 Eth</p>
                  </div>
                </div>
              </div>
              {/* BlockTwo */}
              <div>
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={BoxImg}
                      alt="Box Img"
                      className={styles.boxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>18270052</p>
                      <p className={styles.timeFontSize}>38 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      Fee Recipient{" "}
                      <span className={styles.blueText}>Titan Builder</span>
                    </p>
                    <p className={styles.timeFontSize}>
                      {" "}
                      <span className={styles.blueText}>161 txns</span> in 12
                      secs
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.02255 Eth</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={BoxImg}
                      alt="Box Img"
                      className={styles.boxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>18270051</p>
                      <p className={styles.timeFontSize}>27 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      Fee Recipient{" "}
                      <span className={styles.blueText}>beaverbuild</span>
                    </p>
                    <p className={styles.timeFontSize}>
                      {" "}
                      <span className={styles.blueText}>105 txns</span> in 12
                      secs
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.00991 Eth</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={BoxImg}
                      alt="Box Img"
                      className={styles.boxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>18270050</p>
                      <p className={styles.timeFontSize}>51 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      Fee Recipient{" "}
                      <span className={styles.blueText}>rsync-builder</span>
                    </p>
                    <p className={styles.timeFontSize}>
                      {" "}
                      <span className={styles.blueText}>128 txns</span> in 12
                      secs
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.03477 Eth</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={BoxImg}
                      alt="Box Img"
                      className={styles.boxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>18270049</p>
                      <p className={styles.timeFontSize}>51 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      Fee Recipient{" "}
                      <span className={styles.blueText}>Titan Builder</span>
                    </p>
                    <p className={styles.timeFontSize}>
                      {" "}
                      <span className={styles.blueText}>148 txns</span> in 12
                      secs
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.01261 Eth</p>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={BoxImg}
                      alt="Box Img"
                      className={styles.boxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>18269218</p>
                      <p className={styles.timeFontSize}>1 min ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      Fee Recipient{" "}
                      <span className={styles.blueText}>beaverbuild</span>
                    </p>
                    <p className={styles.timeFontSize}>
                      {" "}
                      <span className={styles.blueText}>142 txns</span> in 12
                      secs
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.02452 Eth</p>
                  </div>
                </div>
              </div>
              <div>
                {/* Last bottom */}
                <div className={styles.viewAllTransaction}>
                  VIEW ALL BLOCKS{" "}
                </div>
              </div>
            </section>
            <section>
              <section className={styles.latestResults_body_title}>
                <h3 className={styles.latestTransactionFontSize}>
                  Latest Transactions
                </h3>
              </section>
              <section>
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0xc17dcd37999b60...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0x2759bC...F3fF1aD8
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0x929E76...287Cdd87
                      </span>
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.04704 Eth</p>
                  </div>
                </div>
                {/* 2 */}
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0xcc7a842420f8e04...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0xb246Ce...a7ac1E95
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0xdAC17F...3D831ec7
                      </span>{" "}
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.03026 Eth</p>
                  </div>
                </div>
                {/* 3 */}
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0xb6903ec43d238f8...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0x2759bC...F3fF1aD8
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0x041515...09244a99
                      </span>{" "}
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.07449 Eth</p>
                  </div>
                </div>
                {/* 4 */}
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0x3183fe4ef45d2d05...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0xbCD6AF...2b49fE8c
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0x0fFa87...9fB8F079
                      </span>{" "}
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.02548 Eth</p>
                  </div>
                </div>
                {/* 5 */}
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0x77990846f0c9cfd7...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0x108823...Cbd35856
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0x0fFa87...9fB8F079
                      </span>{" "}
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.02548 Eth</p>
                  </div>
                </div>
                {/* 6 */}
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0x52f6adf58af68f31...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0x27aA72...57bD8f34
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0x1f9090...e676c326
                      </span>{" "}
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.05487 Eth</p>
                  </div>
                </div>
                {/* Last bottom */}
                <div className={styles.viewAllTransaction}>
                  VIEW ALL TRANSACTIONS{" "}
                </div>
              </section>
            </section>
          </section>

          {/* Mobile latest blocks and transactions */}

          <section className={styles.latestBlockTransactionsMobile}>
            <section className={styles.scrollableBlocks}>
              <section className={styles.latestResults_body_title}>
                <h3 className={styles.latestBlockFontSize}>Latest Blocks</h3>
              </section>
              {/* Parent latest block container */}
              <div>
                <div className={styles.mobileBlocks}>
                  {/* hash and time */}
                  <div>
                    <div className={styles.blockSeconds}>
                      <p className={styles.blockHash}>
                        Block{" "}
                        <span className={styles.hashNumber}>18268211</span>
                      </p>
                      <p className={styles.timeSize}>18 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <div>
                      <p className={styles.feeRecipient}>
                        Fee Recipient{" "}
                        <span className={styles.recipientType}>
                          rsync-builder
                        </span>
                      </p>
                    </div>
                    <div className={styles.recipientRewardFlex}>
                      <p>
                        {" "}
                        <span className={styles.amountTxns}>142 txns</span>{" "}
                        <span className={styles.timeSize}>in 12 secs</span>
                      </p>
                      {/* Block reward */}

                      <p className={styles.blockRewardFontSize}>0.00943 Eth</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* BlockTwo */}
              <div>
                <div className={styles.mobileBlocks}>
                  {/* hash and time */}
                  <div>
                    <div className={styles.blockSeconds}>
                      <p className={styles.blockHash}>
                        Block{" "}
                        <span className={styles.hashNumber}>18270052</span>
                      </p>
                      <p className={styles.timeSize}>38 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <div>
                      <p className={styles.feeRecipient}>
                        Fee Recipient{" "}
                        <span className={styles.recipientType}>
                          Titan Builder
                        </span>
                      </p>
                    </div>
                    <div className={styles.recipientRewardFlex}>
                      <p>
                        {" "}
                        <span className={styles.amountTxns}>161 txns</span>{" "}
                        <span className={styles.timeSize}>in 12 secs</span>
                      </p>
                      {/* Block reward */}

                      <p className={styles.blockRewardFontSize}>0.02255 Eth</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.mobileBlocks}>
                  {/* hash and time */}
                  <div>
                    <div className={styles.blockSeconds}>
                      <p className={styles.blockHash}>
                        Block{" "}
                        <span className={styles.hashNumber}>18270051</span>
                      </p>
                      <p className={styles.timeSize}>27 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <div>
                      <p className={styles.feeRecipient}>
                        Fee Recipient{" "}
                        <span className={styles.recipientType}>
                          beaverbuild
                        </span>
                      </p>
                    </div>
                    <div className={styles.recipientRewardFlex}>
                      <p>
                        {" "}
                        <span className={styles.amountTxns}>105 txns</span>{" "}
                        <span className={styles.timeSize}>in 12 secs</span>
                      </p>
                      {/* Block reward */}

                      <p className={styles.blockRewardFontSize}>0.00991 Eth</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.mobileBlocks}>
                  {/* hash and time */}
                  <div>
                    <div className={styles.blockSeconds}>
                      <p className={styles.blockHash}>
                        Block{" "}
                        <span className={styles.hashNumber}>18279850</span>
                      </p>
                      <p className={styles.timeSize}>51 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <div>
                      <p className={styles.feeRecipient}>
                        Fee Recipient{" "}
                        <span className={styles.recipientType}>
                          rsync-builder
                        </span>
                      </p>
                    </div>
                    <div className={styles.recipientRewardFlex}>
                      <p>
                        {" "}
                        <span className={styles.amountTxns}>128 txns</span>{" "}
                        <span className={styles.timeSize}>in 12 secs</span>
                      </p>
                      {/* Block reward */}

                      <p className={styles.blockRewardFontSize}>0.03477 Eth</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.mobileBlocks}>
                  {/* hash and time */}
                  <div>
                    <div className={styles.blockSeconds}>
                      <p className={styles.blockHash}>
                        Block{" "}
                        <span className={styles.hashNumber}>18270049</span>
                      </p>
                      <p className={styles.timeSize}>14 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <div>
                      <p className={styles.feeRecipient}>
                        Fee Recipient{" "}
                        <span className={styles.recipientType}>
                          Titan Builder
                        </span>
                      </p>
                    </div>
                    <div className={styles.recipientRewardFlex}>
                      <p>
                        {" "}
                        <span className={styles.amountTxns}>148 txns</span>{" "}
                        <span className={styles.timeSize}>in 12 secs</span>
                      </p>
                      {/* Block reward */}

                      <p className={styles.blockRewardFontSize}>0.01261 Eth</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className={styles.mobileBlocks}>
                  {/* hash and time */}
                  <div>
                    <div className={styles.blockSeconds}>
                      <p className={styles.blockHash}>
                        Block{" "}
                        <span className={styles.hashNumber}>18269218</span>
                      </p>
                      <p className={styles.timeSize}>24 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <div>
                      <p className={styles.feeRecipient}>
                        Fee Recipient{" "}
                        <span className={styles.recipientType}>
                          beaverbuild
                        </span>
                      </p>
                    </div>
                    <div className={styles.recipientRewardFlex}>
                      <p>
                        {" "}
                        <span className={styles.amountTxns}>142 txns</span>{" "}
                        <span className={styles.timeSize}>in 12 secs</span>
                      </p>
                      {/* Block reward */}

                      <p className={styles.blockRewardFontSize}>0.02452 Eth</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                {/* Last bottom */}
                <div className={styles.viewAllTransaction}>
                  VIEW ALL BLOCKS{" "}
                </div>
              </div>
            </section>
            <section>
              <section className={styles.latestResults_body_title}>
                <h3 className={styles.latestTransactionFontSize}>
                  Latest Transactions
                </h3>
              </section>
              <section>
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0xc17dcd37999b60...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0x2759bC...F3fF1aD8
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0x929E76...287Cdd87
                      </span>
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.04704 Eth</p>
                  </div>
                </div>
                {/* 2 */}
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0xcc7a842420f8e04...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0xb246Ce...a7ac1E95
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0xdAC17F...3D831ec7
                      </span>{" "}
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.03026 Eth</p>
                  </div>
                </div>
                {/* 3 */}
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0xb6903ec43d238f8...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0x2759bC...F3fF1aD8
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0x041515...09244a99
                      </span>{" "}
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.07449 Eth</p>
                  </div>
                </div>
                {/* 4 */}
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0x3183fe4ef45d2d05...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0xbCD6AF...2b49fE8c
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0x0fFa87...9fB8F079
                      </span>{" "}
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.02548 Eth</p>
                  </div>
                </div>
                {/* 5 */}
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0x77990846f0c9cfd7...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0x108823...Cbd35856
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0x0fFa87...9fB8F079
                      </span>{" "}
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.02548 Eth</p>
                  </div>
                </div>
                {/* 6 */}
                <div className={styles.BlockOne}>
                  {/* hash and time */}
                  <div className={styles.hashTime}>
                    <Image
                      src={LatestTrans}
                      alt="Latest Transaction Img"
                      className={styles.latestBoxSize}
                    />
                    <div>
                      <p className={styles.hashNumber}>0x52f6adf58af68f31...</p>
                      <p className={styles.timeFontSize}>15 secs ago</p>
                    </div>
                  </div>
                  {/* recipient and txn */}
                  <div>
                    <p className={styles.freeRecipient}>
                      From{" "}
                      <span className={styles.blueText}>
                        0x27aA72...57bD8f34
                      </span>
                    </p>
                    <p className={styles.latestTransactionColor}>
                      To{" "}
                      <span className={styles.blueText}>
                        0x1f9090...e676c326
                      </span>{" "}
                    </p>
                  </div>
                  {/* Block reward */}
                  <div>
                    <p className={styles.blockRewardFontSize}>0.05487 Eth</p>
                  </div>
                </div>
                {/* Last bottom */}
                <div className={styles.viewAllTransaction}>
                  VIEW ALL TRANSACTIONS{" "}
                </div>
              </section>
            </section>
          </section>
          {/* Footer */}
          <section className={styles.parentFooter}>
            <section className={styles.footerSection}>
              <div className={styles.fourIcons}>
                {/* icons */}
                <div className={styles.footerIcons}>
                  <div className={styles.twitterContainer}>
                    <Image
                      src={TwitterLogo}
                      alt="Twitter logo"
                      className={styles.twitterLogo}
                    />
                  </div>
                  <div className={styles.mediumContainer}>
                    <Image
                      src={MediumLogo}
                      alt="Medium logo"
                      className={styles.mediumLogo}
                    />
                  </div>
                  <div className={styles.facebookContainer}>
                    {" "}
                    <Image
                      src={FacebookLogo}
                      alt="Facebook logo"
                      className={styles.facebookLogo}
                    />
                  </div>
                  <div className={styles.redditContainer}>
                    <Image
                      src={RedditLogo}
                      alt="Reddit logo"
                      className={styles.redditLogo}
                    />
                  </div>
                </div>
                {/* text og icons */}
                <div className={styles.textIcon}>
                  <Image
                    src={ArrowUp}
                    alt="arrow up"
                    className={styles.arrowUpIcon}
                  />
                  <div>Back to Top</div>
                </div>
              </div>
              <div className={styles.middleFooter}>
                {/* first container */}
                <div className={styles.firstTwoContainer}>
                  <div>
                    <div className={styles.ethLogoFooter}>
                      <Image
                        src={EthLogoFooter}
                        alt="Eth logo footer"
                        className={styles.ethLogoFooterSize}
                      />
                      <p className={styles.powerByEthereum}>
                        Powered by Ethereum
                      </p>
                    </div>
                    <p className={styles.ethereumDescription}>
                      Etherscan is a Block Explorer and Analytics Platform for
                      Ethereum, a <br /> decentralized smart contracts platform.
                    </p>
                    <Image
                      src={FooterMap}
                      alt="World map image"
                      className={styles.worldMap}
                    />
                  </div>
                  {/* second container */}
                  <div>
                    <p className={styles.firstWord}>Company</p>
                    <p className={styles.subWord}>About Us</p>
                    <p className={styles.subWord}>Brand Us</p>
                    <p className={styles.subWord}>Contact Us</p>
                    <p className={styles.subWord}>Careers</p>
                    <p className={styles.subWord}>Terms of Service</p>
                    <p className={styles.subWord}>Bug Bounty</p>
                  </div>
                </div>
                {/* third container */}
                <div className={styles.secondTwoContainer}>
                  <div>
                    <p className={styles.firstWord}>Community</p>
                    <p className={styles.subWord}>Api Documentation</p>
                    <p className={styles.subWord}>Knowledge Base</p>
                    <p className={styles.subWord}>Network Status</p>
                    <p className={styles.subWord}>Newsletters</p>
                    <p className={styles.subWord}>Disqus Comments</p>
                  </div>
                  {/* fourth container */}
                  <div>
                    <p className={styles.firstWord}>Products & Services</p>
                    <p className={styles.subWord}>Advertise</p>
                    <p className={styles.subWord}>
                      Explorer-as-a-Service (EaaS)
                    </p>
                    <p className={styles.subWord}>API Plans</p>
                    <p className={styles.subWord}>Priority Support</p>
                    <p className={styles.subWord}>Blockscan</p>
                    <p className={styles.subWord}>Blockscan Chat</p>
                  </div>
                </div>
              </div>
              {/* Last Footer */}
              <div className={styles.bottomFooter}>
                <p>Etherscan &copy; 2023 (F1)</p>
                <p>
                  Donations:{" "}
                  <span className={styles.donationAddress}>
                    0x71c765...d8976f ❤️
                  </span>
                </p>
              </div>
            </section>
          </section>
        </section>
      )}
    </section>
  );
}
