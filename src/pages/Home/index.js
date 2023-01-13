import { useEffect, useState } from "react";
import api from "../../services/api";

// movie/now_playing?api_key=aee2db7cca97382b141d3fba0e91bff3&language=pt-BR


function Home(){

    const [filmes, setFilmes] = useState([]);

    useEffect(() =>{
      async function loadFilmes(){
        const response = await api.get("movie/now_playing", {
          params:{
            api_key: "aee2db7cca97382b141d3fba0e91bff3",
            language: "pt-BR",
            page: 1,
          }
        })

        console.log(response.data.results);

      }

      loadFilmes();

    }, [])

    return(
      <div>
        <h2>Home</h2>
      </div>    
    )
}

export default Home;