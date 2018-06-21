import React, {Component} from 'react'
import {graphql, createFragmentContainer} from 'react-relay'
import UpdateAssetMutation from '../../mutations/UpdateAssetMutation'
import CreateAssetUi from '../ui/CreateAsset'

class UpdateAsset extends Component {


  render() {

    return (
      <div>
        {console.log(this.props)}
        {/*<CreateAssetUi/>*/}
      </div>
    )
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