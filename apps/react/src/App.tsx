import {Card} from "./components/Card/Card";
import './App.css'

function App() {
    const data = [
        {id: 1, title: 'Apple', paragraph: 'This is an apple'},
        {id: 2, title: 'Banana', paragraph: 'This is a banana'},
        {id: 3, title: 'Cherry', paragraph: 'This is a cherry'}
    ];

    return (
        <>
            <h1>React TypeScript</h1>
            {data.map((item) => (
                <Card title={item.title} paragraph={item.paragraph}/>
            ))}
        </>
    )
}

export default App
