import { Toolbar } from '@material-ui/core';
import React from 'react';
import { Container } from 'react-bootstrap';
import {resetNavStyle} from "../utils/utils";

export default class Projects extends React.Component {
	componentDidMount() {
		document.title = 'Projects - DSC MESCOE';
		resetNavStyle({page: 'Projects'})
	}
	render() {
		return (
			<Toolbar>
				<Container style={{ height: 1000 }}>
					<h3 className="mt-5">Projects</h3>
				</Container>
			</Toolbar>
		);
	}
}