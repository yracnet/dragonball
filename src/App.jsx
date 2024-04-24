import { useState } from "react";
import {
  Accordion,
  Badge,
  Card,
  CardGroup,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import data from "./data.json";
import { PageLayout } from "./layout";

const Text = ({ value = "", max = 100 }) => {
  value = value.length > max ? value.substring(0, max) : value;
  return <span>{value}</span>;
};

function App() {
  const [focus, setFocus] = useState(null);
  const onToStart = (e) => {
    // debugger;
    // const iframe = e.target;
    // const iframeDocument =
    //   iframe.contentDocument || iframe.contentWindow.document;
    // const videoPlayer = iframeDocument.querySelector("video");
    // if (videoPlayer) {
    //   videoPlayer.currentTime = 60;
    // }
  };
  return (
    <PageLayout>
      <div className="capitulos">
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
                    {it.capitulos.map((it) => {
                      return (
                        <Card className="link">
                          <Card.Body>
                            <Badge>Cap: {it.nro}</Badge>
                            <a
                              target="_blank"
                              href={it.url}
                              onClick={(e) => setFocus(it)}
                            >
                              <b>{it.titulo}</b>
                            </a>
                            <Card.Text>
                              <Text value={it.resumen} max={200} />
                              <a
                                href={`#${it.titulo}`}
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
      </div>
      <div className="video">
        <iframe allowFullScreen onLoad={onToStart} src={focus?.url}></iframe>
      </div>
      <div className="title">
        <h2>
          <Badge>{focus?.nro}</Badge> {focus?.titulo}
        </h2>
      </div>
      <div className="back"></div>
      <div className="summary">{focus?.resumen}</div>
      <div className="next"></div>

      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </PageLayout>
  );
}

export default App;
