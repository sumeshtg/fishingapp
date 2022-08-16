import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './componets/Login/Login';
import Register from './componets/Login/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={(<Login />)} />
            <Route path="/login" element={(<Login />)} />
            <Route path="/register" element={(<Register />)} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
