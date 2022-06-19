const controllers = require("./controllers");

test("create product", async () => {
    const response = await controllers.create();
    console.log(response);
})