import React from "react";
import Style from "../../Styles/Style";
import { Card } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import StarRatingComponent from "react-star-rating-component";
import Status from "../../Common/Status";

export class GameCard extends React.Component {
  render() {
    const {
      game: {
        title,
        score,
        release_year: releaseYear,
        genre,
        platform,
        editors_choice: editorsChoice,
      },
    } = this.props;
    return (
      <React.Fragment>
        <Grid item xs={12} md={6}>
          <Card style={Style.RootCard}>
            <div
              className="layout-column"
              style={{ padding: `20px` }}
            >
              <div className="layout-row">
                <Grid container spacing={6}>
                  <Grid item xs={8} style={Style.CardHeading}>
                    {title}
                  </Grid>
                  <Grid item xs={4} style={Style.Stars}>
                    <StarRatingComponent
                      name="ratings"
                      editing={false}
                      starCount={score / 2}
                      value={score / 2}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="gap-top" >
                {editorsChoice==="Y"&&<Grid container spacing={16}>
                  <Status status="EDITORS_CHOICE" />
                </Grid>}
              </div>
              <div className="gap-top" >
                <div className="layout-row layout-xs-column layout-align-space-between">
                  <div className="layout-column layout-xs-row layout-align-xs-space-between mob-gap">
                    <Grid item style={Style.Heading}>
                      Genre
                    </Grid>
                    <Grid>{genre}</Grid>
                  </div>
                  <div className="layout-column layout-xs-row layout-align-xs-space-between mob-gap">
                    <Grid item style={Style.Heading}>
                      {" "}
                      Platform
                    </Grid>
                    <Grid item style={Style.BoldFont}>
                      {platform}
                    </Grid>
                  </div>
                  <div className="layout-column layout-xs-row layout-align-xs-space-between mob-gap">
                    <Grid item style={Style.Heading}>
                      Release Year
                    </Grid>
                    <Grid item style={Style.BoldFont}>
                      {releaseYear}
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </Grid>
      </React.Fragment>
    );
  }
}
export default GameCard;
