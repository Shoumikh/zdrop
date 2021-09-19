import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import checkoutStyles from "../styles/Checkout.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faUndo, faShieldAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import CheckoutBrand from "../components/CheckoutBrand";
import nikeLogo from "../assets/nike.png";
import kliouLogo from "../assets/kliou.jpeg";
import checkout from "./checkout";
import OrderSummary from "../components/OrderSummary";

const Home: NextPage = () => {
  return (
    <div className={checkoutStyles.checkout__body}>
      <Head>
        <title>zdrop</title>
        <meta name="description" content="zdrop is an ecommerce plaatfrom created by zaynax group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className={checkoutStyles.checkout__itemCount}>
          <div className={checkoutStyles.checkout__itemCountLeft}>
            <FontAwesomeIcon className={checkoutStyles.checkout__undoIcon} icon={faUndo} color="#FF6F00" size="lg"></FontAwesomeIcon>
            <div className={checkoutStyles.checkout__itemCountText}>
              <span>YOUR SHOPPING CART</span>
              <br />
              <span>2 item(s) </span>
              <span className={checkoutStyles.checkout__addButton}> Add More</span>
            </div>
          </div>

          <div className={checkoutStyles.checkout__itemCountRight}>
            <FontAwesomeIcon icon={faShieldAlt} color="#FF6F00" size="lg"></FontAwesomeIcon>
            <span>100% Secure</span>
          </div>
        </div>
        <div className={checkoutStyles.checkout__container}>
          <div className={checkoutStyles.checkout__left}>
            <CheckoutBrand
              logo={nikeLogo}
              name="Nike"
              fullfilledBy="Nike"
              deliveryFee="40"
              deliveryDate="27 January"
              additionalInfo="Buy 3 item(s) more enjoy free shipping for Standard delivery option"
            />
            <CheckoutBrand
              logo={kliouLogo}
              name="SPA MASTER Moleculer"
              fullfilledBy="zDrop"
              deliveryFee="40"
              deliveryDate="27 January"
              additionalInfo="Buy 3 item(s) more enjoy free shipping for Standard delivery option"
            />
          </div>
          <div className={checkoutStyles.checkout__right}>
            <OrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
