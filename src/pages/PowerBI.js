import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import PowerBI from '../components/PowerBI/PowerBI'; // Fix the casing of the file name

const PowerBIPage = () => (
  <Main
    title="PowerBI"
    description="Embedded Analytics powered by PowerBI."
  >
    <article className="post" id="powerbi">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/powerbi">PowerBI</Link></h2>
          <p>PowerBI Dashboards</p>
        </div>
      </header>
      <div id="powerbi-report">
        <PowerBI
          apiEndpoint="YOUR_API_ENDPOINT"
          authorizationHeader="YOUR_AUTHORIZATION_HEADER"
          render={(embedToken, reportId) => {
            const embedConfig = {
              type: 'report',
              id: reportId,
              embedUrl: 'https://app.powerbi.com/reportEmbed',
              accessToken: embedToken,
            };
            const reportContainer = document.getElementById('powerbi-report');
            PowerBI.embed(reportContainer, embedConfig);
          }}
        />
      </div>
    </article>
  </Main>
);

export default PowerBIPage;
