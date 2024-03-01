import React, { useState } from 'react';
import DashboardComposants from "./DashboardComposants";

export default function Dashboard() {
    const [isLightTheme, setIsLightTheme] = useState(false);

    const handleToggleTheme = () => {
        setIsLightTheme(prevTheme => !prevTheme);
    };
   
    return (
        <section className="followers-section">
            <div className="followers-section-header">
                <div className="main-header-left-component">
                    <h1 className={`title ${isLightTheme ? 'gray-text-light' : ''}`}>Social Media Dashboard</h1>
                    <p className={`subtitle gray-text ${isLightTheme ? 'gray-text-light' : ''}`}>Total Followers: 447 M</p>
                </div>
                <div className="main-header-right-component">
                    <p className={`dark-mode gray-text ${isLightTheme ? 'gray-text-light' : ''}`}>Dark Mode</p>
                    <label htmlFor="toggle-switch" className="switch">
                        <input type="checkbox" id="toggle-switch" className={`btn ${isLightTheme ? 'btn-light' : 'active'}`} onClick={handleToggleTheme} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            <DashboardComposants />
        </section>
    );
}
