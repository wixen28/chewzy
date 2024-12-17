import { useContext } from 'react'
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client'
import {setContext} from '@apollo/client/link/context'



function Apollo({ children }: { children: JSX.Element }) {
  // const { accessToken } = useContext(AuthContext)

  const httpLink = createHttpLink({
    // uri: import.meta.env.VITE_REACT_API_HOST || 'http://localhost:3001/graphql',
    uri: 'http://localhost:3000/graphql',
  })

  const authLink = setContext((_, { headers }) => ({
    headers: {
      ...headers,
      // Authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  }))

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export default Apollo
