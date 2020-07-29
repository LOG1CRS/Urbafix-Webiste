import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="App">
      <h3>Navbar</h3>
      {children}
      <h3>Footer</h3>
    </div>
  );
};

export default Layout;
