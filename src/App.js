import React from 'react';
import Card from './components/Card';
import { useEffect,useState } from 'react';
import './App.css'

function App(){
    const [animeList, setAnimeList] = useState([]);
    console.log("id");
    const id = localStorage.getItem('id');
    console.log(id);

    useEffect(() => {
        fetch('http://13.200.44.124:3000/api/allAnime')
            .then(res => res.json())
            .then(data => {
                const animeList = data.map((anime, index) => ({ ...anime, key: index }));
                setAnimeList(animeList);
            })
            .catch(err => console.log(err));

    }, []);
    
    return(
        <>
             <div className="flex justify-evenly flex-wrap my-16 mx-4 ">
            {
                animeList.length>0 && animeList.map((data)=>{
                   return( <Card type = "anime" id = {data._id} key = {data._id} title={data.name} desc = {data.description} imgSrc = {`/images/${data.src}`} />)
                })
            }
            </div>
            
        </>
    );
}

export default App;