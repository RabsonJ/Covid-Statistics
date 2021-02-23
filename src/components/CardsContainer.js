const CardsContainer = ({ title, subTitle, country, continent, children }) => {
	return (
		<div className="container-fluid">
			<section id="minimal-statistics">
				<div className="row">
					<div className="col-12 mt-3 mb-1">
						<h2 className="text-uppercase">{title} </h2> {country}, {continent}
						<p>{subTitle}</p>
					</div>
				</div>
				<div className="row">{children}</div>
			</section>
		</div>
	);
};

export default CardsContainer;
