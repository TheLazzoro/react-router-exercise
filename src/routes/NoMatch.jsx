import React from 'react'
import PropTypes from 'prop-types'

// This component is shown if no route matches the given URL
const NoMatch = props => {
  return (
    <div>
        <h1>Error 404: Page not found :(</h1>
    </div>
  )
}

NoMatch.propTypes = {}

export default NoMatch