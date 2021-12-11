const jwt = require("jsonwebtoken");
const { API_GATEWAY_ARN, JWT_SECRET } = require("./credentials");

const users = [
  {
    id: "user-1",
    email: "test@test.com",
    password: "hashValue",
  },
];
const headers = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": "*",
};

class CustomError extends Error {
  statusCode = 200;

  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

exports.handler = async (event, context) => {
  console.log(JSON.stringify(event));
  try {
    if (event.methodARN !== API_GATEWAY_ARN) {
      throw new CustomError("Not Authorised", 401);
    }
    const decoded = jwt.verify(event.authToken, JWT_SECRET);
    const user = decoded.user;

    if (!user) {
      throw new CustomError("Invalid credentials", 401);
    }

    const validUser = users.find(
      (u) => u.email === user.email && u.password === user.password
    );

    if (!validUser) {
      throw new CustomError("User not found.", 404);
    }

    return {
      statusCode: 200,
      headers,
      body: {
        user: { email: validUser.email, id: validUser.id },
      },
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: e.statusCode
        ? e.statusCode
        : e.name === "JsonWebTokenError"
        ? 400
        : 500,
      headers,
      body: {
        errors: [{ message: e.message }],
      },
    };
  }
};
