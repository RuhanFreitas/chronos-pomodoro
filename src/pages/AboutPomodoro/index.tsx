import { Container } from '../../components/Container'
import { GenericHtml } from '../../components/GenericHmtl'
import { Heading } from '../../components/Heading'
import { RouterLink } from '../../components/RouterLink'
import { MainTemplate } from '../../templates/MainTemplate'

export const AboutPomodoro = () => {
    return (
        <MainTemplate>
            <Container>
                <GenericHtml>
                    <Heading>The Pomodoro Technique</Heading>

                    <p>
                        The <strong>Pomodoro Technique</strong> is a
                        productivity methodology created by
                        <strong>Francesco Cirillo</strong>, which consists of
                        dividing work into time blocks (the famous "Pomodoros")
                        interspersed with breaks. The goal is to maintain full
                        focus for a short period and ensure breaks to avoid
                        mental fatigue.
                    </p>

                    <img src="https://placehold.co/1920x1080" alt="" />

                    <h2>How does the traditional Pomodoro work?</h2>
                    <ul>
                        <li>
                            <strong>1. Choose a task</strong> you want to work
                            on.
                        </li>
                        <li>
                            <strong>2. Work on it for 25 minutes</strong>{' '}
                            without interruptions.
                        </li>
                        <li>
                            <strong>3. Take a short 5-minute break</strong>.
                        </li>
                        <li>
                            <strong>
                                4. After 4 cycles, take a long break
                            </strong>{' '}
                            (usually 15 to 30 minutes).
                        </li>
                    </ul>

                    <h2>
                        But <strong>Chronos Pomodoro</strong> has a special
                        twist 🚀
                    </h2>

                    <p>
                        Our app follows the original concept but with some
                        improvements and customizations to make the process even
                        more efficient:
                    </p>

                    <h3>⚙️ Time customization</h3>
                    <p>
                        You can set your own focus, short break, and long break
                        times! Just go to the
                        <RouterLink href="/settings">
                            settings page
                        </RouterLink>{' '}
                        and adjust the minutes as you prefer.
                    </p>

                    <h3>🔁 Cycles organized in sequence</h3>
                    <p>
                        Each completed cycle is automatically added to your
                        history, and the app suggests the next cycle (focus or
                        break).
                    </p>
                    <p>
                        <strong>Our default pattern:</strong>
                    </p>
                    <ul>
                        <li>
                            <strong>Odd cycles</strong>: Work (focus).
                        </li>
                        <li>
                            <strong>Even cycles</strong>: Short break.
                        </li>
                        <li>
                            <strong>Cycle 8</strong>: Special long break to
                            reset the full cycle.
                        </li>
                    </ul>

                    <h3>🍅 Cycle visualization</h3>
                    <p>
                        Right below the timer, you'll see colored dots
                        representing the cycles:
                    </p>
                    <ul>
                        <li>🟡 Yellow: Work cycle (focus).</li>
                        <li>⚪ White: Short break.</li>
                        <li>🔵 Blue: Long break.</li>
                    </ul>
                </GenericHtml>
            </Container>
        </MainTemplate>
    )
}
