import styles from "../styles/CheckoutBrand.module.scss";
import Image from "next/image";
import varifiedLogo from "../assets/varified.png";
import Product from "./Product";
import products from "../data/productsData";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import { useEffect } from "react";

const CheckoutBrand = ({
  id,
  logo,
  name,
  fullfilledBy,
  deliveryFee,
  deliveryDate,
  additionalInfo,
}: {
  id: any;
  logo: any;
  name: any;
  fullfilledBy: any;
  deliveryFee: any;
  deliveryDate: any;
  additionalInfo: any;
}) => {
  // saving products dummy data to localStorage
  useEffect(() => {
    localStorage.setItem("dummyDataProducts", JSON.stringify(products));
    return () => {};
  }, []);

  return (
    <div className={styles.checkout__brandContainer}>
      {/* brand info */}
      <div className={styles.top}>
        <div className={styles.top__left}>
          <div className={styles.brand__container}>
            <div className={styles.brand__logoContainer}>
              <Image className={styles.brand__logo} src={logo} height="50px" width="50px"></Image>
            </div>
            <div className={styles.brand__info}>
              <div className={styles.brand__titleContianer}>
                <span className={styles.brand__title}>{name}</span>
                <div className={styles.brand__validation}>
                  <Image src={varifiedLogo} height="15px" width="15px"></Image>
                </div>
              </div>
              <span className={styles.brand__titleFullfilled}>Fullfilled by {fullfilledBy}</span>
            </div>
          </div>
        </div>

        {/* delevery info */}
        <div className={styles.top__right}>
          <span>Delivery Fee: BDT. {deliveryFee}</span>
          <span>Estimate Delivery on {deliveryDate}</span>
        </div>
      </div>

      {/* product list */}
      <div className={styles.products}>
        {products.map((product) =>
          product.brand_id == id ? (
            <Product
              key={product.id}
              title={product.title}
              discountedPrice={product.discountedPrice}
              quantity={product.quantity}
              discount={product.discount}
              size={product.size}
              color={product.color}
              price={product.price}
              image={product.image}
            />
          ) : (
            ""
          )
        )}
      </div>

      {/* additional info */}
      <div className={styles.brand__additionalInfo}>
        <span>{additionalInfo}</span>
      </div>
    </div>
  );
};

export default CheckoutBrand;
