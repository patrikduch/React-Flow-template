// @flow
import './App.scss';
import React from 'react';
import { ClassicButton } from '../components/common/button/Button';
import Header from '../components/skeleton/Header';

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
               <Header title='React template' subtitle='Author: Patrik Duch' />
                <main>
                
                </main>

                <footer>
                
                </footer>
            </React.Fragment>
        );
    }
}

export default App;