import styled from 'styled-components';

import bg from '../../../images/bg2.jpg';

const EditDragonsStyle = styled.section`
	.bg {
		background-size: cover;
		background-image: url(${bg});
		background-position: center center;
		background-attachment: fixed;
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;

		@media screen and (max-width: 700px) {
			min-height: 100%;
		}

		&:after {
			content: '';
			position: absolute;
			width: 100%;
			height: 100%;
			position: absolute;
			background: #07060a;
			background: linear-gradient(0deg, rgba(11, 11, 14, .95) 0, rgba(11, 11, 14, .95) 22%, rgba(7, 6, 10, .75) 58%, rgba(7, 6, 10, .65) 100%);
		}
	}	

	.form-login {
		width: 30%;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -30%);
    background-color: #ffffff;
    padding: 0 30px 30px;
    border-radius: 10px;
		box-shadow: 0px 1px 10px 0px #ffffff63;

		@media screen and (max-width: 700px) {
			width: 90%;
		}

		h3 {
			color: #da1a28;
			width: 100%;
			text-align: center;
			font-size: 25px;
			text-transform: uppercase;
			font-family: 'Montserrat',sans-serif;
			font-weight: 100;
		}
		
		form {
			input {
				width: 100%;
				height: 60px;
				margin: 0 0 15px 0;
				border: 1px solid #d8d8d8;
				padding: 0 0 0 15px;
				background-color: transparent;
				font-size: 15px;
				color: #000;
				outline: none;

				&.input-error {
					border: 1px solid #da1a28;
					border-left: 4px solid #da1a28;
					transition: border 0.2s ease-in-out;
				}
			}

			textarea {
				width: 100%;
				height: 200px;
				margin: 0 0 15px 0;
				border: 1px solid #d8d8d8;
				padding: 15px 0 0 15px;
				background-color: transparent;
				font-size: 15px;
				color: #000;
				outline: none;

				&.input-error {
					border: 1px solid #da1a28;
					border-left: 4px solid #da1a28;
					transition: border 0.2s ease-in-out;
				}
			}

			button {
				width: 100%;
				background-color: #da1a28;
				border: 1px solid #da1a28;
				padding: 15px 0;
				font-size: 15px;
				text-transform: uppercase;
				letter-spacing: 1px;
				color: #fff;
				cursor: pointer;
			}
		}
	}
`;

export default EditDragonsStyle;
