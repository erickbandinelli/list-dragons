import styled from 'styled-components';

import bg from '../../../images/bg.jpg';

const DetailsStyle = styled.section`
		display:block;

		.bg {
			background-size: cover;
			background-image: url(${bg});
			background-position: center center;
			background-attachment: fixed;
			width: 100%;
			height: 135%;
			position: absolute;
			left: 0;
			top: 0;
			z-index: -1;

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

		.info {
			width: 100%;
			display: flex;
			flex-wrap: wrap;

			.block-text {
				h3 {
					font-size: 54px;
					font-weight: 600;
					margin-top: 44px;
					margin-bottom: 25px;
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
					max-width: 700px;
					display: block;
					font-family: 'Roboto Slab', serif;
					font-weight: 200;
					margin-bottom: 50px;
					position: relative;
					color: rgba(255, 255, 255, .8);
				}

				.genres {
					display: inline-block;
					padding: 5px 10px;
					font-size: 12px;
					color: #fff;
					border-radius: 5px;
					margin: 0 10px 19px 0;
					border: 1px solid rgba(255, 255, 255, .2);
					transition: all .3s ease-in-out;
				}

				.prod{
					display: block;
					font-size: 12px;
					margin-bottom: 10px;
					color: #fff;
					font-family: 'Roboto Slab', serif;
					font-weight: 200;

					h4 {
						display: inline-block;
						font-size: 12px;
						font-family: 'Roboto Slab', serif;
						font-weight: 200;
						line-height: 1;
					}
				}
			}
			.buttonplay {
				right: 200px;
				width: 150px;
				height: 150px;
				border-radius: 50%;
				background: #da1a28;
				cursor: pointer;
				z-index: 100;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 3rem;
				padding: 0 0 0 11px;
				color: #fff;
				position: absolute;
				top: 50%;
    		transform: translateY(-50%);

				@media screen and (max-width: 700px) {
					font-size: 2rem;
					padding: 0 0 0 5px;
					position: fixed;
					border-radius: 0;
					border-bottom-left-radius: 10px;
    			border-top-left-radius: 10px;
					right: 0;
					width: 60px;
    			height: 60px;
				}

				&:hover {
					background: #970f19;
					transition: background 0.1s cubic-bezier(0.42, 0, 0.35, 0.95);
				}
			}
		}
`;

export default DetailsStyle;
