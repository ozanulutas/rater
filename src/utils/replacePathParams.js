export const replacePathParams = (path = "", paramsObject) =>
  Object.keys(paramsObject).reduce((acc, paramKey) => {
    const regex = new RegExp(`:${paramKey}`, "ig");

    return acc.replace(regex, paramsObject[paramKey]?.toString());
  }, path);
