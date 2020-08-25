import React from 'react'
import { Slide } from 'spectacle';
function addLogo(WrappedComponent) {
    return class extends React.Component {
        componentDidMount() {
            console.log('Mounted');
        }
        render() {
            return <WrappedComponent backgroundColor="secondary" {...this.props} />;
        }
    }
}
const ColoredSlide = (props = {}) => {
    return (
        <Slide backgroundColor="secondary" {...props}></Slide>
    );
}
export { ColoredSlide, addLogo };