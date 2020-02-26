import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2'
import Col from 'react-bootstrap/Col';
import { FaPlay } from "react-icons/fa";

import { loadRequestDetails } from '../../store/ducks/details/actions';
import DetailsStyle from './style';

const DetailsFilm = () => {
	const [id] = useState(window.location.href.match(/\/([^\/]+)\/?$/)[1]);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRequestDetails(id));
	}, []);

	const moviesState = useSelector(
		(state) => state.Details.data
	);
	
	function handleVideo() {
		Swal.fire({
				html:
					'<iframe width="100%" height="315" src="https://www.youtube.com/embed/FDXmcZ1_D-o?start=14" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
				showConfirmButton: false,
				width: 600
		})
	}

	return (
		<DetailsStyle>
			<Container>
				<Row>
						<div className="bg"></div>
						<div className="info">
							<Col sm={12} md={6} lg={6}>
								<div className="block-text">
									<h3>{moviesState.title}</h3>
									<p>{moviesState.opening_crawl}</p>
									<span className="genres">Science Fiction</span>
									<span className="prod">Director: <h4><b>{moviesState.director}</b></h4></span>
									<span className="prod">Producer: <h4><b>{moviesState.producer}</b></h4></span>
									<span className="prod">Release date of: <h4><b>{moviesState.release_date}</b></h4></span>
								</div>
							</Col>

							<Col sm={12} md={6} lg={6}>
								<div className="buttonplay" onClick={() => handleVideo() }>
									<FaPlay />
								</div>
							</Col>
						</div>
				</Row>
			</Container>
		</DetailsStyle>
	);
}

export default DetailsFilm;
