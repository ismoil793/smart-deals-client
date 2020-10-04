import React from 'react';
import { Helmet } from "react-helmet";

const MetaDecorator = ({ title, content }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={`${content}`} />
        </Helmet>
    );
};

export default MetaDecorator;