export default function OverviewComposants ({ name, icon, value, status, percentage}) {
    const overviewData = [
        { name: 'Page Views', icon: 'facebook', value: '5 M', status: 'down', percentage: 62 },
        { name: 'Likes', icon: 'facebook', value: '58 M', status: 'down', percentage: 15 },
        { name: 'Likes', icon: 'instagram', value: '500 k', status: 'up', percentage: 57 },
        { name: 'Profile Views', icon: 'instagram', value: '52 M', status: 'up', percentage: 75 },
        { name: 'Retweets', icon: 'twitter', value: 117, status: 'up', percentage: 33 },
        { name: 'Likes', icon: 'twitter', value: 507, status: 'up', percentage: 55 },
        { name: 'Likes', icon: 'youtube', value: 107, status: 'down', percentage: 19 },
        { name: 'Total Views', icon: 'youtube', value: 1407, status: 'down', percentage: 12 }
    ];
    return (
        <section className="overview-section">
            <h1 className="overview-header">Overview - Today</h1>

            <div className="overview-cards-container">
                {overviewData.map((data, index) => (
                    <div className="overview card dark" key={index}>
                        <div className="overview-card-header">
                            <p className="overview-card-stats-name gray-text">{data.name}</p>
                            <img className="social-icon" src={`./public/icon-${data.icon}.svg`} alt={`${data.icon} logo`} />
                        </div>
                        <div className="overview-card-footer">
                            <h1 className="overview-card-stats-value">{data.value}</h1>
                            <div className="overview-card-footer-status">
                                <img className="overview-card-status-img" src={`./public/icon-${data.status === 'up' ? 'up' : 'down'}.svg`} alt={`${data.status} arrow`} />
                                <p className={`overview-card-status-value ${data.status}`}>{data.percentage}%</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}