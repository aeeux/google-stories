import React, { useState, useEffect }from 'react';
import Hero from '../components/Hero';

export default function Main() {

    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 500);
    }, []);

    return loader ? (
        <div className="loader" />
    ) : (
        <div>
            <Hero />
        </div>
    );
}
