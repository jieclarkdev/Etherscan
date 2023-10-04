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
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const changeHandler = (e) => {
    setSearchInput(e.target.value);
  };

  const handSearch = async () => {
    try {
      // Get the value from the input field
      const transHash = searchInput;

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
        </section>

        {/* adSection */}
        <section className={styles.adSection}>
          <Image
            src={SponsorImg}
            alt="sponsor image"
            className={styles.sponsorImgRadius}
          />
        </section>
      </section>
    </section>
  );
}
