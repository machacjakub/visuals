import { useEffect, useRef, useState } from 'react';

export const Element = ({ mousePosition }: {mousePosition: {x: number, y: number}}) => {
    const elementRef = useRef(null);
    const [p, setP] = useState({ x: 0, y: 0 });
    const [color, setColor] = useState('white');

    useEffect(() => {
        const element = elementRef.current;
        if (element) {
            // @ts-ignore
            const rect = element.getBoundingClientRect();
            const y = rect.top;
            const x = rect.left;
            setP({ x, y });
        }
    }, []);

    const getWidth = () => {
        const width = 50 - Math.abs(p.y - mousePosition.y) / 10;
        return width < 5 ? 5 : width;
    }
    const getHeight = () => {
        const height = 50 - Math.abs(p.x - mousePosition.x) / 10;
        return height < 5 ? 5 : height;
    }
    const width = `${getWidth()}px`;
    const height = `${getHeight()}px`;
    // const width = `${
    //   50 -
    //   Math.abs(p.x - mousePosition.x) / 20 -
    //   Math.abs(p.y - mousePosition.y) / 20
    // }px`;
    // const height = width;

    return (
        <div
            style={{
                width: '50px',
                height: '50px',
                justifyContent: 'center',
                display: 'flex',
                alignItems: 'center',
            }}
            ref={elementRef}
            onClick={() => setColor('#FFFF66')}
        >
            <div
                style={{
                    width,
                    height,
                    backgroundColor: color,
                    rotate: (p.x - mousePosition.x) / 14 + 'deg',
                }}
                ref={elementRef}
            ></div>
        </div>
    );
};
