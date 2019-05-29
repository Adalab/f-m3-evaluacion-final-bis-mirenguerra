import React from 'react';
import './styles.scss';
import Repo from '../Repo/index';
import PropTypes from 'prop-types';

class RepoList extends React.Component {
  render() {
    return (
      <div className="RepoList">
        <ul className="RepoList__list">
          {this.props.repos.map(item=>{
            return(
            <li className="RepoList__element" key={item.id}>
              <Repo name={item.name} description={item.description} language={item.language}/>
            </li>)
          })}
        </ul>
      </div>
    );
  }
}

RepoList.propTypes={
  repos:PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default RepoList;
