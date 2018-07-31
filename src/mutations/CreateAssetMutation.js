// 1
import {
  commitMutation,
  graphql,
} from 'react-relay'
import environment from '../Environment'

// 2
const mutation = graphql`
    mutation CreateAssetMutation($input: CreateAssetInput!) {
        createAsset(input: $input) {
            asset {
                id
                createdAt
                businessName
                price
                postedBy {
                    id
                    name
                }
                description
                city
                state
                zipCode
                pictures
                equipment
                socialMedia
            }
        }
    }
`

// 3
export default (
  businessName,
  description,
  price,
  businessType,
  address,
  city,
  state,
  zipCode,
  coordinates,
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
  //4
  const variables = {
    input: {
      businessName,
      description,
      price,
      businessType,
      address,
      city,
      state,
      zipCode,
      coordinates,
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

  // 5
  commitMutation(
    environment,
    {
      mutation,
      variables,

      // 6
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
