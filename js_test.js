function getTitleVarVal(val) {
  if (!val)
    return "";
  let self = { a: { b: { c: [{ d: 1 }] } } };
  try {
    let valArr = val.split(".");
    for (let i of valArr) {
      self = self[i];
    }
    return self.toString();
  } catch (error) {
    console.log(error);
  }
  return "";
}

console.log(getTitleVarVal("a.b.c.0.d"));