'use strict'
const AWS = require('aws-sdk');

// 'aws-sdk' is already in scope connected to the account, because this code is uploaded to Lambda services and executed by appropriate role with permissions

AWS.config.update({region: "eu-central-1"})

exports.handler = async function (event, context, callback){

    // set the connection to the DynamoDB
    const documentClient = new AWS.DynamoDB.DocumentClient({region: "eu-central-1"})

    let responseBody = ''
    let statusCode = 0;
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Allow-Origin": "*",
    }

    const params = {
        TableName: "users",  
    }

    try{
        const data = await documentClient.scan(params).promise()
        responseBody = JSON.stringify(data.Items)    // Item object contains actual data
        statusCode = 200
    }catch(err){
        console.error("Error: ", err)
        responseBody = "Ups, something went wrong"
        statusCode=403
    }

    const response={
        statusCode,
        headers,
        body: responseBody
    }

    return response
}