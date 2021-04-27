import Link from 'next/Link'
import styles from '../styles/Home.module.css'

const ChatRoomCard = ({ value, link, onSubmit, completed }) => {
  {
    // this card will display and show the prompt and link to the specific chatroom
    return (
     
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl flex-1">
          <div class="mt-8">
            <p class="text-xl font-semibold my-2 grid justify-items-center flex-nowrap">{value}</p>
            <div class="flex space-x-2 text-gray-400 text-sm grid justify-items-center">

              <p>Number of people talking</p>
            </div>
            <div class="flex space-x-2 text-gray-400 text-sm my-3 grid justify-items-center">

              <p>1 </p>
            </div>
            <div class="border-t-2"></div>

            <div class="grid justify-items-center">
              <Link href={link}>
                <a >Join the conversation</a>
              </Link>
            </div>
          </div>
        </div>
    
    );
  }
};

export default ChatRoomCard;