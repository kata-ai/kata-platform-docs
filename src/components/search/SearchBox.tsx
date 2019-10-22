import * as React from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'styled-components';

import { colors, space } from 'utils/variables';
import { InputText } from 'components/ui/Input';

interface SearchPageProps {
  lng?: string;
  layout?: string;
  onSearchClear?: () => void;
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
  margin-top: 11px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const SearchResultsMobile = css`
  position: absolute;
  right: 16px;
  width: calc(100vw - 32px);
  height: 315px;
  margin-top: 0;
  overflow-y: auto;
  z-index: 50;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const SearchResults = styled('div')<SearchPageProps>`
  padding: 0;
  border: 1px solid ${colors.grey02};
  background-color: ${colors.white};

  ${props => props.layout === 'desktop' && SearchResultsDesktop}
  ${props => props.layout === 'mobile' && SearchResultsMobile}
`;

const SearchInputText = styled(InputText)``;

const RootDesktop = css`
  position: relative;

  &:not(:last-child) {
    margin-right: ${space.md}px;
  }
`;

const RootMobile = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;

  .header {
    display: flex;
    align-items: center;
    height: 63px;
    padding: 16px;
    background-color: ${colors.white};

    > div {
      display: block;
      width: 100%;
      margin-right: 0;
    }
  }
`;

const Root = styled('div')<SearchPageProps>`
  ${props => props.layout === 'desktop' && RootDesktop}
  ${props => props.layout === 'mobile' && RootMobile}
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

    this.onEscKeypress = this.onEscKeypress.bind(this);
  }

  onEscKeypress(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      if (this.props.onSearchClear) {
        this.props.onSearchClear();
      }
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onEscKeypress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscKeypress, false);
  }

  render() {
    const { layout, onSearchClear } = this.props;
    const ref = React.createRef<HTMLInputElement>();

    return (
      <Root layout={this.props.layout}>
        <div className="header">
          <SearchInputText
            placeholder={layout === 'default' ? "Type what you're looking for..." : 'Search...'}
            value={this.state.query}
            onChange={this.search}
            ref={ref}
            clearable={layout === 'mobile'}
            onClearButtonClick={() => {
              // Don't even ask.
              if (ref.current) {
                ref.current.value = '';
              }
              this.setState({ results: [], query: '' });

              if (onSearchClear) {
                onSearchClear();
              }
            }}
            block={layout === 'default'}
          />
        </div>
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
    if (!event.target.value) {
      if (this.props.onSearchClear) {
        this.props.onSearchClear();
      }
    } else {
      const query = event.target.value;
      const results = this.getSearchResults(query);
      this.setState({ results, query });
    }
  };
}
