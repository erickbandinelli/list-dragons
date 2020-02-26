import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { loadRequest } from '../../store/ducks/movies/actions';
import MoviesStyle from './style';

const ListMovies = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRequest());
	}, []);

	const moviesState = useSelector(
		(state) => state.Movies.data
	);
	
	const newListMovies = moviesState.sort(function (a, b) {
		var nameA = a.episode_id, nameB = b.episode_id
		if (nameA < nameB) 
				return -1
		if (nameA > nameB)
				return 1
		return 0 
 });


	return (
		<MoviesStyle>
			<Container>
				<Row>
					<div className="bg"></div>
					<ul>
						{
							newListMovies.sort((a, b) => a.episode_id < b.episode_id).map((item, key) => {
								return (
									<Col sm={12} md={3} lg={3} key={item.episode_id}>
										<li>
											<a href={ `/details/${item.url.match(/\/([^\/]+)\/?$/)[1]}`}>
												<div className="image"></div>
												<span>{item.title}</span>
											</a>
										</li>
									</Col>
								)
							})
						}
					</ul>
				</Row>
			</Container>
		</MoviesStyle>
	);
}

export default ListMovies;
