import React, { useState } from 'react';
import {
  Navbar,
  Container,
  Form,
  Col,
  Button,
  FormControl,
  InputGroup,
  Alert,
} from 'react-bootstrap';
import { recommendation } from '../../services';
import { Loading, TableRecommendation } from '../../components';
import { logo } from '../../assets';

const MusicRecommendation = () => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [data, setData] = useState();
  const [error, setError] = useState();
  const nama = localStorage.getItem('name');

  const Capitalize = (str) => {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const onRecommendClick = () => {
    if (title.length > 0) {
      setLoading(true);
      recommendation
        .getRecommend(Capitalize(title))
        .then((res) => {
          if (res === 'Music not in Database') {
            setError(
              'Sorry, the song is not in our Database :( or you entered the wrong title'
            );
            setData();
            setTitle('');
          } else if (res !== 'Music not in Database') {
            setData(res);
          }
        })
        .catch((err) => {
          setError(err.message);
          setTitle('');
          setData();
        })
        .finally(() => {
          setLoading(false);
        });
    } else if (title.length === 0) {
      setError("You haven't filled in the song title");
      setData();
    }
  };

  const hideError = () => {
    setError(false);
  };

  return (
    <div>
      <Navbar
        sticky
        style={{
          paddingRight: '30px',
          paddingLeft: '20px',
          backgroundColor: 'rgb(59, 79, 119, 0.8)',
        }}
      >
        <Navbar.Brand
          style={{
            fontWeight: 'bold',
            fontSize: '30px',
            color: 'white',
            fontFamily: 'Permanent Marker, cursive',
          }}
        >
          <img
            style={{ width: '100px', marginRight: '-10px' }}
            alt="logo"
            src={logo}
          />
          MuTion
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text
            style={{
              fontSize: '18px',
              color: 'white',
              textDecoration: 'underline',
              fontFamily: 'Poiret One, cursive',
            }}
          >
            {`Hi ${nama}`}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      {error && (
        <div style={{ position: 'fixed', width: '100%', textAlign: 'center' }}>
          <Alert onClick={hideError} variant="danger">
            {error}
          </Alert>
        </div>
      )}
      <Container
        style={{
          paddingTop: '10px',
          marginTop: '55px',
          marginBottom: '50px',
          width: '900px',
          // maxHeight: '500px',
          // backgroundColor: 'red',
        }}
      >
        {nama && (
          <Form>
            <Form.Row className="align-items-center">
              <Col xs="auto">
                <Form.Label htmlFor="inlineFormInputGroup" srOnly>
                  Username
                </Form.Label>
                <InputGroup className="mb-2">
                  <FormControl
                    style={{
                      borderTopRightRadius: '0',
                      borderBottomRightRadius: '0',
                      borderTopLeftRadius: '5px',
                      borderBottomLeftRadius: '5px',
                      width: '400px',
                    }}
                    id="inlineFormInputGroup"
                    placeholder="What song do you like to hear?"
                    required
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </InputGroup>
              </Col>
              <Col
                xs="auto"
                style={{
                  marginLeft: '-10px',
                }}
              >
                <Button
                  style={{
                    borderTopLeftRadius: '0',
                    borderBottomLeftRadius: '0',
                    borderTopRightRadius: '5px',
                    borderBottomRightRadius: '5px',
                    backgroundColor: 'rgb(59, 79, 119, 0.8)',
                  }}
                  type="button"
                  className="mb-2"
                  onClick={onRecommendClick}
                >
                  Recommend me
                </Button>
              </Col>
            </Form.Row>
          </Form>
        )}
        {data && (
          <>
            <div style={{ fontWeight: 'bold', color: 'white', margin: '20px' }}>
              <h2>Made for you</h2>
              <h6>Get better recommendations the more you listen.</h6>
            </div>
            <TableRecommendation data={data} />
          </>
        )}
      </Container>
      {loading && <Loading />}
    </div>
  );
};

export default MusicRecommendation;
