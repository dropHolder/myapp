import React from 'react';
import './Footer.css'


class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-4 text-center">
              <p className="footer-name">Place of Grace</p>
              <p className="copyright">
                Copyright &#169;
                2020
                Made by Yegor limited.
                    </p>
            </div>
            <div className="col-4  text-center ">
              <p className="footer-social">My Profiles in social media</p>
              <p className="footer-social-icons">
                <a href="google.com" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="https://vk.com/czech__man" target="_blank" rel="noopener noreferrer" ><i className="fa fa-vk" aria-hidden="true"></i>
                </a>
                <a href="google.com" target="_blank" rel="noopener noreferrer" ><i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href="google.com" target="_blank" rel="noopener noreferrer" ><i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </p>
            </div>
            <div className="col-4 text-center">
              <div><a href="https://t.me/JudgementTaste" className="button" target="_blank" rel="noopener noreferrer" >Contact us in Telegram</a></div>
              <p>Write there if you want me to help you build your dream in web</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Footer;