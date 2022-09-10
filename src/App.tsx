import React from 'react';
import './css/bootstrap.css';
import { PageContentRow, PageHeaderRow } from './Components/PageStructure';

function App() {
  return (
    <div className="App container">
      <PageHeaderRow pageTitle='Page Title'>
      </PageHeaderRow>
      <PageContentRow title="Content Title">
        
      </PageContentRow>
    </div>
  );
}

export default App;
