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
import brands from "../data/brandsData";
import OrderSummary from "../components/OrderSummary";
import { useEffect } from "react";


const Home: NextPage = () => {

  // saving brands dummy data to localStorage
  useEffect(() => {
    localStorage.setItem("dummyDataBrands", JSON.stringify(brands));
    return () => {};
  }, []);


  return (
    <div className={checkoutStyles.checkout__body}>
      <Head>
        <title>zdrop</title>
        <meta name="description" content="zdrop is an ecommerce plaatfrom created by zaynax group" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        {/* total items and go back section STARTS */}
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
        {/* total items and go back section ENDS */}

        {/* selected brands section STARTS */}
        <div className={checkoutStyles.checkout__container}>
          <div className={checkoutStyles.checkout__left}>
            {brands.map((brand) => (
              <CheckoutBrand
                key={brand.id}
                id={brand.id}
                logo={brand.logo}
                name={brand.name}
                fullfilledBy={brand.fullfilledBy}
                deliveryFee={brand.deliveryFee}
                deliveryDate={brand.deliveryDate}
                additionalInfo={brand.additionalInfo}
              />
            ))}
          </div>
          {/* selected brands section ENDS */}

          {/* order summary section STARTS */}
          <div className={checkoutStyles.checkout__right}>
            <OrderSummary />
          </div>
          {/* order summary section ENDS */}
        </div>
      </div>
    </div>
  );
};

export default Home;
