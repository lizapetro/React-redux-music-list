const stateInitial='';

export default function filterTracks(state=stateInitial,action){
  if (action.type==='FIND_TRACK'){
    return action.payload;
  }
  return state;
}
