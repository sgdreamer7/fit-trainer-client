import React from "react";
import PropTypes from "prop-types";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css";
import format from "date-fns/format";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

const styles = (theme) => ({
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  addVoteButton: {
    paddingBottom: "10px"
  }
});

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = (index) => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    const today = new Date();
    const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

    return (
      <div>
        <Grid container>
          <GridItem xs={3} sm={3} md={3}>
            <Button color="primary" className={classes.addVoteButton}>
              Add new exercise
            </Button>
          </GridItem>
          <GridItem xs={3} sm={3} md={3}>
            <Button color="primary" className={classes.addVoteButton}>
              Add new workout
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={12} container>
            <InfiniteCalendar
              width={420}
              height={500}
              selected={today}
              disabledDays={[0, 6]}
              minDate={lastWeek}
              markedDates={Array.from(new Array(7).keys()).map((index) =>
                format(
                  new Date(new Date().getTime() + ((index - 3) * 3 - 1) * 86400000),
                  "YYYY-MM-DD"
                )
              )}
            />
          </GridItem>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(withStyles(dashboardStyle)(Dashboard));
