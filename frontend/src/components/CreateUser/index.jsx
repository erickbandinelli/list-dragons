import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { createUserRequest } from '../../store/ducks/createUser/actions';
import CreateUserStyle from './style';

const CreateUser = () => {
	const { register, errors, handleSubmit } = useForm()

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		dispatch(createUserRequest(data));
	}

	return (
		<CreateUserStyle>
			<div className="bg"></div>
			<div className="form-login">
				<h3>Registrar-se</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input 
						className={errors.name && 'input-error'}
						type="text"
						name="name"
						ref={register({ 
							required: true
						})}
						placeholder="Digite seu nome" />

					<input 
						className={errors.email && 'input-error'}
						type="email"
						name="email"
						ref={register({ 
							required: true
						})}
						placeholder="Digite seu email" />

					<input 
						className={errors.password && 'input-error'}
						type="password"
						name="password"
						style={{width: '100%'}}
						ref={register({ 
							required: true
						})}
						placeholder="Digite sua senha" />

			
						<button type="submit">Cadastrar</button>
				</form>
			</div>
		</CreateUserStyle>
	);
}

export default CreateUser;
