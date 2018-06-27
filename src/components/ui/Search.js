import React from 'react'

const Search = (props) => (
  <ul>{props.list.map(list =>
    <li
      key={list.cursor}>
      {list.node.businessName}
    </li>)}
  </ul>
)

export default Search