const controllers = require("./controllers");

test("create client", async () => {
    const response = await controllers.create();
    console.log(response);
})