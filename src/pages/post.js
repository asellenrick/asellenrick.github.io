import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';

export default function Template({ data }) {
	const { markdownRemark: post } = data;
	return (
		<Layout fullMenu>
			<article id="main">
				<header>
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
			}
		}
	}
`;
