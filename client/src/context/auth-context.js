import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {},
    logout: () => {},
    pages: [],
    getPages: () => {}
});

export default authContext;