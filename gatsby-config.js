module.exports = {
    plugins: [
        {
            resolve: 'gatsby-source-graphql',
            options: {
              typeName: 'TAKESHAPE',
              fieldName: 'takeShape',
              // Url to query from
              url: `https://api.takeshape.io/project/${
                process.env.TAKESHAPE_PROJECT_ID
              }/graphql`,
              // HTTP headers
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${process.env.TAKESHAPE_TOKEN}`
              },
              // Additional options to pass to node-fetch
              fetchOptions: {}
            }
          },
    ]
}