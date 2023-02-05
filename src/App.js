import React, { useEffect } from 'react';
import Layout from './Components/Layout';
import Jumbotron from './Components/Jumbotron';
import Reservacion from './Components/Reservacion';
import Menu from './Components/Menu';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import db from "./firebase";
import {collection, getDocs, collectionGroup} from "firebase/firestore"
import Contactanos from './Components/Contactanos';

function App() {
  const[postDataCafeCaliente, setPostDataCafeCaliente] = useState();
  const[postDataCafeFrio, setPostDataCafeFrio] = useState();
  const[postDataSandwiches, setPostDataSandwiches] = useState();
  const[postDataBebidas, setPostDataBebidas] = useState();
  const[postDataReservacion, setPostDataReservacion] = useState();

  const getReservaciones = async () => {
    const snapshot = await getDocs(collection(db, 'reservaciones'))
    setPostDataReservacion(snapshot.docs)
  }

  const getCafeCaliente = async () => {
    const snapshot = await getDocs(collectionGroup(db,'cafeCaliente'))
    setPostDataCafeCaliente(snapshot.docs)
}
const getCafeFrio = async () => {
  const snapshot = await getDocs(collectionGroup(db,'cafeFrio'))
  setPostDataCafeFrio(snapshot.docs)
}
const getSandwiches = async () => {
  const snapshot = await getDocs(collectionGroup(db,'Sandwiches'))
  setPostDataSandwiches(snapshot.docs)
}
  const getBebidas = async () => {
    const snapshot = await getDocs(collectionGroup(db,'Bebidas'))
    setPostDataBebidas(snapshot.docs)
}

useEffect(() => {
  getCafeCaliente();
  getCafeFrio();
  getSandwiches();
  getBebidas();
  getReservaciones()
}, [])

  return (
    <React.Fragment>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path='/' element={<Layout/>}>
          <Route index element={<Jumbotron array={postDataReservacion}/>}/>
          <Route path='/reservacion' element={<Reservacion array={postDataReservacion}/>}/>
          <Route path='/menu' element={<Menu array={[postDataBebidas, postDataCafeCaliente, postDataCafeFrio, postDataSandwiches]}/>}/>
          <Route path='/contactanos' element={<Contactanos/>}/>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
