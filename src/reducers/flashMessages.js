import shortid from 'shortid'

export default (state = {}, action) =>{
switch(action.type){
  case 'ADD_FLASH_MESSAGE':
  console.log(action.payload);
  return {...state, ...action.payload, id: shortid.generate()}
default: return state
}
}
