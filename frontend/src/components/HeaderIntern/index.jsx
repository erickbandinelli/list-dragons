import React, { useState } from "react";
import { FiAlignJustify, FiX } from "react-icons/fi";
import HeaderInternStyle from './style';

const HeaderIntern = () => {
	const [open, setOpen] = useState(false);
	const [close, setClose] = useState(false);

	const loggout = () => {
		localStorage.removeItem('jwt');
		window.location.href = "http://localhost:3000";
	}

	const toggleMenu = () => {
		var el = document.querySelector('.menu');
		el.classList.toggle('active');
		setOpen(!open);
		setClose(!close);
	}

	return (
		<HeaderInternStyle>
				<div className="logo">
					<a href="/">
						<h1>Dragons</h1>
					</a>
				</div>

				<div className="icon-menu" onClick={(e) => toggleMenu()}>
					<FiAlignJustify style={open === false ? { display: 'block' } : { display: 'none' }}/>
					<FiX style={close === false ? { display: 'none' } : { display: 'block' }}/>
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
