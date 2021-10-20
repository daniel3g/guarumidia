import styles from '../styles/components/SideBar.module.css';
import { FaPhoneAlt, FaEnvelope, FaClock, FaFacebookF, FaInstagram, FaYoutube} from 'react-icons/fa';

export function SideBar() {
  return (
    <div className={styles.container}> 
      <div>        
       <p className={styles.dadosSidebar}><FaPhoneAlt color="#495057" /> 11 96556-9602</p>
      </div>

      <div>
        <p className={styles.dadosSidebar}><FaEnvelope color="#495057" /> contato@guarumidia.com</p>
      </div>

      <div>
        <p className={styles.dadosSidebar}><FaClock color="#495057" /> Seg. a Sex. 8h - 22h</p>
      </div>

      <div>
        <span className={styles.dadosSidebarSocial}><FaFacebookF color="#495057" /></span>
        <span className={styles.dadosSidebarSocial}><FaInstagram color="#495057" /></span>
        <span className={styles.dadosSidebarSocial}><FaYoutube color="#495057" /></span>
      </div>
      
    </div>
  );
}