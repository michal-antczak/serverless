"use strict";
const AWS = require("aws-sdk");

// 'aws-sdk' is already in scope connected to the account, because this code is uploaded to Lambda services and executed by appropriate role with permissions

AWS.config.update({ region: "eu-central-1" });

exports.handler = async function (event, context, callback) {
  // set the connection to the DynamoDB
  const documentClient = new AWS.DynamoDB.DocumentClient();

  let responseBody = "";
  let statusCode = 0;
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Credentials": true,
    "Access-Control-Allow-Origin": "*",
  };

  const { email } = event.queryStringParameters;

  const params = {
    TableName: "users",
    FilterExpression: "lastname = :lastname",
    ExpressionAttributeValues: { ":lastname": email },
  };

  try {
    const data = await documentClient.scan(params).promise();
    responseBody = JSON.stringify(data.Items); // Items object contains actual data
    statusCode = 200;
  } catch (err) {
    console.error("Error: ", err);
    responseBody = "Ups, something went wrong ||" + err + " || " + email;
    statusCode = 403;
  }

  const response = {
    statusCode,
    headers,
    body: responseBody,
  };

  return response;
};
