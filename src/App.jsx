import { useEffect, useState } from "react";
import { Accordion, Badge, Card, Col, Row } from "react-bootstrap";
//import data from "../public/data.json" assert { type: "json" };
const baseName = import.meta.env.BASE_URL;

const Text = ({ value = "", max = 100 }) => {
  value = value.length > max ? value.substring(0, max) : value;
  return <span>{value}</span>;
};

function App() {
  const [focus, setFocus] = useState({});
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${baseName}/data.json`)
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Row>
      <Col sm="6" md="3">
        <Accordion defaultActiveKey="0" size="sm">
          {data.map((it, ix) => {
            return (
              <Accordion.Item key={ix} eventKey={ix}>
                <Accordion.Header>
                  {it.title}
                  <Badge>{it.capitulos.length}</Badge>
                </Accordion.Header>
                <Accordion.Body className="scrolling-body">
                  <div>
                    {it.capitulos.map((it, ix) => {
                      return (
                        <Card key={ix} className="link">
                          <Card.Body>
                            <Badge>Cap: {it.nro}</Badge>
                            <a
                              target="_blank"
                              href={it.url}
                              onClick={() => setFocus(it)}
                            >
                              <b>{it.titulo}</b>
                            </a>
                            <Card.Text>
                              <Text value={it.resumen} max={200} />
                              <a
                                href={`#${it.nro}`}
                                onClick={() => setFocus(it)}
                              >
                                <b>PLAY</b>
                              </a>
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      );
                    })}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Col>
      <Col sm="6" md="9" className="video">
        <h2>
          <Badge>{focus.nro}</Badge> {focus.titulo}
        </h2>
        <p>{focus.resumen}</p>
        <iframe
          width={600}
          height={400}
          allowFullScreen
          src={focus.url}
        ></iframe>
      </Col>
    </Row>
  );
}

export default App;
