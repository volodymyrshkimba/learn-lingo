export const objToArrAndClearEmptyArrValues = (obj) => {
  return obj
    ? Array.isArray(obj)
      ? obj.filter(() => true)
      : Object.entries(obj).map(([_, value]) => ({ ...value }))
    : [];
};
