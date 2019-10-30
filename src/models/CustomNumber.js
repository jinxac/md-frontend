class CustomNumber {
  static init (value = 0) {
    if (value === null || typeof value !== "number") {
      value = 0;
    }
    return value;
  }
}

export default CustomNumber;
