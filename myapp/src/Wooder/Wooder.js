import React from 'react';
import './Wooder.css'
import layout from './10.jpg';


class Wooder extends React.Component {
  render() {
    return (
      <div style={{ background: 'wheat' }}>
        <div class=" portfolio-single-page">
          <div class="container">
            <img src={layout} alt="" />
            <a href="/" class="button-back">&larr;Back to Main</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Wooder;