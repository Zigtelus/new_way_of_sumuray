import {Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';



function App(props) {

  return (
    <div className="app">
        <Header />
        <Navbar />
        <Routes>
          <Route path='/profile' element={<Profile store={props.store} />}/>
          {/* <Route path='/profile' element={<Profile profilePage={props.state.profilePage} store={props.store} dispatch={props.dispatch}/>}/> */}
          <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>}/>
          <Route path='/news' element={<News />}/>
          <Route path='/music' element={<Music />}/>
          <Route path='/settings' element={<Settings />}/>
        </Routes>

    </div>
  );
}

export default App;
