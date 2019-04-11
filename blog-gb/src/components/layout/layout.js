import React from 'react';

import AppBar from '../app-bar/app-bar';
import Footer from '../footer/footer';

import './layout.css';

//Graphql 
// import { StaticQuery, graphql } from "gatsby";

class Layout extends React.Component {
    render() {
        return (
            // <StaticQuery
            //     query={graphql`
            //     query {
            //         site {
            //         siteMetadata {
            //             title
            //                 }
            //             }
            //         }
            //     `}
            //     render={data => (
            <div id="App">
                <AppBar />
                <div className="content">
                    {/* <div>{data.site.siteMetadata.title}</div> */}
                    {this.props.children}
                </div>
                <Footer />
            </div >
            // )}

            // />
        )
    };
}
export default Layout;