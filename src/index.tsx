import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.scss'

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://urchin-app-ikk9z.ondigitalocean.app/graphql",
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
)
