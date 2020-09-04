import React, { useEffect } from "react";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";

import { Container } from "semantic-ui-react";

function HomePage(props) {
  useEffect(() => {
    setTimeout(() => {
      toast({
        type: "info",
        icon: "calendar alternate outline",
        title: "Today's Agenda",
        description: "4 Calls to Make, 3 Meetings",
        animation: "bounce",
        time: 0,
      });
    }, 0);
  }, []);

  return (
    <Container text className="container" style={{ marginTop: "7em" }}>
      <SemanticToastContainer
        type="warning"
        title="The header of the toast"
        position="top-right"
      />
      <h3>Good afternoon.</h3>
      <p>
        Seitan eu try-hard la croix you probably haven't heard of them locavore.
        Sriracha cray offal, magna echo park swag dolore mollit pour-over cliche
        venmo irure scenester. Kickstarter live-edge shoreditch glossier
        locavore, anim forage adipisicing. Fashion axe schlitz cred roof party
        kinfolk, kale chips migas dolore kombucha retro gentrify subway tile
        drinking vinegar paleo.
      </p>
    </Container>
  );
}

export default HomePage;
