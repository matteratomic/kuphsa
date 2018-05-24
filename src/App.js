import React, { Component } from 'react';
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Gallery from './Pages/Gallery'
import Events from './Pages/Events'
import About from './Pages/About'
import Post from './Pages/Post'
import Login from './Pages/Login'
import ChatRoom from './Pages/ChatRoom'
import AddPost from './Pages/AddPost'
import NavBar from './Components/NavBar'
import { Switch, Route } from 'react-router-dom'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import blue from '@material-ui/core/colors/blue'

const theme = createMuiTheme({
  palette: {
    primary: blue
  }
})


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
          <NavBar/>
          <Switch>
            <Route exact path="/" render={() => <Home/>} />
            <Route exact path="/blog" render={() => <Blog/>} />
            <Route exact path="/events" render={() => <Events/>} /> 
            <Route exact path="/gallery" render={() => <Gallery/>} />
            <Route exact path="/about" render={() => <About/>} />
            <Route exact path="/post" render={() => <Post/>} />
            <Route exact path="/login" render={() => <Login/>} />
            <Route exact path="/chat" render={() => <ChatRoom/>} />
            <Route exact path="/addpost" render={() => <AddPost/>} />
          </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;
