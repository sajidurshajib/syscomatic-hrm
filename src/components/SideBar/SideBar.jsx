import { Box } from '@mui/material'
import LogoSvg from '../../assets/img/todarok.svg'
import SideNav from './SideNav'

const SideBar = ({ children }) => {
    return (
        <Box sx={{ position: 'relative', paddingLeft: '435px' }}>
            <Box
                sx={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    height: '100vh',
                    width: '435px',
                    bgcolor: 'primary.main',
                    color: '#fff',
                }}>
                <img src={LogoSvg} alt="logo" style={{ margin: '100px 65px' }} />
                <SideNav />
            </Box>
            {children}
        </Box>
    )
}

export default SideBar
