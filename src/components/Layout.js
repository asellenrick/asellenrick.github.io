import React, { Component } from 'react';
import Helmet from 'react-helmet';
import '../assets/sass/main.scss';
import Footer from './Footer';
import SideBar from './Sidebar';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isPreloaded: true
		};
	}

	componentDidMount() {
		this.timeoutId = setTimeout(() => {
			this.setState({ isPreloaded: false });
		}, 100);
	}

	componentWillUnmount() {
		if (this.timeoutId) {
			clearTimeout(this.timeoutId);
		}
	}

	render() {
		const { children, fullMenu, headerImage } = this.props;
		const { isPreloaded } = this.state;
		const styling = {};

		if (headerImage) {
			const gradient = 'linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.8))';
			const image = `url("${headerImage}")`;
			styling.backgroundImage = `${gradient} , ${image}`;
		}

		return (
			<>
				<Helmet>
					<html lang="en" />
				</Helmet>
				<div className={isPreloaded ? 'landing main-body is-preload' : 'landing main-body'}>
					<div id="page-wrapper" style={styling}>
						<SideBar fullMenu={fullMenu} />
						{children}
						<Footer />
					</div>
				</div>
			</>
		);
	}
}

export default Layout;
