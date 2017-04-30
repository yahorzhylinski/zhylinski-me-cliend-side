'use strict';
import React            from 'react';
import Tag              from '../Common/Tag';
import TextSectionBlock from './TextSectionBlock';

export default class JobOverviewBlock extends React.Component {

  render() {
    const tags = this.props.tags;
    
    return (
      <TextSectionBlock label={this.props.position}>
        <div className="upper-row">
          <div className="company">{this.props.company}</div>
          <div className="time">{this.props.period}</div>
        </div>
        {this.props.children}

        <div className="tags">
          {tags.map((tag, i) => <Tag key={i}>{tag}</Tag>)}
        </div>
      </TextSectionBlock>
    );
  }
}
