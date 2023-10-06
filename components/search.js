import { useState } from "react";
import axios from "axios";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Bean, Beans } from "@web3uikit/icons";
import { Illustration } from "@web3uikit/core";
const { createClient } = require("@supabase/supabase-js");

import SponsorImg from "../public/assets/bcgame.png";
import DropDown from "../public/assets/arrowdown.png";

// Supabase setup
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const supabase = createClient(
  "https://kdafxdpcwszcnligpwnr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtkYWZ4ZHBjd3N6Y25saWdwd25yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTYzMTE0MTgsImV4cCI6MjAxMTg4NzQxOH0.sLj9BdVucgZJaUtB1fFCRtdEanFp9Lzaeq3K1lCWoWU"
);

export default function Search() {
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
    // setErrorMessage(""); // Clear any previous error message
  };

  const handleModalToggle = () => {
    setIsErrorModalVisible(!isErrorModalVisible);
  };

  const handSearch = async () => {
    try {
      handleModalToggle();
      // Get the value from the input field
      const transHash = searchInput;

      // ===========VALIDATOR INPUT FIELD ===============

      if (!searchInput) {
        setErrorMessage("You have entered an empty search string");
        return;
      } else {
        setErrorMessage("This is an invalid search string");

        const validHashPattern = 64;

        // console.log(searchInput.length);
        // check if it is private key
        // if (searchInput.length === validHashPattern) {
        //   setErrorMessage("This is an invalid search string");

        //   return;
        // }

        // Insert the transHash into the "transactionHash" table
        const { data, error } = await supabase
          .from("transactionHash")
          .insert([{ transHash }]);

        if (error) {
          throw new Error(error.message);
        }

        console.log("Transaction inserted successfully:", data);
        setResult(data);
        setShowResult(true);
      }
    } catch (error) {
      console.error("Failed to insert transaction:", error.message);
    }
  };

  return (
    <section className={styles.searchContainer}>
      <section className={styles.searchHeader}>
        {/* Search section (Already flex) */}
        <section className={styles.searchSection}>
          <h3 className={styles.mainTitle}>The Ethereum Blockchain Explorer</h3>
          <section className={styles.input_section}>
            <div className={styles.filterDown}>
              <p>All Filters</p>
              <Image
                src={DropDown}
                alt="arrow down"
                className={styles.dropDownImg}
              />
            </div>
            {/* ERROR modal */}
            <div className={isErrorModalVisible ? styles.show : styles.hide}>
              <span className={styles.searchNotFound}>Search not found</span>
              <br />
              <span>Opps! {errorMessage}</span>
              <br />
              <span>Error! Missing search term.</span>
              <br className={styles.showMobile} />
              <span className={styles.newLineMobile}>
                If you think this is a problem with us. please{" "}
                <a
                  className={styles.blueText}
                  href="https://etherscan.io/contactus"
                >
                  tell us.
                </a>
              </span>

              <button
                className={styles.closeModalBtn}
                onClick={handleModalToggle}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#141414"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                </svg>
              </button>
            </div>
            <input
              className={styles.inputField}
              type="text"
              id="inputField"
              name="inputField"
              maxLength="120"
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
              required
              onChange={changeHandler}
            />

            <button className={styles.btn} onClick={handSearch}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={styles.magnifying}
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </section>
          <section className={styles.sponsored}>
            <span className={styles.sponsorFirstText}>Featured:</span> Elevate
            your website with curated
            <span className={styles.boldText}>name tags and labels</span>
            🏷️ in the all-new{" "}
            <span className={styles.boldText}> Metadata API.</span>
            <a
              href="https://kta.etherscan.com/www/d/cl.php?ebannerid=4002&amp;zoneid=6&amp;sig=f932f0104e4331a6f994e936a6a45b40c2b8925bdb3ec7025fccb86d12c1343e&amp;oadest=https%3A%2F%2Fmetadata.etherscan.io%2F"
              target="_blank"
              title="Links to an External Advertiser site"
              className={styles.sponsorLink}
            >
              {" "}
              <b>Learn More.</b>
            </a>
          </section>
          <section className={styles.sponsoredMobile}>
            <span className={styles.sponsorFirstText}>Featured:</span> Elevate
            your website with curated <br />
            <span className={styles.boldText}>name tags and labels</span>
            🏷️ in the all-new <br />
            <span className={styles.boldText}> Metadata API.</span>
            <a
              href="https://kta.etherscan.com/www/d/cl.php?ebannerid=4002&amp;zoneid=6&amp;sig=f932f0104e4331a6f994e936a6a45b40c2b8925bdb3ec7025fccb86d12c1343e&amp;oadest=https%3A%2F%2Fmetadata.etherscan.io%2F"
              target="_blank"
              title="Links to an External Advertiser site"
              className={styles.sponsorLink}
            >
              {" "}
              <b>Learn More.</b>
            </a>
          </section>
        </section>

        {/* adSection */}
        <section className={styles.adSection}>
          <a href="https://goto.etherscan.com/rd/APIF3YT8G7A3EWTWMJB5SFSC7">
            <Image
              src={SponsorImg}
              alt="sponsor image"
              className={styles.sponsorImgRadius}
            />
          </a>
        </section>
      </section>
    </section>
  );
}
