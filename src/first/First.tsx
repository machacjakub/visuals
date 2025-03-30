import { useState} from 'react';
import { Element } from './Element';

function First() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const width = window.innerWidth;
    const height = window.innerHeight;
    const handleMouseMove = (event: any) => {
        const x = event.clientX;
        const y = event.clientY;
        setPosition({ x, y });
    };
    const rows = new Array(Math.floor((height-8)/58)).fill(0);
    const columns = new Array(Math.floor((width-8)/58)).fill(0)
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
        >
            {rows.map(() => {
                return (
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-evenly' }}>
                        {columns.map(() => <Element mousePosition={position}/>)}
                    </div>
                );
            })}
        </div>
    );
}

export default First;
