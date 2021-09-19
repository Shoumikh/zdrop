import headerStyles from '../styles/HeaderTop.module.scss';
import logo from '../assets/zdrop.png'
import Image from 'next/image';
const HeaderTop = () => {
    return (
        <div className={headerStyles.header__container}>
            <Image src={logo} width="83px" height="52px"></Image>
        </div>
    )
}

export default HeaderTop
