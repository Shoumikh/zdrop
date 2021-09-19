import styles from "../styles/CheckoutBrand.module.scss";
import Image from "next/image";
import varifiedLogo from "../assets/varified.png";
import Product from "./Product";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";

const CheckoutBrand = ({
  logo,
  name,
  fullfilledBy,
  deliveryFee,
  deliveryDate,
  additionalInfo,
}: {
  logo: any;
  name: any;
  fullfilledBy: any;
  deliveryFee: any;
  deliveryDate: any;
  additionalInfo: any;
}) => {
  return (
    <div className={styles.checkout__brandContainer}>
      {/* brand and delivery info */}
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
        <div className={styles.top__right}>
          <span>Delivery Fee: BDT. {deliveryFee}</span>
          <span>Estimate Delivery on {deliveryDate}</span>
        </div>
      </div>

      {/* product list */}
      <div className={styles.products}>
        <Product 
          image={p1} 
          title="Men Striped Casual Spread Shirt Super Skinny Fit Low" 
          color="Red" 
          quantity="1"
          price="3050" 
          discount="25" 
          size="XL" 
          discountedPrice="2850" />

        <Product
          image={p2}
          title="Men Striped Casual Spread Shirt Super Skinny Fit Low Men Striped Casual Spread Shirt Super Skinny Fit Low"
          color="Red"
          quantity="1"
          price="3050"
          discount="25"
          size="XL"
          discountedPrice="2850"
        />
      </div>

      <div className={styles.brand__additionalInfo}>
        <span>{additionalInfo}</span>
      </div>
    </div>
  );
};

export default CheckoutBrand;
