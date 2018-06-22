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
        {/*{console.log(this.props)}*/}
        <CreateAssetUi asset={this.props.asset} onChange={this._onChange} state={this.state} images={this.state.images}/>
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