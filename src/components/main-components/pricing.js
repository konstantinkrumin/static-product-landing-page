import React from "react";

import Title from "../repeated-components/title";
import Button from "../repeated-components/button";

export default function Pricing() {
  return (
    <div id="pricing">
      <div id="pricing-option-1">
        <Title className="pricing-option-header" titleText="LIGHT ENBALI" />
        <p className="pricing-amount">$500/month</p>
        <div className="pricing-body">
          <p className="pricing-option-description">
            A suitable option for someone who has already arranged accommodation
            at the island.
          </p>
          <ul className="pricing-option-bulletpoints">
            <li>80 hours of any classes</li>
            <li>Unlimited access to our library</li>
            <li>Unlimited access to our online courses library</li>
          </ul>
        </div>
        <p className="select-option">
          <Button text="SELECT" />
        </p>
      </div>

      <div id="pricing-option-2">
        <Title className="pricing-option-header" titleText="BASIC ENBALI" />
        <p className="pricing-amount">$1200/month</p>
        <div className="pricing-body">
          <p className="pricing-option-description">
            The most popular option. You wouldn't need to worry about finding a
            place to live, commute to the classes, cooking or find a right place
            to eat. We got you!
          </p>
          <ul className="pricing-option-bulletpoints">
            <li>80 hours of any classes</li>
            <li>Accommodation on campus (4 people per room)</li>
            <li>Meal plan (3 times a day)</li>
            <li>Unlimited access to our library</li>
            <li>Unlimited access to our online courses library</li>
          </ul>
        </div>
        <p className="select-option">
          <Button text="SELECT" />
        </p>
      </div>

      <div id="pricing-option-3">
        <Title className="pricing-option-header" titleText="FULL ENBALI" />
        <p className="pricing-amount">$2000/month</p>
        <div className="pricing-body">
          <p className="pricing-option-description">
            RECOMMENDED OPTION! Choosing this option you would fully emerge into
            the EnBali experience. You would be able to attend as many classes
            as you wish, live in a single room with separate washroom and will
            be able to experience 4 getaways per month such as surfing,
            kitesurfing, snorkeling, diving, kayaking and hiking. We will take
            you to the most interesting and secluded spots on the island. Get
            ready for the adventure!
          </p>
          <ul className="pricing-option-bulletpoints">
            <li>Unlimited classes</li>
            <li>Accommodation on campus (single room)</li>
            <li>Meal plan (3 times a day)</li>
            <li>Weekend getaways (4 per month)</li>
            <li>Unlimited access to our library</li>
            <li>Unlimited access to our online courses library</li>
          </ul>
        </div>
        <p className="select-option">
          <Button text="SELECT" />
        </p>
      </div>
    </div>
  );
}
