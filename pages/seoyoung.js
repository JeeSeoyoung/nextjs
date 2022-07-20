import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Seoyoung = ()=>{
    return(
        <div className={styles.article}>
            <div className={styles.aboutMe}>
                <div className={styles.ProfileContainer}>
                    <Image className={styles.profileImage}
                        src="/images/profile_jsy.jpg"
                        height={180}
                        width={180}
                        alt="img"
                    />
                </div>
                <div className={styles.detail}>
                    <h4>
                        Jee Seoyoung
                    </h4>
                    <p>
                        Handong Global University
                    </p>
                    <p>
                        ICT Convergence/ UX Engineering
                    </p>
                    <p>
                        jiseo09863@gmail.com
                    </p>
                </div>
        
            <Link href="/">
            <a className={styles.card}>
                <h2>Home</h2>
            </a>
            </Link>
            </div>
        </div>
    );
}
export default Seoyoung;

