const request = require("supertest");
const app = require("../server");

describe("Rent Controller Tests", () => {
  let token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjE1MDUxMTY5fQ.9ZAxsJ8S7CyM9QUcGhvXGan6J1FxYuhoL6pIeS1ltT8";
  let rent_id = 1;

  it("Rent a movie", async () => {
    let movie_id = 2;
    const res = await request(app)
      .post("/rents")
      .send({
        user_id: 1,
        movie_id: movie_id,
      })
      .set("autorization", token);

    expect(res.statusCode).toBe(200);
    expect(res.body.movie_id).toBe(movie_id);
    rent_id = res.body.id;
  });

  it("Give back a movie", async () => {
    const res = await request(app)
      .post("/rents/give-back")
      .send({
        rent_id: rent_id,
      })
      .set("autorization", token);

    console.log(res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("You returned the movie.");
  });

  it("Rent a movie that not exist", async () => {
    let movie_id = 999;
    const res = await request(app)
      .post("/rents")
      .send({
        user_id: 1,
        movie_id: movie_id,
      })
      .set("autorization", token);

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Movie not found.");

  });


});
