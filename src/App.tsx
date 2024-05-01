import { useEffect, useState } from "react";
import { Accordion, Badge, Button, Col, Row, Table } from "react-bootstrap";
//import data from "../public/data.json";
const baseName = import.meta.env.BASE_URL;

function App() {
  const [focus, setFocus] = useState<any>({ nro: 0 });
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    fetch(`${baseName}/data.json`)
      .then((r) => r.json())
      .then((data) => setData(data));
  }, []);
  return (
    <Row>
      <Col sm="6" md="3">
        DRAGONBALL
        <Accordion defaultActiveKey="0">
          {data.map((it, ix) => {
            return (
              <Accordion.Item key={ix + 1} eventKey={`${ix}`}>
                <Accordion.Header>
                  <Badge>{it.capitulos.length}</Badge>
                  {it.title}
                </Accordion.Header>
                <Accordion.Body className="scrolling-body">
                  <Table variant="striped">
                    <tbody>
                      {it.capitulos.map((it: any, ix: number) => {
                        const className =
                          it.nro === focus.nro ? "bg-warning text-white" : "";
                        return (
                          <tr key={ix}>
                            <td className={className}>
                              <Badge>Cap: {it.nro}</Badge>
                            </td>
                            <td className={className}>
                              <a
                                target="_blank"
                                href={it.url}
                                onClick={() => setFocus(it)}
                              >
                                <b>{it.titulo}</b>
                              </a>
                            </td>
                            <td className={className}>
                              <a
                                href={`#${it.url}`}
                                onClick={() => setFocus(it)}
                              >
                                <b>PLAY</b>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Col>
      <Col sm="6" md="9">
        <h2>
          <Badge>{focus.nro}</Badge> {focus.titulo}
        </h2>
        <iframe
          width="400"
          height="300"
          allowFullScreen
          src={focus.url}
        ></iframe>
        <p>{focus.resumen}</p>
      </Col>
    </Row>
  );
}

export default App;
