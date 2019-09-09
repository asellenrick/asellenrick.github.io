import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';

export default function blog({ data }) {
	const { allMarkdownRemark: posts } = data;
	return (
		<Layout fullMenu>
			<article id="main">
				<header>
					<h2>Blog</h2>
					<p>These thoughts are my own</p>
				</header>
				<section className="wrapper style5">
					<div className="inner">
						<ul className="blog-articles">
							{posts.edges.map((post) => {
								console.log(post);
								return (
									<li key={post.node.id}>
										<Link to={post.node.frontmatter.path}>
											<h3>{post.node.frontmatter.title}</h3>
											<p>{post.node.excerpt}</p>
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</section>
			</article>
		</Layout>
	);
}

export const postQuery = graphql`
	query MyQuery {
		allMarkdownRemark {
			edges {
				node {
					id
					frontmatter {
						subhead
						title
						path
					}
					excerpt
				}
			}
		}
	}
`;
