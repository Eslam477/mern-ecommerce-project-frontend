import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { AuthProvider } from 'react-auth-kit'
import store from './Store/redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <AuthProvider
            authType='cookie'
            authName='_auth'
            cookieDomain={window.location.hostname}
            cookieSecure={window.location.protocol === "https:"}
        >
            <Provider store={store}>
                <App />
            </Provider>
        </AuthProvider>
    </React.StrictMode>
);

