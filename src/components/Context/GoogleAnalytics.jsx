import { useEffect } from 'react';

const GoogleAnalytics = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-PMDZZHF85X';

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() {
                window.dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'G-PMDZZHF85X');
        };

        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return null;
};

export default GoogleAnalytics;