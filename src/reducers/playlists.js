const stateInitial=[
  'My home playlist',
  'My work pleylis'
];

export default function playlist(state=stateInitial,action){
  if (action==='ADD_PLAYLIST'){
    return state;
  }else if (action==='DELETE_PLAYLIST'){
    return state;
  }
  return state;
}
