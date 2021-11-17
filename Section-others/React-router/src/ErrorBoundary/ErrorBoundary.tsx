import {Component, ErrorInfo, ReactNode} from "react";

interface Props {
    children: ReactNode,
    fallbackComponent: JSX.Element
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) : void {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render(): JSX.Element | React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | Iterable<React.ReactNode> | React.ReactPortal | boolean | null | undefined | (React.ReactElement<any, string | React.JSXElementConstructor<any>> & undefined) | (Iterable<React.ReactNode> & undefined) | (React.ReactPortal & undefined) {
        const { hasError } = this.state
        const { fallbackComponent } = this.props

        if (hasError) {
            return fallbackComponent
        }

        return this.props.children;
    }

}

/*
    "@bugsnag/js": "^7.13.2",
    "@bugsnag/plugin-react": "^7.13.2",
 */

export default ErrorBoundary;
