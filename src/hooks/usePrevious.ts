import { useEffect, useRef } from 'react';

const usePrevious = <T>(value: T): T | null => {
    const previousValue = useRef(null);

    useEffect(()=>{
        previousValue.current = value;
    }, [value])

    return previousValue.current
}

export default usePrevious;