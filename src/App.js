import React, { Component } from 'react';
import './App.css';


class MyButtom extends Component {
  render() {
    // return <button>{this.props.label}</button>
    return (
      <button 
        onClick={() => { this.props.handleClick(this.props.label); }}
      >
        {this.props.label}
      </button>
    );
  }
}

class MyLabel extends Component {
  render() {
    console.log(this.props)
    return <p>Cliquei no: {this.props.text}</p>
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      labelText: '',
    };
   }

   setLabelText = (labelText) => {
     this.setState({ labelText })
   }

   render(){
    console.log(this.state)
    return (
      <div className="App">
        <MyLabel text={this.state.labelText} />
        {/* <MyLabel text="Escrevendo pelo APP" /> */}
        <MyButtom handleClick={this.setLabelText} label="Botão 1" />
        <MyButtom handleClick={this.setLabelText} label="Botão 2" />
        <MyButtom handleClick={this.setLabelText} label="Botão 3" />
        <MyButtom handleClick={this.setLabelText} label="Botão 4" />
      </div>
    );
   }
     
}

export default App;
