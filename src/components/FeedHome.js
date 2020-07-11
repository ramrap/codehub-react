import React from 'react';
import FeedElement from './feedElement';




class FeedHome extends React.Component{

    render(){
        return(
            <div className="container-fluid">
            <FeedElement/>
            <FeedElement/>
            <FeedElement/>
            <FeedElement/>
            </div>
        )
    }
}

export default FeedHome;

