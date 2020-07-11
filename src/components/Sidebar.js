import React from 'react';



class Sidebar extends React.Component {

    render() {
        return (
            <div className="col-3 d-flex justify-content-center text-center"
                style=
                {{ backgroundColor: "rgb(40, 53, 53)", height: "1000px", overflow: "hidden", }}>
                <div>
                    <img src="https://cdn.dribbble.com/users/56427/screenshots/3336536/gifbrainhub.gif" height="200px">
                    </img>
                </div>
                <div className="sideBar-List"></div>
            </div>
        )
    }
}

export default Sidebar;

