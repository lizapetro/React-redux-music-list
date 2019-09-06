var mocApiData=[
  {
    id:1,
    name:'fwefe'
  },
  {
    id:2,
    name:'sger'
  },
  {
    id:3,
    name:'verdfv'
  },
  {
    id:4,
    name:'dscse'
  },
  {
    id:5,
    name:'qwe'
  }
];

export const getTracks=()=>{
  return dispath=>{
    setTimeout(()=>{
      console.log(dispath);
      dispath({
        type:'FEATCH_TRACKS_SUCCESS',payload:mocApiData
      });
    },200);
  }
}
