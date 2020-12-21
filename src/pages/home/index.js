import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
// import { setCookie } from '../../utils/cookie';

const Home = () => {
  const [name, setName] = useState();
  // const name = 'Daffa';

  // const onOkClick = () => {
  // console.log();
  // const data = {
  //   nama: name,
  // };
  // setCookie('name', JSON.stringify(data), 1000);
  // window.location.replace('/musicrecommendation');
  // };

  return (
    <Container
      style={{
        margin: '0',
        padding: '20px',
        position: 'absolute',
        top: '45%',
        textAlign: 'center',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgb(59, 79, 119, 0.6)',
        borderRadius: '5px',
        width: '300px',
        height: '200px',
        color: 'white',
      }}
    >
      <h2>{`Welcome ${name}`}</h2>
      <Form style={{ marginTop: '20px' }}>
        <Form.Group>
          <Form.Control
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Please insert your name..."
          />
        </Form.Group>
        <Link to="/musicrecommendation">
          <p
            style={{ position: 'absolute', right: '0', marginRight: '20px' }}
            // variant="primary"
            // type="button"
            // onClick={onOkClick}
          >
            Ok
          </p>
        </Link>
      </Form>
    </Container>
  );
};

export default Home;
