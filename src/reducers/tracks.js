const stateInitial=[];

export default function tracks(state=stateInitial,action){
  if (action.type==='ADD_TRACK'){
    return [
      ...state,
      action.payload
    ]
  }else if (action.type==='FEATCH_TRACKS_SUCCESS'){
    return action.payload;
  }
  return state;
}
