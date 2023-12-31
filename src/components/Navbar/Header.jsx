import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppBar, Toolbar, Button } from '@mui/material';

import { isUserLogin } from 'redux/auth/auth-selectors';
import NavbarAuth from './NavbarAuth/NavbarAuth';
import UserMenu from './UserMenu/UserMenu';


function Header() {
  const isLogin = useSelector(isUserLogin);
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Button
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, justifyContent: 'left' }}
            color="inherit"
            onClick={() => navigate('/contacts')}
          >
            PHONEBOOK
          </Button>
          {!isLogin && <NavbarAuth />}
          {isLogin && <UserMenu />}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
