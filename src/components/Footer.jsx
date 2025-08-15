import { Box, Typography } from "@mui/material";

function Footer() {
    return (
        <Box sx={{mt:"50px", py: "20px", textAlign: "center", borderTop: 1, borderColor: 'divider' }}>
            <Typography variant="subtitle1">All rights are reserverd | 2025</Typography>
        </Box>
    )
}

export default Footer