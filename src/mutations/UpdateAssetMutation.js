import {commitMutation, graphql} from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
    mutation UpdateAssetMutation($input: UpdateAssetInput!) {
        updateAsset(input: $input) {
            asset {
                id
            }
        }
    }
`

export default (
  id,
  businessName,
  description,
  price,
  businessType,
  address,
  city,
  state,
  zipCode,
  structure,
  franchiseBool,
  franchiseYearsRemaining,
  franchiseRoyalties,
  franchiseMarketingFee,
  franchiseTransferFee,
  franchiseTraining,
  website,
  fullTimeEmployees,
  partTimeEmployees,
  rentNNN,
  alcoholLicense,
  ownerFinance,
  netIncome,
  grossIncome,
  status,
  equipment,
  socialMedia,
  owned,
  termOfLease,
  howLongInOperation,
  howManySeats,
  whySelling,
  hoursOfOperation,
  requirementsToQualify,
  notes,
  insideSqFeet,
  specialFeatures,
  postedById,
  pictures,
  callback) => {

  const variables = {
    input: {
      id,
      businessName,
      description,
      price,
      businessType,
      address,
      city,
      state,
      zipCode,
      structure,
      franchiseBool,
      franchiseYearsRemaining,
      franchiseRoyalties,
      franchiseMarketingFee,
      franchiseTransferFee,
      franchiseTraining,
      website,
      fullTimeEmployees,
      partTimeEmployees,
      rentNNN,
      alcoholLicense,
      ownerFinance,
      netIncome,
      grossIncome,
      status,
      equipment,
      socialMedia,
      owned,
      termOfLease,
      howLongInOperation,
      howManySeats,
      whySelling,
      hoursOfOperation,
      requirementsToQualify,
      notes,
      insideSqFeet,
      specialFeatures,
      postedById,
      pictures,
      clientMutationId: ""
    },
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err)
    }
  )
}