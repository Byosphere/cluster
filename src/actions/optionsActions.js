import { SET_SIDEBAR_POSITION } from "../Constants";

export function setSidebarPosition(pos) {
    return {
        type: SET_SIDEBAR_POSITION,
        position: pos
    }
}