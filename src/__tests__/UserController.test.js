const request = require("supertest");
const app = require("../server");

describe("User Controller Tests", () => {
  let emailToLogin = "p_dro@gmail.com";
  let pass = "p455w0rd";

  it("True user Login", async () => {
    const res = await request(app).post("/users/login").send({
      email: emailToLogin,
      password: pass,
    });

    expect(res.statusCode).toBe(200);
    expect(res.body.user.email).toBe(emailToLogin);
    expect(res.body.token).toBeDefined();
  });

  it("User login wrong pass", async () => {
    const res = await request(app).post("/users/login").send({
      email: emailToLogin,
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


  it("Create new user", async () => {
    let emailToCreate = "test@gmail.com";
    const res = await request(app).post("/users").send({
      email: emailToCreate,
      name: "Test user",
      password: "test",
    });


    expect(res.statusCode).toBe(200);
    expect(res.body.email).toBe(emailToCreate);
  });

  it("Create user that already exist", async () => {
    let emailToCreate = "test@gmail.com";
    const res = await request(app).post("/users").send({
      email: emailToLogin,
      name: "Test user already existe",
      password: pass,
    });


    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBe("User already exists.");
  });

});
