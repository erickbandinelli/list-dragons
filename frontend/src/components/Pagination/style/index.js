import styled from 'styled-components';

const PaginateStyle = styled.div`
	width: 80%;
	margin: 0;
	left: 50%;
	position: relative;
	transform: translateX(-50%);
	
	@media screen and (max-width: 700px) {
		width: 90%;
	}

	.paginate {
			display: flex;
			justify-content: center;
			width: 100%;
			margin: 30px 0 30px 0;
	}

	.pagination {
		flex-wrap: wrap;
    display: flex;
    list-style: none;
    padding: 0;
    background-color: #fff;
    border-radius: 2px;
	}

	.pagination {
		.page-item{
			margin: 0;
			width: 30px;
			height: 30px;
			display: flex;
			justify-content: center;
			align-items: center;
			cursor: pointer;
			padding: 0;
			position: relative;

			.page-link {
				color: #da1a28;
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
			}

			&.active {
				background-color: #da1a28;
				border-color: #da1a28;

				.page-link  {
					color: #fff;
				}
			}
		}
	}
`;

export default PaginateStyle;
