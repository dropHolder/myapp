import React from 'react';
import './Event.css'
import layout from './11.jpg';


class Event extends React.Component {
  render() {
    return (
      <div style={{ background: 'wheat' }}>
        <div className=" portfolio-single-page">
          <div className="container">
            <img src={layout} alt='' />
            <a href="/" className="button-back">&larr;Back to Main</a>
          </div>
        </div>
      </div>
    )
  }
}
export default Event;


// Оптимизировать до максимума страницу получать все данные как пропсы из родителя и вставлять цвет и тому подобное

