import React from 'react';
import {Helmet} from "react-helmet";

const Meta = props => {
    return (
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={props.keywords} />
        </Helmet>
    );
}

export default Meta;
