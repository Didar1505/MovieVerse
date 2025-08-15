import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink} from 'react-router-dom';

function Navbar() {
    return (
        <Box sx={{mb: "30px", borderBottom: 1, borderColor: "divider"}}>
            <Container sx={{py: '20px'}}>
            <Stack justifyContent={"space-between"} direction={"row"} alignItems={"center"}>
                <Typography variant="h6">MovieVerse</Typography>
                <Stack gap={"20px"} direction={'row'}>
                <RouterLink style={{textDecoration:'none'}} to={"/"}><Link underline="hover" sx={{cursor: "pointer"}}>Home</Link></RouterLink>
                <RouterLink style={{textDecoration:'none'}} to={"/favourites"}><Link underline="hover" sx={{cursor: "pointer"}}>Favourites</Link></RouterLink>
                </Stack>
            </Stack>
            </Container>
      </Box>
    )
}

export default Navbar;