import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>Nothing special here for now. New features will be added soon. :)</p>
            <Link className='btn' to='/'>Go Back</Link>
        </div>
    )
}

export default About
