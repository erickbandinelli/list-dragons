import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { FiEye, FiTrash2, FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';

import { loadRequest } from '../../store/ducks/dragons/actions';
import ListDragonsStyle from './style';

const ListDragons = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRequest());
	}, [dispatch]);


	const deleteDragon = (id) => {
		Swal.fire({
			title: 'Voçê deseja realmente deletar esse dragão?',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Sim, deletar!',
			cancelButtonText: 'Não, cancelar!'
		}).then((result) => {
			if (result.value) {
				// dispatch(deleteRequest());
			}
		})
	}

	const dragonsState = useSelector(
		(state) => state.Dragons.data
	);
	
	const newListDragons = dragonsState.sort(function (a, b) {
		var nameA = a.name, nameB = b.name
		if (nameA < nameB) 
				return -1
		if (nameA > nameB)
				return 1
		return 0 
 });

	return (
		<ListDragonsStyle>
			<div className="bg"></div>
			<div className="box-card">
				<table className="table">
					<thead>
						<tr>
							<th>Nome do Dragão</th>
							<th></th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{
							newListDragons.sort((a, b) => a.name < b.name).map((item, key) => {
								return (
									<tr key={key}>
										<td>{item.name}</td>
										<td><a href={`/details-dragons/${item.id}`} className="btn"><span>Vizualizar </span><FiEye /></a></td>
										<td><a href={`/edit-dragons/${item.id}`} className="btn btn-edit"><span>Editar </span><FiEdit /></a></td>
										<td><button className="btn btn-delete" onClick={(e) => deleteDragon(item.id)}><span>Deletar </span><FiTrash2 /></button></td>
									</tr>
								)
							})
						}
						
					</tbody>
				</table>
			</div>
		</ListDragonsStyle>
	);
}

export default ListDragons;
