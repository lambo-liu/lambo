import React, { ReactElement } from "react";

import { Global } from "@emotion/react";

const Fonts = (): ReactElement => (
  <Global
    styles={`
      @font-face {
        font-family: "DisposableDroidBB";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(./fonts/DisposableDroidBB/Disposable-Droid-BB.ttf) format("truetype");
      }
      @font-face {
        font-family: "DisposableDroidBB";
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url(./fonts/DisposableDroidBB/Disposable-Droid-BB-Bold.ttf) format("truetype");
      }
      @font-face {
        font-family: "DisposableDroidBB";
        font-style: italic;
        font-weight: 400;
        font-display: swap;
        src: url(./fonts/DisposableDroidBB/Disposable-Droid-BB-Italic.ttf) format("truetype");
      }
      @font-face {
        font-family: "DisposableDroidBB";
        font-style: italic;
        font-weight: 700;
        font-display: swap;
        src: url(./fonts/DisposableDroidBB/Disposable-Droid-BB-Bold-Italic.ttf) format("truetype");
      }
      @font-face {
        font-family: "AkkuratMono";
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(./fonts/AkkuratMono/AkkuratMono-Regular.ttf) format("truetype");
      }
    `}
  />
);

export default Fonts;
