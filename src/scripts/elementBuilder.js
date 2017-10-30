const jquery = require('jquery');

module.exports = (tag = 'div', content = '', className = 'box') => {
  const element = jquery(`<${tag} />`).addClass(className).html(content);
  return element;
};