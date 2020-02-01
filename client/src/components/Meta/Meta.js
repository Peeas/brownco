import React from 'react';
import MetaTags from 'react-meta-tags';

const Meta = props => {
    return (
        <MetaTags>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
        </MetaTags>
    );
}

export default Meta;
