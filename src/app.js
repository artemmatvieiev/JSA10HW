const header = require('./scripts/header')();
const main = require('./scripts/main')();
const footer = require('./scripts/footer')();
const jquery = require('jquery');

jquery('body').append(header);
jquery('body').append(main);
jquery('body').append(footer);

