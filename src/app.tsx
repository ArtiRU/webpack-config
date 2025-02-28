import {FC, useState} from 'react'
import styles from './components/about.module.scss'
import {Link} from 'react-router-dom'
import image from '@/assets/images/img1.png';
import Temperature from '@/assets/images/temperature.svg';

interface AppProps {

}

function sum(a: number, b: number): number {
    return a + b;
}

const App: FC<AppProps> = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev + 1);
    const sumAB = sum(2,3);

    return <div>
        <h1>{count}</h1>
        <button onClick={increment}>Button</button>
        <Link to="/about" className={styles.red}>About</Link>
        <Link to="/contact" className={styles.red}>Contact</Link>
        <div>
            <img src={image} alt="123" width={100} height={100}/>
            <Temperature width={200} height={200} style={{color: 'yellow'}}/>
        </div>
    </div>
}

export default App;