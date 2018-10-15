import React,{Component} from 'react';
import {incrementCounter,decrementCounter} from './../js/action/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class CounterButtons extends Component{
  render(){
    return <div>
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
    
    </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(CounterButtons)