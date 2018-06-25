/**
 * @flow
 * @relayHash 7ce708f972daa15cc4d665f454c46f73
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteAssetInput = {
  id: string,
  clientMutationId: string,
};
export type DeleteAssetMutationVariables = {|
  input: DeleteAssetInput
|};
export type DeleteAssetMutationResponse = {|
  +deleteAsset: ?{|
    +asset: ?{|
      +id: string
    |}
  |}
|};
*/


/*
mutation DeleteAssetMutation(
  $input: DeleteAssetInput!
) {
  deleteAsset(input: $input) {
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
    "type": "DeleteAssetInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteAsset",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteAssetInput!"
      }
    ],
    "concreteType": "DeleteAssetPayload",
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
  "name": "DeleteAssetMutation",
  "id": null,
  "text": "mutation DeleteAssetMutation(\n  $input: DeleteAssetInput!\n) {\n  deleteAsset(input: $input) {\n    asset {\n      id\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteAssetMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteAssetMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a0ead37d55699cdcb732fb8921cb1cc9';
module.exports = node;
