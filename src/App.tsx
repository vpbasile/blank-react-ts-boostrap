import React from 'react';
import './css/bootstrap.css';
import { PageContentRow, PageHeaderRow } from './Components/PageStructure';
import { Outlet,Link } from "react-router-dom";

function App() {
  return (
    <div className="App container bg-dark text-light">
      <PageHeaderRow pageTitle='Page Title'>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/route1">Route 1</Link> |{" "}
          <Link to="/route2">Route 2</Link>
        </nav>
        {/* The outlet is where the child routes will render */}
        <Outlet />
      </PageHeaderRow>
      <PageContentRow title="Content Title">

      </PageContentRow>
    </div>
  );
}

export default App;
