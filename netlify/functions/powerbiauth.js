// This JavaScript code is a serverless function that handles authentication with the PowerBI REST API using an Azure AD access token. It's written in Node.js and uses the axios library to make HTTP requests.

// The function is exported as an asynchronous function named handler, which takes two arguments: req and context. req represents the HTTP request, and context provides information about the function invocation, function execution environment, and any binding data from the function.

// The function first checks if the HTTP request method is POST. If it's not, it returns a 405 status code with a 'Method Not Allowed' message.

// Next, it parses the request body to extract the accessToken. It also retrieves the Azure tenant ID, client ID, and client secret from environment variables. These are used to authenticate with the Azure AD.

// The function then makes a POST request to the Azure AD token endpoint to get an access token. This token is used to authenticate with the PowerBI REST API.

// After obtaining the Azure AD access token, the function makes a POST request to the PowerBI GetToken endpoint. It passes the Azure AD access token in the request body and the original accessToken in the Authorization header.

// If the PowerBI API request is successful, the function extracts the embedToken from the response. This token can be used to embed PowerBI reports in a client application. The function then returns a 200 status code, the embedToken, and sets the Content-Type header to application/json.

// If any error occurs during this process, the function catches the error, logs it to the console, and returns a 500 status code with a 'Internal Server Error' message.

const axios = require('axios');

exports.handler = async function (event, context) {
    // Ensure that this function is only run as a POST request
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    let body;
    try {
        body = JSON.parse(event.body);
    } catch (error) {
        console.error('Error parsing request body:', error);
        return { statusCode: 400, body: 'Invalid request body' };
    }

    const { accessToken } = body;
    if (!accessToken) {
        console.error('Access token not found in request body');
        return { statusCode: 400, body: 'Access token not found' };
    }

    try {
        const tenantId = process.env.AZURE_TENANT_ID;
        const clientId = process.env.AZURE_CLIENT_ID;
        const clientSecret = process.env.AZURE_CLIENT_SECRET;
        const scope = 'https://graph.microsoft.com/.default'; // Scope for Graph API - modify as needed for Power BI

        const tokenResponse = await axios.post(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`, null, {
            params: {
                client_id: clientId,
                scope: scope,
                client_secret: clientSecret,
                grant_type: 'client_credentials' // For service principal - change as needed for master user
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const azureAdAccessToken = tokenResponse.data.access_token;

        // Authenticate with PowerBI REST API using the Azure AD access token
        const powerBiResponse = await axios.post('https://api.powerbi.com/v1.0/myorg/GetToken', {
            access_token: azureAdAccessToken,
        }, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        const embedToken = powerBiResponse.data.token;

        return {
            statusCode: 200,
            body: JSON.stringify({ embedToken }),
            headers: {
                'Content-Type': 'application/json',
            },
        };
    } catch (error) {
        console.error('Authentication error:', error);

        // Return a generic error message client-side
        return {
            statusCode: 500,
            body: 'Internal Server Error',
        };
    }
};