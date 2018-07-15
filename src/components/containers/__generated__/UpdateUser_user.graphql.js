/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UpdateUser_user$ref: FragmentReference;
export type UpdateUser_user = {|
  +name: ?string,
  +email: string,
  +password: string,
  +$refType: UpdateUser_user$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "UpdateUser_user",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "password",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'b9e4733de52f4c479db54bbd41f8f9c7';
module.exports = node;
