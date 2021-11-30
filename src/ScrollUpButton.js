import React from 'react';
import { Button } from "antd";
import 'antd/dist/antd.css';

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
                    <Button type="primary" size="large" onClick={() => alert("Awesome!")}>
                        Click me!
                    </Button>
                </div>

            </React.Fragment>
        )
    }
}

export default ScrollUpButton;
