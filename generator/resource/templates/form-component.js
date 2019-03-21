import React, { Component } from 'react';
import { FormGroup, InputGroup } from "@blueprintjs/core";

class <%- schema.class_name %>Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: props.content
    }
    this.getModel = this.getModel.bind(this)
    this.setModel = this.setModel.bind(this)
  }

  componentWillReceiveProps(props) {
    this.setState({
      model: props.content
    })
  }

  getModel(identifier) {
    return this.state.model[identifier];
  }

  setModel(identifier, newValue) {
    this.props.onContentChange(identifier, newValue);
  }

  render() {
    return (
      <div className='row'>

        <%_ schema.attributes.forEach((attr, index) => { _%>
        <FormGroup
          helperText="<%= attr.description %>"
          label="<%= attr.label %>"
          labelFor="text-input"
          <%_ if (attr.required) { _%>
          labelInfo="(required)"
          <%_ } _%>
        >
          <%_ if (attr.datatype === DATATYPE_STRING) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } else if (attr.datatype === DATATYPE_TEXT) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } else if (attr.datatype === DATATYPE_STRING_ARRAY) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } else if (attr.datatype === DATATYPE_STRING_SELECT) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } else if (attr.datatype === DATATYPE_INTEGER) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } else if (attr.datatype === DATATYPE_FLOAT) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } else if (attr.datatype === DATATYPE_DOUBLE) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } else if (attr.datatype === DATATYPE_BOOLEAN) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } else if (attr.datatype === DATATYPE_JSON) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } else if (attr.datatype === DATATYPE_DATE) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } else if (attr.datatype === DATATYPE_TIME) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } else if (attr.datatype === DATATYPE_DATETIME) { _%>
          <InputGroup id="<%= attr.identifier %>_input" placeholder="<%= attr.label %>" />
          <%_ } _%>
        </FormGroup>
        <%_ }) _%>
        <%_ schema.relations.forEach((rel, index) => { _%>
        <FormGroup
          label="<%= rel.alias.label %>"
          labelFor="text-input"
        >
          <%_ if (rel.type === RELATION_TYPE_BELONGS_TO) { _%>
          <InputGroup id="<%= rel.alias.identifier %>_input" placeholder="<%= rel.alias.label %>" />
          <%_ } else if (rel.type === RELATION_TYPE_HAS_ONE) { _%>
          <InputGroup id="<%= rel.alias.identifier %>_input" placeholder="<%= rel.alias.label %>" />
          <%_ } else if (rel.type === RELATION_TYPE_HAS_MANY) { _%>
          <InputGroup id="<%= rel.alias.identifier %>_input" placeholder="<%= rel.alias.label_plural %>" />
          <%_ } _%>
        </FormGroup>
        <%_ }) _%>

      </div>
    )
  }
}

export default <%- schema.class_name %>Form;
