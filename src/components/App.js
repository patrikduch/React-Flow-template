// @flow
import './App.scss';
import React from 'react';


/**
 * @type AppPropsType Props type anotaton for App component.
 */
type AppPropsType = {};


/**
 * @class App => root component that encapsulates all child components.
 */
class App extends React.Component<AppPropsType> {
    render(): React$Element<"div"> {
        return (
            <div className='app'>
                <h1>React Flow template by Patrik Duch</h1>
            </div>
        );
    }
}

export default App;