import React from "react";

import Form from "./main-components/form";
import Features from "./main-components/features";
import Reviews from "./main-components/reviews";
import IFrame from "./main-components/iFrame";
import Pricing from "./main-components/pricing";
import AdditionalInfo from "./main-components/additionalInfo";

export default function Main() {
  return (
    <main>
      <Form
        type="email"
        action="https://www.freecodecamp.com/email-submit"
        placeholder="Enter your email address"
        buttonValue="GET STARTED"
      />

      <div id="body-text">
        <Features />
        <Reviews />
      </div>

      <IFrame video_src="https://www.youtube.com/embed/nHXF1ul8S44" />
      <Pricing />
      <AdditionalInfo />
    </main>
  );
}
