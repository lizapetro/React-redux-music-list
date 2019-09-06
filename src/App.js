import React,{Component} from 'react';
import {connect} from 'react-redux'; //connect это декоратор

import {getTracks} from './actions/tracks';

class App extends Component{
  addTrack(){
    console.log('addTrack',this.inputTrack.value);
    this.props.onAddTrack(this.inputTrack.value);
    this.inputTrack.value='';
  }

  findTrack(){
    console.log('findTrack',this.inputSearch.value);
    this.props.onFindTrack(this.inputSearch.value);
  }

  render(){
    return(
      <div>
        <div>
          <input type='text' ref={(input)=>{
            this.inputTrack=input
          }}/>
          <button onClick={this.addTrack.bind(this)}>Add track</button>
        </div>
        <div>
          <input type='text' ref={(input)=>{
            this.inputSearch=input
          }}/>
          <button onClick={this.findTrack.bind(this)}>Find track</button>
        </div>
        <div>
          <button onClick={this.props.onGetTracks}>Get Tracks</button>
        </div>
        <ul>
          {this.props.tracks.map((track,index)=>
            (<li key={index}>{track.name}</li>) //key необходим,чтобы li был уникальным
          )}
        </ul>
      </div>
    )
  }
}

//maps state to props
export default connect(//Принимает две функции
  state=>({
    tracks:state.tracks.filter(track=>track.name.includes(state.filterTracks)) //Глобальное состояние нашего стора
  }), //Maps state to props. Отправляет состояние state в props React компонент
  dispatch=>(
    {
      onAddTrack:((trackName)=>{
        const payload={
          id: Date.now().toString(),
          name:trackName
        };
        dispatch(
          {type:'ADD_TRACK',payload}
        );
      }),
      onFindTrack:((trackName)=>{
        dispatch(
          {type:'FIND_TRACK',payload:trackName}
        );
      }),
      onGetTracks:(()=>{
        dispatch(getTracks());
      })
    }
  )//Возвращает объект методов
)(App);
