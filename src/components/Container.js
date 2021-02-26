const Container = ({ title, subTitle, country, continent, children }) => {
	return (
		<div className="container-fluid">
			<section id="minimal-statistics">
				<div className="row px-2 text-light" style={{ backgroundColor: '#222' }}>
					<div className="col-12 mt-3 mb-1">
						<h2 className="text-uppercase">{title} </h2> {country}, {continent}
						<p>{subTitle}</p>
					</div>
				</div>
				<div className="p-2">{children}</div>
			</section>
		</div>
	);
};

export default Container;
