'use strict';

let plugins = [
  require('postcss-cssnext')
];

if (process.env.NODE_ENV === 'production') {
  plugins = plugins.concat([
    require('cssnano')
  ]);
}

module.exports =  {
  plugins
};
