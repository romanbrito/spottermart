/**
 * @flow
 * @relayHash aca324b7fa0232a7545765955b5f6445
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateAssetInput = {
  address?: ?string,
  alcoholLicense?: ?boolean,
  businessName: string,
  businessType?: ?string,
  city: string,
  description: string,
  equipment?: ?$ReadOnlyArray<any>,
  franchiseBool?: ?boolean,
  franchiseMarketingFee?: ?string,
  franchiseRoyalties?: ?string,
  franchiseTraining?: ?string,
  franchiseTransferFee?: ?string,
  franchiseYearsRemaining?: ?string,
  fullTimeEmployees?: ?string,
  grossIncome?: ?string,
  hoursOfOperation?: ?string,
  howLongInOperation?: ?string,
  howManySeats?: ?string,
  insideSqFeet?: ?string,
  netIncome?: ?string,
  notes?: ?string,
  owned?: ?boolean,
  ownerFinance?: ?string,
  partTimeEmployees?: ?string,
  pictures?: ?$ReadOnlyArray<any>,
  price?: ?string,
  rentNNN?: ?string,
  requirementsToQualify?: ?string,
  socialMedia?: ?$ReadOnlyArray<any>,
  socialMediaRating?: ?$ReadOnlyArray<any>,
  specialFeatures?: ?string,
  state: string,
  status?: ?string,
  structure?: ?string,
  termOfLease?: ?string,
  website?: ?string,
  whySelling?: ?string,
  zipCode: string,
  postedById?: ?string,
  postedBy?: ?AssetpostedByUser,
  clientMutationId: string,
};
export type AssetpostedByUser = {
  email: string,
  name?: ?string,
  password: string,
  assetsIds?: ?$ReadOnlyArray<string>,
  assets?: ?$ReadOnlyArray<UserassetsAsset>,
};
export type UserassetsAsset = {
  address?: ?string,
  alcoholLicense?: ?boolean,
  businessName: string,
  businessType?: ?string,
  city: string,
  description: string,
  equipment?: ?$ReadOnlyArray<any>,
  franchiseBool?: ?boolean,
  franchiseMarketingFee?: ?string,
  franchiseRoyalties?: ?string,
  franchiseTraining?: ?string,
  franchiseTransferFee?: ?string,
  franchiseYearsRemaining?: ?string,
  fullTimeEmployees?: ?string,
  grossIncome?: ?string,
  hoursOfOperation?: ?string,
  howLongInOperation?: ?string,
  howManySeats?: ?string,
  insideSqFeet?: ?string,
  netIncome?: ?string,
  notes?: ?string,
  owned?: ?boolean,
  ownerFinance?: ?string,
  partTimeEmployees?: ?string,
  pictures?: ?$ReadOnlyArray<any>,
  price?: ?string,
  rentNNN?: ?string,
  requirementsToQualify?: ?string,
  socialMedia?: ?$ReadOnlyArray<any>,
  socialMediaRating?: ?$ReadOnlyArray<any>,
  specialFeatures?: ?string,
  state: string,
  status?: ?string,
  structure?: ?string,
  termOfLease?: ?string,
  website?: ?string,
  whySelling?: ?string,
  zipCode: string,
};
export type CreateAssetMutationVariables = {|
  input: CreateAssetInput
|};
export type CreateAssetMutationResponse = {|
  +createAsset: ?{|
    +asset: ?{|
      +id: string,
      +createdAt: any,
      +businessName: string,
      +price: ?string,
      +postedBy: ?{|
        +id: string,
        +name: ?string,
      |},
      +description: string,
      +city: string,
      +state: string,
      +zipCode: string,
      +pictures: ?$ReadOnlyArray<any>,
      +equipment: ?$ReadOnlyArray<any>,
      +socialMedia: ?$ReadOnlyArray<any>,
    |}
  |}
|};
*/


/*
mutation CreateAssetMutation(
  $input: CreateAssetInput!
) {
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateAssetInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createAsset",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateAssetInput!"
      }
    ],
    "concreteType": "CreateAssetPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "asset",
        "storageKey": null,
        "args": null,
        "concreteType": "Asset",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "city",
            "args": null,
            "storageKey": null
          },
          v1,
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "businessName",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "price",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "postedBy",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v1,
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "createdAt",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "state",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "zipCode",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "pictures",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "equipment",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "socialMedia",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "CreateAssetMutation",
  "id": null,
  "text": "mutation CreateAssetMutation(\n  $input: CreateAssetInput!\n) {\n  createAsset(input: $input) {\n    asset {\n      id\n      createdAt\n      businessName\n      price\n      postedBy {\n        id\n        name\n      }\n      description\n      city\n      state\n      zipCode\n      pictures\n      equipment\n      socialMedia\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateAssetMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateAssetMutation",
    "argumentDefinitions": v0,
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a40e1b53b6204688696ac168a4b32a25';
module.exports = node;
