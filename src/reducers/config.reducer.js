import { ACTION_ADD_CHANNEL, ACTION_ADD_IP, ACTION_ADD_PORT } from "../Constants"

const initialState = {
    ip: '0.0.0.0',
    port: '7777',
    channel: '1'
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ACTION_ADD_IP:
            return { ...state, ip: payload }

        case ACTION_ADD_PORT:
            return { ...state, port: payload }

        case ACTION_ADD_CHANNEL:
            return { ...state, channel: payload }

        default:
            return state
    }
}
