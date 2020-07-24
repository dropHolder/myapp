import React from 'react';
import './Waxom.css'
import layout from './9.jpg';


class Waxom extends React.Component {
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
export default Waxom;