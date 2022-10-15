import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import dashboardReducer from '../dashboard/dashboardReducers'
import tabReducer from '../common/tab/tabReducers'
import billingCycleReducer from '../billingCycle/billingCyclesReducer'

const rootReducers = combineReducers({
    dashboard: dashboardReducer,
    tab: tabReducer,
    billingCycles: billingCycleReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducers