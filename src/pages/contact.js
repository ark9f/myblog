import Layout from "../components/layout"
import styles from "../styles/contact.module.scss"
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xeqnbdpb");
  if (state.succeeded) {
      return <p>Thank you for your email!</p>;
  }
  return (
      <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

const Contact = () => {
  return (
  <Layout headerType="s">
    <h1 className={styles.title}>Contact</h1>
    <ContactForm />
  </Layout>
  )
}

export default Contact