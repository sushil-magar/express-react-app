'use strict';
const path = require('path');

module.exports = () => {
  const getRoutes = (routes) => {
    return require(path.resolve(__dirname, 'dist', routes));
  };

  getRoutes('home/home.routes.js');
};

