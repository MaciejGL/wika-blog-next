import React from 'react';
import Head from 'next/head';

const seo = ({ pageTitle, desc }) => {
	const title = pageTitle ? `Victoria T Art - ${pageTitle}` : 'Victoria T Art';
	const description = desc || 'Victoria T Art - artists portfolio...';
	const image = 'https://wika-cms.herokuapp.com/files/reka1.PNG?auto=format&fit=max&w=1920';
	const url = 'https://www.wiktoria-art.com/';
	return (
		<Head>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<title>{title}</title>
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

			<link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-chrome-192x192.png" />
			<link rel="icon" type="image/png" sizes="512x512" href="/favicons/android-chrome-512x512.png" />
			<link rel="manifest" href="/favicons/site.webmanifest" />
			<meta name="msapplication-TileColor" content="#ffc40d" />
			<meta name="theme-color" content="#ffffff" />

			<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
		</Head>
	);
};

export default seo;
