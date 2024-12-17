import { FC, useState } from "react";
import styles from "./WorksComponent.module.css";

import portfolio from '../../assets/img/o-liulchenko.png'

interface IWorksComponentProps {}

const WorksComponent: FC<IWorksComponentProps> = () => {
  interface IWork {
    title: string;
    description: string;
    image: string;
    stack: string[];
  }

  const works = [
    {
      title: 'Portfolio',
      description: 'This portfolio',
      image: portfolio,
      stack: ['HTML5', 'CSS', 'React']
    }
  ]

  const [currentWork, _setCurrentWork] = useState<IWork>(works[0])
  const {title, description, image, stack} = currentWork





  return (
    <section id="works" className={`container ${styles.container}`}>
      <div className={styles.wrapper}>
      <img src={image} alt="" className={styles.workImage}/>
      <article className={styles.content}>
        <h3 className={`titleText ${styles.title}`}>Works</h3>
        <h5 className={`titleText ${styles.workTitle}`}>{title}</h5>
        <p className={styles.workDescription}>{description}</p>
        <p className={styles.stackList}>
          {
            stack.map(title => <span className={styles.stackItem}>{title}</span>)
          }
        </p>
      </article>
      </div>
    </section>
  );
};

export default WorksComponent;
