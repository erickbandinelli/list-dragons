import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { createRequest } from '../../store/ducks/create/actions';
import CreateDragonsStyle from './style';

const CreateDragons = () => {
	const { register, errors, handleSubmit } = useForm()

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		dispatch(createRequest(data));
	}

	return (
		<CreateDragonsStyle>
			<div className="bg"></div>
			<div className="form-login">
				<h3>Crie um novo dragão</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input 
						className={errors.name && 'input-error'}
						type="text"
						name="name"
						ref={register({ 
							required: true
						})}
						placeholder="Digite o nome do dragão" />

					<input 
						className={errors.type && 'input-error'}
						type="text"
						name="type"
						ref={register({ 
							required: true
						})}
						placeholder="Digite o tipo do dragão" />

						<textarea
							className={errors.histories && 'input-error'}
							name="histories"
							ref={register({ 
								required: true
							})}
							placeholder="Digite a história do dragão"></textarea>

			
						<button type="submit">Cadastrar</button>
				</form>
			</div>
		</CreateDragonsStyle>
	);
}

export default CreateDragons;
