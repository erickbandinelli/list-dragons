import React, { useEffect, useState } from 'react';
import Moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';

import { loadRequestDetails } from '../../store/ducks/details/actions';
import DetailsDragonsStyle from './style';

const DetailsDragons = () => {
	const [id] = useState(window.location.href.match(/\/([^\/]+)\/?$/)[1]);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRequestDetails(id));
	}, [dispatch]);

	const detailsState = useSelector(
		(state) => state.Details.data
	);

	Moment.locale('pt-BR');
	var dt = detailsState.createdAt

	return (
		<DetailsDragonsStyle>
			<div className="bg"></div>
			<div className="block-text">
				<h3>{detailsState.name}</h3>
				<span className="type">Tipo de dragão: <h4><b>{detailsState.type}</b></h4></span>
				<p>{detailsState.histories}</p>
				<span className="date">Data de Criação: <h4><b>{Moment(dt).format('DD/MM/YYYY')}</b></h4></span>
			</div>
		</DetailsDragonsStyle>
	);
}

export default DetailsDragons;
