import * as React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { colors, space } from 'utils/variables';
import { InputText } from 'components/ui/Input';

interface SearchPageProps {
  lng?: string;
  layout?: string;
}

interface SearchPageState {
  query: string;
  results: any[];
}

const ResultTitle = styled('h4')`
  margin-top: 0;
`;

const ResultExcerpt = styled('p')`
  font-size: 14px;
  line-height: 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const SearchResult = styled('div')`
  padding: 16px;
  border-bottom: 1px solid ${colors.grey02};
`;

const SearchResultLink = styled(Link)`
  color: inherit;

  ${SearchResult} {
    border-bottom: 1px solid ${colors.grey02};
  }

  &:last-child {
    ${SearchResult} {
      border-bottom: none;
    }
  }

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover {
    ${ResultTitle} {
      text-decoration: underline;
    }

    ${SearchResult} {
      background-color: ${colors.grey01};
    }
  }
`;

const SearchResultsDesktop = css`
  position: absolute;
  right: -69px;
  width: 430px;
  height: 315px;
  overflow-y: auto;
  z-index: 50;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const SearchResults = styled('div')<SearchPageProps>`
  margin-top: 11px;
  padding: 0 16px;
  border: 1px solid ${colors.grey02};
  background-color: ${colors.white};

  ${props => props.layout === 'desktop' && SearchResultsDesktop}
`;

const SearchInputText = styled(InputText)`
  margin-right: ${space.md}px;
`;

const Root = styled('div')<SearchPageProps>`
  position: relative;
`;

export default class SearchBox extends React.Component<SearchPageProps, SearchPageState> {
  static defaultProps = {
    lng: 'en',
    layout: 'default'
  };

  constructor(props: SearchPageProps) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
  }

  render() {
    const { layout } = this.props;

    return (
      <Root layout={this.props.layout}>
        <SearchInputText
          placeholder={layout === 'default' ? "Type what you're looking for..." : 'Search...'}
          value={this.state.query}
          onChange={this.search}
          block={layout === 'default'}
        />
        {this.state.results && this.state.results.length !== 0 && (
          <SearchResults layout={layout}>
            {this.state.results.map(page => (
              <SearchResultLink to={page.url}>
                <SearchResult>
                  <ResultTitle>{page.title}</ResultTitle>
                  {page.excerpt && <ResultExcerpt>{page.excerpt}</ResultExcerpt>}
                </SearchResult>
              </SearchResultLink>
            ))}
          </SearchResults>
        )}
      </Root>
    );
  }

  getSearchResults(query?: string) {
    if (!query || !window.__LUNR__) {
      return [];
    }
    const lunrIndex = window.__LUNR__[this.props.lng || 'en'];
    const results = lunrIndex.index.search(query);
    return results.map(({ ref }: any) => lunrIndex.store[ref]);
  }

  search = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    const results = this.getSearchResults(query);
    this.setState({ results, query });
  };
}
