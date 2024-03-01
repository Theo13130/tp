import { useTheme } from "../contexts/ThemeContext";

export default function OverviewComposants () {

    const { data } = useTheme();
    console.log(data);

    return (
        <section className="overview-section">
            <h1 className="overview-header">Overview - Today</h1>

            <div className="overview-cards-container">
                {data[0].overview.map((data, index) => (
                    <div className="overview card dark" key={index}>
                        <div className="overview-card-header">
                            <p className="overview-card-stats-name gray-text">{data.title}</p>
                            <img className="social-icon" src={`./public/icon-${data.channel}.svg`} alt={`${data.channel} logo`} />
                        </div>
                        <div className="overview-card-footer">
                            <h1 className="overview-card-stats-value">{data.statistics.today.data}</h1>
                            <div className="overview-card-footer-status">
                                <img className="overview-card-status-img" src={`./public/icon-${data.status === 'up' ? 'up' : 'down'}.svg`} alt={`${data.status} arrow`} />
                                <p className={`overview-card-status-value ${data.status}`}>{data.pnl}%</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}