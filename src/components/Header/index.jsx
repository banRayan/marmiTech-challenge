import Brand from "../Brand";
import { Link } from "react-router-dom";

import { Container, Menu, MenuItem } from "./styles";

const Header = () => {
    return (
        <Container>
            <Brand />
            <Menu>
                <Link style={{ textDecoration: 'none' }} to={'/'}>
                    <MenuItem>Home</MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/features'}>
                    <MenuItem>Features</MenuItem>
                </Link>
                <Link style={{ textDecoration: 'none' }} to={'/contact'}>
                    <MenuItem>Contact</MenuItem>
                </Link>
            </Menu>
        </Container >
    )
}
export default Header;