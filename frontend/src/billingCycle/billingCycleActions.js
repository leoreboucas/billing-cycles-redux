import axios from 'axios'
import { toastr } from 'react-redux-toastr'

import { initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = {
    credits: [{}],
    debits: [{}]
}

export const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
    
}

export const create = values => {
    return submit(values, 'post')
}

export const showUpdate = billingCycle => {
    return [
        selectTab('tabUpdate'), 
        showTabs('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export const update = values => {
    return submit(values, 'put')
}

export const showDelete = billingCycle => {
    return [
        selectTab('tabDelete'), 
        showTabs('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export const exclude = values => {
    return submit(values, 'delete')
}

export const init = () => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES),
    ]
}

export const submit = (values, method) => {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.')
            dispatch(init())
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
    })
    }
}