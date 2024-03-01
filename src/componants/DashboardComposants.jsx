import { useTheme } from "../contexts/ThemeContext";

export default function DashboardComposants () {
    const { data } = useTheme();

    return (
        
            <div className="followers-cards-container">
                {data[0].dashboard.map((follower, index) => (
                    <div className="followers card dark" key={index}>
                        <hr className={follower.channel.toLowerCase()} />
                        <div className="followers-card-header">
                            <img
                                className="social-icon"
                                src={`./public/icon-${follower.channel.toLowerCase()}.svg`}
                                alt={`${follower.channel.toLowerCase()}-icon`}
                            />
                            <p className="username gray-text">{follower.user}</p>
                        </div>
                        <div className="followers-card-body">
                            <h1 className="followers-card-body-numbers">{follower.followers}</h1>
                            <h2 className="followers-card-body-text">{follower.channel === 'Youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}</h2>
                        </div>
                        <div className="followers-card-footer">
                            <img
                                className="followers-card-footer-img"
                                src="./public/icon-up.svg" alt="up arrow"
                            />
                            <p className="followers-card-footer-text up">{follower.follows.today} Today</p>
                        </div>
                    </div>
                ))}
            </div>
    );
}