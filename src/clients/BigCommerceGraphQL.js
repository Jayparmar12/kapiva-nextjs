function call(query, variables) {
  const body = {
    query,
  };

  if (typeof variables !== 'undefined') {
    body.variables = variables;
  }
  // STORE MANAGEMENT API'S
  // return fetch('https://store-5h8rqg02f8.mybigcommerce.com/graphql', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${process.env.NEXT_PUBLIC_BIGCOMMERCE_GRAPHQL_TOKEN}`,
  //   },
  //   body: JSON.stringify(body),
  // });

  // STOREFRONT APIS FOR GRAPHQL
  return fetch('/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_BCGRAPHQL_STOREFRONT_TOKEN}`,
    },
    body: JSON.stringify(body),
  });
}

export default call;
