"use client";
import { motion } from 'framer-motion';

const Pricing = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '50px 20px' }}>
            <Card title="Starter" price="$19/month" features={["Basic Features", "Community Support"]} />
            <Card title="Pro" price="$49/month" features={["All Starter Features", "Priority Support", "Advanced Analytics"]} recommended />
            <Card title="Enterprise" price="$99/month" features={["All Pro Features", "Dedicated Account Manager", "Custom Solutions"]} />
        </div>
    );
};

const Card = ({ title, price, features, recommended }) => {
    const cardStyle = {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '20px',
        width: '300px',
        textAlign: 'center',
        transition: 'transform 0.3s',
        cursor: 'pointer',
        background: recommended ? 'linear-gradient(135deg, #f0f0f0, #e0e0e0)' : '#fff',
    };

    const hoverEffect = {
        scale: 1.05,
    };

    return (
        <motion.div
            style={cardStyle}
            whileHover={hoverEffect}
            aria-labelledby={title}
            role="article"
        >
            <h2 id={title} style={{ fontSize: '24px', margin: '10px 0' }}>{title}</h2>
            <p style={{ fontSize: '20px', fontWeight: 'bold' }}>{price}</p>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {features.map((feature, index) => (
                    <li key={index} style={{ margin: '10px 0' }}>{feature}</li>
                ))}
            </ul>
            <button style={{
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                padding: '10px 20px',
                cursor: 'pointer',
                fontSize: '16px'
            }}>
                Get Started
            </button>
        </motion.div>
    );
};

export default Pricing;