import React from "react";





const styles = {
  form: {
    background: "#e8eaf6",
    width: "50%",
	  margin: "0 auto"
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  },
  content: {
    padding: 20
  },
  label: {
    display: "block",
	marginBottom: "5px"
  },
  input: {
    width: "100%",
    padding: "10px",
    border:" 1px solid #ccc",
    borderRadius: "5px",
    marginBottom: "20px;",
    boxSizing: "border-box"
  },
 

};












// input[type="submit"]:hover {
// 	background-color: #3e8e41;
// }



function Contact(props) {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis
        molestie urna. Aliquam semper ultrices varius. Aliquam faucibus sit amet
        magna a ultrices. Aenean pellentesque placerat lacus imperdiet
        efficitur. In felis nisl, luctus non ante euismod, tincidunt bibendum
        mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum
        faucibus. Quisque nec metus vestibulum, egestas massa eu, sollicitudin
        ipsum. Nulla facilisi. Sed ut erat ligula. Nam tincidunt nunc in nibh
        dictum ullamcorper. Class aptent taciti sociosqu ad litora torquent per
        conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at
        rhoncus. Etiam vel condimentum magna, quis tempor nulla.
      </p>
      <form style={styles.form} id="contact-form" method="post" action="#">
        <label style={styles.label} for="name">Name:</label>
        <input style={styles.input} type="text" id="name" name="name" required />

        <label style={styles.label} for="email">Email:</label>
        <input style={styles.input} type="email" id="email" name="email" required />

        <label style={styles.label} for="subject">Subject:</label>
        <input style={styles.input} type="text" id="subject" name="subject" required />

        <label style={styles.label} for="message">Message:</label>
        <textarea style={styles.input} id="message" name="message" required></textarea>

        <input  type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
