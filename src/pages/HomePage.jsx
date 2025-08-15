import { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Pagination, Stack, TextField, Typography, CircularProgress, Alert, Box } from "@mui/material";
import MovieCard from "../components/MovieCard";
import { useDebounce } from "../hooks/useDebounce"; // A custom hook for debouncing

// --- Best Practice: Keep constants and config outside the component ---
// Your API key should be in a .env file, not in the code.
// Create a file named .env.local in your project's root and add:
// REACT_APP_TMDB_API_KEY="your_long_api_key_here"

const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDY2ODUxMTEyZTU0NDA2OTc4ODEwNWVhYWJiMDc3NyIsIm5iZiI6MTc1NDE1NTczNy43MzcsInN1YiI6IjY4OGU0YWQ5MDQ0MWNiMzVmZDExZDVjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lsFqROcdIguBTbxQ2gaOgLLHcbNTA7qHB1RrEXKPY4g";
const BASE_URL = 'https://api.themoviedb.org/3';

const trendingUrl = `${BASE_URL}/trending/movie/day?language=en-US&page=`;
const searchUrl = `${BASE_URL}/search/movie?language=en-US&query=`;

const config = {
  headers: {
    "Authorization": `Bearer ${API_KEY}`,
    "Accept": 'application/json'
  }
};

// --- Component ---
function HomePage() {
    // 1. Simplified and more descriptive state
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    
    // 2. Debounce the search query
    // This custom hook waits 500ms after the user stops typing before updating the value.
    const debouncedSearchQuery = useDebounce(searchQuery, 500);

    // 3. Consolidated data fetching into a single useEffect
    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);
            setError(null);
            
            // Determine which URL to use based on the debounced search query
            const url = debouncedSearchQuery ? `${searchUrl}${debouncedSearchQuery}&page=${page}` : `${trendingUrl}${page}`;

            try {
                const response = await axios.get(url, config);
                // Filter out movies without a poster image for cleaner UI
                const filteredResults = response.data.results.filter(movie => movie.poster_path);
                setPageCount(response.data.total_pages)
                console.log(response.data)
                setMovies(filteredResults);
            } catch (err) {
                console.error("Failed to fetch movies:", err);
                setError("Could not fetch movies. Please try again later.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchMovies();
    }, [debouncedSearchQuery, page]); // This effect re-runs only when the *debounced* query changes

    useEffect(() => {
        console.log(page)
    }, [page])

    const renderContent = () => {
        if (isLoading) {
            return <CircularProgress sx={{ display: 'block', margin: 'auto', mt: 4 }} />;
        }

        if (error) {
            return <Alert severity="error">{error}</Alert>;
        }
        
        if (movies.length === 0) {
            return <Typography>No movies found.</Typography>;
        }

        return (
            <Grid rowSpacing={4} container>
                {movies.map((movie) => (
                    // 4. Use a unique ID for the key and proper Grid item props
                    <Grid key={movie.id} size={{sm:4}}>
                        <MovieCard movie={movie} />
                    </Grid>
                ))}
            </Grid>
        );
    };

    return (
        <>
            <Stack direction="row" justifyContent="space-between" alignItems="center" marginBottom={4}>
                <Typography variant="h5">Discover Movies</Typography>
                
                <Pagination count={pageCount} page={page} onChange={(e,v) => setPage(v)} />

                <TextField
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{ width: "250px" }}
                    id="standard-basic"
                    label="Search by movie name..."
                    variant="standard"
                />
            </Stack>
            {renderContent()}
        </>
    );
}

export default HomePage;