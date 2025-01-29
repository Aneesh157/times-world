import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Footer from '../../Common/components/Footer';
import Header from '../../Common/components/Header';
import { setCountries } from "../slice";

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.home.countries);
  const [showItems, setShowItems] = useState(10);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag');
        dispatch(setCountries(response?.data));
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchCountries();
  }, [dispatch]);

  const handleLoadMore = () => {
    setShowItems((prev) => prev + 10);
  };

  return (
    <Container className='p-2'>
        <Header/>
      <Carousel style={{ border: '1px solid #000', borderRadius: '8px' }} variant="dark">
        {countries?.slice(0, 4).map((item, index) => (
          <Carousel.Item key={index}>
            <div style={{ textAlign: "center" }}>
              <img src={item?.flag || ""} alt={"flag"} style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius: "8px" }} />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      {countries?.slice(0, showItems)?.reduce((rows, val, index) => {
        if (index % 2 === 0) {
          rows.push([]);
        }
        rows[rows.length - 1].push(val);
        return rows;
      }, [])?.map((row, index) => (
        <Row key={index} className="mt-3">
          {row?.map((val, idx) => (
            <Col key={idx} xs={12} sm={6} md={6} lg={6} xl={6} className="mb-3">
              <Card>
                <Card.Body>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div>
                      <img style={{ width: "127px", height: "96px" }} alt='flag' src={val?.flag || ""}></img>
                    </div>
                    <div>
                      <h4>{val?.name} </h4>
                      <h7>{val?.region} </h7>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ))}

      {countries?.length > showItems && (
        <div className="d-flex justify-content-center mt-4">
          <Button onClick={handleLoadMore} style={{ width: "200px", backgroundColor: "#3C3C3C", border: "none", borderRadius: "0"  }}> Load More </Button>
        </div> )}
      <Footer/>
    </Container>
  );
};

export default Home;
