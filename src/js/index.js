/** @jsx React.DOM */
var Text = require('./text')
  , React = require('react')

React.initializeTouchEvents(true)
React.renderComponent(<Text value="Hello World"/>, document.getElementById('container'))
