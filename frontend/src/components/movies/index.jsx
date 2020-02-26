import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRequest } from '../../store/ducks/dragons/actions';
import MoviesStyle from './style';

const ListMovies = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRequest());
	}, []);

	const dragonsState = useSelector(
		(state) => state.Dragons.data
	);

	console.log(dragonsState);
	
// 	const newListMovies = moviesState.sort(function (a, b) {
// 		var nameA = a.episode_id, nameB = b.episode_id
// 		if (nameA < nameB) 
// 				return -1
// 		if (nameA > nameB)
// 				return 1
// 		return 0 
//  });


	return (
		<MoviesStyle>
					<div className="bg"></div>
					<ul>
						{/* {
							newListMovies.sort((a, b) => a.episode_id < b.episode_id).map((item, key) => {
								return (
									<li>
										<a href={ `/details/${item.url.match(/\/([^\/]+)\/?$/)[1]}`}>
											<div className="image"></div>
											<span>{item.title}</span>
										</a>
									</li>
								)
							})
						} */}
					</ul>
		</MoviesStyle>
	);
}

export default ListMovies;
