export const handler = async (event) => {
  console.log("Received event:", JSON.stringify(event, null, 2));
  const amount = parseInt(event.queryStringParameters?.amount) || 0;
  const message = Math.floor(Math.random() * 6) + 1 > 3 ? `You WON ${amount * 2}!` : `You lost your money, win it back now!`;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      input: event,
    }),
  };
  return response;
};