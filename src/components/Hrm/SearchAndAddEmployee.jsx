import { Box, Grid, Typography, Button, Dialog, DialogContent, FormControl } from '@mui/material'
import RightArrow from '../../assets/img/arrow_right_blue.svg'
import { TextField } from '@material-ui/core'
import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { useDispatch, useSelector } from 'react-redux'
import { append } from '../../redux/employeeSlice'
import { clear, insert } from '../../redux/filterSlice'

const SearchAndAddEmployee = () => {
    const dispatch = useDispatch()
    const employee = useSelector((state) => state.employee)

    const [search, setSearch] = useState('')
    const [open, setOpen] = useState(false)
    const [employeeName, setEmployeeName] = useState('')
    const [employeeId, setEmployeeId] = useState('')
    const [designation, setDesignation] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        function findObjectsByIdOrName(array, searchValue) {
            searchValue = search.toLowerCase()

            const matchingObjects = array.filter((item) => {
                const idMatch = String(item.employeeId) === searchValue
                const nameMatch = item.employeeName.toLowerCase().includes(searchValue)
                return idMatch || nameMatch
            })

            return matchingObjects
        }

        if (search.length !== 0) {
            const searchResult = findObjectsByIdOrName(employee, search)
            dispatch(insert(searchResult))
        } else {
            dispatch(clear())
        }
    }, [search, employee, dispatch])

    const save = () => {
        const empObj = {
            id: uuid(),
            employeeName,
            employeeId,
            designation,
            phone,
        }
        if (employeeName.length !== 0 && employeeId.length !== 0 && designation.length !== 0 && phone.length !== 0) {
            dispatch(append(empObj))
        }
        setEmployeeName('')
        setEmployeeId('')
        setDesignation('')
        setPhone('')
        setOpen(false)
    }

    let customAddBtnStyle = {
        color: '#fff',
        bgcolor: 'primary.main',
        border: '1px solid primary.main',
        position: 'absolute',
        bottom: '20px',
        borderRadius: '18px',
        fontSize: '1.5rem',
        textTransform: 'none',
        fontFamily: 'Montserrat, sans-serif',
        display: 'block',
        boxSizing: 'border-box',
        width: '100%',
        '&:hover': {
            color: '#fff',
            bgcolor: 'primary.main',
        },
    }
    let customLabelStyle = {
        color: 'primary.main',
        fontWeight: '600',
        fontSize: '1.125rem',
        marginBottom: '10px',
    }
    let customInputProps = {
        style: {
            borderRadius: '18px',
            border: '1px solid blue',
            fontSize: '1.5rem',
            fontWeight: '500',
            color: '#000',
        },
    }
    let customSaveBtnStyle = {
        color: '#fff',
        bgcolor: 'primary.main',
        border: '2px solid blue',
        borderRadius: '18px',
        fontSize: '1.5rem',
        textTransform: 'none',
        fontFamily: 'Montserrat, sans-serif',
        boxSizing: 'border-box',
        padding: '10px 50px',
        marginLeft: '10px',
        '&:hover': {
            color: '#fff',
            bgcolor: 'primary.main',
        },
    }
    let customDeleteBtnStyle = {
        color: 'error.main',
        border: '2px solid #ff0000',
        borderRadius: '18px',
        fontSize: '1.5rem',
        textTransform: 'none',
        fontFamily: 'Montserrat, sans-serif',
        boxSizing: 'border-box',
        padding: '10px 50px',
        marginRight: '10px',
        '&:hover': {
            color: 'error.main',
        },
    }

    return (
        <Box sx={{ paddingTop: '100px' }}>
            <Grid container spacing={2}>
                <Grid item md={4}>
                    <Typography sx={{ fontSize: '1.25rem', position: 'relative' }}>
                        HRM
                        <img
                            src={RightArrow}
                            alt="arrow right"
                            style={{ position: 'absolute', top: '5px', marginLeft: '5px' }}
                        />
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            color: 'primary.main',
                            fontSize: '3.125rem',
                            position: 'relative',
                            fontWeight: '700',
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                bottom: '-10px',
                                left: 0,
                                height: '3px',
                                width: '100px',
                                bgcolor: 'primary.main',
                            },
                        }}>
                        Employees
                    </Typography>
                </Grid>
                <Grid item md={8}>
                    <Grid container spacing={2}>
                        <Grid item md={6}>
                            <Typography sx={{ color: 'primary.main', fontSize: '1.125rem' }}>
                                Search for Employee
                            </Typography>
                            <TextField
                                fullWidth
                                variant="outlined"
                                margin="normal"
                                placeholder="Enter Employee ID or Name"
                                InputProps={{
                                    style: {
                                        borderRadius: '18px',
                                        border: '1px solid blue',
                                        width: '100%',
                                    },
                                }}
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </Grid>
                        <Grid item md={6} sx={{ position: 'relative' }}>
                            <Button onClick={() => setOpen(!open)} sx={customAddBtnStyle}>
                                Add Employee
                            </Button>

                            <Dialog
                                open={open}
                                onClose={() => setOpen(false)}
                                fullWidth
                                maxWidth="md"
                                PaperProps={{ sx: { borderRadius: '20px', padding: '80px 50px' } }}>
                                <DialogContent>
                                    <FormControl>
                                        <Grid container spacing={2}>
                                            <Grid item md={7}>
                                                <Typography sx={customLabelStyle}>Employee Name</Typography>
                                                <TextField
                                                    required
                                                    placeholder="Employee Name"
                                                    fullWidth
                                                    variant="outlined"
                                                    InputProps={customInputProps}
                                                    value={employeeName}
                                                    onChange={(e) => setEmployeeName(e.target.value)}></TextField>
                                            </Grid>
                                            <Grid item md={5}>
                                                <Typography sx={customLabelStyle}>Employee ID</Typography>
                                                <TextField
                                                    required
                                                    placeholder="Employee ID"
                                                    fullWidth
                                                    variant="outlined"
                                                    InputProps={customInputProps}
                                                    value={employeeId}
                                                    onChange={(e) => setEmployeeId(e.target.value)}></TextField>
                                            </Grid>
                                            <Grid item md={7}>
                                                <Typography sx={customLabelStyle}>Designation</Typography>
                                                <TextField
                                                    required
                                                    placeholder="Designation"
                                                    fullWidth
                                                    variant="outlined"
                                                    InputProps={customInputProps}
                                                    value={designation}
                                                    onChange={(e) => setDesignation(e.target.value)}></TextField>
                                            </Grid>
                                            <Grid item md={5}>
                                                <Typography sx={customLabelStyle}>Phone Number</Typography>
                                                <TextField
                                                    required
                                                    placeholder="Phone Number"
                                                    fullWidth
                                                    variant="outlined"
                                                    InputProps={customInputProps}
                                                    value={phone}
                                                    onChange={(e) => setPhone(e.target.value)}></TextField>
                                            </Grid>
                                        </Grid>
                                        <Box sx={{ textAlign: 'center', marginTop: '100px' }}>
                                            <Button sx={customDeleteBtnStyle}>Delete</Button>
                                            <Button sx={customSaveBtnStyle} onClick={save}>
                                                Save
                                            </Button>
                                        </Box>
                                    </FormControl>
                                </DialogContent>
                            </Dialog>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SearchAndAddEmployee
