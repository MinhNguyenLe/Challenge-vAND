import { Button, Grid, ListItem, ListItemText } from "@mui/material";
import { cloneElement } from "react";
import useCountriesCovid from "../hooks/useCountriesCovid";

const ListCountries = () => {
  const { data, isLoading } = useCountriesCovid();

  if (isLoading) return <span>Loading data...</span>;

  if (!data) return null;

  const filterByTotalConfirmed = () => {};

  const filterByHighestDeaths = () => {};

  const filterByLeastRecovered = () => {};

  return (
    <>
      <Grid>
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={filterByTotalConfirmed}
        >
          Most total confirmed cases
        </Button>
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={filterByHighestDeaths}
        >
          Highest number of deaths
        </Button>
        <Button
          sx={{ m: 2 }}
          variant="outlined"
          onClick={filterByLeastRecovered}
        >
          Least number of recovered cases
        </Button>
      </Grid>
      <>
        {data.map((value) =>
          cloneElement(
            <ListItem>
              <ListItemText primary={value.Country} />
            </ListItem>,
            {
              key: value.ID,
            }
          )
        )}
      </>
    </>
  );
};

export default ListCountries;
