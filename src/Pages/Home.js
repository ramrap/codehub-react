import React from 'react';
import Header from '../components/header';
import HomeGif from '../components/Home-gif';
import Sidebar from "../components/Sidebar.js";
import FeedHome from "../components/FeedHome";



class Home extends React.Component{

    render(){
        return(
            <div className="container-fluid">
            <Header/>
            <div className="row" style={{top:"58px",position:"relative",}}>
            <Sidebar/>
             
            <div className="col">
            <FeedHome/></div></div></div>
            
        
        )
    }
}
export default Home;