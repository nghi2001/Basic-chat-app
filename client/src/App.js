import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LoginComponent from './components/login'
import Register from './components/register';
import Chat from './components/chat';
import CreateRoom from './components/create-room';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
          <Route path='/' element={<CreateRoom/>} />
          <Route path='/login' element={ <LoginComponent/>} />
          <Route path='/register' element={ <Register/>} />
          <Route path='/chat' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
