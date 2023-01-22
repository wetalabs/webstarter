import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';


type MetaProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  pathname?: string;
  name?: string;
  type?: string
};

export function Meta({
  title = 'test',
  description = 'test',
  image,
  url = "https://test.com",
  pathname,
  name = 'test',
  type = 'website',

}:MetaProps){
  const router = useRouter();
  const imageUrl = `${url}/social/${image || 'default.png'}`;
  const path = pathname || router.pathname;
  
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta key="og:url" property="og:url" content={`${url}${path}`} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta key="og:type" property="og:type" content={type} />
      <meta property="og:site_name" content={name} />


      <meta key="twitter:site" name="twitter:site" content="@Wetez_stake" />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image"/>
      <meta key="twitter:creator" name="twitter:creator" content="@Wetez_stake" />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />

    </Head>
  );


}