import MovieCard from "../components/MovieCard"
import { Grid, Stack,  Typography } from "@mui/material";

const sampleMovies = [
  {
    title: 'Inception',
    year: 2010,
    poster: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
    description:
      "A thief who enters the dreams of others to steal secrets gets a chance at redemption if he can successfully plant an idea in a target's subconscious.",
    genres: ['Action', 'Sci-Fi', 'Thriller']
  },
  {
    title: 'The Matrix',
    year: 1999,
    poster: 'https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg',
    description:
      "A computer hacker learns the shocking truth about reality and his role in the war against the machines that control humanity.",
    genres: ['Action', 'Sci-Fi']
  },
  {
    title: 'Interstellar',
    year: 2014,
    poster: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg',
    description:
      "A team of explorers travels through a wormhole in space in an attempt to ensure humanity's survival as Earth faces environmental collapse.",
    genres: ['Adventure', 'Drama', 'Sci-Fi']
  },
  {
    title: 'The Dark Knight',
    year: 2008,
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjjbs_CBBZtE-bjBw6t6F-2fJ3soQpoE08TA&s',
    description:
      "Batman faces his greatest psychological and physical challenges yet when the Joker unleashes chaos on Gotham City.",
    genres: ['Action', 'Crime', 'Drama']
  },
  {
    title: 'Avatar',
    year: 2009,
    poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMwlOlY8FxygArpLxfTCoBzqfxDhaIco3ruA&s',
    description:
      "A paraplegic Marine dispatched to the moon Pandora becomes torn between following his orders and protecting the world he feels is his home.",
    genres: ['Action', 'Adventure', 'Fantasy']
  }
];

function Favourites() {
    return (
        <>
            <Typography sx={{mb: "25px"}} variant="h5">Favourites</Typography>
            <Grid spacing={4} container>
        
            {sampleMovies.map((v, i) => (
            <Grid size={{sm: 3}}>
                <MovieCard key={i} movie={v} />        
            </Grid>
            ))}
                    
        </Grid>
        </>
    )
}

export default Favourites;