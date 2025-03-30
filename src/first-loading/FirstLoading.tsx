import { useEffect, useState} from 'react';
import { Element } from './Element';

function FirstLoading() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [directionX, setDirectionX] = useState('right');
    const [directionY, setDirectionY] = useState('down');
    const width = window.innerWidth;
    const height = window.innerHeight;
    const handler = () => {
        if (position.x >= width && directionX === 'right') {
            setDirectionX('left');
        }
        if (position.x <= 0 && directionX === 'left') {
            setDirectionX('right');
        }
        if (position.y >= height && directionY === 'down') {
            setDirectionY('up');
        }
        if (position.y <= 0 && directionY === 'up') {
            setDirectionY('down');
        }
        setPosition({
            ...position,
            x:
                directionX === 'right' && position.x < width
                    ? position.x + 3
                    : position.x - 3,
            y: directionY === 'down' && position.y < height
                ? position.y + 3
                : position.y - 3,
        });
    };
    const rows = new Array(Math.ceil((height-8)/58)).fill(0);
    const columns = new Array(Math.ceil((width-8)/58)).fill(0)
    useEffect(() => {
      const interval = setInterval(handler, 6);
      return () => clearInterval(interval);
    }, [position]);
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                gap: '8px',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
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

export default FirstLoading;
