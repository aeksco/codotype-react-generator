import React, { Component } from 'react';

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
        <%_ for (let attr of schema.attributes) { _%>
        <div className="col-lg-6">
          <div className="form-group">
            <label className='mb-0'>
              <%= attr.label %>
              <% if (attr.required) { %><span className='text-danger'>*</span><% } %>
            </label>
            <small className="form-text text-muted mb-2"><%= attr.help %></small>
          <%_ if (attr.datatype === DATATYPE_BOOLEAN) { _%>
            <input type="checkbox" className="form-control" checked={Boolean(this.getModel('<%- attr.identifier %>'))} onChange={(e) => this.setModel('<%- attr.identifier %>', e.target.checked)} />
          <%_ } else if (attr.datatype === DATATYPE_STRING) { _%>
            <input type="text" className="form-control" placeholder="<%= attr.label %>" value={String(this.getModel('<%- attr.identifier %>'))} onChange={(e) => this.setModel('<%- attr.identifier %>', e.target.value)} />
          <%_ } else if (attr.datatype === DATATYPE_INTEGER) { _%>
            <input type="number" className="form-control" placeholder="<%= attr.label %>" value={String(this.getModel('<%- attr.identifier %>'))} onChange={(e) => this.setModel('<%- attr.identifier %>', e.target.value)} />
          <%_ } else if (attr.datatype === DATATYPE_DATE) { _%>
            <input type="date" className="form-control" placeholder="<%= attr.label %>" value={String(this.getModel('<%- attr.identifier %>')).split('Z')[0]} onChange={(e) => this.setModel('<%- attr.identifier %>', e.target.value + 'Z')} />
          <%_ } else if (attr.datatype === DATATYPE_TIME) { _%>
            <input type="time" className="form-control" placeholder="<%= attr.label %>" value={String(this.getModel('<%- attr.identifier %>')).split('Z')[0]} onChange={(e) => this.setModel('<%- attr.identifier %>', e.target.value + 'Z')} />
          <%_ } else if (attr.datatype === DATATYPE_DATETIME) { _%>
            <input type="datetime-local" className="form-control" placeholder="<%= attr.label %>" value={String(this.getModel('<%- attr.identifier %>')).split('Z')[0]} onChange={(e) => this.setModel('<%- attr.identifier %>', e.target.value + 'Z')} />
          <%_ } else if (attr.datatype === DATATYPE_JSON) { _%>
            <textarea className="form-control" placeholder="<%= attr.label %>" onChange={(e) => this.setModel('<%- attr.identifier %>', JSON.parse(e.target.value))}>{ JSON.stringify(this.getModel('<%- attr.identifier %>'), null, 2) }</textarea>
          <%_ } _%>
          </div>
        </div>
      <%_ } _%>
      </div>
    )
  }
}

export default <%- schema.class_name %>Form;
