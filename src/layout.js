import styled from "styled-components";

export const PageLayout = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  display: grid;
  grid-template-columns: max-content min-content 1fr min-content;
  grid-template-rows: repeat(2, min-content) 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "capitulos back title next"
    "capitulos back summary next"
    "capitulos video video video";

  > .capitulos {
    grid-area: capitulos;
    max-width: 500px;
  }

  > .title {
    grid-area: title;
  }

  > .video {
    grid-area: video;
    > iframe {
      width: 100%;
      height: 100%;
    }
  }

  > .back {
    grid-area: back;
  }

  > .summary {
    grid-area: summary;
  }

  > .next {
    grid-area: next;
  }
`;
