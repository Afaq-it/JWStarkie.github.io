import React, { Component } from "react";
import Fade from "react-reveal";

class Blog extends Component {
    truncate(str) {
        return str.length > 150 ? str.substring(0, 100) + "..." : str;
    }
    
  render() {
    if (!this.props.data) return null;

    const title = this.props.data.title;
    const date = this.props.data.date;
    const content = this.props.data.introduction;

    return (
      <section id="blog">
        <Fade duration={1000}>
            <li>
                <a href="./">
                    <h3>{title}</h3>
                </a>
                <span style={{overflow: 'hidden', textOverflow: 'ellipsis'}}>             
                    {this.truncate(content)}
                </span>
                <b>
                    <span>{date}</span>
                </b>  
          </li>
        </Fade>
      </section>
    );
  }
}

export default Blog;
