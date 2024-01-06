import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import "./style.css";
const NavBar = () => {
  return (
    <NavigationMenu.Root className="NavigationMenuRoot">
      <NavigationMenu.List className="NavigationMenuList">
        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Link className="NavigationMenuLink" href="#">
            Home
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Link className="NavigationMenuLink" href="#">
            About
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item className="NavigationMenuItem">
          <NavigationMenu.Link className="NavigationMenuLink" href="#">
            Contact
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
export default NavBar;
