// Imports
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import cartIcon from "../images/icon-cart.svg";

// Component
const Card = ({ category, name, type, description, price, discountPrice }) => {

	// Store
	const { smallImage, bigImage } = useSelector((store) => { return store.gabrielle });

	// Return
	return(
		<Wrapper>
			
			{/* Image */}
			<picture>
				<source srcSet={ `${ process.env.PUBLIC_URL }/images/${ bigImage }` } media="(min-width: 768px)" />
				<img src={ `${ process.env.PUBLIC_URL }/images/${ smallImage }` } alt={ name } />
			</picture>
			{/* Image */}

			{/* Text */}
			<figcaption>
				<h3>{ category }</h3>
				<h1>{ name }</h1>
				<h2>{ type }</h2>
				<p>{ description }</p>
				<div className="priceContainer">
					<span>${ discountPrice }</span>
					<span>${ price }</span>
				</div>
				<button onClick={ () => { console.log(`Add to cart : ${ name }`); } }>
					<img src={ cartIcon } alt="add to cart" />
					Add to cart
				</button>
			</figcaption>
			{/* Text */}

		</Wrapper>
	);

};

// Styled
const Wrapper = styled.figure`
	width: calc(100% - 30px);
	max-width: 550px;
	margin: 15px auto;
	background-color: white;
	border-radius: 10px;
	overflow: hidden;
	picture{
		display: block;
		width: 100%;
		img{
			display: block;
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center center;
		}
	}
	figcaption{
		padding: 25px;
		h3{
			margin: 0 0 15px 0;
			font-family: var(--montserrat);
			font-size: 10px;
			text-transform: uppercase;
			letter-spacing: 3px;
		}
		h1, h2{
			font-family: var(--fraunces);
			font-size: 34px;
		}
		h2{
			margin: 0 0 20px 0;
		}
		p{
			font-family: var(--montserrat);
			font-size: 14px;
			line-height: 1.3em;
			margin: 0 0 15px 0;
		}
		.priceContainer{
			margin: 0 0 15px 0;
			span{
				display: inline-block;
				vertical-align: middle;
				&:first-of-type{
				margin: 0 15px 0 0;
					font-family: var(--fraunces);
					font-size: 34px;
					color: var(--green);
				}
				&:last-of-type{
					font-family: var(--montserrat);
					font-size: 11px;
					text-decoration: line-through;
				}
			}
		}
		button{
			display: block;
			width: 100%;
			font-family: var(--montserrat);
			font-size: 14px;
			font-weight: 700;
			color: white;
			text-align: center;
			border: none;
			background-color: var(--green);
			padding: 10px;
			border-radius: 10px;
			img{
				margin: 0 10px 0 0;
				vertical-align: bottom;
			}
		}
	}
	@media only screen and (min-width: 1024px){
		display: flex;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		picture{
			width: 40%;
		}
		figcaption{
			width: 60%;
			h1, h2{
				font-size: 30px;
			}
		}
	}
	html.no-touchevents &{
		button{
			transition: 0.35s background ease-in-out;
			&:hover{
				background-color: var(--darkGreen);
			}
		}
	}
`;

// Export
export default Card;