import { useEffect, useState } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import { useStyles } from "../pages/useStyles";

import dynamic from "next/dynamic";

const Plotadinho = dynamic(import("../components/Plotadinho"), {
  ssr: false,
  loading: () => <p>Loagind ...</p>,
});

function ChartList() {
  const classes = useStyles();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api/prophet/SNX")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  });
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <GridList cellHeight={500} className={classes.gridList} cols={3}>
          {items.map((item, index) => (
            <GridListTile key={`item-${index}`} cols={1}>
              <Plotadinho data={item} />
            </GridListTile>
          ))}
        </GridList>
      </main>
    );
  }
}

export default ChartList;
