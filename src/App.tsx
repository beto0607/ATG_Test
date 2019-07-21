import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";

import Layout from './layout/Layout';
import FormSection from './components/FormSection/FormSection';
import store from './store';
import InfoSection from './components/InfoSection/InfoSection';

const App: React.FC = () => (
  <Provider store={store}>
    <Layout>
      <FormSection />
      <InfoSection />
    </Layout>
  </Provider>
);


export default App;
