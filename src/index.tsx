import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MyThemeProvider from 'theme/ThemeProvider';
import FullscreenLoading from 'components/ui/Loading/FullscreenLoading';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { store } from './store';
import './i18n';

ReactDOM.render(
  <Suspense fallback={<FullscreenLoading />}>
    <React.StrictMode>
      <Provider store={store}>
        <MyThemeProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </MyThemeProvider>
      </Provider>
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
