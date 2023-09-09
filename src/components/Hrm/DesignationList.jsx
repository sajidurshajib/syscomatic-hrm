import { Box, Typography } from '@mui/material'
import EveryoneLogo from '../../assets/img/everyone.png'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { insert, clear } from '../../redux/filterSlice'

const DesignationList = () => {
    const dispatch = useDispatch()

    const [designations, setDesignations] = useState([])

    const employee = useSelector((state) => state.employee)

    const filterClick = (filterKey) => {
        const data = employee.filter((v) => v.designation === filterKey)
        dispatch(insert(data))
    }

    useEffect(() => {
        let newArr = [...employee]
        let check = []
        let resArr = []

        newArr.forEach((pro) => {
            if (!check.includes(pro.designation)) {
                let res = newArr.filter((el) => el.designation === pro.designation)
                check.push(pro.designation)

                if (res.length) {
                    resArr.push({ designation: pro.designation, total: res.length })
                }
            }
        })

        setDesignations(resArr)
    }, [employee])

    return (
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    margin: '20px 0',
                    padding: '10px 40px',
                    boxSizing: 'border-box',
                    borderRadius: '10px',
                    width: '100%',
                    border: '1px solid transparent',
                    '&:hover': {
                        border: '1px solid blue',
                        cursor: 'pointer',
                    },
                }}
                onClick={() => dispatch(clear())}>
                <Box sx={{ padding: '8px 20px 8px 0' }}>
                    <img src={EveryoneLogo} alt="logo" />
                </Box>
                <Box>
                    <Typography sx={{ fontSize: '1.125rem', color: 'primary.main', fontWeight: '700' }}>
                        All Employee{' '}
                    </Typography>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: '400' }}>Total: {employee.length}</Typography>
                </Box>
            </Box>
            {designations.map((v, i) => {
                return (
                    <Box
                        key={i}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            margin: '20px 0',
                            padding: '10px 40px',
                            boxSizing: 'border-box',
                            borderRadius: '10px',
                            width: '100%',
                            border: '1px solid transparent',
                            '&:hover': {
                                border: '1px solid blue',
                                cursor: 'pointer',
                            },
                        }}
                        onClick={() => filterClick(v.designation)}>
                        <Box sx={{ padding: '8px 20px 8px 0' }}>
                            <img src={EveryoneLogo} alt="logo" />
                        </Box>
                        <Box>
                            <Typography sx={{ fontSize: '1.125rem', color: 'primary.main', fontWeight: '700' }}>
                                {v.designation}
                            </Typography>
                            <Typography sx={{ fontSize: '0.875rem', fontWeight: '400' }}>Total: {v.total}</Typography>
                        </Box>
                    </Box>
                )
            })}
        </Box>
    )
}

export default DesignationList
