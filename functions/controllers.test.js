const controllers = require("./controllers");

test("example schedule", async () => {
    const response = await controllers.example_schedule();
    console.log(response);
})