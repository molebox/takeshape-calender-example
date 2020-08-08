const React = require('react');
const fetch =require('isomorphic-fetch');
const {
    ApolloProvider,
    ApolloClient,
    HttpLink,
    InMemoryCache
} = require('@apollo/client');


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        // uri: '/.netlify/functions/graphql',
        uri: `https://api.takeshape.io/project/${
          process.env.TAKESHAPE_PROJECT_ID
        }/graphql`,
        // fetchOptions: {
        //     mode: 'no-cors',
        //   }
    }),
    fetch
});

export const wrapRootElement = ({element}) => (
<ApolloProvider client={client}>{element}</ApolloProvider>
)