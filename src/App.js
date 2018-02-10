import React from 'react';
import DevTools from 'mobx-react-devtools';
import { Provider } from 'mobx-react';
import { BrowserRouter } from 'react-router-dom';
import getRoutes from './routes';
import If from './Components/If';
import stores from './stores';

const App = () => (
  <div>
    <Provider {...stores}>
      <BrowserRouter>
        {getRoutes()}
      </BrowserRouter>
    </Provider>
    <If cond={process.env.NODE_ENV === 'development'}>
      <DevTools />
    </If>
  </div>
);

export default App;
