import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import styles from "./Services.module.css";
import {services} from "./constants.js";

const icons = [icon1, icon2, icon3];

const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.container}>
        <h2 className="bold-xl">Терапевтичні послуги</h2>
        <ul>
          {services.map((service, index) => (
            <div className={styles.row} key={index}>
              {services.slice(index * 3, index * 3 + 3).map((item, i) => (
                <li key={i}>
                  <h3 className="bold-m">{item.title}</h3>
                  <img src={icons[i % icons.length]} alt="service icon"/>
                  <p>{item.description}</p>
                </li>
              ))}
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
