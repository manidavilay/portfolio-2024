import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const updateMedia = () => {
            setIsMobile(window.innerWidth < breakpoint);
        }

        updateMedia();
        window.addEventListener('resize', updateMedia);

        return () => {
            window.removeEventListener('resize', updateMedia);
        }
    }, [breakpoint])

    return isMobile
};

export default useIsMobile;