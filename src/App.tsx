import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";

import Layout from './layout/Layout';
import FormSection from './components/FormSection/FormSection';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <Layout>
      <FormSection />
      <div>Wacala</div>
    </Layout>
  </Provider>
);


export default App;
