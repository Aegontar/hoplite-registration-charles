import './App.css';
import SelectUserType from './pages/selectUserType/SelectUserType';
import OwnerRegister from './pages/ownerRegister/ownerRegister';
import PlayerRegister from './pages/playerRegister/playerRegister';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import TopBar from './components/topBar/topBar';
import React, {useState, useEffect} from 'react';

function App() {

  const [data, setData] = useState([{}])

  return (
    <BrowserRouter>
     {/*  <TopBar /> */}
      <Routes>

        <Route path="/" element={<SelectUserType />}>
        </Route>
        <Route path="/player" element={<PlayerRegister />}>
        </Route>
        <Route path="/owner" element={<OwnerRegister />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
