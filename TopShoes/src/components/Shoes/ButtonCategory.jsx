import { ButtonCategories } from "./Shoe";

export const ButtonCategory = ({ categories,filterCategory }) => {
	return (

		<>
			{categories.map(category => (
				<ButtonCategories
					type='button'
					onClick={() => (filterCategory(category))}
					key={category}
				>
					{category}
				</ButtonCategories>
			))}
		</>
	);
};

export default ButtonCategory

