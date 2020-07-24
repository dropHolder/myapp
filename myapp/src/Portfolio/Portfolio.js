import React from 'react';
import './Portfolio.css';
import photo from './15.png';
import photo1 from './16.png';
import photo2 from './17.png';



class Portfolio extends React.Component {
  render() {
    let a = ['/event', '/wooder', '/waxom'];
    return (
      < div className="portfolio" >
        <div className="container">
          <div className="title">
            <div>
              Portfolio
          </div>
            <div className="line-mf"></div>
          </div>
          <div className="row">
            <div className="col-4">
              <div className="portfolio-item-image">
                <img src={photo2} alt="" />
              </div>
              <div className="portfolio-item-title">
                <a href={a[0]}>Event</a>
              </div>
              <div className="portfolio-item-text">
                <p>Very hard work on that page which one you can use like your portfolio</p>
              </div>
            </div>
            <div className="col-4">
              <div className="portfolio-item-image">
                <img src={photo} alt="" />
              </div>
              <div className="portfolio-item-title">
                <a href={a[1]}>Wooder</a>
              </div>
              <div className="portfolio-item-text">
                <p>Very hard work on that page which one you can use like your portfolio</p>
              </div>
            </div>
            <div className="col-4">
              <div className="portfolio-item-image">
                <img src={photo1} alt="" />
              </div>
              <div className="portfolio-item-title">
                <a href={a[2]}>Waxom</a>
              </div>
              <div className="portfolio-item-text">
                <p>Very hard work on that page which one you can use like your portfolio</p>
              </div>
            </div>

          </div>
        </div>
      </div >
    )
  }
}
export default Portfolio;
