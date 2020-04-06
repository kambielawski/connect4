import React from 'react';

import Space from './Space.js';

class Column extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            height: 0,
            id: props.id,
            pieces: props.pieces,
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
      
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    onHoverIn(e) {
        e.target.style.backgroundColor = 'black';
    }
    onHoverOut(e) {
        e.target.style.backgroundColor = 'grey';
    }

    render() {
        return (
            <div 
                className="column"
                id={`col${this.state.id}`}
                style={{
                    width: 0.1 * this.state.width,
                    height: 0.6 * this.state.width,
            }}>
                <Space size={0.09 * this.state.width} color={this.props.pieces[0]} />
                <Space size={0.09 * this.state.width} color={this.props.pieces[1]} />
                <Space size={0.09 * this.state.width} color={this.props.pieces[2]} />
                <Space size={0.09 * this.state.width} color={this.props.pieces[3]} />
                <Space size={0.09 * this.state.width} color={this.props.pieces[4]} />
                <Space size={0.09 * this.state.width} color={this.props.pieces[5]} />
            </div>
        );
    }
}

export default Column;
