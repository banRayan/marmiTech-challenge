import { useAuth } from "../../context/Auth";

import {
    Container,
    Link,
    Title
} from "./styles";

const Brand = () => {
    const { repo } = useAuth();
    return (
        <Container>
            <Link href={repo.html_url} rel='external' target="_blank">
                <Title>MarmiTech Challenge</Title>
            </Link>
        </Container>
    )
}

export default Brand;