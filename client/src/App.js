import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from '@material-ui/core'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import useStyles from './styles'

export const App =()=> (
     <Container maxidth="lg">
      <Navbar/>
      <Home/>
     </Container>
    )
