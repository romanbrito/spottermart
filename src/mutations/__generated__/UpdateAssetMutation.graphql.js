/**
 * @flow
 * @relayHash c0ba18585da81915247aa70f4cf2c423
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateAssetInput = {
  address?: ?string,
  alcoholLicense?: ?boolean,
  businessName?: ?string,
  businessType?: ?string,
  city?: ?string,
  description?: ?string,
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
  id: string,
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
  state?: ?string,
  status?: ?string,
  structure?: ?string,
  termOfLease?: ?string,
  website?: ?string,
  whySelling?: ?string,
  zipCode?: ?string,
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
  messagesReceivedIds?: ?$ReadOnlyArray<string>,
  messagesReceived?: ?$ReadOnlyArray<UsermessagesReceivedMessage>,
  messagesSentIds?: ?$ReadOnlyArray<string>,
  messagesSent?: ?$ReadOnlyArray<UsermessagesSentMessage>,
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
export type UsermessagesReceivedMessage = {
  text?: ?string,
  messageToId?: ?string,
  messageTo?: ?MessagemessageToUser,
};
export type MessagemessageToUser = {
  email: string,
  name?: ?string,
  password: string,
  assetsIds?: ?$ReadOnlyArray<string>,
  assets?: ?$ReadOnlyArray<UserassetsAsset>,
  messagesReceivedIds?: ?$ReadOnlyArray<string>,
  messagesReceived?: ?$ReadOnlyArray<UsermessagesReceivedMessage>,
  messagesSentIds?: ?$ReadOnlyArray<string>,
  messagesSent?: ?$ReadOnlyArray<UsermessagesSentMessage>,
};
export type UsermessagesSentMessage = {
  text?: ?string,
  messageFromId?: ?string,
  messageFrom?: ?MessagemessageFromUser,
};
export type MessagemessageFromUser = {
  email: string,
  name?: ?string,
  password: string,
  assetsIds?: ?$ReadOnlyArray<string>,
  assets?: ?$ReadOnlyArray<UserassetsAsset>,
  messagesReceivedIds?: ?$ReadOnlyArray<string>,
  messagesReceived?: ?$ReadOnlyArray<UsermessagesReceivedMessage>,
  messagesSentIds?: ?$ReadOnlyArray<string>,
  messagesSent?: ?$ReadOnlyArray<UsermessagesSentMessage>,
};
export type UpdateAssetMutationVariables = {|
  input: UpdateAssetInput
|};
export type UpdateAssetMutationResponse = {|
  +updateAsset: ?{|
    +asset: ?{|
      +id: string
    |}
  |}
|};
*/


/*
mutation UpdateAssetMutation(
  $input: UpdateAssetInput!
) {
  updateAsset(input: $input) {
    asset {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateAssetInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateAsset",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateAssetInput!"
      }
    ],
    "concreteType": "UpdateAssetPayload",
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
            "name": "id",
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
  "name": "UpdateAssetMutation",
  "id": null,
  "text": "mutation UpdateAssetMutation(\n  $input: UpdateAssetInput!\n) {\n  updateAsset(input: $input) {\n    asset {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateAssetMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateAssetMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'be297a5b88bc982c6cbf3a9c7e958769';
module.exports = node;
