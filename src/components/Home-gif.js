import React from 'react';


class HomeGif extends React.Component {
    constructor(props) {
        super(props);
        this.state = { windowWidth: window.innerWidth };
    }

    handleResize = (e) => {
        this.setState({ windowWidth: window.innerWidth });
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount() {
        window.addEventListener("resize", this.handleResize);
    }

    render() {
        const { windowWidth } = this.state;
        return (
            <div className="d-flex justify-content-center">
                <img src="https://cdn.dribbble.com/users/99875/screenshots/5593559/         2018-09-25-sun_moon.gif" width={0.95 * windowWidth * 0.5} height={windowWidth  * 0.5}>
                </img>
            </div>
        )
    }
}
export default HomeGif;