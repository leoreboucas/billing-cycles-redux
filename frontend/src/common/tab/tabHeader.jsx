import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectTab } from './tabActions'
import If from '../operator/if';

class TabHeader extends Component {
    render() {
        const { selectTab, tab, label, icon, target } = this.props
        const seleted = tab.selected === target
        const visible = tab.visible[target]
        return (
            <If test={visible}>
                <li className={seleted ? 'active' : ''}>
                   <a href='javascript:;'
                        onClick={() => selectTab(target)}
                        data-toggle='tab'
                        data-target={target}>
                        <i className={`fa fa-${icon}`}></i> {label}
                    </a>
                </li>
            </If>
        );
    }
}

const mapStateToProps = state => ({
    tab: state.tab
}) 

const mapDispatchToProps = dispatch => ( 
    bindActionCreators({ 
        selectTab
    }, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(TabHeader);