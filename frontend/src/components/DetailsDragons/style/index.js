import styled from 'styled-components';

import bg from '../../../images/bg3.jpg';

const DetailsDragonsStyle = styled.section`
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
			background-size: cover;
			background-attachment: inherit;
			height: auto;
			position: fixed;
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

	.block-text {
		width: 70%;
		margin: 0 auto;

		h3 {
			font-size: 54px;
			font-weight: 600;
			margin-top: 95px;
			margin-bottom: 0;
			width: 100%;
			color: #fff;
			font-family: 'Bree Serif',serif;
			letter-spacing: 0.3rem;
			text-transform: uppercase;
			white-space: normal;
			overflow: hidden!important;
			text-overflow: ellipsis;
			display: block;

			@media screen and (max-width: 700px) {
				font-size: 2rem;
				white-space: normal;
			}
		}

		p{
			font-size: 13px;
			max-width: 100%;
			display: block;
			font-family: 'Montserrat',serif;
			font-weight: 200;
			margin-bottom: 50px;
			position: relative;
			color: rgba(255,255,255,.8);
			line-height: 23px;
			text-align: justify;
		}
		.type{
			display: block;
			font-size: 18px;
			margin-bottom: 10px;
			color: #fff;
			font-family: 'Montserrat', serif;
			font-weight: 200;
			
			h4 {
				display: inline-block;
				font-size: 18px;
				font-family: 'Montserrat',serif;
				font-weight: 200;
				line-height: 1;
				margin: 0 0 24px 0;
			}
		}

		.date{
			display: block;
			font-size: 16px;
			margin-bottom: 10px;
			color: #fff;
			font-family: 'Montserrat', serif;
			font-weight: 200;
			
			h4 {
				display: inline-block;
				font-size: 16px;
				font-family: 'Montserrat',serif;
				font-weight: 200;
				line-height: 1;
				margin: 0 0 24px 0;
			}
		}
	}
`;

export default DetailsDragonsStyle;
