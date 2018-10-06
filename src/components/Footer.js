import React from 'react'

const Footer = () => (
  <div className="footer">
    <div className="footer-links">
        <div className="subscribe-wrapper">
            <div className="subscribe">
                <input type="email" placeholder="Subscribe to Newsletter" />
                <input type="submit" value="Subscribe" />
            </div>
        </div>
        <div className="links">
            <a href="/about-us">About Us</a>
            <a href="">Privacy Policy</a>
            <a href="">Contact Us</a>
        </div>
        <div className="links">
            <a href="">Our Services</a>
            <a href="">Case Studies</a>
            <a href="/blog">Blog</a>
        </div>
        <div className="social">
            <p>Follow us on:</p>
            <div className="icons">
                <a href=""><i className="fa fa-facebook"></i></a>
                <a href=""><i className="fa fa-instagram"></i></a>
                <a href=""><i className="fa fa-pinterest"></i></a>
                <a href=""><i className="fa fa-tumblr"></i></a>
                <a href=""><i className="fa fa-linkedin"></i></a>
            </div>
        </div>
    </div>
    <div className="copyright">
        Teembr &copy; 2016. All Rights Reserved.
    </div>
  </div>
)

export default Footer
