/**
 * @flow
 * @relayHash 42fc0dad4c7b2e8290c77d7462f1c5a2
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MessagesListPageQueryVariables = {|
  userId: string
|};
export type MessagesListPageQueryResponse = {|
  +viewer: {|
    +User: ?{|
      +messagesReceived: ?{|
        +edges: ?$ReadOnlyArray<?{|
          +node: {|
            +id: string,
            +text: ?string,
            +messageTo: ?{|
              +name: ?string
            |},
          |}
        |}>
      |}
    |}
  |}
|};
*/


/*
query MessagesListPageQuery(
  $userId: ID!
) {
  viewer {
    User(id: $userId) {
      messagesReceived(last: 100, orderBy: id_ASC) {
        edges {
          node {
            id
            text
            messageTo {
              name
              id
            }
            __typename
          }
          cursor
        }
        pageInfo {
          hasPreviousPage
          startCursor
        }
      }
      id
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "userId",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "userId",
    "type": "ID"
  }
],
v2 = {
  "kind": "Literal",
  "name": "orderBy",
  "value": "id_ASC",
  "type": "MessageOrderBy"
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "text",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v8 = {
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
      "name": "hasPreviousPage",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "startCursor",
      "args": null,
      "storageKey": null
    }
  ]
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MessagesListPageQuery",
  "id": null,
  "text": "query MessagesListPageQuery(\n  $userId: ID!\n) {\n  viewer {\n    User(id: $userId) {\n      messagesReceived(last: 100, orderBy: id_ASC) {\n        edges {\n          node {\n            id\n            text\n            messageTo {\n              name\n              id\n            }\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          hasPreviousPage\n          startCursor\n        }\n      }\n      id\n    }\n    id\n  }\n}\n",
  "metadata": {
    "connection": [
      {
        "count": null,
        "cursor": null,
        "direction": "backward",
        "path": [
          "viewer",
          "User",
          "messagesReceived"
        ]
      }
    ]
  },
  "fragment": {
    "kind": "Fragment",
    "name": "MessagesListPageQuery",
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
            "name": "User",
            "storageKey": null,
            "args": v1,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": "messagesReceived",
                "name": "__MessagesList_messagesReceived_connection",
                "storageKey": "__MessagesList_messagesReceived_connection(orderBy:\"id_ASC\")",
                "args": [
                  v2
                ],
                "concreteType": "MessageConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MessageEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Message",
                        "plural": false,
                        "selections": [
                          v3,
                          v4,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "messageTo",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v5
                            ]
                          },
                          v6
                        ]
                      },
                      v7
                    ]
                  },
                  v8
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MessagesListPageQuery",
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
            "name": "User",
            "storageKey": null,
            "args": v1,
            "concreteType": "User",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "messagesReceived",
                "storageKey": "messagesReceived(last:100,orderBy:\"id_ASC\")",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  },
                  v2
                ],
                "concreteType": "MessageConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MessageEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Message",
                        "plural": false,
                        "selections": [
                          v3,
                          v4,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "messageTo",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "User",
                            "plural": false,
                            "selections": [
                              v5,
                              v3
                            ]
                          },
                          v6
                        ]
                      },
                      v7
                    ]
                  },
                  v8
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "messagesReceived",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 100,
                    "type": "Int"
                  },
                  v2
                ],
                "handle": "connection",
                "key": "MessagesList_messagesReceived",
                "filters": [
                  "orderBy"
                ]
              },
              v3
            ]
          },
          v3
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6ae724fed0be251599fdcb73061a5a61';
module.exports = node;
