import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import api from '../../services/api';

import Container from '../../components/Container';
import {
  Loading,
  Owner,
  IssuesList,
  IssueFilter,
  IssuesPaginate,
} from './styles';

class Repository extends Component {
  state = {
    repository: [],
    issues: {},
    loading: true,
    filters: [
      { value: 'all', label: 'Todas' },
      { value: 'open', label: 'Abertas' },
      { value: 'closed', label: 'Fechadas' },
    ],
    filterActive: 0,
    page: 1,
  };

  async componentDidMount() {
    const { match } = this.props;
    const { filters, filterActive, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: filters[filterActive].value,
          per_page: 5,
          page,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
  }

  loadIssues = async () => {
    const { match } = this.props;
    const { filters, filterActive, page } = this.state;

    const repoName = decodeURIComponent(match.params.repository);

    const response = await api.get(`/repos/${repoName}/issues`, {
      params: {
        state: filters[filterActive].value,
        per_page: 5,
        page,
      },
    });

    this.setState({
      issues: response.data,
    });
  };

  handleFilter = async e => {
    await this.setState({
      filterActive: e,
      page: 1,
    });

    this.loadIssues();
  };

  handlePaginate = async e => {
    const { page } = this.state;

    await this.setState({
      page: e === 'prev' ? page - 1 : page + 1,
    });

    this.loadIssues();
  };

  render() {
    const {
      repository,
      issues,
      loading,
      filters,
      filterActive,
      page,
    } = this.state;

    if (loading) {
      return <Loading>Carregando</Loading>;
    }

    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos repositórios</Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        {issues.length > 0 && (
          <>
            <IssuesList>
              <IssueFilter>
                {filters.map((filter, index) => (
                  <button
                    key={filter.label}
                    type="button"
                    value={filter.value}
                    className={filterActive === index && 'active'}
                    onClick={() => this.handleFilter(index)}
                  >
                    {filter.label}
                  </button>
                ))}
              </IssueFilter>

              {issues.map(issue => (
                <li key={String(issue.id)}>
                  <img src={issue.user.avatar_url} alt={issue.user.name} />
                  <div>
                    <strong>
                      <a href={issue.html_url}>{issue.title}</a>
                      {issue.labels.map(label => (
                        <span key={String(label.id)}>{label.name}</span>
                      ))}
                    </strong>
                    <p>{issue.user.login}</p>
                  </div>
                </li>
              ))}
            </IssuesList>
            <IssuesPaginate>
              {page > 1 && (
                <button
                  type="button"
                  onClick={() => this.handlePaginate('prev')}
                >
                  <FaChevronLeft />
                </button>
              )}
              <p>Página {page}</p>
              <button type="button" onClick={() => this.handlePaginate('next')}>
                <FaChevronRight />
              </button>
            </IssuesPaginate>
          </>
        )}
      </Container>
    );
  }
}

Repository.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      repository: PropTypes.string,
    }),
  }).isRequired,
};

export default Repository;
