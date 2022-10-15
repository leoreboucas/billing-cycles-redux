import React, {Component} from 'react';
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox';
import Row from '../common/layout/row'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getSummary } from './dashboardAction'


class Dashboard extends Component {

  componentWillMount() {
    this.props.getSummary()
  }

  render() {
    const { credit, debt } = this.props
    return (
      <div>
          <ContentHeader title='Dashboard' small='Versão 1.0' />
          <Content>
            <Row>
              <ValueBox
                cols='12 4'
                color='green'
                value={`R$ ${credit}`}
                text='Total de Créditos'
                icon='bank'
              />
              <ValueBox
                cols='12 4'
                color='red'
                value={`R$ ${debt}`}
                text='Total de Débitos'
                icon='credit-card'
              />
              <ValueBox
                cols='12 4'
                color='blue'
                value={`R$ ${credit - debt}`}
                text='Valor Consolidado'
                icon='money'
              />
            </Row>
          </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({ credit: state.dashboard.summary.credit, debt: state.dashboard.summary.debt})

const mapDispatchToProps = dispatch  => (bindActionCreators({ 
  getSummary
}, dispatch))

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);