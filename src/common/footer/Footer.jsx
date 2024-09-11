import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div>
                    <a href="#">About Us</a>
                    <a href="#">FAQs</a>
                    <a href="#">Order Tracking</a>
                    <a href="#">Contact</a>
                    <span className="copyright">
                        &copy; 2021 by <a href="#">Maruf Marzuq</a>
                    </span>
                </div>
                <div className="footer-social">
                    <a href="">Facebook</a>
                    <a href="">Twitter</a>
                    <a href="">Instagram</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
