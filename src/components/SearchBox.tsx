import * as React from 'react';
import { Link } from 'gatsby';

import { InputText } from '@kata-kit/form';

import styled from '../utils/styled';
import { brandColors } from '../styles/theme';

interface SearchPageProps {
  lng?: string;
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
  margin: 24px 0;
  padding: 16px;
  border: 1px solid ${brandColors.grey30};
  border-radius: 4px;
`;

const SearchResultLink = styled(Link)`
  color: inherit;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &:hover {
    ${ResultTitle} {
      text-decoration: underline;
    }

    ${SearchResult} {
      background-color: ${brandColors.grey10};
    }
  }
`;

export default class SearchBox extends React.Component<SearchPageProps, SearchPageState> {
  static defaultProps = {
    lng: 'en'
  };

  constructor(props: SearchPageProps) {
    super(props);
    this.state = {
      query: '',
      results: []
    };
  }

  render() {
    return (
      <div>
        <InputText
          type="text"
          placeholder="Type what you're looking for..."
          value={this.state.query}
          onChange={this.search}
        />
        {this.state.results.map(page => (
          <SearchResultLink to={page.url}>
            <SearchResult>
              <ResultTitle>{page.title}</ResultTitle>
              {page.excerpt && <ResultExcerpt>{page.excerpt}</ResultExcerpt>}
            </SearchResult>
          </SearchResultLink>
        ))}
      </div>
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
