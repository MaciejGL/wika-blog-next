module.exports = {
	images: {
		loader: 'imgix',
		path: process.env.NODE_ENV === 'development' ? 'http://localhost:1337' : 'https://wika-cms.herokuapp.com',
	},
	target: 'serverless',
};
