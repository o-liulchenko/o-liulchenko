import { Outlet } from "react-router-dom";
import styles from './MainLayout.module.css'
import { FooterComponent, HeaderComponent } from "../../components";

const MainLayout = () => {
  return (
    <div className={styles.mainLayout}>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </div>
  );
};

export default MainLayout;
