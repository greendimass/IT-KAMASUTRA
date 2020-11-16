import React from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './Components/News/News';
import Music from './Components/Music/Music';
import Settings from './Components/Settings/Settings';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import SideBarContainer from './Components/SideBar/SideBarContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from './Components/Profile/ProfileContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from "./Components/Login/Login";




const App = (props) => {

    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer />
                <Nav />
                <SideBarContainer />
                <div className="wrapper-content">
                    <Route path="/profile/:userId?"
                        render={() => <ProfileContainer />} />
                    <Route path="/users"
                        render={() => <UsersContainer />} />
                    <Route path="/dialogs"
                        render={() => <DialogsContainer />} />
                    <Route path="/news" component={News} />
                    <Route path="/login" component={Login} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                </div>
            </div>
        </BrowserRouter>
    );
}




export default App;