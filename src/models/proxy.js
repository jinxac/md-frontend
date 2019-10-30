const proxyHandler = () => {
  const handleValue = (value) => {
    return (value.constructor.name === "String" && value.length === 0) ?
      "-" :
      value;
  };

  return ({
    get: (target, name) => {
      let value = target[name];
      if (value !== undefined) {
        return handleValue(value);
      }
      value = target[`_${name}`];
      if (value !== undefined) {
        return handleValue(value);
      }
      throw Error(`${name} was not found in ${target.constructor.name}`);
    }
  });
};

export default proxyHandler;

