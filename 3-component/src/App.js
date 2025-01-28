import React from "react";
import Header from "./components/Header.js";
import KeywordList from "./components/KeywordList.js";
import HistoryList from "./components/HistoryList.js";
import SearchForm from "./components/SearchForm.js";
import SearchResult from "./components/SearchResult.js";
import Tabs, { TabType } from "./components/Tabs.js";
import store from "./Store.js";
import { ErrorBoundary } from "@sentry/react";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchKeyword: "",
      searchResult: [],
      submitted: false,
      selectedTab: TabType.KEYWORD,
    };
  }

  handleChangeInput(searchKeyword) {
    if (searchKeyword.length <= 0) {
      this.handleReset();
    }

    this.setState({ searchKeyword });
  }

  search(searchKeyword) {
    const searchResult = store.search(searchKeyword);
    this.setState({
      searchKeyword,
      searchResult,
      submitted: true,
    });
  }

  handleReset() {
    this.setState({
      searchKeyword: "",
      searchResult: [],
      submitted: false,
    });
  }

  render() {
    const { searchKeyword, searchResult, submitted, selectedTab } = this.state;

    return (
      <ErrorBoundary
        fallback={({ error }) => (
          <div className="error-boundary">
              <p>에러가 발생했습니다.</p>
              <p>{error.toString()}</p>
          </div>
        )}
        beforeCapture={(scope) => {
          scope.setTag("searchKeyword", searchKeyword);
          scope.setTag("selectedTab", selectedTab);
          scope.setLevel("warning");
        }}
      >
        <Header title="검색" />
        <div className="container">
          <SearchForm
            value={searchKeyword}
            onChange={(value) => this.handleChangeInput(value)}
            onSubmit={() => this.search(searchKeyword)}
            onReset={() => this.handleReset()}
          />
          <div className="content">
            {submitted ? (
              <SearchResult data={searchResult} />
            ) : (
              <>
                <Tabs
                  selectedTab={selectedTab}
                  onChange={(selectedTab) => this.setState({ selectedTab })}
                />
                {selectedTab === TabType.KEYWORD && (
                  <KeywordList onClick={(keyword) => this.search(keyword)} />
                )}
                {selectedTab === TabType.HISTORY && (
                  <HistoryList onClick={(keyword) => this.search(keyword)} />
                )}
              </>
            )}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}
