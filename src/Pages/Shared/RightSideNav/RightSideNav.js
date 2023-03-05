import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ListGroup from "react-bootstrap/ListGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  const googleProvider=new GoogleAuthProvider();
  const {providerLogin}=useContext(AuthContext);

  const handleGoogleSignIn=()=>{
    providerLogin(googleProvider)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=>console.error(error));
  }

  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} variant="outline-primary" className="mb-2">
          <FaGoogle></FaGoogle> Login with Google
        </Button>
        <Button variant="outline-dark" className="mb-5">
          <FaGithub></FaGithub> Login with Github
        </Button>
      </ButtonGroup>
      <div>
        <h5>Find us on</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook></FaFacebook> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube></FaYoutube> Youtube
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaLinkedin></FaLinkedin> Linkdin
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp></FaWhatsapp> Whats app ac
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
            <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
