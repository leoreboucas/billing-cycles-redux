import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { create, exclude, update, init } from './billingCycleActions'

import Content from '../common/template/content';
import ContentHeader from '../common/template/contentHeader';
import TabsContent from '../common/tab/tabsContent';
import Tabs from '../common/tab/tabs';
import TabsHeader from '../common/tab/tabsHeader';
import TabHeader from '../common/tab/tabHeader';
import TabContent from '../common/tab/tabContent';
import List from './billingCycleList';
import Form from './billingCyclesForm'

class BillingCycle extends Component {
  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <div>
        <ContentHeader  title='Ciclos de Pagamentos' small='Cadastro' />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label='Listar' icon='bars' target='tabList' />
              <TabHeader label='Incluir' icon='plus' target='tabCreate' />
              <TabHeader label='Alterar' icon='pencil' target='tabUpdate' />
              <TabHeader label='Excluir' icon='trash-o' target='tabDelete' />
            </TabsHeader>
            <TabsContent>
              <TabContent id='tabList'>
                <List />
              </TabContent>
              <TabContent id='tabCreate'>
                <Form 
                  onSubmit={this.props.create}
                  submitClass='primary'
                  buttonClass='default'
                  submitLabel='Incluir'
                 />
              </TabContent>
              <TabContent id='tabUpdate'>
                <Form 
                  onSubmit={this.props.update}
                  submitClass='info'
                  buttonClass='default'
                  submitLabel='Alterar'
                />
              </TabContent>
              <TabContent id='tabDelete'>
                <Form  
                  readOnly
                  onSubmit={this.props.exclude}
                  submitClass='danger'
                  buttonClass='default'
                  submitLabel='Excluir'
                  />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    create,
    update,
    exclude,
    init
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle);