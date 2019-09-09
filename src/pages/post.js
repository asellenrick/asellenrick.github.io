import React from 'react';
import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

export default function Template({ data }) {
	const { markdownRemark: post } = data;
	const styling = {};
	let path = '';

	if (post.frontmatter.splashImage && post.frontmatter.splashImage.publicURL) {
		path = post.frontmatter.splashImage.publicURL;
	}

	if (path) {
		const gradient = 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.8))';
		const image = `url("${path}")`;
		styling.backgroundImage = `${gradient} , ${image}`;
	}

	const title = post.frontmatter.title ? `Andrew Sellenrick - ${post.frontmatter.title}` : 'Andrew Sellenrick - Designer and Developer in Nebraska';
	const desc = post.frontmatter.description ? post.frontmatter.description : 'Andrew Sellenrick Designer and Developer living in Nebraska';
	const keys = post.frontmatter.keywords ? post.frontmatter.keywords : 'designer, developer, interface design, coder, portfolio';

	return (
		<>
			<Helmet
				title={title}
				meta={[
					{
						name: 'description',
						content: desc
					},
					{
						name: 'keywords',
						content: keys
					}
				]}></Helmet>
			<Layout fullMenu headerImage={path}>
				<article id="main" className="blog">
					<header style={styling}>
						<h2>{post.frontmatter.title}</h2>
						<p>{post.frontmatter.subhead}</p>
					</header>

					<section className="wrapper style5">
						<div className="inner">
							<Link to="/blog" className="post-back">
								← Back to posts
							</Link>
						</div>
						<div className="inner" dangerouslySetInnerHTML={{ __html: post.html }}></div>
					</section>
				</article>
			</Layout>
		</>
	);
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
				subhead
				description
				keywords
				splashImage {
					publicURL
				}
			}
		}
	}
`;
