import React, {Component} from 'react'
import CreateAssetUi from '../ui/CreateAsset'

class CreateAsset extends Component {

  state = {
    images: [],
  }

  render() {

    return (
      <CreateAssetUi setImages={this._setImages}/>
    )

  }

  _setImages = (images) => {
    const imagesArray = [...this.state.images]
    imagesArray.push(...images)
    this.setState({
      images: imagesArray
    })
  }

}

export default CreateAsset