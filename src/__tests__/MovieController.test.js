const request = require("supertest");
const app = require("../server");

describe("Movie Controller Tests", () => {
  it("See avaliable movies", async () => {
    const res = await request(app).get("/movies");

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it("Store a new movie", async () => {
    let title = "Test Movie";
    let director = "Test director";
    let quantity = 2;
    let token =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE1MDUxMTY5fQ.9ZAxsJ8S7CyM9QUcGhvXGan6J1FxYuhoL6pIeS1ltT8";
    const res = await request(app)
      .post("/movies")
      .send({
        title: title,
        director: director,
        quantity: quantity,
      })
      .set("authorization", token);

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe(title);
  });

  it("Search a movie by title", async () => {
    let title = "Matrix";

    const res = await request(app).post("/movies/search").send({
      title: title,
    });
    expect(res.statusCode).toBe(200);
    expect(res.body[0].title).toBe(title);
  });


  it("Store a new movie without token", async () => {
    let title = "Test Movie";
    let director = "Test director";
    let quantity = 2;
    const res = await request(app)
      .post("/movies")
      .send({
        title: title,
        director: director,
        quantity: quantity,
      });

    expect(res.statusCode).toBe(401);

  });

});
