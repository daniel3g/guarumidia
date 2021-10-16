import styles from '../styles/components/SideBar.module.css';
import Image from 'next/image'

export function SideBar() {
  return (
    <div className={styles.container}> 
      <div>
        <Image src="/logo-guarumidia.png" width={212} height={58} />
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </div>
  );
}