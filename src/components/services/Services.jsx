import icon from "../../assets/images/test-icon.svg";
import styles from "./Services.module.css";
import {services} from "./constants.js";

const Services = () => {
  return (
    <section className={styles.services} id="services">
      <h2 className="bold-xl">Терапевтичні послуги</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <div className={styles.icon}>
              <img src={icon} alt="service icon"/>
            </div>
            <h3 className="bold-m">{service.title}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
