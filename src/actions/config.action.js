import { ACTION_ADD_CHANNEL, ACTION_ADD_IP, ACTION_ADD_PORT } from "../Constants";

export const setStateToAddIp = (payload) => ({
    type: ACTION_ADD_IP,
    payload
})

export const setStateToAddPort = (payload) => ({
    type: ACTION_ADD_PORT,
    payload
})

export const setStateToAddChannel = (payload) => ({
    type: ACTION_ADD_CHANNEL,
    payload
})

export const addIp = (payload) => {
    // do something
    return dispatch => {
        dispatch(setStateToAddIp(payload))
    }
}

export const addPort = (payload) => {
    // do something
    return dispatch => {
        dispatch(setStateToAddPort(payload))
    }
}

export const addChannel = (payload) => {
    // do something
    return dispatch => {
        dispatch(setStateToAddChannel(payload))
    }
}