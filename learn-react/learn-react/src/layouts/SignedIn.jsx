import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="" />
        <Dropdown pointing="center" text="Kaan" >
          <Dropdown.Menu>
            <Dropdown.Item text="About" icon="info" />
            <Dropdown.Item onClick={props.signOut} text="Sign Out" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
