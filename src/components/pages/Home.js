import React from "react";
import reactImage from "../../assets/reactImage.jpeg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const styles = {
  body: {
  background: "#e8eaf6",
  margin: "0px",
	padding: "0px",
	fontFamily: "Arial, sans-serif"
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
  

};




function Home() {
  return (
    <Container>
      <Row>
        <Col><img src={reactImage} alt={"Profile"}  /></Col>
        <Col lg={9} style={styles.body}> 
        <h2>About Me</h2>
        <p>
        Welcome to my page. I am a web developer with techincal skills in HTML5, CSS, JavaScript, React JS, Node JS. This
        Portfolio website was created with React JS. This is a skeleton of the website and I hope to style it professionally
        into a well functional website at the end of the bootcamp. The bootcamp is one of my best decisions for the year 2023.
        Stay tuned in.
      </p></Col>
      </Row>
    </Container>
  );
}
export default Home;






