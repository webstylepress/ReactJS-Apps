import React, { Component } from 'react';
import './App.css';

import PostStatus from './PostStatus'
import StatusList from './StatusList'

class App extends Component {
  constructor(props) {
    super(props);

      this.state = {
        postUpdateText: "",
        messages: []
      }

  }

  _statusOnChange = (event) => {
    this.setState({
      postUpdateText: event.target.value
    })
  }

  _submitStatus = (e) => {
    e.preventDefault();
    if( this.state.postUpdateText.trim() ) {
      let newStatus = [this.state.postUpdateText, ...this.state.messages];
      this.setState({
        postUpdateText: "",
        messages: newStatus
      })
    }
  }

  _deleteStatus = (statusKey) => {
    let messagesCopy = [...this.state.messages];
    messagesCopy.splice( statusKey, 1 );
    this.setState({
      messages: messagesCopy
    })
   
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h3 className="app-title">Status Update App</h3>
          <PostStatus
            submitStatus={ this._submitStatus }
            statusValue={ this.state.postUpdateText }
            statusOnChange={ this._statusOnChange }
          />
          <StatusList
            messages={ this.state.messages }
            statusDelete={ this._deleteStatus }
          />
        </div>
      </div>
    );
  }
}

export default App;
