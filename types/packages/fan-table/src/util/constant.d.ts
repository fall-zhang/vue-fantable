export const PREFIX_CLS: "fan-table-";
export const LOCALE_COMP_NAME: "table";
export namespace COLUMN_TYPES {
    let EXPAND: string;
    let CHECKBOX: string;
    let RADIO: string;
}
export namespace COLUMN_FIXED_TYPE {
    let LEFT: string;
    let RIGHT: string;
}
export namespace EXPAND_TRIGGER_TYPES {
    let ICON: string;
    let CELL: string;
    let ROW: string;
}
export namespace CELL_SELECTION_DIRECTION {
    export let UP: string;
    let RIGHT_1: string;
    export { RIGHT_1 as RIGHT };
    export let DOWN: string;
    let LEFT_1: string;
    export { LEFT_1 as LEFT };
}
export namespace AUTOFILLING_DIRECTION {
    let UP_1: string;
    export { UP_1 as UP };
    let RIGHT_2: string;
    export { RIGHT_2 as RIGHT };
    let DOWN_1: string;
    export { DOWN_1 as DOWN };
    let LEFT_2: string;
    export { LEFT_2 as LEFT };
}
export namespace CURRENT_CELL_SELECTION_TYPES {
    let SINGLE: string;
    let RANGE: string;
}
export namespace EMIT_EVENTS {
    let BODY_CELL_WIDTH_CHANGE: string;
    let EXPAND_ROW_CHANGE: string;
    let CELL_SELECTION_KEY_CHANGE: string;
    let CELL_SELECTION_RANGE_DATA_CHANGE: string;
    let HEADER_FILTER_CONFIRM: string;
    let HEADER_FILTER_RESET: string;
    let HIGHLIGHT_ROW_CHANGE: string;
    let EDIT_INPUT_CLICK: string;
    let EDIT_INPUT_BLUR: string;
    let EDIT_INPUT_VALUE_CHANGE: string;
    let EDIT_INPUT_COPY: string;
    let EDIT_INPUT_PASTE: string;
    let EDIT_INPUT_CUT: string;
}
export namespace HOOKS_NAME {
    let TABLE_CONTAINER_SCROLL: string;
    let TABLE_CONTAINER_MOUSEUP: string;
    let TABLE_SIZE_CHANGE: string;
    let TABLE_CELL_WIDTH_CHANGE: string;
    let CLIPBOARD_CELL_VALUE_CHANGE: string;
    let HEADER_CELL_MOUSEMOVE: string;
    let BODY_CELL_MOUSEMOVE: string;
}
export namespace COMPS_NAME {
    let FAN_TABLE: string;
    let FAN_TABLE_THADER: string;
    let FAN_TABLE_THADER_TR: string;
    let FAN_TABLE_THADER_Th: string;
    let FAN_TABLE_HEADER_CHECKBOX_CONTENT: string;
    let FAN_TABLE_HEADER_FILTER_CONTENT: string;
    let FAN_TABLE_HEADER_FILTER_CUSTOM_CONTENT: string;
    let FAN_TABLE_BODY: string;
    let FAN_TABLE_BODY_TR: string;
    let FAN_TABLE_BODY_TR_SCROLLING: string;
    let FAN_TABLE_BODY_CHECKBOX_CONTENT: string;
    let FAN_TABLE_BODY_RADIO_CONTENT: string;
    let FAN_TABLE_BODY_TD: string;
    let FAN_TABLE_COLGROUP: string;
    let FAN_TABLE_FOOTER: string;
    let FAN_TABLE_EXPAND_TR: string;
    let FAN_TABLE_EXPAND_TR_ICON: string;
    let FAN_TABLE_EDIT_INPUT: string;
    let FAN_TABLE_SELECTION: string;
    let FAN_TABLE_COLUMN_RESISZER: string;
}
export namespace COMPS_CUSTOM_ATTRS {
    let BODY_ROW_KEY: string;
    let BODY_COLUMN_KEY: string;
}
export namespace INSTANCE_METHODS {
    let SCROLL_TO: string;
    let SCROLL_TO_ROW_KEY: string;
    let SCROLL_TO_COL_KEY: string;
    let START_EDITING_CELL: string;
    let STOP_EDITING_CELL: string;
    let SET_HIGHLIGHT_ROW: string;
    let SET_CELL_SELECTION: string;
    let SET_RANGE_CELL_SELECTION: string;
    let GET_RANGE_CELL_SELECTION: string;
    let SET_ALL_CELL_SELECTION: string;
    let HIDE_COLUMNS_BY_KEYS: string;
    let SHOW_COLUMNS_BY_KEYS: string;
}
export namespace CONTEXTMENU_TYPES {
    let HEADER_CONTEXTMENU: string;
    let BODY_CONTEXTMENU: string;
}
export namespace CONTEXTMENU_NODE_TYPES {
    let SEPARATOR: string;
    let CUT: string;
    let COPY: string;
    let INSERT_ROW_ABOVE: string;
    let INSERT_ROW_BELOW: string;
    let REMOVE_ROW: string;
    let EMPTY_ROW: string;
    let EMPTY_COLUMN: string;
    let EMPTY_CELL: string;
    let LEFT_FIXED_COLUMN_TO: string;
    let CANCEL_LEFT_FIXED_COLUMN_TO: string;
    let RIGHT_FIXED_COLUMN_TO: string;
    let CANCEL_RIGHT_FIXED_COLUMN_TO: string;
}
