import React, {Component} from 'react'

const imgSrc = ['https://www.w3schools.com/howto/img_snow_wide.jpg',
  'https://www.w3schools.com/howto/img_lights_wide.jpg',
  'https://www.w3schools.com/howto/img_mountains_wide.jpg']
class SlideShow extends Component {

  state = {
    n: 0
  }

  render () {
    return (
      <div className="slideshow-container" style={{maxWidth: 1000, position: 'relative', margin: 'auto'}}>

        {/*Full-width images with number and caption text*/}
        <div className="mySlides fade">
          <div className="numbertext">{this.state.n+1 + '/' + imgSrc.length}</div>
          <img src={imgSrc[this.state.n]} style={{width: '100%'}} alt=""/>
          <div className="text">Caption Text</div>
        </div>

        {/*Next and previous buttons*/}
        <a
          className="prev"
          onClick={() => this._slideControl(-1)}
        >
          &#10094;
        </a>
        <a
          className="next"
          onClick={() => this._slideControl(1)}
        >
          &#10095;
        </a>
      </div>
    )
  }

  _slideControl = (i) => {
    const n = this.state.n + i
    if (n > imgSrc.length-1) this.setState({n:0})
    else if (n < 0) this.setState({n:imgSrc.length-1})
    else this.setState({n})
  }
}

export default SlideShow