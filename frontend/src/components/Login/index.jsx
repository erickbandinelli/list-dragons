import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { loadRequest } from '../../store/ducks/login/actions';
import LoginStyle from './style';

const Login = () => {
	const { register, errors, handleSubmit } = useForm()

	const dispatch = useDispatch();

	useEffect(() =>{
		if (localStorage.getItem('jwt')) {
			window.location.href = "/list-dragons";
		}
	}, [])

	const onSubmit = (data) => {
		console.log(data.email, data.password)

		dispatch(loadRequest(data.email, data.password))
	}

	return (
		<LoginStyle>
			<div className="bg"></div>
			<div className="form-login">
				<h3>Faça o Login Aqui</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<input 
						className={errors.email && 'input-error'}
						type="email"
						name="email"
						ref={register({ 
							required: true, 
							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i 
						})}
						placeholder="Digite seu e-mail"	
						/>

					<input 
						className={errors.password && 'input-error'}
						type="password"
						name="password"
						ref={register({ 
							required: true
						})}
						placeholder="Digite sua senha" />

						<button type="submit">Entrar</button>
				</form>
			</div>
		</LoginStyle>
	);
}

export default Login;
