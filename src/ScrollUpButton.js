import React from 'react';

class ScrollUpButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scrollC: 0
        };

        this.handleScrolltoTop = this.handleScrolltoTop.bind(this);
        this.onScroll = this.onScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener("scroll", this.onScroll);
        console.log("HERE I AM")
    }

    onScroll() {
        this.setState({
            scrollC: window.scrollY
        });
    }

    handleScrolltoTop() {
        if (window !== undefined) {
            window.scrollTo({top: 0, behavior: (this.props.behavior ? this.props.behavior : 'auto')})
        }
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    SCROLL
                </div>

            </React.Fragment>
        )
    }
}

export default ScrollUpButton;
