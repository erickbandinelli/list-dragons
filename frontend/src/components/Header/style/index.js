import styled from 'styled-components';

const HeaderStyle = styled.header`
	.logo {
		display: block;
		width: 100%;
		a {
			display: block;
			width: 100%;
			text-decoration: none;

			h1 {
				color: #da1a28;
				font-family: 'Bree Serif',serif;
				letter-spacing: 0.3rem;
				text-transform: uppercase;
				font-size: 4.5rem;
				text-align: center;
				font-weight: bold;
				margin: 24px 0 0 0;
			}
		}
	}
`;

export default HeaderStyle;
