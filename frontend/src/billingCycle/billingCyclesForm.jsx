import React, { Component } from 'react';

import { reduxForm, Field, formValueSelector, arrayInsert } from 'redux-form'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { init } from './billingCycleActions';

import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList';
import Summary from './summary';


class BillingCycleForm extends Component {
    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debits.map(d => + d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, credits, debits } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field 
                        name='name' 
                        component={LabelAndInput} 
                        cols='12 4'
                        label='Nome'
                        placeholder='Informe o nome'
                        readOnly={this.props.readOnly}
                    />
                    <Field name='month' component={LabelAndInput} 
                        cols='12 4'
                        label='Mês'
                        placeholder='Informe o mês'
                        type='number'
                        readOnly={this.props.readOnly}
                    />
                    <Field name='year' component={LabelAndInput}
                        cols='12 4'
                        label='Ano'
                        placeholder='Informe o ano'
                        type='number'
                        readOnly={this.props.readOnly}
                        />
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList cols='12 6' readOnly={this.props.readOnly} list={credits} title='Créditos' field='credits' />
                    <ItemList cols='12 6' readOnly={this.props.readOnly} list={debits} title='Débitos' field='debits' showStatus />
                </div>
                <div className="box-footer">
                    <button 
                    type="submit" 
                    className={`btn btn-${this.props.submitClass}`}>
                        {this.props.submitLabel}
                    </button>
                    <button 
                    type="button" 
                    className={`btn btn-${this.props.buttonClass}`}
                    onClick={this.props.init}>
                        Cancelar
                    </button>
                </div>
            </form>
        );
    }
  
}

BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')

const mapStateToProps = state => ({ 
    credits: selector(state, 'credits'),
    debits: selector(state, 'debits'),
})

const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);