import Head from 'next/head';
import React from 'react';

const SEO = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Head>
      <title>{title} | App</title>
      <meta name="name" content={title} />
      <meta name="description" content={description} />
    </Head>
  );
};

export default SEO;
