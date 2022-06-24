export const promisify = (fn: any) => {
  return (...args: any) => {
    return new Promise((res, rej) => {
      const callback = (err: any, result: any) => {
        if (err) {
          rej(err);
        } else {
          res(result);
        }
      };
      args.push(callback);
      fn.call(this, ...args);
    });
  };
};
