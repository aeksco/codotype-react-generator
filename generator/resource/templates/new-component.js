import React, { Component } from 'react';
import <%- schema.class_name %>Form from './<%- schema.class_name %>Form';
import axios from 'axios';
import { Button } from "@blueprintjs/core";

class <%- schema.class_name %>New extends Component {
  constructor(props) {
    super(props)
    this.state = {
      content: 'Loading...',
      model: {}
    }
  }

  // TODO - move this out of componentDidMount and into
  // a separate function that's invoked when the Editor component's submit button is clicked
  handleSubmit() {
    axios.post('/api/<%- schema.identifier_plural %>', {}, {
      headers: {
        authorization: localStorage.token ? `JWT ${localStorage.token}` : ''
      }
    }).then((response) => {
      this.setState({
        content: JSON.stringify(response)
      })
    })
  }

  render() {
    return (
      <div>
        <h2>New <%- schema.label %></h2>
        <<%- schema.class_name %>Form id={999} content={this.state.model} />
        <pre>{this.state.content}</pre>
        <Button text="Create" onClick={this.handleSubmit} />
        <Button text="Back" to="/<%- schema.identifier_plural %>" />
      </div>
    )
  }
}

export default <%- schema.class_name %>New;

