import { Box } from '@mui/material'
import { Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import DashboardLogo from '../../assets/img/dashboard.png'
import AddStockLogo from '../../assets/img/add_stock.png'
import BillingLogo from '../../assets/img/billing.png'
import AccountsLogo from '../../assets/img/accounts.png'
import ReportingLogo from '../../assets/img/reporting.png'
import HrmLogo from '../../assets/img/hrm.png'
import SettingsLogo from '../../assets/img/settings.png'
import ArrowRight from '../../assets/img/arrow_right.svg'

const useStyle = makeStyles((theme) => ({
    customLink: {
        color: '#fff',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '1.5rem',
        fontWeight: '600',
        display: 'block',
        position: 'relative',
        marginBottom: '30px',
        '&:hover': {
            textDecoration: 'none',
        },
        '&>img': {
            marginRight: '10px',
        },
    },
    rightArrow: {
        position: 'absolute',
        left: '200px',
        top: '8px',
    },
}))

const SideNav = () => {
    const classes = useStyle()

    return (
        <Box sx={{ margin: '0 65px' }}>
            <Link href="#" className={classes.customLink}>
                <img src={DashboardLogo} alt="dashboard" /> Dashboard
            </Link>
            <Link href="#" className={classes.customLink}>
                <img src={AddStockLogo} alt="add stock" /> Add Stock
            </Link>
            <Link href="#" className={classes.customLink}>
                <img src={BillingLogo} alt="billing" /> Billing
            </Link>
            <Link href="#" className={classes.customLink}>
                <img src={AccountsLogo} alt="accounts" /> Accounts{' '}
                <img src={ArrowRight} alt="arrow" className={classes.rightArrow} />
            </Link>
            <Link href="#" className={classes.customLink}>
                <img src={HrmLogo} alt="hrm" /> HRM
            </Link>
            <Link href="#" className={classes.customLink}>
                <img src={ReportingLogo} alt="reporting" /> Reporting
                <img src={ArrowRight} alt="arrow" className={classes.rightArrow} />
            </Link>
            <Link href="#" className={classes.customLink}>
                <img src={SettingsLogo} alt="reporting" /> Settings
            </Link>
        </Box>
    )
}

export default SideNav
