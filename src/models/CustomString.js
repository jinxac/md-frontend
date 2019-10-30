class CustomString {
  static init (value = "") {
    if (value === null) {
      value = "";
    }
    const s = value;
    return s;
  }
}

export default CustomString;
