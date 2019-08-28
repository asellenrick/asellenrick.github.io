const config = require('./config');

module.exports = {
	pathPrefix: config.pathPrefix,
	siteMetadata: {
		title: config.siteTitle
	},
	plugins: ['gatsby-plugin-react-helmet', 'gatsby-plugin-sass', 'gatsby-plugin-offline']
};
