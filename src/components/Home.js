import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);

    //promise then örneği
    // useEffect(() => {
    //     //Veri çekme işlemi
    //     fetch('https://restcountries.com/v3.1/all')
    //     .then(response => response.json())
    //     .then(data => setData(data));
    // }, []);

    //async await örneği
    useEffect(() => {
        //Veri çekme işlemi
        const getCountry = async () => {
            const country = await axios.get('https://restcountries.com/v3.1/all');
            setData(country);
        };
        getCountry();
    }, []);

    return (
        <div>
            <h1>Home Page</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase1</button>
            {
                data?.data?.map((dt,i) => (
                    <div key={i}>{dt.name.common}</div>
                ))
            }
        </div>
    );
}

export default Home;