import React from "react";
import {
  Menu,
  Container,
  Dropdown,
  Grid,
  Label,
  Icon,
} from "semantic-ui-react";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
  },
  {
    key: "Stevie Feliciano",
    text: "Stevie Feliciano",
    value: "Stevie Feliciano",
  },
  {
    key: "Christian",
    text: "Christian",
    value: "Christian",
  },
];

const Header = () => {
  return (
    <Menu fixed="top" borderless style={{ background: "skyBlue" }}>
      <Container>
        <Menu.Item as="a" header>
          Ambitious Ventures CRM
        </Menu.Item>
        <Dropdown item simple text="Customers">
          <Dropdown.Menu>
            <Dropdown.Item>View Customers</Dropdown.Item>
            <Dropdown.Item>Add Customer</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item simple text="Interactions">
          <Dropdown.Menu>
            <Dropdown.Item>View Customer Interactions</Dropdown.Item>
            <Dropdown.Item>Add Customer Interaction</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div>
          <Icon circular name="bell" style={{ marginTop: "5px" }} />
        </div>
        <Icon
          circular
          name="user"
          style={{ marginTop: "5px", marginLeft: "2px" }}
        />
        <Dropdown
          inline
          options={friendOptions}
          defaultValue={friendOptions[0].value}
        />
      </Container>
    </Menu>
  );
};

export default Header;
