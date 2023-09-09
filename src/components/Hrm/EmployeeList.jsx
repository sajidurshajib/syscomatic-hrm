import { Box, Typography } from '@mui/material'
import { makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import PenLogo from '../../assets/img/pen.svg'
import Fb from '../../assets/img/fb.png'

const useStyles = makeStyles({
    table: { width: '100%', fontFamily: 'Montserrat, sans-serif', borderCollapse: 'separate', borderSpacing: '0 1rem' },
    tableTr: {
        width: '100%',
        '&>th': { color: '#ababab', fontSize: '1.125rem', textAlign: 'left', lineHeight: '40px' },
        '& td>img': { cursor: 'pointer' },
    },
})

const EmployeeList = () => {
    const employee = useSelector((state) => state.employee)
    const filter = useSelector((state) => state.filter)

    let finalEmployee = filter.length !== 0 ? filter : employee

    const classes = useStyles()

    return (
        <div>
            <table className={classes.table}>
                <thead>
                    <tr className={classes.tableTr}>
                        <th>Employee</th>
                        <th>Designation</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {finalEmployee.map((v, i) => {
                        return (
                            <tr key={i} className={classes.tableTr}>
                                <td>
                                    <Box
                                        sx={{
                                            '&>img': {
                                                width: '38px',
                                                height: '38px',
                                                marginTop: '5px',
                                                marginRight: '10px',
                                                borderRadius: '80px',
                                            },
                                            display: 'flex',
                                        }}>
                                        <img src={Fb} alt="pro" />
                                        <Box>
                                            <Typography
                                                sx={{ fontSize: '1.125rem', fontWeight: '600', color: 'primary.main' }}>
                                                {v.employeeName}
                                            </Typography>
                                            <Typography sx={{ fontSize: '0.875rem' }}>ID: {v.employeeId}</Typography>
                                        </Box>
                                    </Box>
                                </td>
                                <td>
                                    <Typography sx={{ fontSize: '1.125rem', fontWeight: '400' }}>
                                        {v.designation}
                                    </Typography>
                                </td>
                                <td>
                                    <Typography sx={{ fontSize: '1.125rem', fontWeight: '400' }}>{v.phone}</Typography>
                                </td>
                                <td>
                                    <img src={PenLogo} alt="edit" />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList
