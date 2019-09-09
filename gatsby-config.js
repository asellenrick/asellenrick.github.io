const config = require('./config');

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		title: config.siteTitle
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sass',
		'gatsby-plugin-offline',
		{
			resolve: `gatsby-plugin-gtag`,
			options: {
				trackingId: 'UA-146569002-1',
				head: false
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/src/pages/`,
				name: `pages`
			}
		},
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1200,
							linkImagesToOriginal: false
						}
					}
				]
			}
		}
	]
};
