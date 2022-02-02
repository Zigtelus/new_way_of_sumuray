import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/Redux';
import { BrowserRouter } from 'react-router-dom';

const rerenderEntireTree = (state)=> {
    
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    )
  }

  // <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
      
rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();