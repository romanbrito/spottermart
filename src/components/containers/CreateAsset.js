import React, {Component} from 'react'
import CreateAssetMutation from '../../mutations/CreateAssetMutation'
import {GC_USER_ID} from '../../constants'
import {uploadImage} from '../../utils'
import CreateAssetUi from '../ui/CreateAsset'

class CreateAsset extends Component {

  state = {
    businessName: '',
    description: '',
    price: '',
    postedBy: '',
    pictures: [],
    images: [],
    businessType: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    structure: '',
    franchiseBool: false,
    franchiseYearsRemaining: '',
    franchiseRoyalties: '',
    franchiseMarketingFee: '',
    franchiseTransferFee: '',
    franchiseTraining: '',
    website: '',
    fullTimeEmployees: '',
    partTimeEmployees: '',
    rentNNN: '',
    alcoholLicense: false,
    ownerFinance: '',
    netIncome: '',
    grossIncome: '',
    status: '',
    equipment: [{name:''}],
    socialMedia: [{name: ''}],
    owned: false,
    termOfLease: '',
    howLongInOperation: '',
    howManySeats: '',
    whySelling: '',
    hoursOfOperation: '',
    requirementsToQualify: '',
    notes: '',
    insideSqFeet: '',
    specialFeatures: ''
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
        createAsset={this._createAsset}
      />
    )

  }

  _createAsset = () => {

    // fetch image data PROMISES!!
    const allPicData = () => {
      const imagePromises = this.state.images.map(
        image => {
          return uploadImage(image)
        }
      )
      return Promise.all(imagePromises)
    }

    allPicData().then(
      pictures => {
        const postedById = localStorage.getItem(GC_USER_ID)
        if (!postedById) {
          console.error('No user logged in')
          return
        }
        const {
          address,
          businessName,
          description,
          city,
          state,
          zipCode
        } = this.state

        CreateAssetMutation(
          businessName,
          description,
          postedById,
          address,
          city,
          state,
          zipCode,
          pictures,
          () => this.props.history.push('/'))
      }
    )

  }

  // functions for images
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

  // functions for adding lists of equipment and social media
  _addElement = (element) => {
    const newElement = [...this.state[element], {name: ''} ]
    this._newState(element,newElement)
  }

  _removeElement = (element,idx) => {
    const newElement = this.state[element].filter( (equip, equipidx ) => idx !== equipidx)
    this._newState(element,newElement)
  }

  _onChangeElement = (element, idx) => e => {
    const newElement = this.state[element].map((item, sidx) => {
      if (idx !== sidx) return item
      return { ...item, name: e.target.value }
    })
    this._newState(element,newElement)
  }

  _onChange = event => {
    const {name, value} = event.target
    this._newState(name,value)
  }

  _newState = (element, newElement) => {
    const newState = Object.keys(this.state).reduce((prev, curr) => {
      if (curr === element) prev[curr] = newElement
      else prev[curr] = this.state[curr]
      return prev
    },  {})
    this.setState(newState)
  }

}

export default CreateAsset