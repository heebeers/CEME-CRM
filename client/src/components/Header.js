import React from "react";
import { Menu, Container, Dropdown, Icon } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
          <Link to={"/"} style={{ color: "black" }}>
            Ambitious Ventures CRM
          </Link>
        </Menu.Item>
        <Dropdown item simple text="Customers">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={"/listCustomers"} className="navbar-brand">
                <Icon name="binoculars" style={{ marginRight: "5px" }} />
                View Customers
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"/create"} className="navbar-brand">
                <Icon name="add" style={{ marginRight: "5px" }} />
                Add Customer
              </Link>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item simple text="Interactions">
          <Dropdown.Menu>
            <Dropdown.Item>
              <Link to={"/listInteractions"} className="navbar-brand">
                <Icon name="binoculars" style={{ marginRight: "5px" }} />
                View Customer Interactions
              </Link>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link to={"/addInteraction?id=null"} className="navbar-brand">
                <Icon name="add" style={{ marginRight: "5px" }} />
                Add Customer Interaction
              </Link>
            </Dropdown.Item>
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
      </Container>
    </Menu>
  );
};

export default Header;
