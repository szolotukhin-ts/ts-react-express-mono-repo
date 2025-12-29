import {Card} from "./components/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import './App.css'

type Card = {
    id: number;
    title: string;
    paragraph: string;
}

async function getCards(): Promise<Card[]> {
    // try {
    const url = "http://localhost:5173/api/tasks";
    const response = await axios.get<Card[]>(url);
    return response.data;
    // } catch (err) {
    //   console.log(err);
    //   return [];
    // }
}

function App() {
    const [cards, setCards] = useState<[] | Card[]>([]);

    useEffect(() => {
        (async () => {
            const songs = await getCards();
            setCards(songs);
        })();
    }, []);

    return (
        <>
            <h1>React TypeScript</h1>
            {cards.map((item) => (
                <Card title={item.title} paragraph={item.paragraph}/>
            ))}
        </>
    )
}

export default App
