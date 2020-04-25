import React from "react";
import GameService from "../../Service/GameService";
import GameCard from "./GameCard";
import Grid from "@material-ui/core/Grid";
import PageLoader from "../../Common/PageLoader";
import PrimaryButton from "../../Common/Buttons";
import SearchField from "../../Common/SearchFld";

export class CardProvider extends React.Component {
  state = {
    hasError: false,
    listLoading: false,
    gameList: [],
    splicedList: [],
    rootList: [],
    gameSearchText: "",
    gameSearchValue: "",
  };

  async componentDidMount() {
    try {
      this.setState({ listLoading: true });
      const gameResponse = await this.getGameList();
      this.setGameList(gameResponse.data);
    } catch (err) {
      this.setState({ hasError: true });
    } finally {
      this.setState({ listLoading: false });
    }
  }
  getGameList = async () => {
    const response = await GameService.getGameList();
    return response;
  };

  setGameList = (gameList) => {
    this.setState({
      gameList,
      rootList: gameList,
      splicedList: gameList.slice(0, 16),
    });
  };
  onViewMoreCLick = () => {
    const { gameList, splicedList, gameSearchValue } = this.state;
    if (splicedList.length >= gameList) return;
    const list = splicedList.concat(
      gameList.slice(splicedList.length + 1, splicedList.length + 16)
    );
    let filterList = list;
    if (gameSearchValue) {
      filterList = list.filter((item) => item.title.includes(gameSearchValue));
    }
    const updatedList = JSON.parse(JSON.stringify(filterList));
    this.setState({ splicedList: updatedList });
  };
  onSearchButtonClick = async (operation) => {
    const { gameSearchText } = this.state;
    let gameSearchValue = gameSearchText;
    if (operation === "clear") {
      gameSearchValue = "";
      this.setState({ gameSearchValue: "", gameSearchText: "" });
    }
    this.setState({ gameSearchValue });
  };
  onInputChangeHandler = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value }, () => {
      if (!value) this.onSearchButtonClick();
    });
  };
  componentDidUpdate(prevProps, prevState) {
    const { gameSearchValue, rootList } = this.state;
    let value = gameSearchValue ? gameSearchValue.toLocaleLowerCase() : "";
    if (prevState.gameSearchValue !== gameSearchValue) {
      this.setState({ gameList: rootList });
      const filteredList = rootList.slice(1, 16);
      const searchFilteredList = filteredList.filter((item) =>
        item.title.toLowerCase().includes(value)
      );
      this.setState({ splicedList: searchFilteredList });
    }
  }
  render() {
    const {
      listLoading,
      gameList = [],
      hasError,
      splicedList,
      gameSearchText,
    } = this.state;
    return (
      <React.Fragment>
        <h2 className="layout-row layout-align-center-center">Explore Games</h2>
        <div className="layout-row layout-align-center-center">
          <SearchField
            name="gameSearchText"
            onChangeHandler={this.onInputChangeHandler}
            onSubmit={this.onSearchButtonClick}
            value={gameSearchText}
          />
        </div>
        {listLoading && <PageLoader />}
        {hasError && <div>Error...</div>}
        {!hasError&&splicedList && splicedList.length === 0 && (
          <h4 className="no-msg">No Games Found</h4>
        )}

        {!hasError && !listLoading && gameList && splicedList.length > 0 && (
          <React.Fragment>
            <Grid container spacing={0}>
              {splicedList.map((item, index) => (
                <GameCard game={item} key={index} />
              ))}
            </Grid>
            {splicedList.length >= 15 && (
              <span className="layout-row layout-align-center-center pad-20">
                <PrimaryButton
                  text="View More"
                  onClickHandler={() => this.onViewMoreCLick()}
                />
              </span>
            )}
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default CardProvider;
