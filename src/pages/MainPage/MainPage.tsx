import { FC } from "react";
import { AboutComponent, ContactComponent, HomeComponent, SkillsComponent, WorksComponent } from "../../components";

interface IMainPageProps {}

const MainPage: FC<IMainPageProps> = () => {

  return (
    <div>
      <HomeComponent />
      <AboutComponent />
      <SkillsComponent />
    </div>
  );
};

export default MainPage;

