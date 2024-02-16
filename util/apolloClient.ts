import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const { getClient } = registerApolloClient(() => {
  const link = new HttpLink({
    uri: 'https://api.github.com/graphql',
    headers: {
      authorization: `Bearer ${process.env.NEXT_PUBLIC_GIT_HUB_API}`,
    },
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
  });
});
