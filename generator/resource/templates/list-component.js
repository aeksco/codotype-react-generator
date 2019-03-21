import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import <%- schema.class_name %>ListWidget from './<%- schema.class_name %>ListWidget';

class <%- schema.class_name %>List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      collection: [],
      loaded: false
    }
    this.deleteItem = this.deleteItem.bind(this);
  }

  componentDidMount() {
    this.updateCollection();
  }

  updateCollection() {
    this.setState({ loaded: false })
    axios.get('/api/<%- schema.identifier_plural %>', {
      headers: {
        authorization: localStorage.token ? `JWT ${localStorage.token}` : ''
      }
    })
    .then(({ data }) => {
      this.setState({
        collection: data.items,
        loaded: true
      })
    })
  }

  deleteItem(id) {
    axios.delete('/api/<%- schema.identifier_plural %>/' + id)
      .then(() => {
        this.updateCollection();
      })
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <h2>
              <%= schema.label_plural %>
            </h2>
          </div>

          <div>
            <Link to="/<%- schema.identifier_plural %>/new">
              <i className="fa fa-fw fa-plus mr-2"></i>
              New <%- schema.label %>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <<%- schema.class_name %>ListWidget collection={this.state.collection} isLoaded={this.state.loaded} />
          </div>
        </div>
      </div>
    )
  }
}

export default <%- schema.class_name %>List;
