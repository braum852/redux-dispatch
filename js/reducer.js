let state = {count: 0}
let action = { type: 'INCREASE_COUNT' };

function changeState(state, action){
  switch (action.type) {
    case 'INCREASE_COUNT':
      return {count: state.count + 1}
    default:
      return state;
  }
}

function render(){
  document.body.textContent = state.count;
}

function dispatch(action){
  let action = { type: 'INCREASE_COUNT' };
  state = changeState(state, action);
  render();
}

//changeState(state, action)

//NOTE dispatch({type: 'INCREASE_COUNT'}) will only increase in console note dispatch(action)

dispatch(action);

render();