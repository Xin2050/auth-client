import React from 'react';
import requireAuth from "./requireAuth";
const Feature = () => {
    return (
        <div>
            This is a page, when your signin before you can see it
        </div>
    );
};

export default requireAuth(Feature);