import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import blogBanner from '../assets/images/banner-blog.jpg';

export default function blog({ data }) {
	const { allMarkdownRemark: posts } = data;
	const styling = {};
	let path = blogBanner;

	if (path) {
		const gradient = 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.8))';
		const image = `url("${path}")`;
		styling.backgroundImage = `${gradient} , ${image}`;
	}

	return (
		<Layout fullMenu headerImage={blogBanner}>
			<article id="main">
				<header style={styling}>
					<h2>Creative Thoughts</h2>
					<p>blog posts about design and development</p>
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
						splashImage {
							publicURL
						}
					}
					excerpt
				}
			}
		}
	}
`;
