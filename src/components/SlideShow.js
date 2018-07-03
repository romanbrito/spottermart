import React, {Component} from 'react'

class SlideShow extends Component {

  state = {
    n: 0
  }

  render () {

    return (
      <figure className="slideshow-container" style={{display: 'grid'}}>

        {/*Full-width images with number and caption text*/}
        <div className="" style={{gridColumn:1,gridRow:1}}>
          <img src={this.props.images[this.state.n].url} style={{width: '100%'}} alt=""/>
        </div>

        <div className="white-90 f5 pa3" style={{gridColumn:1,gridRow:1}}>{this.state.n+1 + '/' + this.props.images.length}</div>

        {/*Next and previous buttons*/}
        <div style={{gridColumn:1,gridRow:1, display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <a
            className="pointer pl3 white-90 f1"
            onClick={() => this._slideControl(-1)}
          >
            &#10094;
          </a>
          <a
            className="pointer pr3 white-90 f1"
            onClick={() => this._slideControl(1)}
          >
            &#10095;
          </a>
        </div>
      </figure>
    )
  }

  _slideControl = (i) => {
    const n = this.state.n + i
    if (n > this.props.images.length-1) this.setState({n:0})
    else if (n < 0) this.setState({n:this.props.images.length-1})
    else this.setState({n})
  }
}

export default SlideShow