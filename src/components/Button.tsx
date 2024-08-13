import React from "react";

type ButtonPropsType = {
	title: string
	className: string
	onClick:()=>void
	disabled?: boolean
}

export const Button = ({title, disabled, className, onClick}: ButtonPropsType) => {
	return (
		<button
			className={className}
			onClick={onClick}
			disabled={disabled}
		>
			{title}
		</button>
	)


};

export default Button;