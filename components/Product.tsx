// import Image from "next/image";
import productStyles from "../styles/Product.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faHeart, faTrashAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { Image } from "react-bootstrap";

// const myLoader = ({ src, width, quality }: { src: any; width: any; quality: any }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
// };

const Product = ({
  image,
  title,
  color,
  size,
  quantity,
  price,
  discount,
  discountedPrice,
}: {
  image: any;
  title: any;
  color: any;
  size: any;
  quantity: any;
  price: any;
  discount: any;
  discountedPrice: any;
}) => {
  return (
    <div className={productStyles.product__container}>
      <div className={productStyles.product__imgContainer}>
        <Image className={productStyles.product__img} src={image} width="110px" height="124px" />
      </div>
      <div className={productStyles.product__info}>
        <div className={productStyles.product__titleContainer}>
          <p>{title}</p>
          <div className={productStyles.product__iconContainer}>
            <FontAwesomeIcon className={productStyles.product__icon} icon={faHeart} size="lg"></FontAwesomeIcon>
            <FontAwesomeIcon className={productStyles.product__icon} icon={faTrashAlt} color="#ff6f00" size="lg"></FontAwesomeIcon>
          </div>
        </div>

        <div className={productStyles.product__colorSizeContainer}>
          <span className={productStyles.product__color}>Color:{color}</span>
          <span className={productStyles.product__size}>Size:{size}</span>
        </div>
        <span>Quantity:{quantity}</span>
        <div className={productStyles.product__priceContainer}>
          <span>Price: BDT.{discountedPrice}</span>
          <span>BDT.{price}</span>
          <span> {discount}% Off</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
