function counter(state=0,action){
  console.log("here",state)

  switch(action.type){

    case "INCREMENT_COUNTER":
      return state+1;
    case "DECREMENT_COUNTER":
      if(state>0)return state-1;
    default:
      return state;
  }
}
export default counter;