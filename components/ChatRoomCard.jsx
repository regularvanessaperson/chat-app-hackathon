import Link from 'next/Link'
import styles from '../styles/Home.module.css'

const ChatRoomCard = ({ value, link, onSubmit, completed }) => {
{
      // this card will display and show the prompt and link to the specific chatroom
      return (
        <div className={styles.card}>
          <h3>{value}</h3>
          <Link href={link}>
          <a >Join the conversation</a>
          </Link>
        </div>
      );
    }
  };
  
  export default ChatRoomCard;