import { TimerIcon } from 'lucide-react'
import { Heading } from './components/Heading'
import './styles/global.css'

export const App = () => {
    return (
        <div>
            <Heading>
                Hello, World!
                <button>
                    <TimerIcon />
                </button>
            </Heading>

            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In
                harum dolores ipsum culpa totam ex ducimus perspiciatis, beatae
                esse iste explicabo ratione tempora quaerat odio earum
                inventore. Quos, reiciendis minus!
            </p>
        </div>
    )
}
