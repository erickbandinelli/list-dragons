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

	.icon-menu {
		display: none;
    position: absolute;
    right: 51px;
    top: 30px;
		font-size: 30px;
		z-index: 999;

		@media screen and (max-width: 700px) {
			display:block;
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
			transition: left 0.2s ease-in-out;

			&.active {
				left: 0;
				transition: left 0.2s ease-in-out;
			}
		}
		
		ul {
			display: flex;
			justify-content: space-around;
			list-style: none;
			padding: 0;

			@media screen and (max-width: 700px) {
				display: block;
				position: absolute;
				left: 0;
				top: 80px;
				width: 100%;
			}

			li {
				font-size: 16px;
				font-family: 'Montserrat',serif;
				font-weight: 200;
				color: #ffffff;
				padding: 20px 37px 0 0;

				@media screen and (max-width: 700px) {
					font-size: 22px;
					text-align: center;
					width: 100%;
					padding: 17px 0;
				}

				a {
					color: #ffffff;
					text-decoration: none;

					&:hover {
						color: #da1a28;
						transition: color 0.2s ease-in-out;

						@media screen and (max-width: 700px) {
							color: #000;
						}
					}
				}

				span {
					cursor: pointer;

					&:hover {
						color: #da1a28;
						transition: color 0.2s ease-in-out;

						@media screen and (max-width: 700px) {
							color: #000;
						}
					}
				}
			}
		}
	}
`;

export default HeaderInternStyle;
