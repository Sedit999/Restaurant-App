import React, { useEffect } from 'react';
import Layout from './Components/Layout';
import Jumbotron from './Components/Jumbotron';
import Reservacion from './Components/Reservacion';
import Menu from './Components/Menu';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import db from "./firebase";
import {collection, getDocs, collectionGroup} from "firebase/firestore"

function App() {
  const[postDataCafeCaliente, setPostDataCafeCaliente] = useState();
  const[postDataCafeFrio, setPostDataCafeFrio] = useState();
  const[postDataSandwiches, setPostDataSandwiches] = useState();
  const[postDataBebidas, setPostDataBebidas] = useState();

  const getCafeCaliente = async () => {
    const snapshot = await getDocs(collectionGroup(db,'cafeCaliente'))
    console.log(snapshot.docs.map((doc) => doc.data()))
    setPostDataCafeCaliente(snapshot.docs)
}
const getCafeFrio = async () => {
  const snapshot = await getDocs(collectionGroup(db,'cafeFrio'))
  console.log(snapshot.docs.map((doc) => doc.data()))
  setPostDataCafeFrio(snapshot.docs)
}
const getSandwiches = async () => {
  const snapshot = await getDocs(collectionGroup(db,'Sandwiches'))
  console.log(snapshot.docs.map((doc) => doc.data()))
  setPostDataSandwiches(snapshot.docs)
}
  const getBebidas = async () => {
    const snapshot = await getDocs(collectionGroup(db,'Bebidas'))
    console.log(snapshot.docs.map((doc) => doc.data()))
    setPostDataBebidas(snapshot.docs)
}

useEffect(() => {
  getCafeCaliente();
  getCafeFrio();
  getSandwiches();
  getBebidas();
  
}, [])

const menus = [postDataSandwiches, postDataBebidas, postDataCafeCaliente, postDataCafeFrio];

  return (
    <React.Fragment>
      <Routes>
        <Route exact path='/' element={<Layout/>}>
          <Route index element={<Jumbotron/>}/>
          <Route path='reservacion' element={<Reservacion/>}/>
          <Route path='menu' element={<Menu array={[postDataBebidas, postDataCafeCaliente, postDataCafeFrio, postDataSandwiches]}/>}/>
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
