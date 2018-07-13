/**
 * @flow
 * @relayHash 8a51a54b63913f10d3534a33bdee6ab5
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateUserInput = {
  email?: ?string,
  id: string,
  name?: ?string,
  password?: ?string,
  assetsIds?: ?$ReadOnlyArray<string>,
  assets?: ?$ReadOnlyArray<UserassetsAsset>,
  messagesReceivedIds?: ?$ReadOnlyArray<string>,
  messagesReceived?: ?$ReadOnlyArray<UsermessagesReceivedMessage>,
  messagesSentIds?: ?$ReadOnlyArray<string>,
  messagesSent?: ?$ReadOnlyArray<UsermessagesSentMessage>,
  clientMutationId: string,
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
export type UsermessagesSentMessage = {
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
export type UpdateUserMutationVariables = {|
  input: UpdateUserInput
|};
export type UpdateUserMutationResponse = {|
  +updateUser: ?{|
    +user: ?{|
      +id: string
    |}
  |}
|};
*/


/*
mutation UpdateUserMutation(
  $input: UpdateUserInput!
) {
  updateUser(input: $input) {
    user {
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
    "type": "UpdateUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateUserInput!"
      }
    ],
    "concreteType": "UpdateUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "user",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
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
  "name": "UpdateUserMutation",
  "id": null,
  "text": "mutation UpdateUserMutation(\n  $input: UpdateUserInput!\n) {\n  updateUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateUserMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateUserMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '789b952b256f24e1cb61e5faecd8fd31';
module.exports = node;
