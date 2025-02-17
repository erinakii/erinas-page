'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
    h2: {
      fontFamily: '"Darumadrop One", sans-serif',
      fontWeight: '400',
      fontStyle: 'normal'
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h3',
          h2: 'h3',
          h3: 'h4',
          h4: 'h5',
          h5: 'h6',
          h6: 'h7',
          subtitle1: 'h4',
          subtitle2: 'h4',
          body1: 'span',
          body2: 'span',
        },
      },
    },
  },
});

export default theme;