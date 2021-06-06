import {Component} from 'react';

class ErrorBoundary extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {hasError: false};
    }

    // trigger whenever the parent throw an error
    componentDidCatch(error) {
        console.log(error);
        this.setState({hasError: true});
    }

    render() {
        if (this.state.hasError) {
            return <p>Something went wrong!</p>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
