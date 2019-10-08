"use strict";
// exports.__esModule = true;
import React from 'react'
import ReactDOM from 'react-dom'
import CharityBaseForm from 'charity-base-form'
import 'charity-base-form/es/index.css'
// import 'charity-base-form/es/index.scss'

function CharityBase(apiKey, options) {
  return {
    renderForm: function(targetNode, props, callback) {
      var allProps = props || {}
      allProps.apiKey = apiKey
      var reactElement = React.createElement(CharityBaseForm, allProps, null)
      ReactDOM.render(reactElement, targetNode, callback)
    }
  }
}

export {
  CharityBase
}