const request = require("supertest");
const app = require("../server");

describe("User Controller Tests", () => {
  let email = "test@gmail.com";
  let pass = "p455w0rd";

  it("Create new user", async () => {

    const res = await request(app).post("/users").send({
      email: email,
      name: "Test user",
      password: pass,
    });


    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe(emailToCreate);
  });

  it("Create user that already exist", async () => {
    let emailToCreate = "test@gmail.com";
    const res = await request(app).post("/users").send({
      email: email,
      name: "Test user already existe",
      password: pass,
    });


    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("User already exists.");
  });


  it("True user Login", async () => {
    const res = await request(app).post("/users/login").send({
      email: email,
      password: pass,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.user.email).toBe(email);
    expect(res.body.token).toBeDefined();
  });

  it("User login wrong pass", async () => {
    const res = await request(app).post("/users/login").send({
      email: email,
      password: "p455w0rdWrong",
    });


    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("Invalid password.");
  });

  it("User login wrong email", async () => {
    const res = await request(app).post("/users/login").send({
      email: "wrong_email@gmail.com",
      password: "p455w0rd",
    });


    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("User not found.");
  });

});
