var Utils = {
  capitalizeFirstLetter: function(str) {
    if (!str) return '';
    return str
      .split(' ')
      .map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }
};