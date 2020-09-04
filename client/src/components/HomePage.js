import React from "react";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";

import { Container } from "semantic-ui-react";

function HomePage(props) {
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

  return (
    <Container text className="container" style={{ marginTop: "7em" }}>
      <SemanticToastContainer
        type="warning"
        title="The header of the toast"
        position="top-right"
      />
      <h3>Are you on the road to victory?</h3>
      <p>
        Go ahead... Make a wish... Now call your Ambitious Ventures Customer
        Support agent. Because today, planning makes wishes come true. And your
        Ambitious Ventures Customer Support agent can help make sure that
        “family security”, “college funding”, and even a “healthy retirement”
        are in the stars for you. Your Ambitious Ventures Customer Support agent
        wants to be your agent for life. You're on the road to victory with
        Ambitious Ventures.
      </p>
    </Container>
  );
}

export default HomePage;
