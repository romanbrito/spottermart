import React, {Component} from 'react'
import CreateAssetUi from '../ui/CreateAsset'

class CreateAsset extends Component {

  state = {
    images: [],
  }

  render() {

    return (
      <CreateAssetUi setImages={this._setImages} images={this.state.images} removeImage={this._removeImage}/>
    )

  }

  _setImages = (images) => {
    const imagesArray = [...this.state.images]
    imagesArray.push(...images)
    this.setState({
      images: imagesArray
    })
  }

  _removeImage = (image) => {
    this.setState({
      images: this.state.images.filter(pic => pic.preview !== image.src)
    })
  }

}

export default CreateAsset