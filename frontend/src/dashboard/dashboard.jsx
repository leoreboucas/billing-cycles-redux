import React, {Component} from 'react';
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row'

class Dashboard extends Component {
  render() {
    return (
      <div>
          <ContentHeader title='Dashboard' small='Versão 1.0' />
          <Content>
            <Row>
              <ValueBox
                cols='12 4'
                color='green'
                value='R$ 10'
                text='Total de créditos'
                icon='bank'
              />
              <ValueBox
                cols='12 4'
                color='red'
                value='12000'
                text='Total de débitos'
                icon='credit-card'
              />
              <ValueBox
                cols='12 4'
                color='blue'
                value='R$ 10'
                text='Total'
                icon='money'
              />
            </Row>
          </Content>
      </div>
    );
  }
}

export default Dashboard;