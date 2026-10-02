import React from 'react';
import './Mockups.css';

// Illustrative product interfaces for the featured products, drawn in HTML/SVG (not screenshots).
// Figures and names inside are sample data.

const Window = ({ title, children }) => (
    <div className="mock-window">
        <div className="mock-bar">
            <i /><i /><i />
            <span>{title}</span>
        </div>
        <div className="mock-body">{children}</div>
    </div>
);

const SmartScrapsMockup = () => (
    <Window title="smartscraps / admin / dashboard">
        <div className="mock-kpis">
            {[['Bookings today', '18'], ['Pending pickups', '6'], ['Revenue today', '₹12.4k'], ['Active staff', '4']].map(([k, v]) => (
                <div key={k} className="mock-card"><span>{k}</span><strong>{v}</strong></div>
            ))}
        </div>
        <div className="mock-split">
            <div className="mock-card">
                <span className="mock-h">Bookings this week</span>
                <svg viewBox="0 0 140 60" className="mock-bars" preserveAspectRatio="none">
                    {[22, 30, 26, 38, 34, 46, 52].map((h, i) => <rect key={i} x={i * 20 + 3} y={60 - h} width="14" height={h} rx="2" />)}
                </svg>
            </div>
            <div className="mock-card">
                <span className="mock-h">Recent pickups</span>
                <ul className="mock-list">
                    <li><b>Newspaper · 12 kg</b><em className="ok">Collected</em></li>
                    <li><b>Iron scrap · 40 kg</b><em className="go">On the way</em></li>
                    <li><b>E-waste · 3 items</b><em>Assigned</em></li>
                </ul>
            </div>
        </div>
        <div className="mock-slots">
            <span className="mock-h">Pickup slots · Tomorrow</span>
            <div><em>10–12</em><em className="full">12–2 · Full</em><em className="on">2–4</em><em>4–6</em></div>
        </div>
    </Window>
);

const CreditMockup = () => (
    <div className="mock-credit">
        <div className="mock-phone">
            <div className="mock-phone-top">MS Credit Bot</div>
            <div className="mock-chat">
                <p className="me">/balance</p>
                <p>Your balance is ₹1,250</p>
                <p className="me">Paid 500</p>
                <p>Recorded ✓ New balance ₹750</p>
            </div>
        </div>
        <div className="mock-sync" aria-hidden="true">⇄</div>
        <Window title="ms-credit-panel / customers">
            <span className="mock-h">Customers</span>
            <ul className="mock-list mock-table">
                <li><b>Ravi</b><span>₹750</span><em className="ok">Updated now</em></li>
                <li><b>Salma</b><span>₹2,100</span><em className="warn">Reminder sent</em></li>
                <li><b>Kiran</b><span>₹0</span><em>Cleared</em></li>
                <li><b>Arif</b><span>₹380</span><em>3 days ago</em></li>
            </ul>
        </Window>
    </div>
);

const MOCKUPS = { smartscraps: SmartScrapsMockup, credit: CreditMockup };

const Mockup = ({ type, label }) => {
    const Component = MOCKUPS[type];
    return (
        <div className="mock" role="img" aria-label={label}>
            <Component />
        </div>
    );
};

export default Mockup;
