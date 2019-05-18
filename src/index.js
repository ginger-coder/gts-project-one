import {Provider} from 'react-redux';
import {store} from 'store';

import Routes from './app';

function render(routes) {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <Routes />
            </Router>
        </Provider>
        ,
        document.getElementById('root')
    );
};

render(Routes);

if (module.hot) {
    module.hot.accept('./app', () => {
        render(Routes);
    });

}
