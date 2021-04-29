import Link from 'next/Link'
import styles from '../styles/Home.module.css'

const About = () => {

    // this card will display and show the prompt and link to the specific chatroom
    return (
        <div className="text-center max-w-xl mx-auto mt-30 mb-10 mt-10">
        <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600">Thank you <br></br> for your visit!</h1>
        <h4 className="text-xl mb-5 font-light">
            I'm Vanessa Avila a software developer that joined the mintbean hackathon to learn about new technologies and push myself to complete a project even if it is small. The goal was to make separate chat rooms for users to talk with the current conversation. In the future the goal is to add a database that will allow users to log in and make their own chat rooms. 
        </h4>
      </div>
    )

};

export default About;