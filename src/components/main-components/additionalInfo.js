import React from "react";

import TitleSmall from "../repeated-components/title-sm";

export default function AdditionalInfo() {
  return (
    <div id="additional-info">
      <TitleSmall
        className="additional-info-header"
        titleText="Additional information:"
      />
      <div id="additional-info-body">
        <ul>
          <li>
            If you chose BASIC ENBALI package you could change your
            accommodation option to single occupancy with separate washroom for
            extra $300/month.
          </li>
          <li>
            You can join the getaway activities that we provide with any package
            of your choice for extra cost of $50-$250. Please clarify the
            pricing at the front-desk and book an activity at least 24 hour
            prior.
          </li>
          <li>
            You can purchase meals on campus for $5 (each meal) and buy snacks
            at our convenience store.
          </li>
          <li>
            Airport Transfer from Denpasar (Ngurah Rai International Airport) to
            the campus in Kuta and from the campus to the airport can be
            arranged for $20/person. Please book 48 hours in advance.
          </li>
        </ul>
      </div>
    </div>
  );
}
