// @flow
import './App.scss';
import React from 'react';

import { ClassicButton } from '../components/common/button/Button';

/**
 * @type AppPropsType Props type anotaton for App component.
 */
type AppPropsType = {};


/**
 * @class App => root component that encapsulates all child components.
 */
class App extends React.Component<AppPropsType> {
    render(): React$Element<React$FragmentType> {
        return (
            <React.Fragment>
                <header>
                
                </header>

                <main>
                
                </main>

                <footer>
                
                </footer>
            </React.Fragment>
        );
    }
}

export default App;