import { Box, Container } from '@mui/material'
import { SideBar, SearchAndAddEmployee, DesignationList, EmployeeList } from '../components'
import { Grid } from '@material-ui/core'

const HrmPage = () => {
    return (
        <Box>
            <SideBar>
                <Container maxWidth="lg">
                    <SearchAndAddEmployee />
                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <DesignationList />
                        </Grid>
                        <Grid item md={8}>
                            <EmployeeList />
                        </Grid>
                    </Grid>
                </Container>
            </SideBar>
        </Box>
    )
}

export default HrmPage
