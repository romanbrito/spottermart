/**
 * @flow
 * @relayHash b102fbd37c349ed37600158084a880d1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateUserMutationVariables = {|
  id: string,
  email: string,
  password: string,
  name: string,
|};
export type UpdateUserMutationResponse = {|
  +upgradeUser: ?{|
    +id: string
  |}
|};
*/


/*
mutation UpdateUserMutation(
  $id: ID!
  $email: String!
  $password: String!
  $name: String!
) {
  upgradeUser(id: $id, email: $email, password: $password, name: $name) {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "email",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "password",
    "type": "String!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "name",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "upgradeUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      },
      {
        "kind": "Variable",
        "name": "name",
        "variableName": "name",
        "type": "String!"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password",
        "type": "String!"
      }
    ],
    "concreteType": "UpgradeUserPayload",
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "UpdateUserMutation",
  "id": null,
  "text": "mutation UpdateUserMutation(\n  $id: ID!\n  $email: String!\n  $password: String!\n  $name: String!\n) {\n  upgradeUser(id: $id, email: $email, password: $password, name: $name) {\n    id\n  }\n}\n",
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
(node/*: any*/).hash = '80024ce7ceb1838d2133d0ed3a3298f4';
module.exports = node;
