import React from 'react'
import HeroHeader from './HeroHeader'
import './style.scss'

export default function Hero() {
    return (
        <div className="hero-container">
            <HeroHeader />
            <div className="hero-media">                
                <HeroCollage />
                <HeroPhoneBlock />
            </div>
            <HeroUsedBy />
            <HeroFooter />
        </div>
    )
}



