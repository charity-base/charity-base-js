"use strict";
import React from 'react'
import ReactDOM from 'react-dom'
import CharityBaseForm from 'charity-base-form'
import 'charity-base-form/es/index.css'

function targetNode(elementId) {
  var target = document.getElementById(elementId)
  if (!target) {
    throw "CharityBase render couldn't find an element with id '" + elementId + "'"
  }
  return target
}

function cbElement(reactElement) {
  return {
    component: reactElement,
    // rename render -> mount like stripe?
    render: function(elementId, callback) {
      ReactDOM.render(reactElement, targetNode(elementId), callback)
    }
  }
}

function CharityBase(apiKey, options) {
  return {
    createAutofill: function(props) {
      // re-implement using spread so as not to mutate props?
      var allProps = props || {}
      allProps.apiKey = apiKey
      var reactElement = React.createElement(CharityBaseForm, allProps, null)
      return cbElement(reactElement)
    }
  }
}

export {
  CharityBase
}