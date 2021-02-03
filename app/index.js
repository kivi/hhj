// Require the framework and instantiate it
const app = require("fastify")({
  logger: true,
});

const fastify = app;

app.get("/", async (request, reply) => {
  return { hello: "world" };
});

app.post("/body", function (req, res) {
  res.write("you posted:\n");

  console.log("Body...");
  console.log(req.body);

  res.end(JSON.stringify(req.body, null, 2));
});
app.get("/query", function (req, res) {
  // const a = url.parse(
  //   "https://node-getting-started-kivi.cloud.okteto.net/query?name=testjens"
  // );
  res.send("Query params:", []);
});

const address = 8080;

console.log("f starting", address);
const start = async () => {
  try {
    await fastify.listen(address);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
