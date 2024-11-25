
import './footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__logo ">
                    <img src="./images/logo.png" alt="logo" className='m-auto' />
                </div>
                <p className="footer__description font-Resolve">
                    Zenith Eclipse Co is a leading international freight forwarding company,
                    providing seamless global logistics solutions through an advanced
                    digital platform. We partner with licensed, fully compliant third-party
                    carriers for vessel and air cargo services, ensuring adherence to the
                    highest industry standards, including those set by the International
                    Maritime Organization and the European Union Aviation Safety Agency.
                    While Zenith Eclipse Co does not provide additional liability insurance,
                    all cargo are fully covered under the carriers insurance policies. We
                    are committed to delivering reliable, safe, and efficient transport
                    solutions across international borders.
                </p>
                <section className="footer__links font">
                    <h2 className="footer__links-title">
                        Useful links
                    </h2>
                    <ul className="footer__links-list ">

                        <li className="footer__links-item"><Link to="/about" className="footer__link">About Us</Link></li>
                        <li className="footer__links-item"><Link to="/" className="footer__link">Contact Us</Link></li>
                        <li className="footer__links-item"><a href="#" className="footer__link">Partnership</a></li>
                        <li className="footer__links-item"><a href="#" className="footer__link">FAQ</a></li>
                        <li className="footer__links-item"><a href="#" className="footer__link">Blogs</a></li>
                    </ul>
                </section>
                <section className="footer__cta">
                    <h2 className="footer__cta-title ">Subscribe to Our Newsletter</h2>
                    <form action="/" className="footer__form">
                        <input type="email" placeholder="Your Email Address" required name="email" id="email" className="footer__from-input font-Resolve" />
                        <button type="submit" className="footer__form-button "><img src="./images/send.svg" alt="send icon" /></button>
                    </form>
                    <ul className="footer__social-medias">
                        <li className="footer__social-media-item"><a href="#" className="footer__social-media-link"><img src="./images/facebook.svg" alt="facebook icon" /></a></li>
                        <li className="footer__social-media-item"><a href="#" className="footer__social-media-link"><img src="./images/insta.svg" alt="instagram icon" /></a></li>
                        <li className="footer__social-media-item"><a href="#" className="footer__social-media-link"><img src="./images/whatsapp.svg" alt="whatsapp icon" /></a></li>
                        <li className="footer__social-media-item"><a href="#" className="footer__social-media-link"><img src="./images/twiiter.svg" alt="twitter icon" /></a></li>
                    </ul>
                </section>
            </div>
            <hr className="footer__divider" />
            <p className="footer__copyright font-Resolve my-3">
                &copy; Zenith Eclipse All rights reserved.
            </p>
        </footer>
    )
}
export default Footer
