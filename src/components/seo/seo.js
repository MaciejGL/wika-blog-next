import React from 'react';
import Head from 'next/head';

const seo = () => {
	const title = 'wika';
	const description = 'opisfajbskjfbaksjbfka';
	const image = 'https://wika-cms.herokuapp.com/files/reka1.PNG?auto=format&fit=max&w=1920';
	const url = 'https://www.wiktoria-art.com/';
	return (
		<Head>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<title>{'Wiktoria Art'}</title>
			<meta name="description" content={description} />

			<meta key="twitter-card" name="twitter:card" content="summary" />
			<meta key="twitter-title" name="twitter:title" content={title} />
			<meta key="twitter-description" name="twitter:description" content={description} />
			<meta key="twitter-image" name="twitter:image" content={image} />
			<meta key="twitter-url" name="twitter:url" content={url} />

			<meta key="facebook-type" property="og:type" content="article" />
			<meta key="facebook-title" property="og:title" content={title} />
			<meta key="facebook-description" property="og:description" content={description} />
			<meta key="facebook-image" property="og:image" content={image} />
			<meta key="facebook-url" property="og:url" content={url} />

			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
		</Head>
	);
};

export default seo;
