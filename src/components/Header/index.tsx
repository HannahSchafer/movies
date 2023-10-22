import { useState } from "react";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Autocomplete, Group, Burger, rem } from "@mantine/core";
import "./styles.css";
import { useDisclosure } from "@mantine/hooks";
import { IconSearch } from "@tabler/icons-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useStoreContext } from "../../stores/StoreContext";

const links = [{ link: "/", label: "Home" }];

const HeaderSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // const [opened, { toggle }] = useDisclosure(false);
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const {
    state: { searchTerm },
    actions: { setSearchTerm },
  } = useStoreContext();

  const items = links.map((link, i) => (
    <Link key={i} to={link.link} className="link">
      {link.label}
    </Link>
  ));

  const handleChange = (val: string) => {
    if (!val) {
      navigate(`/`);
    } else {
      navigate(`/search`);
    }
    // window.clearTimeout(timeoutRef.current);
    setSearchTerm(val);
    // setData([]);

    // if (val.trim().length === 0 || val.includes("@")) {
    //   setLoading(false);
    // } else {
    //   setLoading(true);
    // }
  };

  console.log("value", value);

  return (
    <header className="header">
      <div className="inner">
        <Group>
          <Group gap={5} className="links" visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            value={searchTerm}
            data={data}
            onChange={handleChange}
            className="search"
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            visibleFrom="xs"
          />
        </Group>
      </div>
    </header>
  );
};

export default HeaderSearch;
