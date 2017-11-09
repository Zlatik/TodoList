import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p className = 'linkWrapper'>
    Show:
    {" "}
    <FilterLink className = 'link' filter="SHOW_ALL">
      All
    </FilterLink>
    {", "}
    <FilterLink className = 'link' filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    {", "}
    <FilterLink className = 'link' filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </p>
)

export default Footer
