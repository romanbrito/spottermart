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
    this.setState(this.props.asset)
  }

  render() {

    return (
      <div>
        {/*{console.log(this.props)}*/}
        <CreateAssetUi asset={this.props.asset} onChange={this._onChange} state={this.state}/>
      </div>
    )
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