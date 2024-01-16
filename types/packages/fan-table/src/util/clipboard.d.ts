/**
 * @decodeSpreadsheetStr
 * @desc Decode spreadsheet string into array.  refer from http://github.com/warpech/sheetclip/
 * @param {string} str The string to parse.
 * @returns {array}
 */
export function decodeSpreadsheetStr(str: string): any[];
/**
 * @decodeSpreadsheetStr
 * @desc encode array to spreadsheet string.  refer from http://github.com/warpech/sheetclip/
 * @param {array} str The string to parse.
 * @returns {string}
 */
export function encodeToSpreadsheetStr(arr: any): string;
/**
 * @onBeforeCopy
 * @desc on before copy
 * @param {Event} event
 * @return {selectionRangeIndexes,selectionRangeKeys,data}
 */
export function onBeforeCopy({ cellSelectionRangeData, selectionRangeData, colgroups, allRowKeys, }: Event): {
    startColIndex: any;
    endColIndex: any;
    startRowIndex: any;
    endRowIndex: any;
};
/**
 * @onAfterCopy
 * @desc on after copy
 * @param {Event} event
 * @return
 */
export function onAfterCopy({ event, selectionRangeData }: Event): void;
/**
 * @onBeforePaste
 * @desc on before paste
 * @param {Event} event
 * @return
 */
export function onBeforePaste({ event, cellSelectionRangeData, colgroups, allRowKeys, }: Event): {
    selectionRangeIndexes: {
        startColIndex: any;
        endColIndex: number;
        startRowIndex: any;
        endRowIndex: number;
    };
    selectionRangeKeys: {
        startColKey: any;
        endColKey: any;
        startRowKey: any;
        endRowKey: any;
    };
    data: any[];
};
/**
 * @onAfterPaste
 * @desc on after paste
 * @param {Event} event
 * @return
 */
export function onAfterPaste({ tableData, beforePasteResponse }: Event): void;
/**
 * @onBeforeCut
 * @desc on before cut
 * @param {Event} event
 * @return {selectionRangeIndexes,selectionRangeKeys,data}
 */
export function onBeforeCut({ cellSelectionRangeData, selectionRangeData, colgroups, allRowKeys, }: Event): {
    startColIndex: any;
    endColIndex: any;
    startRowIndex: any;
    endRowIndex: any;
};
/**
 * @onAfterCut
 * @desc on after cut
 * @param {Event} event
 * @return
 */
export function onAfterCut({ event, tableData, colgroups, selectionRangeData, selectionRangeIndexes, }: Event): void;
/**
 * @onBeforeDelete
 * @desc on before delete
 * @param {Event} event
 * @return {selectionRangeIndexes,selectionRangeKeys,data}
 */
export function onBeforeDelete({ cellSelectionRangeData, selectionRangeData, colgroups, allRowKeys, }: Event): {
    startColIndex: any;
    endColIndex: any;
    startRowIndex: any;
    endRowIndex: any;
};
/**
 * @onAfterDelete
 * @desc on after delete
 * @param {Event} event
 * @return
 */
export function onAfterDelete({ tableData, colgroups, selectionRangeIndexes }: Event): void;
