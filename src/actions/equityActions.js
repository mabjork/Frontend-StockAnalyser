import { equityConstants } from '../constants/equityConstants';
import { userService } from '../services/userService';
import { alertActions } from './alertActions';
import { history } from '../helpers/history';

function setSelected(equity){
    return {type:equityConstants.SET_SELECTED_EQUITY,payload:equity}
}
export const equityActions = {
    setSelected,
};