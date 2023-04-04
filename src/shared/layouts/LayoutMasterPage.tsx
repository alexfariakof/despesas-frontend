import { Typography, Theme, useTheme, useMediaQuery, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';
import MenuIcon from '@mui/icons-material/Menu';


interface ILayoutMasterPageProps {
    children: React.ReactNode;
    titulo: string;
    barraDeFerramentas?: React.ReactNode;
}

export const LayoutMasterPage: React.FC<ILayoutMasterPageProps> = ({ children, titulo, barraDeFerramentas }) => {
    const smDown = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
    const theme = useTheme();
    const { toggleDrawerOpen } = useDrawerContext();

    return (
        <Box height="100%" display="flex" flexDirection="column" gap={1}>
            <Box padding={1} display="flex" alignItems="center" height={theme.spacing(8)} >
                {smDown && (

                    <IconButton onClick={toggleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                )}
                <Typography variant='h5'>
                    {titulo}
                </Typography>
            </Box>

            {barraDeFerramentas && (
                <Box>
                    {barraDeFerramentas}
                </Box>
            )}

            <Box height="100%" width='100%' display="flex" margin={0} flexDirection="column" bgcolor='#00F12F' >
                {children}
            </Box>
        </Box>
    );
};