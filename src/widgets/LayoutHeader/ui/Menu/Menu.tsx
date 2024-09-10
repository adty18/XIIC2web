import { FC } from "react";
import { Menu } from "../../model/types";
import { Link } from "react-router-dom";

const Menu: FC<Menu> = ({ links }: Menu) => {
  return (
    <>
      <div className="navbar-start">
        <div className="flex-none">
          <tr>
            {links.map((link) => (
              <td key={link.name}>
                <Link className="mr-5" to={link.href}>
                  {link.name}
                </Link>
              </td>
            ))}
          </tr>
        </div>
      </div>
    </>
  );
};

export default Menu;
