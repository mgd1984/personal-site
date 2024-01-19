import React, { useEffect } from 'react';
import * as pbi from 'powerbi-client';

const PowerBI = () => {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://www.lakehousedata.ca/.netlify/functions/powerbiauth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          // Include any necessary data in the body of the request
          body: JSON.stringify({
            // Your data here
          }),
        });
        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }
        const { accessToken } = await response.json();

        const embedConfiguration = {
          type: 'report',
          id: '<Report ID>',
          embedUrl: '<Embed URL>',
          accessToken,
          tokenType: pbi.models.TokenType.Embed,
        };

        const reportContainer = document.getElementById('reportContainer');
        const powerbi = new pbi.service.Service(
          pbi.factories.hpmFactory,
          pbi.factories.wpmpFactory,
          pbi.factories.routerFactory,
        );

        powerbi.embed(reportContainer, embedConfiguration);
      } catch (error) {
        console.error('Failed to fetch PowerBI access token or embed the report:', error);
      }
    })();
  }, []);

  return <div id="reportContainer" style={{ height: '100%', width: '100%' }} />;
};

export default PowerBI;
