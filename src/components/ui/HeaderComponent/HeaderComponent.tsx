import { FC } from "react";
import styles from './HeaderComponent.module.css'

interface IHeaderComponentProps {}

const HeaderComponent: FC<IHeaderComponentProps> = () => {

    const anchors = [
        {
            id: '#home',
            title: 'Home'
        },
        {
            id: '#about',
            title: 'About'
        },
        {
            id: '#skils',
            title: 'Skills'
        },
        {
            id: '#works',
            title: 'Works'
        },
        {
            id: '#contact',
            title: 'Contact'
        },
    ]

  return (
    <header className={`container ${styles.container}`}>
      <nav className={styles.nav}>
        {
            anchors.map(({id, title}) => <a className={`titleText`} key={id} href={id}>{title}</a>)
        }
      </nav>
    </header>
  );
};

export default HeaderComponent;
