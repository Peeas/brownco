import React from 'react';
import MetaTags from 'react-meta-tags';

const Meta = props => {
    return (
        <MetaTags>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="keywords" content={props.keywords} />
        </MetaTags>
    );
}

export default Meta;
