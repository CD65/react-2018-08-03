import React, { PureComponent } from 'react'
import CommentList from '../comment-list'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './article.css'

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    return (
      <div className={'article'}>
        <h2>{article.title}</h2>
        <button className={'open-article'} onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <ReactCSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }

  getBody() {
    const { article, isOpen } = this.props
    if (!isOpen) return null

    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    )
  }

  toggleOpen = () => this.props.toggleOpen(this.props.article.id)
}

export default Article
