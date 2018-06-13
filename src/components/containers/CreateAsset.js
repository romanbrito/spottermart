import React, {Component} from 'react'
import CreateAssetUi from '../ui/CreateAsset'

class CreateAsset extends Component {

  state = {
    images: [],
    equipment:[{name: ''}],
  }

  render() {

    return (
      <CreateAssetUi
        onChange={this._onChange}
        onChangeEquipment={this._onChangeEquipment}
        addEquipment={this._addEquipment}
        removeEquipment={this._removeEquipment}
        setImages={this._setImages}
        images={this.state.images}
        removeImage={this._removeImage}
        equipment={this.state.equipment}
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

  _addEquipment = () => {
    const newEquipment = [...this.state.equipment, {name: ''} ]
    this.setState({
      equipment: newEquipment
    })
  }

  _removeEquipment = idx => {
    const newEquipment = this.state.equipment.filter( (equip, equipidx ) => idx !== equipidx)
    this.setState({
      equipment: newEquipment
    })
  }

  _onChangeEquipment = idx => e => {
    const newEquipment = this.state.equipment.map((equipment, sidx) => {
      if (idx !== sidx) return equipment
      return { ...equipment, name: e.target.value }
    })

    this.setState({ equipment: newEquipment })
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