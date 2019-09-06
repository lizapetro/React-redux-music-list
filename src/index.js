import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';//Рутовый компонент для того,чтобы опрокидывать store
import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';

const store=createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));//
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
 //Функцию,что передают(playlist) называют редьюсер
//В качестве аргумента передаем стор, который создали.
//Теперь этот стор будет доступен в каждой компоненте
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

// import {createStore} from 'redux';
// function playlist(state=[],action){
//   if (action.type==='ADD_TRACK'){
//     return [//Необходимо возвращать всегда новый массив, а не изменять старый
//       ...state, //Спред
//       action.payload
//     ]
//   }
//   return state;
// }
// const store=createStore(playlist);//Создание стора. Хранилище всех данных в приложении.
//                           //Любые данных нам необходимые мы будем хранить в этом сторе.
// const addTrackBtn=document.querySelectorAll('.addTrack')[0];
// const trackInput=document.querySelectorAll('.trackInput')[0];
// const listTrack=document.querySelectorAll('.listTrack')[0];
//
// store.subscribe(()=>{ //Подписка на изменение стора.Как только стор поменяется мы это увидим
//   listTrack.innerHTML='';
//   trackInput.value='';
//   store.getState().forEach(track => {
//     const li=document.createElement('li');
//     li.textContent=track;
//     listTrack.appendChild(li);
//   });
// });
//
// //Поменяем значение в store
// //dispatch - это функция, которая выстреливает action
// //и единственный способ поменять значения в стор
//
// //Это событие, а тип события Добавить трек
//
//
// document.querySelectorAll('.trackInput')[0].value='';
// addTrackBtn.addEventListener('click',()=>{
//   const trackName=trackInput.value;
//   store.dispatch({type:'ADD_TRACK',payload:trackName});
// });
