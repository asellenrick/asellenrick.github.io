import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import fao from '../assets/images/fao.gif';
import boystown from '../assets/images/boys-town.gif';
import bluebunny from '../assets/images/bb.gif';
import dospace from '../assets/images/dospace.gif';
import schramm from '../assets/images/schramm.gif';
import desDevLove from '../assets/images/desDevLove.svg';
import config from '../../config';
const IndexPage = () => (
	<Layout>
		<section id="banner">
			<div className="inner">
				<h2>{config.heading}</h2>
				<p>{config.subHeading}</p>
				<ul className="actions special">
					<li>
						<Scroll type="id" element="one">
							<a href="/#" className="button primary">
								Is that even possible?
							</a>
						</Scroll>
					</li>
				</ul>
			</div>
			<Scroll type="id" element="one">
				<a href="#one" className="more">
					Let's Scroll
				</a>
			</Scroll>
		</section>

		<section id="one" className="wrapper style1 special">
			<div className="inner">
				<header className="major">
					<h2>
						I love bringing order to chaos &amp; <br />
						finding creative solutions to tough problems.
					</h2>
					<p>With over 12 years of experience coding and coloring I have a unique blend of skills and perspectives.</p>
				</header>
				<img className="intro" src={desDevLove} alt="Love Design and Development" />
			</div>
		</section>

		<section id="two" className="wrapper alt style2">
			<section className="spotlight">
				<div className="image">
					<img src={fao} alt="" />
				</div>
				<div className="content">
					<h2>FAO Schwarz Car Builder</h2>
					<p>Relaunching one of the biggest names in toys is no small feat. Creating an interactive RC car builder was one the new experiences to help excite both kids and parents.</p>
					<div className="project-details">
						<h5>HOW:</h5>
						<ul>
							<li>Interface Design</li>
							<li>Sound and Animations</li>
							<li>Angular</li>
							<li>iPad</li>
							<li>CMS Integration</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="spotlight">
				<div className="image">
					<img src={bluebunny} alt="" />
				</div>
				<div className="content">
					<h2>Blue Bunny</h2>
					<p>With over 8 digital projects including an interactive mirror, theatre marquee, photo booth, and an entire wall dedicated to educating and engaging customers... this project was cool!</p>
					<div className="project-details">
						<h5>HOW:</h5>
						<ul>
							<li>Game Design</li>
							<li>Sound and Animations</li>
							<li>Educational Videos</li>
							<li>WPF</li>
							<li>Unity</li>
							<li>HTML/CSS/JS</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="spotlight">
				<div className="image">
					<img src={dospace} alt="" />
				</div>
				<div className="content">
					<h2>Do Space</h2>
					<p>A digital library who's goal is to make technology available to everyone! When you come through the doors you are transformed into another world. A camera captures your movement and shows you on a larger than life video wall. Each world came with fun new challenges and a the opportunity to really test my creativity.</p>
					<div className="project-details">
						<h5>HOW:</h5>
						<ul>
							<li>Character Animation</li>
							<li>Creative Concepting</li>
							<li>Custom Technical Tools</li>
							<li>Unity</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="spotlight">
				<div className="image">
					<img src={schramm} alt="" />
				</div>
				<div className="content">
					<h2>Schramm Park</h2>
					<p>When renovating this state park, there was a want to bring technology in to enhance visitors experience. Wayfinding, interactive animal signs, informational kiosks, and three amazing games all help keep visitors entertained and coming back.</p>
					<div className="project-details">
						<h5>HOW:</h5>
						<ul>
							<li>Niche Research</li>
							<li>UI Design</li>
							<li>WPF</li>
							<li>Animations</li>
							<li>Wayfinding</li>
							<li>Scoring Algorithm</li>
						</ul>
					</div>
				</div>
			</section>
			<section className="spotlight">
				<div className="image">
					<img src={boystown} alt="" />
				</div>
				<div className="content">
					<h2>Boys Town Donor Wall</h2>
					<p>There's no better way to make sure your donors are noticed than with an animated photo wall. Using historical photos we dynamically find similar colors in the image to create tiles. All the donors are displayed on a large multi screen video wall.</p>
					<div className="project-details">
						<h5>HOW:</h5>
						<ul>
							<li>WPF</li>
							<li>UI Design</li>
							<li>WPF</li>
							<li>Animations</li>
							<li>Color Merging Algorithm</li>
						</ul>
					</div>
				</div>
			</section>
		</section>

		<section id="three" className="wrapper style3 special">
			<div className="inner">
				<header className="major">
					<h2>My Skills</h2>
					<p>With over 12 years of experience in the software industry, I've honed my design skills and learned so much more. One of my favorite things about the pace of technology is the need to always be learning!</p>
				</header>
				<ul className="features">
					<li className="icon fa-sitemap solid">
						<h3>Data Inventory</h3>
						<p>Understanding your current position is key in structuring where you are going. I love making sure you have a cohesive system that works great and is capable of handling all the edge cases.</p>
					</li>
					<li className="icon fa-object-group">
						<h3>Wireframing</h3>
						<p>Before I ever reach for a computer, I always start on paper. It is so much faster to iterate through ideas (good and bad) and start heading down the right path.</p>
					</li>
					<li className="icon fa-laptop solid">
						<h3>Interface Design</h3>
						<p>I ♥ this part! I've designed interactive dinner tables, touch screen kiosks, TV interfaces, mobile applications, gesture games, and so much more.</p>
					</li>
					<li className="icon solid fa-code">
						<h3>Front-end</h3>
						<p>Nothing is more satisfying than taking a design and bringing it to life. I've worked on the web with React, Angular, Vue, SCSS, and of course vanilla web tech. I've also worked with WPF for Windows in XAML and C#.</p>
					</li>
					<li className="icon fa-cogs solid">
						<h3>Design Tools</h3>
						<p>I love finding smart ways to solve hard problems. Whether that is researching new technologies or building my own tooling. There has always got to be a way to accomplish something that seems impossible.</p>
					</li>
					<li className="icon fa-smile">
						<h3>Mentoring</h3>
						<p>No one can know it all, just be willing to learn. Nothing is better than sitting down with someone and having you both grow from the experience.</p>
					</li>
				</ul>
			</div>
		</section>

		<section id="cta" className="wrapper style4">
			<div className="inner">
				<header>
					<h2>Still want more?</h2>
					<p>Let's get together and talk, I love coffee. If you are too far for coffee let's figure something else out!</p>
				</header>
				<ul className="actions stacked">
					<li>
						<a href="mailto:sellenrick@gmail.com" className="button fit primary">
							Let's Talk
						</a>
					</li>
				</ul>
			</div>
		</section>
	</Layout>
);

export default IndexPage;
