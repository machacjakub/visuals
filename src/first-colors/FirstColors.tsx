import {useEffect, useState} from 'react';
import { Element } from './Element';

export type ColorVariant = 'r' | 'g' | 'b';
export type VariantArray = [ColorVariant, ColorVariant, ColorVariant]
function FirstColors() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [colorVariant, setColorVariant] = useState<VariantArray>(['r', 'g', 'b']);
    const width = window.innerWidth;
    const height = window.innerHeight;
    const handleMouseMove = (event: any) => {
        const x = event.clientX;
        const y = event.clientY;
        setMousePosition({ x, y });
    };
    const rows = new Array(Math.floor((height-8)/58)).fill(0);
    const columns = new Array(Math.floor((width-8)/58)).fill(0);
    type OneToThree = 1 | 2 | 3;
    const getVariantFromNumber = (x: OneToThree) => x === 1 ? 'r' : x === 2 ? 'g' : 'b';
    const getRandom3 = (): OneToThree =>  Math.ceil(Math.random()*3) as OneToThree;
    const handleClick = () => {
        const numbers = [getRandom3(), getRandom3(), getRandom3()];
        const variant: VariantArray =  numbers.map(getVariantFromNumber) as VariantArray;
        setColorVariant(variant);
    }
    useEffect(() => {
        return () => {
            setMousePosition({x: width/2 , y: height/2});
            handleClick();
        };
    }, []);

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                cursor: 'none',
                display: 'flex',
                gap: '8px',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
            onMouseMove={handleMouseMove}
            onClick={handleClick}
        >
            {rows.map(() => {
                return (
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-evenly' }}>
                        {columns.map(() => <Element mousePosition={mousePosition} colorVariant={colorVariant}/>)}
                    </div>
                );
            })}
        </div>
    );
}

export default FirstColors;
