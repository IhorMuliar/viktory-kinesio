import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
import icon3 from "../../assets/images/icon3.png";
import styles from "./Services.module.css";
import { services } from "./constants.js";

const icons = [icon1, icon2, icon3];

const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const Services = () => {
  const groupedServices = chunkArray(services, 3);

  return (
    <section className={styles.services} id="services">
      <div className={styles.container}>
        <h2 className="bold-xl">Терапевтичні послуги</h2>
        <ul>
          {groupedServices.map((group, groupIndex) => (
            <div className={styles.row} key={groupIndex}>
              {group.map((item, i) => (
                <li key={i}>
                  <h3 className="bold-m">{item.title}</h3>
                  <img src={icons[i % icons.length]} alt="service icon" />
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
