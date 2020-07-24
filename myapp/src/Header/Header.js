import React from 'react';
import './Header.css'

class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      line: 0,
      count: 0,
      out: '',
      out1: '',
      slash: '',
      slash1: '',
      shadow: 'ico-circle',
    }
    this.typeText();
  }

  //Running text

  typeText = () => {
    const t = [
      'Do you wanna see my job?',
      'Press that button!',
    ]
    let interval = setTimeout(() => {
      if (this.state.line === 0) {
        this.setState({ slash: '|' });
        this.setState({ out: this.state.out + t[this.state.line][this.state.count] });
      }
      else {
        this.setState({ slash: '' });
        this.setState({ slash1: '|' });
        this.setState({ out1: this.state.out1 + t[this.state.line][this.state.count] });
      }
      this.setState({ count: this.state.count + 1 });

      if (this.state.count >= t[this.state.line].length) {
        this.setState({ count: 0 });
        this.setState({ line: this.state.line + 1 });
        if (this.state.line > 1) {
          this.setState({ slash1: '' });
        }
        if (this.state.line === t.length) {
          clearTimeout(interval);
          this.addShadow();
          return true;
        }
      }
      this.typeText();
    }, 80);
  }

  // run the infinite circle  
  addShadow = () => {
    if (this.state.shadow === 'ico-circle') {
      this.setState({ shadow: 'ico-circle shadow-white' });
    }
    else {
      this.setState({ shadow: 'ico-circle' });
    }
    this.infiniteCircle();
  }
  infiniteCircle = () => {
    let forever = setTimeout(() => {
      if (window.pageYOffset >= 680) {
        clearTimeout(forever);
        this.setState({ shadow: 'ico-circle' });
        return true;
      }
      if (this.state.shadow === 'ico-circle') {
        this.setState({ shadow: 'ico-circle shadow-white' });
      }
      else {
        this.setState({ shadow: 'ico-circle' });
      }
      this.infiniteCircle();
    }, 2000);
  }
  //scroll to Portfolio
  scroll = () => {
    if (window.pageYOffset < 680) {
      window.scrollBy(0, 30);
      setTimeout(this.scroll, 20);
    }
    else {
      window.scrollTo(0, 680);
    }
  }
  render() {
    return (
      <header>
        <div className="overlay-mf"></div>
        <div className="info">
          <div className="header-title">Yegor Blagodarnyi</div>
          <div className="header-describe">{this.state.out}{this.state.slash}<br />{this.state.out1}{this.state.slash1}</div>
        </div>
        <div className="header-arrow" onClick={this.scroll}><span className={this.state.shadow}><i className="fa fa-chevron-down" aria-hidden="true"></i></span></div>
      </header>
    )
  }
}
export default Header;