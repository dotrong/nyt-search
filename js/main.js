/* Component that render in div id app and have one component Frontpage*/
import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './frontpage';

ReactDOM.render(
    <FrontPage />,document.getElementById("app")
)
