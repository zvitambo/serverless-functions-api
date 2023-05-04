

exports.handler = async(event, context) => {
    return {
        statusCode: 200,
        body: "My First Serverless Function"
    }
   // callback(null, { StatusCode: 200, body: "My First Serverless Function"});
}