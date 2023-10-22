import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { Autocomplete, Group, rem } from "@mantine/core";
import "./styles.css";
import { IconSearch } from "@tabler/icons-react";
import {
  Link,
  useNavigate,
  useLocation,
  createSearchParams,
} from "react-router-dom";
import { useStoreContext } from "../../stores/StoreContext";

const links = [{ link: "/", label: "Home" }];

const HeaderSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("loc", location);
  const {
    state: { searchTerm },
    actions: { setSearchTerm },
  } = useStoreContext();

  const items = links.map((link, i) => (
    <Link
      key={i}
      to={link.link}
      className="link"
      onClick={() => setSearchTerm("")}
    >
      {link.label}
    </Link>
  ));

  const handleChange = (val: string) => {
    if (!val) {
      navigate(`/`);
    } else {
      navigate({
        pathname: "search",
        search: createSearchParams({
          query: val,
        }).toString(),
      });
    }
    setSearchTerm(val);
  };

  return (
    <header className="header">
      <div className="inner">
        <Group>
          <Group gap={5} className="links" visibleFrom="sm">
            {items}
          </Group>
          <Autocomplete
            value={searchTerm}
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
