import React from 'react';
import Layout from '../components/Layout';
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

	return (
		<Layout fullMenu headerImage={path}>
			<article id="main">
				<header style={styling}>
					<h2>{post.frontmatter.title}</h2>
					<p>{post.frontmatter.subhead}</p>
				</header>

				<section className="wrapper style5">
					<div className="inner">
						<Link to="/blog">← Back to posts</Link>
					</div>
					<div className="inner" dangerouslySetInnerHTML={{ __html: post.html }}></div>
				</section>
			</article>
		</Layout>
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
				splashImage {
					publicURL
				}
			}
		}
	}
`;
