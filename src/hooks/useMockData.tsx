import { useEffect, useState } from "react";

interface Item {
    id: number;
}

const useMockData = (N: number): Item[] => {
    const [array, setArray] = useState<Item[]>([]);

    useEffect(() => {
        setArray(Array.from({ length: N }, (_, index) => ({ id: index + 1 })));
    }, [N]);

    return array;
};

export default useMockData;
