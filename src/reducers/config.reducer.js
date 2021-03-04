import { ACTION_ADD_CHANNEL, ACTION_ADD_IP, ACTION_ADD_PORT, ACTION_ERROR_CHANNEL, ACTION_ERROR_CHANNEL_MESSAGE, ACTION_ERROR_PORT, ACTION_ERROR_PORT_MESSAGE } from "../Constants"

const initialState = {
    ip: '0.0.0.0',
    port: '7777',
    channel: '1',
    error_port: false,
    error_port_message: ' ',
    error_channel: false,
    error_channel_message: ' '
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ACTION_ADD_IP:
            return { ...state, ip: payload }

        case ACTION_ADD_PORT:
            return { ...state, port: payload }

        case ACTION_ADD_CHANNEL:
            return { ...state, channel: payload }

        case ACTION_ERROR_PORT:
            return { ...state, error_port: payload }

        case ACTION_ERROR_PORT_MESSAGE:
            return { ...state, error_port_message: payload }

        case ACTION_ERROR_CHANNEL:
            return { ...state, error_channel: payload }

        case ACTION_ERROR_CHANNEL_MESSAGE:
            return { ...state, error_channel_message: payload }

        default:
            return state
    }
}
