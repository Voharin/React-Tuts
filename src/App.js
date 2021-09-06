import React, {Suspense, useState, useEffect} from 'react';
import './App.css';
import Table from './table';
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import LoadingScreen from 'react-loading-screen';
import Logo from './assets/quoiron.png';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    
    setTimeout(() =>
      this.setState({ loading: false })
    , 2000)
  }

  render () {
    const { loading } = this.state

    return (
      <LoadingScreen
        loading={loading}
        bgColor='#f1f1f1'
        spinnerColor='#9ee5f8'
        textColor='#676767'
        logoSrc={Logo}
        text='You are entering awesome side or should i said site...'
      >
        <div className="App">
      <Router>
      <Navbar/>
      <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/' component={Products}/>
          
      </Switch>
      </Router>
      

      </div>

      </LoadingScreen>
    )
  }
}
export default App;
