/**
 * Attach authenticated functions to routes
 * @param routes 
 */
function attachAuthToRoutes(routes) {
    let i;
    for (i in routes) {
        switch (typeof routes[i]) {
            case "object":
                attachAuthToRoutes(routes[i]);
                break;
            case "function":
                let origFunc = routes[i];
                routes[i] = async (...args) => attachAuthToRoute(args, origFunc);
        }
    }
}


async function attachAuthToRoute(args, a) {
    console.log("In the inner new function");
    a(...args);
}

let val = [
    {
        Query: {
            func1: async function (x) {
                console.log("In the older function");
            }
        }
    }
];

val[0].Query.func1(12)

attachAuthToRoutes(val)


val[0].Query.func1(12)

