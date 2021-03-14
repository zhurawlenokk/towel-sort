module.exports = function towelSort (matrix) {
  let arr = [];

  if (matrix === undefined) {
      return [];

  } else if (matrix.length === 0) {
      return [];

  } else {

    matrix.forEach(function (item, i) {

      if (i % 2 !== 0) {
        getArr(item.reverse(), arr);

      } else {
        getArr(item, arr);
      }

    });

    function getArr(array, neww) {
      array.forEach(function(item) {
          neww.push(item);
      });

      return false;
    }


  }

  return arr;

}








