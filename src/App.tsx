import './styles/theme.css'
import './styles/global.css'

import { Heading } from './components/Heading'
import { Container } from './components/Container'

export const App = () => {
    return (
        <>
            <Container>
                <Heading>Logo</Heading>
            </Container>

            <Container>
                <Heading>Menu</Heading>
            </Container>
        </>
    )
}
