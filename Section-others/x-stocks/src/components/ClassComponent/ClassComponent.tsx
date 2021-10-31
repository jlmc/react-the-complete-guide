import React from 'react';

class ClassComponent extends React.Component<{ name: string }> {

    constructor(props: any) {
        super(props);
        console.log("ClassComponent - constructor!")
    }

    state = {
        name: "folks - " + this.props.name,
        ch: true
    }

    myClickHandler() {
        if (this.state.ch) {
            let s = this.state.name.toUpperCase();
            this.setState({
                name: s,
                ch: false
            })
        } else {
            let s = this.state.name.toLowerCase();
            this.setState({
                name: s,
                ch: true
            })
        }
    }

    componentDidMount() {
        console.log("ClassComponent - componentDidMount!")
    }

    componentDidUpdate(prevProps: Readonly<{ name: string }>, prevState: Readonly<{}>, snapshot?: any) {
        console.log("ClassComponent - componentDidUpdate!")
    }

    componentWillUnmount() {
        console.log("ClassComponent - componentWillUnmount!")
    }

    render() {
        console.log("ClassComponent - render!")
        return (
            <div>
                <h5>I'm just one component based in class</h5>
                <div>
                    The Parameter property: {this.props.name}
                </div>
                <div>
                    Hello {this.state.name},
                </div>
                <button onClick={() => this.myClickHandler()}>click me</button>
            </div>
        );
    }
}

export default ClassComponent
