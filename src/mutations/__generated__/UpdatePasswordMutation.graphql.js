/**
 * @flow
 * @relayHash a96aec19c0f7866fc1968d0c5f80cebc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdatePasswordMutationVariables = {|
  id: string,
  password: string,
|};
export type UpdatePasswordMutationResponse = {|
  +updatePassword: ?{|
    +id: string
  |}
|};
*/


/*
mutation UpdatePasswordMutation(
  $id: ID!
  $password: String!
) {
  updatePassword(id: $id, password: $password) {
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
    "name": "password",
    "type": "String!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updatePassword",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id",
        "type": "ID!"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password",
        "type": "String!"
      }
    ],
    "concreteType": "UpdatePasswordPayload",
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
  "name": "UpdatePasswordMutation",
  "id": null,
  "text": "mutation UpdatePasswordMutation(\n  $id: ID!\n  $password: String!\n) {\n  updatePassword(id: $id, password: $password) {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "UpdatePasswordMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdatePasswordMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '9f24247acfc96bc888885515c28a23c4';
module.exports = node;
