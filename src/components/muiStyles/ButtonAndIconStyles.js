import styled from '@emotion/styled';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SavedSearchOutlinedIcon from '@mui/icons-material/SavedSearchOutlined';
import MilitaryTechOutlinedIcon from '@mui/icons-material/MilitaryTechOutlined';
import PersonalVideoOutlinedIcon from '@mui/icons-material/PersonalVideoOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Button } from '@mui/material';

export const StyledShippingIcon = styled(LocalShippingOutlinedIcon, {
  name: 'StyledShippingIcon',
})({
  fontSize: '50px',
  margin: '0',
  padding: '0',
});

export const StyledSearchIcon = styled(SavedSearchOutlinedIcon, {
  name: 'styledSearchIcon',
})({
  fontSize: '50px',
  margin: '0',
  padding: '0',
});

export const StyledWarrantyIcon = styled(MilitaryTechOutlinedIcon, {
  name: 'StyledWarrantyIcon',
})({
  fontSize: '50px',
  margin: '0',
  padding: '0',
});

export const StyledTechIcon = styled(PersonalVideoOutlinedIcon, {
  name: 'StyledTechIcon',
})({
  fontSize: '50px',
  margin: '0',
  padding: '0',
});

export const StyledAddButton = styled(Button, {
  name: 'StyledAddButton',
})({
  width: '80%',
  color: 'black',
  border: '1px solid black',
  margin: '10px auto',
  ':hover': {
    backgroundColor: 'rgba(238, 144, 238, 0.1)',
    border: '1px solid black',
  },
});

export const StyledShoppingCart = styled(ShoppingCartOutlinedIcon, {
  name: 'StyledShoppingCart',
})({
  color: 'black',
  fontSize: '70px',
  position: 'relative',
  bottom: '10px',
});
