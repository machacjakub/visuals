import { useEffect, useRef, useState } from 'react';
import { VariantArray} from "./FirstColors";

export const Element = ({ mousePosition, colorVariant }: {mousePosition: {x: number, y: number}, colorVariant: VariantArray}) => {
    const elementRef = useRef(null);
    const [p, setP] = useState({ x: 0, y: 0 });

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
        const width = 50 - Math.abs(p.y - mousePosition.y) / 24;
        return width < 10 ? 10 : width;
    }
    const getHeight = () => {
        const height = 50 - Math.abs(p.x - mousePosition.x) / 32;
        return height < 10 ? 10 : height;
    }
    const getDistance = (x1: number, y1: number, x2: number,y2: number) => {
        const a = x1 - x2;
        const b = y1 - y2;
        return Math.pow(Math.pow(a, 2) + Math.pow(b,2),0.5);
    }
    const distance = getDistance(p.x,p.y, mousePosition.x, mousePosition.y);
    // const getColor = () => `rgb(${Math.abs(255 - Math.abs( distance )/2)},${Math.abs(255 - Math.abs( p.x - mousePosition.x))},255)`;

    const colors = {r: Math.abs(255 - Math.abs( distance)/2), g: Math.abs(255 - Math.abs( distance)), b: Math.abs(255 - Math.abs( distance*1.8))}
    const getColor = () => `rgb(${colors[colorVariant[0]]},${colors[colorVariant[1]]},${colors[colorVariant[2]]})`;
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
        >
            <div
                style={{
                    width,
                    height,
                    backgroundColor: getColor(),
                    rotate: (p.x - mousePosition.x) / 80 + 'deg',
                    fontSize:'10px'
                }}
                ref={elementRef}
            ></div>
        </div>
    );
};
