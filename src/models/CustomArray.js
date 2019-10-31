class CustomArray {
  static init (value = []) {
    if (!value) {
      value = [];
    }
    if (!(value instanceof Array)) {
      value = [value];
    }

    value.__proto__.filterBy = function (property) {
      return !property ? this : this.filter(item => item[property]);
    };

    value.__proto__.sortAscBy = function (property) {
      return !property ? this : this.sort((a, b) => a[property] - b[property]);
    };

    value.__proto__.sortDescBy = function (property) {
      return !property ? this : this.sort((a, b) => b[property] - a[property]);
    };

    return value;
  }
}

export default CustomArray;
