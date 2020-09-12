import React from "react";

import Title from "../repeated-components/title";

export default function Reviews() {
  return (
    <div id="reviews">
      <Title className="reviews-title" titleText="Reviews" />
      <p>
        EnBali school helped me to improve my English level from A2 to B2 level
        through very fun and efficient classes. Moreover than that I was able to
        fully experience Bali magic in those amazing 6 months of my life in
        2015. - Carlos, Mexico
      </p>
      <p>
        Thank you EnBali for giving me those 8 months full of learning, joy and
        adventure! I could not imagine a better way to spend my time after
        graduation from the university. - Michelle, France
      </p>
      <p>
        It was an amazing time in Bali learning English and experiencing the
        best adventure of my life with EnBali! Great way to learn English, meet
        new friends and experience this magical island. Excellent! - Vitaly,
        Russia
      </p>
    </div>
  );
}
