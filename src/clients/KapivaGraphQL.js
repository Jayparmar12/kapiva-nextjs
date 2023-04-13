function KapivaGraphQL(query) {
  return fetch('https://kapiva.in/graphql', {
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BCGRAPHQL_STOREFRONT_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });
}
export default KapivaGraphQL;
