import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { FiEye, FiTrash2, FiEdit } from "react-icons/fi";
import { useSelector, useDispatch } from 'react-redux';

import Pagination from "../../components/Pagination";
import { loadRequest } from '../../store/ducks/dragons/actions';
import { deleteRequest } from '../../store/ducks/delete/actions';
import ListDragonsStyle from './style';

const ListDragons = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [dragonsPerPage] = useState(4);

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
				dispatch(deleteRequest(id));
			}
		})
	}

	const dragonsState = useSelector(
		(state) => state.Dragons.data
	);


	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	const indexOfLastDragons = currentPage * dragonsPerPage;
	const indexOfFirstDragons = indexOfLastDragons - dragonsPerPage;
	
	const newListDragons = dragonsState.sort(function (a, b) {
		var nameA = a.name, nameB = b.name
		if (nameA < nameB) 
				return -1
		if (nameA > nameB)
				return 1
		return 0 
 });

 const currentDragons = newListDragons.slice(indexOfFirstDragons, indexOfLastDragons);

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
							currentDragons.sort((a, b) => a.name < b.name).map((item, key) => {
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

			<Pagination
				currentPage={currentPage}
				dragonsPerPage={dragonsPerPage}
				totalDragons={dragonsState.length}
				paginate={paginate} />

		</ListDragonsStyle>
	);
}

export default ListDragons;
