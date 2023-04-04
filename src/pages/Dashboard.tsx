import { LayoutMasterPage } from '../shared/layouts';
import { Box, Paper, useMediaQuery, Theme } from '@mui/material';

import { BarCharts, BarraFerramentas } from '../shared/components';

export const Dashboard = () => {
    
    return (
        <LayoutMasterPage 
        titulo='Dashboard' 
        barraDeFerramentas={(
            <BarraFerramentas isOpenDataMesAno={true} btnSalvar={false} btnNovo={false} btnVoltar={false}  />
          )}
        > 
            <Box gap={1}
                margin={1}
                padding={1}
                paddingX={2}
                height="auto"
                display="flex"
                flexDirection="column"
                alignItems="start"
                component={Paper} 
                >
                    <BarCharts />
            </Box>
        </LayoutMasterPage>
    );
}
