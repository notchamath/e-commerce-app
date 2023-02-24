import { FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

import './Footer.scss';

export default function Footer() {
  return (
    <footer className='footer__container'>
        <div className="footer__tab">
            <div className="footer__header">Connect</div>
            <div className="footer__connect">
                <div className="footer__link"><FaInstagram/></div>
                <div className="footer__link"><FaFacebookF/></div>
                <div className="footer__link"><FaTwitter/></div>
            </div>
        </div>
        <div className="footer__tab">
            <div className="footer__header">About</div>
            <div className="footer__link">Our Mission</div>
            <div className="footer__link">Careers</div>
            <div className="footer__link">Corporate</div>
        </div>
        <div className="footer__tab">
            <div className="footer__header">Resources</div>
            <div className="footer__link">News</div>
            <div className="footer__link">Support</div>
            <div className="footer__link">Feedback</div>
        </div>
    </footer>
  )
}
