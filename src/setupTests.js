import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

String.prototype.format = function () {
  let i = 0;
  const args = arguments;
  return this.replace(/{}/g, function () {
    return typeof args[i] !== "undefined" ? args[i++] : "";
  });
};

Enzyme.configure({adapter: new Adapter()});
