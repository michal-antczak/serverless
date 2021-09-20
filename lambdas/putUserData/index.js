'use strict'
const AWS = require('aws-sdk');

AWS.config.update({region: "eu-central-1"})

exports.handler = async function (event, context, callback){

    // const ddb = new AWS.DynamoDB({apiVersion: "2012-10-08"})
    const documentClient = new AWS.DynamoDB.DocumentClient({region: "eu-central-1"})

    let responseBody = '';
    let statusCode= 0
    const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Credentials" : true,
        "Access-Control-Allow-Origin": "*",
    }
    
    console.log('body', event.body)

    const { id, firstname, lastname, price, photos, title, status } = JSON.parse(event.body) 

    const params = {
        TableName: "users",
        Item:{
            id,
            firstname,
            lastname,
            price,
            photos,
            title,
            status
        }    
    }

    try{
        const data = await documentClient.put(params).promise()
        responseBody = JSON.stringify({status: 'success'})
        statusCode = 201
    }catch(error){
        console.error("Error: ", error)
        responseBody = JSON.stringify({status: 'error', error})
        statusCode = 400
    }

    const response = {
        statusCode,
        headers,
        body: responseBody, 
    }

    return response
}