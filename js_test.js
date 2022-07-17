start().then(res => {
  console.log(res);
}).catch(err => console.error(err));


async function start() {
  return new Promise(function (resolve, reject) {
    reject("error");
    for (let i = 0; i < 1000000000000; i++);
    console.log("reached");
    resolve("success");
  });
}