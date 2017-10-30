const builder = require('./elementBuilder');

module.exports = () => {
  const content = '<p>Easycode 2017 (c)</p>';
  return builder('footer', content, 'footer');
};