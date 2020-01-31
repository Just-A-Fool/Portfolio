import React, { Fragment } from 'react';
import './ErrorBoundary.css'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <Fragment>
                    <div id='error-box'>
                        <h1>Error</h1>
                    </div>

                    <h2>Whoops, sorry about that. Something has gone wrong.</h2>
                    <p>Let's hope you weren't here to hire me.</p>
                    <a href='/'>Try going back to the home.</a>
                </Fragment>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;