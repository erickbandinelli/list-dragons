import styled from 'styled-components';

const HeaderInternStyle = styled.header`
	display: grid;
	grid-template-columns: 1fr 1fr;

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
				font-size: 2.5rem;
				text-align: left;
				font-weight: bold;
				margin: 24px 0 0 0;
				padding: 0 0 0 20%;
			}
		}
	}

	.menu {
		width: 80%;
    display: flex;
		justify-content: flex-end;

		@media screen and (max-width: 700px) {
			position: fixed;
			height: 100%;
			background-color: #da1a28;
			z-index: 99;
			width: 100%;
			left: -411px;
		}
		
		ul {
			display: flex;
			justify-content: space-around;
			list-style: none;

			li {
				font-size: 16px;
				font-family: 'Montserrat',serif;
				font-weight: 200;
				color: #ffffff;
				padding: 20px 37px 0 0;

				a {
					color: #ffffff;
					text-decoration: none;

					&:hover {
						color: #da1a28;
						transition: color 0.2s ease-in-out;
					}
				}

				span {
					cursor: pointer;

					&:hover {
						color: #da1a28;
						transition: color 0.2s ease-in-out;
					}
				}
			}
		}
	}
`;

export default HeaderInternStyle;
