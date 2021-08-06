import { Component, ComponentType } from "react"

const withErrorBoundary = (

    WrappedComponent: ComponentType<any>) => {

    class WithErrorBoundary extends Component {
        state = {
            errorMessage: ''
        }

        static getDerivedStateFromError(error: any) {
            return {
                errorMessage: error.message
            }
        }

        render() {

            let design:any = null;
            let { errorMessage: message } = this.state

            if (message !== '') {
                design = <span>Error Occurred</span>
            }else {
                design = <WrappedComponent {...this.props} />
            }
            return design
        }

        componentDidCatch(error: any, info: any) {
            console.log(error.message)
        }
    }
    return WithErrorBoundary
}
export default withErrorBoundary