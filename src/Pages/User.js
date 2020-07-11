import React from 'react';



class UserPage extends React.Component{

    render(){
        return(
            <div>user:id is {this.props.match.params.id}</div>
        )
    }
}

export default UserPage;

