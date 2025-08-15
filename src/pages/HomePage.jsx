import MovieCard from "../components/MovieCard"
import { Grid, Stack, TextField, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";



function HomePage() {
    const [trending, setTrending] = useState([])

    const [searchQuery, setSearchQuery] = useState("")

    function handleSearch() {
        alert(searchQuery)
        setSearchQuery("")
    }

    useEffect(() => {
      axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US', {
        headers: {
          "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDY2ODUxMTEyZTU0NDA2OTc4ODEwNWVhYWJiMDc3NyIsIm5iZiI6MTc1NDE1NTczNy43MzcsInN1YiI6IjY4OGU0YWQ5MDQ0MWNiMzVmZDExZDVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lsFqROcdIguBTbxQ2gaOgLLHcbNTA7qHB1RrEXKPY4g`,
          'Accept': 'application/json'
        }
      }).then(response => {
        setTrending(response.data.results)
      })
    }, [])

    return (
        <>
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} marginBottom={"25px"}>
            <Typography variant="h5">All Movies</Typography>
            <Stack direction={"row"} alignItems={"center"} gap={"20px"}>
                <TextField value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} sx={{width: "200px"}} id="standard-basic" label="Movie name" variant="standard" />
                <Button variant="contained" onClick={handleSearch}>Search</Button>
            </Stack>
            </Stack>
            <Grid rowSpacing={5} container>
        
            {trending.map((v, i) => (
              <Grid size={{sm: 4}}>
                <MovieCard key={i} movie={v} />        
              </Grid>
            ))}
                    
        </Grid>
        </>
    )
}

export default HomePage;