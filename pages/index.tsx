import { Typography, Container, styled } from '@material-ui/core';

import AppShell from '../components/AppShell';
import TechIcons from '../components/TechIcons';
import NavigationCards from '../components/NavigationCards';
import WelcomeBanner from '../components/WelcomeBanner';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(6),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
}));

const HomePage = () => {
  return (
    <AppShell pageTitle="Home page">
      <WelcomeBanner />

      <StyledContainer>
        <Typography color="primary" variant="h5">
          Feel free to explore my site 🔎
        </Typography>

        <NavigationCards />

        <Typography color="primary" variant="h5">
          I 💙 to work with the following technologies 🧙‍♂️
        </Typography>

        <TechIcons />
      </StyledContainer>
    </AppShell>
  );
};

export default HomePage;
