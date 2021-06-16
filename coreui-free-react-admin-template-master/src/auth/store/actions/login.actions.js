import _ from "lodash";
import history from '../../../@history';
import {clearAppLocalStorage} from "../../../utils/StorageUtils";
import Constants from "../../../utils/Constants";
import axios from 'axios';

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_SET_USER = 'LOGIN_SET_USER';

export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employees";


export function submitLogin(data) {

    console.log("ahsahsda");
    // const request = axios.post(EMPLOYEE_API_BASE_URL, {userName,password});
    // return (dispatch, getState) => {
    //     request.then((response) => {
                // let user = _.cloneDeep(response.data);
    //             
    //             Constants.LOGGED_IN_USER = user
    //             console.log(Constants.LOGGED_IN_USER);
    //             dispatch({
    //                 type: LOGIN_SUCCESS,
    //                 payload: user
    //             });
    //         }
    //     ).catch(error => {
    //         Constants.LOGGED_IN_USER = null;
    //         return dispatch({
    //             type: LOGIN_ERROR,
    //             payload: error
    //         });
    //     });
    // };

    let user = data;
    Constants.LOGGED_IN_USER = user;
    console.log("path",user);
        history.push({
            pathName: '/'
        });

    return (dispatch, getState) => {

            dispatch({
                type: LOGIN_SUCCESS,
                payload: user
            });

    };
}



export function setLoginUser(user) {
    return (dispatch, getState) => {
        dispatch({
            type: LOGIN_SET_USER,
            payload: user
        });
    };
}

export function userLogOut() {
    return (dispatch, getState) => {

        clearAppLocalStorage();
        dispatch({
            type: USER_LOGGED_OUT,
            payload: null
        });

        history.push({
            pathname: '/'
        });
    };
}
