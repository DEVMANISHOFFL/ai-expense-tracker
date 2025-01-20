"use client";

import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';

const HeroSection = () => {
    return (
        <div className='pb-20 px-4'>
            <div>
                <h1>
                    Master Your Finance <br /> with Intelligence
                </h1>
                <p>
                    An AI-powered financial management platform that help you to track, analyze, and optimise your spendings with real-time insights.
                </p>
                <div>
                    <Link href="/dashboard">
                        <Button size="lg" className="px-8">
                            Get Started
                        </Button>
                    </Link>
                    <Link href="/">
                        <Button size="lg" variant="outline" className="px-8">
                            Watch Demo 
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
