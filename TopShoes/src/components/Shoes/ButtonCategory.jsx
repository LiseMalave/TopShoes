import { ButtonCategories, BuyButton } from "./Shoe";

export const ButtonCategory = ({ categories }) => {
	return (

		<>
			{categories.map(category => (
				<ButtonCategories
					type='button'
					className='btn-category'
					onClick={() => (category)}
					key={category}
				>
					{category}
				</ButtonCategories>
			))}
		</>
	);
};

export default ButtonCategory

