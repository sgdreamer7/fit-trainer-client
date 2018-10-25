import React from "react";
// @material-ui/icons
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Cancel from "@material-ui/icons/Cancel";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Table from "components/Table/Table.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomSelect from "components/CustomSelect/CustomSelect.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

function CreateWorkoutPage(props) {
  const { classes } = props;
  return (
    <div>
      <Grid container>
        <GridItem xs={12} sm={12} md={10}>
          <Card style={{ width: "950px" }}>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>New workout</h4>
            </CardHeader>
            <CardBody>
              <Grid container>
                <GridItem xs={12} sm={12} md={12}>
                  <Button color="primary">Add exercise</Button>
                </GridItem>

                <GridItem xs={12} sm={12} md={12}>
                  <Table
                    tableHeaderColor="primary"
                    tableData={Array.from(Array(5).keys()).map((index) => [
                      <CustomSelect
                        labelText="Exercise name"
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{ value: `id${Math.floor(Math.random() * 6)}` }}
                      >
                        <option value="id0">Exercise #1</option>
                        <option value="id1">Exercise #2</option>
                        <option value="id2">Exercise #3</option>
                        <option value="id3">Exercise #4</option>
                        <option value="id4">Exercise #5</option>
                        <option value="id5">Exercise #6</option>
                      </CustomSelect>,
                      <CustomInput
                        labelText="Repeats"
                        id="repeats"
                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{ value: Math.ceil(Math.random() * 3) }}
                      />,
                      <CustomInput
                        labelText="Measurement"
                        id="value"
                        formControlProps={{
                          fullWidth: false
                        }}
                        inputProps={{ value: Math.ceil(Math.random() * 10) }}
                      />,
                      <FormLabel>kg</FormLabel>,
                      <div>
                        <Button color="info">
                          <ArrowUpward />
                        </Button>
                        <Button color="info">
                          <ArrowDownward />
                        </Button>
                        <Button color="warning">
                          <Cancel />
                        </Button>
                      </div>
                    ])}
                  />
                </GridItem>
              </Grid>
            </CardBody>
            <CardFooter>
              <Button color="primary">Create workout</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(CreateWorkoutPage);
