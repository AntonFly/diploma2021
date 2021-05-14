import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Contract_plate } from "../plates/contract_plate/contract_plate";
import { Context } from "../../pages/project/Context";
import { Gran_plate } from "../plates/grand_plate/grant_plate";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const [showProducts, setShowProducts] = useContext(Context);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function grant(grants) {
  console.log(grants);
  if (grants.length === 0)
    return (
      <div>Нет субсидий зарегистрированных или обновленных в этом году</div>
    );
}

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const { classes, contracts, grants } = props;
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Контракты" {...a11yProps(0)} />
          <Tab label="Субсидии" {...a11yProps(1)} />
          <Tab label="Заказчики" {...a11yProps(2)} />
          <Tab label="Поставщики" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Всего контрактов с заданными параметрами: {contracts.total}
        {contracts.data.map((item, index) => {
          if (index < 3) return Contract_plate(item);
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {grant(grants.items)}
        {grants.items.map((item, index, grants) => {
          if (index < 1) return Gran_plate(item);
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </div>
  );
}
