import orderStyles from "../styles/OrderSummary.module.scss";
import taka from "../assets/taka.png";
import Image from "next/image";
import { Accordion, Button, FormControl, InputGroup } from "react-bootstrap";

const OrderSummary = () => {
  return (
    <div className={orderStyles.order__container}>
      <div className={orderStyles.order__titleContainer}>
        <span className={orderStyles.order__title}>ORDER SUMMARY</span>
      </div>

      <div className={orderStyles.order__info}>
        <div className={orderStyles.order__option}>
          <span>Subtotal (20 itmes): </span>

          <div className={orderStyles.order__optionRignt}>
            <span>
              <Image src={taka} width="10px" height="10px" /> 38850
            </span>
          </div>
        </div>
        <div className={orderStyles.order__option}>
          <span>Discount:</span>
          <div className={orderStyles.order__optionRignt}>
            <span>
              <Image src={taka} width="10px" height="10px" /> 0
            </span>
          </div>
        </div>
        <div className={orderStyles.order__option}>
          <span>Shipping Charge:</span>
          <div className={orderStyles.order__optionRignt}>
            <span>
              <Image src={taka} width="10px" height="10px" /> 600
            </span>
          </div>
        </div>
      </div>

      <div className={orderStyles.order__coupon}>
        <span>Gift Card, Coupons & Promotional Codes:</span>
        <InputGroup className="mb-3">
          <FormControl placeholder="Voucher Code" aria-label="Voucher Code" aria-describedby="basic-addon2" />
          <Button variant="outline-secondary" id="button-addon2">
            Apply
          </Button>
        </InputGroup>
      </div>

      <div className={orderStyles.order__total}>
        <div className={orderStyles.order__option}>
          <span>Total Payable:</span>
          <div className={orderStyles.order__optionRignt}>
            <span>
              <Image src={taka} width="10px" height="10px" /> 39375
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
