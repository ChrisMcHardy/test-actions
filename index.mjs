exports.handler = async (event) => {
  // You can log the incoming event if you'd like
  console.log("Received event:", JSON.stringify(event, null, 2));

  // Example of accessing query parameters or body data
  const message = event.queryStringParameters?.message || "Hello, World!";

  // Returning a simple response
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      input: event,
    }),
  };

  return response;
};