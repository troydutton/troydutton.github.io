import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div className="contact-section" id="contact">
        <h1 className='contact-header'>Contact Me</h1>
        <p className='contact-message'>Please feel free to reach out at <a href={`mailto:troydutton@utexas.edu`}>troydutton@utexas.edu</a>.</p>
    </div>
  );
}

export default Contact;