
module.exports = function (pxParams, baseFontSize = 16) {

  const values = pxParams.split(' ');

  return values.map(px => {

    return px === 0 ? 0 : `${px / baseFontSize}rem`;

  }).join(' ');
};
