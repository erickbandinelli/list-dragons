import React from "react";
import HeaderInternStyle from './style';

const HeaderIntern = () => {

	const loggout = () => {
		localStorage.removeItem('jwt');
		window.location.href = "http://localhost:3000";
	}

	return (
		<HeaderInternStyle>
				<div className="logo">
					<a href="/">
						<h1>Dragons</h1>
					</a>
				</div>

				<div className="menu">
					<nav className="nav">
						<ul>
							<li><a href="/list-dragons">Lista de Dragões</a></li>
							<li><a href="/create-dragons">Criar novo dragão</a></li>
							<li><span onClick={(e) => loggout()}>Sair</span></li>
						</ul>
					</nav>
				</div>
		</HeaderInternStyle>
	);
};

export default HeaderIntern;
