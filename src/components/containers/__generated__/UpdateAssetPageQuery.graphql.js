/**
 * @flow
 * @relayHash 7542610ecce12d474f06e6af830a06d2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type UpdateAsset_asset$ref = any;
export type UpdateAssetPageQueryVariables = {|
  assetId: string
|};
export type UpdateAssetPageQueryResponse = {|
  +viewer: {|
    +Asset: ?{|
      +$fragmentRefs: UpdateAsset_asset$ref
    |}
  |}
|};
*/


/*
query UpdateAssetPageQuery(
  $assetId: ID!
) {
  viewer {
    Asset(id: $assetId) {
      ...UpdateAsset_asset
      id
    }
    id
  }
}

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
  coordinates
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "assetId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "assetId",
    "type": "ID"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "UpdateAssetPageQuery",
  "id": null,
  "text": "query UpdateAssetPageQuery(\n  $assetId: ID!\n) {\n  viewer {\n    Asset(id: $assetId) {\n      ...UpdateAsset_asset\n      id\n    }\n    id\n  }\n}\n\nfragment UpdateAsset_asset on Asset {\n  id\n  businessName\n  description\n  price\n  businessType\n  address\n  city\n  state\n  zipCode\n  coordinates\n  structure\n  franchiseBool\n  franchiseYearsRemaining\n  franchiseRoyalties\n  franchiseMarketingFee\n  franchiseTransferFee\n  franchiseTraining\n  website\n  fullTimeEmployees\n  partTimeEmployees\n  rentNNN\n  alcoholLicense\n  ownerFinance\n  netIncome\n  grossIncome\n  status\n  equipment\n  socialMedia\n  owned\n  termOfLease\n  howLongInOperation\n  howManySeats\n  whySelling\n  hoursOfOperation\n  requirementsToQualify\n  notes\n  insideSqFeet\n  specialFeatures\n  pictures\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateAssetPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Asset",
            "storageKey": null,
            "args": v1,
            "concreteType": "Asset",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "UpdateAsset_asset",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateAssetPageQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "Viewer",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "Asset",
            "storageKey": null,
            "args": v1,
            "concreteType": "Asset",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "partTimeEmployees",
                "args": null,
                "storageKey": null
              },
              v2,
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
                "name": "price",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "businessType",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "address",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "city",
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
                "name": "coordinates",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "structure",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "franchiseBool",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "franchiseYearsRemaining",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "franchiseRoyalties",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "franchiseMarketingFee",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "franchiseTransferFee",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "franchiseTraining",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "website",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "fullTimeEmployees",
                "args": null,
                "storageKey": null
              },
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
                "name": "rentNNN",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "alcoholLicense",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "ownerFinance",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "netIncome",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "grossIncome",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "status",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "owned",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "termOfLease",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "howLongInOperation",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "howManySeats",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "whySelling",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hoursOfOperation",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "requirementsToQualify",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "notes",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "insideSqFeet",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "specialFeatures",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "pictures",
                "args": null,
                "storageKey": null
              }
            ]
          },
          v2
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f963b0c6118c4dcb093768372e712ad9';
module.exports = node;
