
module.exports = function (pxParams = '', baseFontSize = 16) {

  const values = pxParams.split(' ');

  return values.map(px => {

    return `${px / baseFontSize}rem`;

  }).join(' ');
};
