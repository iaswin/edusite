import React from 'react';
import './Plans.css';

function Plans() {
    const handleclick=()=>{
        window.open(("https://www.youtube.com/"),'_blank')
    }
    const PricingData = [
        {
            title: 'Regular Member',
            price: '$0',
            duration: '/month',
            color: '#FFA500',
            features: [
                'Unlimited Support',
                'Personal Support',
                'Customer Support'
            ]
        },
        {
            title: 'Premium Member',
            price: '$100',
            duration: '/month',
            color: '#6f55f2',
            features: [
                'Unlimited Support',
                'Personal Support',
                'Customer Support',
                '5 classes a week',
                'One to One Mentor',
                'Unlimited Support'
            ]
        },
        {
            title: 'Gold Member',
            price: '$50',
            duration: '/month',
            color: '#fff111',
            features: [
                'Unlimited Support',
                'Personal Support',
                'Customer Support',
                '3 classes a week',
                'Unlimited Support'
            ]
        },
    ];

    return (
        <div className='container'>
            <div className='pricing_top'>
                <h2 className='section_title'>Premium Price Plans</h2>
                <p>Unlock Elite Tech services with our Premium Pricing Plan and soar ahead of Competition</p>
            </div>
            <div className='pricing_wrapper'>
                {
                    PricingData.map((item, index) => (
                        <div className='pricing_item' key={index}>
                            <div className='pricing_card_top' style={{ background: item.color }}>
                                <h2 className='section_title'>{item.title}</h2>
                                <h2 className='pricing_section_title'>
                                    {item.price}
                                    <span>{item.duration}</span>
                                </h2>
                            </div>
                            <div className='services'>
                                <ul>
                                    {item.features.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                                <button className='registerbtn' onClick={handleclick}>Join</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Plans;
