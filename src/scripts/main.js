const builder = require('./elementBuilder');

module.exports = () => {
  const content = `<h1>Date</h1><p>${new Date().toLocaleString()}</p>`;
  return builder('main', content, 'main');
};