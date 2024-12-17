import { FC } from "react";
import { AboutComponent, HomeComponent, SkillsComponent } from "../../components";

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

