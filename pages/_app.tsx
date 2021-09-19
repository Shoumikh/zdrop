import '../styles/globals.css'
import '../styles/variables.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import type { AppProps } from 'next/app'
import HeaderTop from '../components/HeaderTop';
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
import { wrapper } from "../redux/store"
import HeaderBottom from '../components/HeaderBottom';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above



function MyApp({ Component, pageProps }: AppProps) {
  return (
  <div>
    <HeaderTop/>
    <HeaderBottom/>
    <Component {...pageProps} />
  </div>
  );
}
export default wrapper.withRedux(MyApp);
