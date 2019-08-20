// package imports go at the top, your own files at the end
import React, { Component } from 'react';
// components
import Welcome from './components/Welcome';
import InputField from './components/InputField';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      name: 'Tramy',
    }

    this.handleName = this.handleName.bind(this);
  }

  handleName(event) {
    this.setState({name: event.target.value});
  }

  render() {
    return (
      <div>
        <Welcome name={this.state.name} age={24} />
        <InputField handleName={this.handleName}/>
      </div>
    )
  }
}
