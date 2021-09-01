import React, { useEffect, useRef } from 'react';

const usePrevious = (value: unknown) => {
    const previousValue = useRef(null);

    useEffect(()=>{
        previousValue.current = value;
    }, [value])

    return previousValue.current
}

export default usePrevious;