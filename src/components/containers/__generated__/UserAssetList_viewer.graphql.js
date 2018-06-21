/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type UserAssetList_viewer$ref: FragmentReference;
export type UserAssetList_viewer = {|
  +allAssets: {|
    +edges: ?$ReadOnlyArray<?{|
      +node: {|
        +id: string,
        +businessName: string,
        +city: string,
        +state: string,
        +zipCode: string,
        +pictures: ?$ReadOnlyArray<any>,
      |}
    |}>,
    +pageInfo: {|
      +hasNextPage: boolean,
      +endCursor: ?string,
    |},
  |},
  +$refType: UserAssetList_viewer$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "UserAssetList_viewer",
  "type": "Viewer",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "after",
        "direction": "forward",
        "path": [
          "allAssets"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "count",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "after",
      "type": "String"
    },
    {
      "kind": "RootArgument",
      "name": "filter",
      "type": "AssetFilter"
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": "allAssets",
      "name": "__UserAssetList_allAssets_connection",
      "storageKey": null,
      "args": null,
      "concreteType": "AssetConnection",
      "plural": false,
      "selections": [
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "edges",
          "storageKey": null,
          "args": null,
          "concreteType": "AssetEdge",
          "plural": true,
          "selections": [
            {
              "kind": "LinkedField",
              "alias": null,
              "name": "node",
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
                  "name": "pictures",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
              ]
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "cursor",
              "args": null,
              "storageKey": null
            }
          ]
        },
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "pageInfo",
          "storageKey": null,
          "args": null,
          "concreteType": "PageInfo",
          "plural": false,
          "selections": [
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "hasNextPage",
              "args": null,
              "storageKey": null
            },
            {
              "kind": "ScalarField",
              "alias": null,
              "name": "endCursor",
              "args": null,
              "storageKey": null
            }
          ]
        }
      ]
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '3faa176b1a11833b1565064d92abe850';
module.exports = node;
