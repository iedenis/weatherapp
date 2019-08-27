import React, { Component } from 'react'
import { Typography } from '@material-ui/core';

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }


    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true
        })
    }
    render() {

        if (this.state.hasError) {
            return (
                <div>
                    <Typography variant='h4'>There was a problem with the weather fetching</Typography>
                    <details style={{ whiteSpace: "pre-wrap" }}></details>
                </div>
            )
        }
        return this.props.children;

    }
}

export default ErrorBoundary
