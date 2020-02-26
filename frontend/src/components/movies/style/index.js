import styled from 'styled-components';

import bg from '../../../images/bg2.jpg';
import cp1 from '../../../images/swep1.png';
import cp2 from '../../../images/swep2.png';
import cp3 from '../../../images/swep3.png';
import cp4 from '../../../images/swep4.png';
import cp5 from '../../../images/swep5.png';
import cp6 from '../../../images/swep6.png';
import cp7 from '../../../images/swep7.jpg';

const MoviesStyle = styled.div`
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

			@media screen and (max-width: 700px) {
				height: 346%;
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

		ul {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			margin: 53px 0 128px 0;

			@media screen and (max-width: 700px) {
				padding: 0;
			}
			
			div{
				&:nth-child(1) {
					.image{
						background-image: url(${cp1});
						background-size: 83%;
					}
				}
				
				&:nth-child(2) {
					.image{
						background-image: url(${cp2});
						background-size: 83%;
					}
				}

				&:nth-child(3) {
					.image{
						background-image: url(${cp3});
						background-size: 54%;
					}
				}

				&:nth-child(4) {
					.image{
						background-image: url(${cp4});
						background-size: 55%;
					}
				}

				&:nth-child(5) {
					.image{
						background-image: url(${cp5});
						background-size: 59%;
					}
				}

				&:nth-child(6) {
					.image{
						background-image: url(${cp6});
						background-size: 55%;
					}
				}
				
				&:nth-child(7) {
					.image{
						background-image: url(${cp7});
						background-size: 55%;
					}
				}

			
				li {
					list-style: none;
					height: 90px;
					width: 100%;
					height: 210px;
					margin: 0 0 60px 0;
						
					a {
						display:block;
						text-decoration: none;

						.image{
							background-repeat: no-repeat;
							height: 210px;
							width: 100%;
							background-position: center top;
						}

						span {
							color: #fff;
							display: block;
							font-family: 'Roboto Slab', serif;
							font-weight: 200;
							font-size: 0.8rem;
							letter-spacing: 0.1rem;
							text-align: center;

							@media screen and (max-width: 700px) {
								font-size: 1rem;
								margin-top: 5px; 
							}
						}
					}
				}
			}
		}
`;

export default MoviesStyle;
