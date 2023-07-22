import PropTypes from 'prop-types';
// @mui
import { Stack, Typography } from '@mui/material';
//
import NavList from './NavList';

// ----------------------------------------------------------------------

NavDesktop.propTypes = {
  data: PropTypes.array,
  isOffset: PropTypes.bool,
};

export default function NavDesktop({ isOffset, data }) {
  return (
    <Stack
      component="nav"
      direction="row"
      spacing={5}
      justifyContent="center"
      alignItems="center"
      sx={{ mr: 5, height: 1 }}
    >
      {data.slice(0, 3).map((link) => (
        <NavList key={link.title} item={link} isOffset={isOffset} />
      ))}
      <Typography
        variant="h3"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'black',
          textDecoration: 'none',
          flexGrow: 1,
          textAlign: 'center',
        }}
      >
        THE PASSION STUDIO
      </Typography>
      {data.slice(3, 6).map((link) => (
        <NavList key={link.title} item={link} isOffset={isOffset} />
      ))}
    </Stack>
  );
}
