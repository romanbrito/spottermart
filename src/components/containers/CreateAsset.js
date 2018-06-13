import React, {Component} from 'react'
import CreateAssetUi from '../ui/CreateAsset'

class CreateAsset extends Component {

  state = {
    images: [],
    equipment:[{name: ''}],
    socialMedia:[{name: ''}],
  }

  render() {

    return (
      <CreateAssetUi
        onChange={this._onChange}
        onChangeElement={this._onChangeElement}
        addElement={this._addElement}
        removeElement={this._removeElement}
        setImages={this._setImages}
        images={this.state.images}
        removeImage={this._removeImage}
        equipment={this.state.equipment}
        socialMedia={this.state.socialMedia}
      />
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

  _addElement = (element) => {

    const newElement = [...this.state[element], {name: ''} ]
    const newState = Object.keys(this.state).reduce((prev, curr) => {
      if (curr === element) prev[curr] = newElement
      else prev[curr] = this.state[curr]
      return prev
    },  {})

    this.setState(newState)

  }

  _removeElement = (element,idx) => {
    const newElement = this.state[element].filter( (equip, equipidx ) => idx !== equipidx)

    const newState = Object.keys(this.state).reduce((prev, curr) => {
      if (curr === element) prev[curr] = newElement
      else prev[curr] = this.state[curr]
      return prev
    },  {})

    this.setState(newState)
  }

  _onChangeElement = (element, idx) => e => {
    const newElement = this.state[element].map((item, sidx) => {
      if (idx !== sidx) return item
      return { ...item, name: e.target.value }
    })

    const newState = Object.keys(this.state).reduce((prev, curr) => {
      if (curr === element) prev[curr] = newElement
      else prev[curr] = this.state[curr]
      return prev
    },  {})

    this.setState(newState)
  }

  // general function for getting inputs and setting to the state
  _onChange = event => {
    const {name, value} = event.target

    const newState = Object.keys(this.state).reduce( (prev, curr) => {
      if (curr === name) {
        prev[curr] = value
      } else {
        prev[curr] = this.state[curr]
      }
      return prev
    }, {})

    this.setState(newState)

  }

}

export default CreateAsset