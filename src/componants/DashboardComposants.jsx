export default function DashboardComposants ({ platform, username, followers, today }) {
    const followersData = [
        { platform: 'Facebook', username: '@realmadrid', followers: '121 M', today: 150 },
        { platform: 'Twitter', username: '@realmadrid', followers: '50 M', today: 99 },
        { platform: 'Instagram', username: '@realmadrid', followers: '153 M', today: 1099 },
        { platform: 'Youtube', username: 'Real Mardid', followers: '12,3 M', today: 144 }
    ];

    return (
        
            <div className="followers-cards-container">
                {followersData.map((follower, index) => (
                    <div className="followers card dark" key={index}>
                        <hr className={follower.platform.toLowerCase()} />
                        <div className="followers-card-header">
                            <img
                                className="social-icon"
                                src={`./public/icon-${follower.platform.toLowerCase()}.svg`}
                                alt={`${follower.platform.toLowerCase()}-icon`}
                            />
                            <p className="username gray-text">{follower.username}</p>
                        </div>
                        <div className="followers-card-body">
                            <h1 className="followers-card-body-numbers">{follower.followers}</h1>
                            <h2 className="followers-card-body-text">{follower.platform === 'Youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}</h2>
                        </div>
                        <div className="followers-card-footer">
                            <img
                                className="followers-card-footer-img"
                                src="./public/icon-up.svg" alt="up arrow"
                            />
                            <p className="followers-card-footer-text up">{follower.today} Today</p>
                        </div>
                    </div>
                ))}
            </div>
    );
}