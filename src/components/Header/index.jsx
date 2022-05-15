import Brand from "../Brand";
import { Container, Link, Menu, MenuItem } from "./styles";

const Header = () => {
    return (
        <Container>
            <Brand />
            <Menu>
                <Link href="#">
                    <MenuItem>Home</MenuItem>
                </Link>
                <Link href="#">
                    <MenuItem>Features</MenuItem>
                </Link>
                <Link href="#">
                    <MenuItem>Contact</MenuItem>
                </Link>
            </Menu>
        </Container>
    )
}
export default Header;