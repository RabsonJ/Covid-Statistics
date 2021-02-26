import './StatsCard.css';

const StatsCard = ({className, stat, title, icon}) => {
	return (
		<div className="col-xl-3 col-sm-6 col-12">
			<div className="card">
				<div className="card-content">
					<div className="card-body">
						<div className="media d-flex">
							<div className="media-body text-left">
                        <h3 className={className}> {stat?.toLocaleString()} </h3>
                        <span>{title}</span>
							</div>
							<div className="align-self-center">
								<i className={`fas ${icon} ${className} font-large-2 float-right`} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StatsCard;
