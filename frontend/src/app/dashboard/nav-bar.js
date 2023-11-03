import Link from 'next/link';
import Image from 'next/image';
import styles from './nav-bar.module.css';

const Navigation = () => {
  return (
      <nav>
          <div className={styles['navigation-container']}>
            <Link href="/" legacyBehavior>
                <a>
                <Image src="/logo.png" alt="Logo" width={100} height={30} />
                </a>
            </Link>
            <ul className={styles.myList}>
                <li>
                <Link href="/page1"> Page 1 </Link>
                </li>
                <li>
                <Link href="/page2"> Page 2 </Link>
                </li>
                <li>
                <Link href="/page3"> Page 3 </Link>
                </li>
                <li>
                <Link href="/page4"> Button 1 </Link>
                </li>
                <li>
                <Link href="/page4"> Button 2 </Link>
                </li>
            </ul>
        </div>
    </nav>
  );
};

export default Navigation;
