import headerStyles from '../styles/HeaderBottom.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faMapMarker, faShoppingCart, faMoneyCheck } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const HeaderBottom = () => {
    return (
        <div className={headerStyles.header__container}>
            {/* checkout section  */}
            <div className={headerStyles.header__option}>
            <FontAwesomeIcon icon={faShoppingCart} color="#FF6F00"></FontAwesomeIcon>
                <span>CHECKOUT</span>
            </div>

            {/* shipping info section */}
            <div className={headerStyles.header__option}>
            <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
               <span>SHIPPING INFORMATION</span> 
            </div>

            {/* payment section */}
            <div className={headerStyles.header__option}>
            <FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon>
              <span> PAYMENT</span> 
            </div>
        </div>
    )
}

export default HeaderBottom
