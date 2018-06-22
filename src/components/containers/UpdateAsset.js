import React, {Component} from 'react'
import {graphql, createFragmentContainer} from 'react-relay'
import UpdateAssetMutation from '../../mutations/UpdateAssetMutation'
import CreateAssetUi from '../ui/CreateAsset'

class UpdateAsset extends Component {

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

  componentWillMount () {
    // setting the state to the info received from the UpdateAsset_asset query
    this.setState(this.props.asset)
    // setting images preview from pictures received from query
    const images = this.props.asset.pictures.map(pic => {
      const image = {preview: pic.url}
      return image
    })

    this._setImages(images)
  }

  render() {

    return (
      <div>
        <CreateAssetUi
          asset={this.props.asset}
          onChange={this._onChange}
          onChangeElement={this._onChangeElement}
          addElement={this._addElement}
          removeElement={this._removeElement}
          state={this.state}
          images={this.state.images}
          removeImage={this._removeImage}
          setImages={this._setImages}
          equipment={this.props.asset.equipment}
          socialMedia={this.props.asset.socialMedia}
        />
      </div>
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

  // functions for change of input
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

export default createFragmentContainer(UpdateAsset, graphql`
    fragment UpdateAsset_asset on Asset {
        id
        businessName
        description
        price
        businessType
        address
        city
        state
        zipCode
        structure
        franchiseBool
        franchiseYearsRemaining
        franchiseRoyalties
        franchiseMarketingFee
        franchiseTransferFee
        franchiseTraining
        website
        fullTimeEmployees
        partTimeEmployees
        rentNNN
        alcoholLicense
        ownerFinance
        netIncome
        grossIncome
        status
        equipment
        socialMedia
        owned
        termOfLease
        howLongInOperation
        howManySeats
        whySelling
        hoursOfOperation
        requirementsToQualify
        notes
        insideSqFeet
        specialFeatures
        pictures
    }
`)