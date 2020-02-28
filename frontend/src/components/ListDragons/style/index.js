import styled from 'styled-components';

import bg from '../../../images/bg3.jpg';

const ListDragonsStyle = styled.section`
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

	.box-card {
		width: 80%;
    margin: 95px 0 0 0;
    left: 50%;
    position: relative;
    transform: translateX(-50%);
    background-color: #ffffff;
    padding: 0;
    border-radius: 10px;
		box-shadow: 0px 1px 10px 0px #ffffff63;
		overflow: hidden;

		@media screen and (max-width: 700px) {
			width: 90%;
		}

		.table {
			border-collapse: collapse;
			border-spacing: 0;
			width: 100%;
			border: 0;

			thead {
				background-color: #da1a28;
			}

			th {
				color: #ffffff;
				font-family: 'Montserrat',sans-serif;
				font-size: 17px;
				text-align: left;
				padding: 8px;
				text-transform: uppercase;
				letter-spacing: 1px;
			}

			td {
				color: #000000;
				font-family: 'Montserrat', sans-serif;
				font-weight: 100;
				font-size: 16px;
				text-align: left;
				padding: 8px;

				.btn {
					background-color: #307096;
					border: 1px solid #307096;
					color: #ffffff;
					font-family: 'Montserrat',sans-serif;
					font-weight: 100;
					font-size: 16px;
					display: flex;
					align-items: center;
					padding: 6px 16px;
					left: 50%;
					position: relative;
					transform: translateX(-50%);
					cursor: pointer;
					width: 52%;
					justify-content: center;

					@media screen and (max-width: 700px) {
						width: 100%;
					}

					span {
						padding-right: 6px;
					}

					&:hover {
						transition: all 0.2s ease-in-out;
						background-color: transparent;
						color: #307096;
					}

					&.btn-delete {
						background-color: #f66771;
						border: 1px solid #f66771;

						&:hover {
							transition: all 0.2s ease-in-out;
							background-color: transparent;
							color: #f66771;
						}
					}

					&.btn-edit {
						background-color: #f6b067;
						border: 1px solid #f6b067;

						&:hover {
							transition: all 0.2s ease-in-out;
							background-color: transparent;
							color: #f6b067;
						}
					}
				}
			}
		}
	}
`;

export default ListDragonsStyle;
