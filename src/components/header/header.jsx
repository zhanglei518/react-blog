import React, { Component } from 'react';
import { Link,  } from "react-router-dom";
import { Menu } from 'antd';
import './header.less';

class Header extends Component {
  constructor (props) {
      super(props);
      this.state = {
        current: this.props.activeIndex,
      }
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div className="header-wrapper">
        <div className="header-wrapper_top">
          <div className="_top-content">
            <span >广州</span>
          </div>
        </div>
        <div className="header-wrapper_con">
          <div className="_con-content">
            <div className="logo">
            </div>
          </div>
          <div className="_con-nav">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <Menu.Item key="/">
                <Link to="/">首页</Link>
              </Menu.Item>
              <Menu.Item key="/about">
                <Link to="/about">关于我</Link>
              </Menu.Item>
              <Menu.Item key="/topics">
                <Link to="/topics">话题</Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;