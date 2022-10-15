import React, { Component } from 'react';
import { connect } from 'react-redux';

import If from '../operator/if';

class TabContent extends Component {
    render() {
        const selected = this.props.id === this.props.tab.selected
        const visible = this.props.tab.visible[this.props.id]
        console.log()
        return (
            <If test={visible}>
                <div
                id={this.props.id}
                className={`tab-pane ${selected ? 'active' : ''}`}>
                    {this.props.children}
                </div>
            </If>
        );
    }
  
}

const mapStateToProps = state => ({ tab: state.tab })

export default connect(mapStateToProps)(TabContent);