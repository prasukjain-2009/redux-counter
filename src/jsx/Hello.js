import React,{Component} from 'react';
import {connect} from 'react-redux';
// import CounterButtons from './counterButtons';
import {incrementCounter,decrementCounter} from './../js/action/index';
import {bindActionCreators} from 'redux';
import CounterButtons from './counterButtons'

class Hello extends Component{
  render(){
    return(
      <div>
      <h1>{this.props.counter}</h1>
      
      <CounterButtons />
       
      </div>
    )
  }
}

function mapStateToProps(state){
  return({counter:state.counter})
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    increment:incrementCounter,
    decrement:decrementCounter
  },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Hello);
