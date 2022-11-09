import { Box, Container } from "@mui/system";
import CloudCircleIcon from '@mui/icons-material/CloudCircle';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";



function createData(rank, name, calories, fat, carbs, protein) {
    return { rank, name, calories, fat, carbs, protein };
}

const rows = [
    createData(1,'Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData(2,'Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData(3,'Eclair', 262, 16.0, 24, 6.0),
    createData(4,'Cupcake', 305, 3.7, 67, 4.3),
    createData(5,'Gingerbread', 356, 16.0, 49, 3.9),
    createData(6,'Frozen yoghurt', 1591, 6.0, 24, 4.0),
    createData(7,'Ice cream sandwich', 27, 9.0, 37, 4.3),
    createData(8,'Eclair', 263, 16.0, 24, 6.0),
    createData(9,'Cupcake', 303, 3.7, 67, 4.3),
    createData(10,'Gingerbread', 156, 16.0, 49, 3.9),

];



function MainPage() {
    return (
        <Box sx={{ margin: -1 }}>
            <Container sx={{ textAlign: 'center', mt: 5 }}>
                 <TableContainer component={Paper} sx={{ mt: 1, borderRadius: 10 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{bgcolor: 'primary.main'}}>
                            <TableRow>
                                <TableCell>rank</TableCell>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right"><a href="#"  >Calories</a></TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="left">{row.rank}</TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    <TableCell align="right">{row.carbs}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </Box>
    );
}

export default MainPage;
