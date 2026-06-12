const serverless = require('serverless-http');
const app = require('../../backend/server');

const handler = serverless(app);

exports.handler = (event, context) => {
  const functionPrefix = '/.netlify/functions/api';
  const currentPath = event.path || '';

  if (currentPath.startsWith(functionPrefix)) {
    const rest = currentPath.slice(functionPrefix.length);
    event.path = `/api${rest || ''}`;
  }

  return handler(event, context);
};
