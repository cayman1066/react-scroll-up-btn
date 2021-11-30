import React from 'react';
import Button from '@material-ui/core/Button';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

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

        const {
            IconSize,
            appearCoordinate,
        } = this.props;

        return (
            <>
                <div>
                    SCROLL
                </div>

            </>
        )
    }
}

export default ScrollUpButton;
