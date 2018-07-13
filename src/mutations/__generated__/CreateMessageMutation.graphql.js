/**
 * @flow
 * @relayHash c3581310417fded9e23ac5ce250cc1d6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateMessageInput = {
  text?: ?string,
  messageFromId?: ?string,
  messageFrom?: ?MessagemessageFromUser,
  messageToId?: ?string,
  messageTo?: ?MessagemessageToUser,
  clientMutationId: string,
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
export type CreateMessageMutationVariables = {|
  input: CreateMessageInput
|};
export type CreateMessageMutationResponse = {|
  +createMessage: ?{|
    +message: ?{|
      +id: string
    |}
  |}
|};
*/


/*
mutation CreateMessageMutation(
  $input: CreateMessageInput!
) {
  createMessage(input: $input) {
    message {
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
    "type": "CreateMessageInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createMessage",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateMessageInput!"
      }
    ],
    "concreteType": "CreateMessagePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "message",
        "storageKey": null,
        "args": null,
        "concreteType": "Message",
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
  "name": "CreateMessageMutation",
  "id": null,
  "text": "mutation CreateMessageMutation(\n  $input: CreateMessageInput!\n) {\n  createMessage(input: $input) {\n    message {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "CreateMessageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateMessageMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6e83d3eb51f0f19cac79715ac35c6d0e';
module.exports = node;
