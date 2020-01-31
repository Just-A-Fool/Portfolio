import React, { Fragment } from 'react';
import './Canvas.css'
import logic from './canvas-logic';
import { withRouter } from 'react-router-dom';

class Canvas extends React.Component {

    componentDidMount() {
        logic();
    }
    render() {
        return (
            <Fragment>
                <canvas></canvas>
                <div id="landing-header">
                    <h1>Aedan Warfield's</h1>
                    <p>Portfolio</p>
                    <button id="landing-button" onClick={() => this.props.history.push('/projects')}>Projects</button>
                </div>
            </Fragment>
        );
    }
}

export default withRouter(Canvas);