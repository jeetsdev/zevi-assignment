import React from "react";
import "./TrendCard.css";

type IProps = {
	title: string;
	image: any;
};

export const TrendCard = ({ title, image }: IProps) => {
	return (
		<div className="trend_card">
			<img src={image} alt="product" />
			<p>{title}</p>
		</div>
	);
};
