import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import { editRequest } from '../../store/ducks/edit/actions';
import { loadRequestDetails } from '../../store/ducks/details/actions';
import EditDragonsStyle from './style';

const EditDragons = () => {
	const [id] = useState(window.location.href.match(/\/([^\/]+)\/?$/)[1]);
	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [histories, setHistories] = useState('');

	const { register, errors, handleSubmit } = useForm()

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadRequestDetails(id));
	}, [dispatch]);

	const detailsState = useSelector(
		(state) => state.Details.data
	);

	useEffect(() => {
		setName(`${detailsState.name}`);
		setType(`${detailsState.type}`);
		setHistories(`${detailsState.histories}`);
	}, [detailsState]);


	const onSubmit = (data) => {
		dispatch(editRequest(data, id));
	}

	return (
		<EditDragonsStyle>
			<div className="bg"></div>
			<div className="form-login">
				<h3>Editar dragão - {detailsState.name} </h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input 
						className={errors.name && 'input-error'}
						type="text"
						name="name"
						ref={register({ 
							required: true
						})}
						onChange={e => setName(e.target.value)}
						value={name}
						/>

					<input 
						className={errors.type && 'input-error'}
						type="text"
						name="type"
						ref={register({ 
							required: true
						})}
						onChange={e => setType(e.target.value)}
						value={type}
						/>

						<textarea
							className={errors.histories && 'input-error'}
							name="histories"
							ref={register({ 
								required: true
							})}
							onChange={e => setHistories(e.target.value)}
							value={histories}></textarea>

			
						<button type="submit">Alterar</button>
				</form>
			</div>
		</EditDragonsStyle>
	);
}

export default EditDragons;
