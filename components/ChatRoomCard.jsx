import Link from 'next/Link'
import styles from '../styles/Home.module.css'

const ChatRoomCard = ({ value, link, onSubmit, completed, count }) => {
  {
    // this card will display and show the prompt and link to the specific chatroom
    return (
     
        <div className="flex items-end bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div className="flex items-end flex-col mt-10">
            <p className="text-xl font-semibold flex items-start ">{value}</p>
            <div className="border-t-2"></div>
            <div className="flex flex-col items-end">
              <Link href={link} >
                <a className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Join the conversation</a>
              </Link>
            </div>
          </div>
        </div>
    
    );
  }
};

export default ChatRoomCard;