import React, { Component, Fragment } from 'react';
import Carousel from '../Components/Carousel'

class Home extends Component {
    render() {
        return (
            <Fragment>
               <Carousel heading="Welcome to" spanText="KUPhSa" subHeading="KUPhSA is an association of Kenyatta University students who are pursuing a career in pharmacy.
We are also a community dedicated to the dissemination of pharmaceutical information 
for a better society"/>
            </Fragment>
        );
    }
}

export default Home;
