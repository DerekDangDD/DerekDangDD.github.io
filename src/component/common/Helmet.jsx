import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title> Derek Dang's Website || Software Engineer </title>
                    <meta name="description" content="Derek's personal website, showcasing a variety of projects" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
