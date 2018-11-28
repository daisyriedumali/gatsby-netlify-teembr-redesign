import React from 'react'

const submitted = false;

// <a href={"" /*'https://www.facebook.com/teembrdesigns/'*/} target="_blank" rel="nofollow noopener"><i className="fa fa-facebook"></i></a>
// <a href={"" /*"https://www.instagram.com/teembrdesigns"*/} target="_blank" rel="nofollow noopener"><i className="fa fa-instagram"></i></a>
// <a href={"" /*"https://www.pinterest.ph/teembr/"*/} target="_blank" rel="nofollow noopener"><i className="fa fa-pinterest"></i></a>
// <a href={"" /*"https://teembr-works.tumblr.com/"*/} target="_blank" rel="nofollow noopener"><i className="fa fa-tumblr"></i></a>
// <a href={"" /*"https://www.behance.net/teembrdesigns"*/} target="_blank" rel="nofollow noopener"><i className="fa fa-behance"></i></a>

const Footer = () => (
  <div className="footer">
    <div className="footer-links">
        <div className="subscribe-wrapper">
            <div className="subscribe">
                <form action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdoZowXqzreJO4AjOZhVu59RN4YnRAa6KS7C3sleKfop3T9SQ/formResponse"
                    method="POST" target="hidden_iframe" >
                    <input type="email" name="emailAddress" required placeholder="Subscribe to Newsletter" />
                    <input type="submit" value="Subscribe" />
                </form>
            </div>
        </div>
        <div className="links">
            <a href="/about-us">About Us</a>
            <a href="/privacy-policy">Privacy Policy</a>
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
                <a href="" target="_blank" rel="nofollow noopener"><i className="fa fa-facebook"></i></a>
                <a href="" target="_blank" rel="nofollow noopener"><i className="fa fa-instagram"></i></a>
                <a href="" target="_blank" rel="nofollow noopener"><i className="fa fa-pinterest"></i></a>
                <a href="" target="_blank" rel="nofollow noopener"><i className="fa fa-tumblr"></i></a>
                <a href="" target="_blank" rel="nofollow noopener"><i className="fa fa-behance"></i></a>
            </div>
        </div>
    </div>
    <div className="copyright">
        Teembr &copy; 2018. All Rights Reserved.
    </div>
  </div>
)

export default Footer
