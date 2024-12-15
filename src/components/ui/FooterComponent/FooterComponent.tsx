import {FC} from 'react';
import styles from './FooterComponent.module.css'

interface IFooterComponentProps {
}

const FooterComponent: FC<IFooterComponentProps> = () => {
  return <footer className={`container ${styles.footer}`}>FooterComponent</footer>;
};

export default FooterComponent;