a().then(resp => {console.log("success", resp)}).catch(err => {console.error("error", err)});

async function a() {
    let a = await b();
    console.log("a=", a);
}

function b() {
    return new Promise(function (resolve, reject) {
        for (let i = 0; i < 1000000; i++) {}
        resolve("done");
    });
}