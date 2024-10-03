import styles from './Contacts.module.css';

const Contacts = () => {
  return (
    <section className={styles.contacts} id="contacts">
      <div className={styles.container}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d878.4598472325671!2d30.54398460656596!3d50.42014432112399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf6c96d00001%3A0x26aea51b084f03ca!2zTWFyaWkgUHJ5aW1hY2hlbmtvIEJsdmQsIDgsINC-0YTRltGBIDMsIEt5aXYsIDAxMDQy!5e0!3m2!1sen!2sua!4v1726950550558!5m2!1sen!2sua"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={styles.map}
        >
        </iframe>
      </div>
    </section>
  )
}

export default Contacts;