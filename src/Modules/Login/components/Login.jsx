import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import LOGIN_IMAGE from "../../../assets/login.png";
import { increment } from "../slice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErrors, setPasswordErrors] = useState([]);

  const validatePassword = (password) => {
    const errors = [];
    const capitalLetterRegex = /[A-Z]/;
    const numberRegex = /\d/;
    const symbolRegex = /[@$!%*?&]/;

    if (password.length < 8) errors.push("Password should be at least 8 characters.");
    if (!capitalLetterRegex.test(password)) errors.push("Password must include at least one uppercase letter.");
    if (!numberRegex.test(password)) errors.push("Password must include at least one number.");
    if (!symbolRegex.test(password)) errors.push("Password must include at least one symbol.");

    return errors;
  };

  const handleLogin = () => {
    const errors = validatePassword(password);

    if (errors.length > 0) {
      setPasswordErrors(errors);
      return;
    }

    setPasswordErrors([]);
    dispatch(increment());
    navigate("/home");
  };

  return (
    <Container fluid style={{ height: "100vh", justifyContent: "center", alignItems: "center", fontFamily: "Noto Sans" }} >
      <Row className="justify-content-center align-items-center h-100 w-100">
        <Col xs={12} sm={12} lg={6} xl={6} className="d-grid justify-content-center text-align-center">
          <div>
            <h2 style={{ fontWeight: 700 }}>Sign In</h2>
            <h7 style={{ fontWeight: 700 }}> New user? <span className="text-primary">Create an account</span> </h7>
            <Form>
              <div>
                <Form.Group className="mb-3 mt-3">
                  <Form.Control value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username or email" style={{ borderRadius: "0", border: "2px solid black", width: "280px", height: "48px", marginBottom: "3vh", outline: "none" }} />
                  <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" style={{ borderRadius: "0", border: "2px solid black", width: "280px", height: "48px" }} />
                </Form.Group>

                {passwordErrors.length > 0 && (
                  <ul style={{ color: "red", fontWeight: 600, paddingLeft: "1rem", marginTop: "1rem", marginBottom: "0", maxWidth: "280px" }} >
                    {passwordErrors.map((err, index) => (<li key={index}>{err}</li>))}
                  </ul>
                )}

                <Form.Check type="checkbox" style={{ borderRadius: "0", fontWeight: 600, fontSize: 16 }} label="Keep me signed in" />
                <Button className="mt-3" style={{ backgroundColor: "#3C3C3C", width: "280px", height: "48px", outline: "none", border: "none" }} onClick={handleLogin} > Sign In </Button>
              </div>
            </Form>
          </div>
        </Col>
        <Col xs={12} sm={12} lg={6} xl={6}>
          <img alt="login" style={{ width: "474px", height: "561px" }} src={LOGIN_IMAGE} />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
