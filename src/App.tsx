import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './layout/Layout';
import FormSection from './components/FormSection/FormSection';

const App: React.FC = () => (
  <Layout>
    <FormSection />
    <div>Wacala</div>
  </Layout>
);


export default App;
