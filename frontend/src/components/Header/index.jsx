import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HeaderStyle from './style';

const Header: React.FC = () => {
	return (
		<HeaderStyle>
			<Container>
				<Row>
					<div className="logo">
						<a href="/">
							<h1>SWFlix</h1>
						</a>
					</div>
				</Row>
			</Container>
		</HeaderStyle>
	);
};

export default Header;
