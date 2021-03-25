const Container = ({ title, subTitle, children }) => {
	return (
		<div className="container-fluid">
			<section id="minimal-statistics">
				<div
					className="row px-2 text-light"
					style={{ backgroundColor: '#222' }}
				>
					<div className="col-12 mt-3 mb-1">
						<h2 className="text-uppercase">{title} </h2>
						<p>
							Source:
							<a
								href="https://www.worldometers.info/coronavirus/"
								style={{ display: 'inline-block', paddingLeft: '.6rem' }}
							>
								www.worldometers.info
							</a>
							<span className="ml-1">(Updates every 10 minutes)</span>
						</p>
						<p>{subTitle}</p>
					</div>
				</div>
				<div className="p-2">{children}</div>
			</section>
		</div>
	);
};

export default Container;
