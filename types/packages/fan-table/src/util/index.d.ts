/**
 * @clsName
 * @desc  get class name
 * @param {string} cls - class
 */
export function clsName(cls: string): string;
/**
 * @getRowKey
 * @desc  get row key
 * @param {Object} rowData - rowData
 * @param {string} rowKeyFieldName - row key field name
 */
export function getRowKey(rowData: any, rowKeyFieldName: string): any;
/**
 * @getColumnByColkey
 * @desc  get column by col key
 * @param {string} colKey - column key
 */
export function getColumnByColkey(colKey: string, colgroups: any): any;
/**
 * @isLastColumnByColKey
 * @desc is last column by column key
 * @param {string} colKey - column key
 */
export function isLastColumnByColKey(colKey: string, colgroups: any): boolean;
/**
 * @isOperationColumn
 * @desc is operation column
 * @param {string} colKey - column key
 * @param {arrat<object>} colgroups - column key
 */
export function isOperationColumn(colKey: string, colgroups: arrat<any>): boolean;
/**
 * @isLastRowByRowKey
 * @desc is last row by row key
 * @param {string} rowKey - row key
 */
export function isLastRowByRowKey(rowKey: string, allRowKeys: any): boolean;
/**
 * @getDomResizeObserverCompKey
 * @desc  get dom resize observer comp key
 * @param {Any} originalKey - original key
 * @param {Number} columnsOptionResetTime - columns option change time
 */
export function getDomResizeObserverCompKey(originalKey: Any, columnsOptionResetTime: number): Any;
/**
 * @recursiveRemoveColumnByKey
 * @desc recursive remove column key
 * @param {object} columns - deep clone column
 * @param {any} key - column key
 */
export function recursiveRemoveColumnByKey(columns: object, key: any): any;
/**
 * @getFixedTotalWidthByColumnKey
 * @desc  get fixed total width by column key
 * @param {object} colgroups - columns info
 * @param {any} colKey - column key
 * @param {string} fixed - left|right
 */
export function getFixedTotalWidthByColumnKey({ colgroups, colKey, fixed }: object): number;
/**
 * @getNotFixedTotalWidthByColumnKey
 * @desc  get not fixed total width by column key
 * @param {object} colgroups - 列信息
 * @param {any} colKey - column key
 * @param {string} direction - left|right
 */
export function getNotFixedTotalWidthByColumnKey({ colgroups, colKey, fixed }: object): number;
/**
 * @getTotalWidthByColKeys
 * @desc get total width by collumn keys
 * @param {array<T>} colKeys
 * @param {array<object>} colgroups
 * @return {number} width
 */
export function getTotalWidthByColKeys({ colKeys, colgroups }: array<T>): number;
/**
 * @initGroupColumns
 * @desc  int group columns
 * @param {array} cloneColumns - clone columns
 * @return {
   isGroupHeader,
   colgroups,
   groupColumns
}
 */
export function initGroupColumns(cloneColumns: any[]): isGroupHeader;
export function getHeaderContextmenuOptionCollection(t: any): ({
    type: string;
    label?: undefined;
} | {
    label: any;
    type: any;
})[];
export function getBodyContextmenuOptionCollection(t: any): ({
    type: string;
    label?: undefined;
} | {
    label: any;
    type: any;
})[];
/***
 * @setHeaderContextmenuOptions
 * @desc set header contextmenu options
 * @param {array<object>} column
 * @param {array<object>} contextmenuHeaderOption
 * @param {object} cellSelectionRangeData
 * @param {array<object>} colgroups
 * @param {object} headerIndicatorColKeys
 * @param {boolean} enableHeaderContextmenu
 * @param {boolean} t locale
 * @return headerContextmenuOptions
 */
export function setHeaderContextmenuOptions({ column, contextmenuHeaderOption, cellSelectionRangeData, colgroups, allRowKeys, headerIndicatorColKeys, enableHeaderContextmenu, t, }: array<any>): any[];
/***
 * @setHeaderContextmenuOptions
 * @desc set header contextmenu options
 * @param {array<object>} column
 * @param {array<object>} contextmenuBodyOption
 * @param {object} cellSelectionRangeData
 * @param {array<object>} colgroups
 * @param {object} bodyIndicatorRowKeys
 * @param {boolean} enableHeaderContextmenu
 * @param {boolean} t locale
 * @return headerContextmenuOptions
 */
export function setBodyContextmenuOptions({ enableBodyContextmenu, contextmenuBodyOption, cellSelectionRangeData, colgroups, allRowKeys, bodyIndicatorRowKeys, t, }: array<any>): any[];
export function createEmptyRowData({ colgroups, rowKeyFieldName }: {
    colgroups: any;
    rowKeyFieldName: any;
}): {
    [x: number]: string;
};
export function isContextmenuPanelClicked(event: any): boolean;
/**
 * @getColKeysByHeaderColumn
 * @desc
 * @param {object} headerColumnItem
 * @param {any} colKey2
 * @return Array<colKeys>
 */
export function getColKeysByHeaderColumn({ headerColumnItem }: object): any;
/**
 * @getColKeysByRangeColKeys
 * @desc  get col keys by range col keys
 * @param {any} colKey1
 * @param {any} colKey2
 * @return Array<colKeys>
 */
export function getColKeysByRangeColKeys({ colKey1, colKey2, colgroups }: any): any;
/**
 * @getColKeysByFixedTypeWithinColKeys
 * @desc  get col keys by fixed type
 * @param {array<T>} colKeys
 * @param {string} fixedType - fixed type
 * @param {array<object>} colgroups
 * @return {array} colKeys
 */
export function getColKeysByFixedTypeWithinColKeys({ colKeys, fixedType, colgroups, }: array<T>): any[];
/**
 * @getColKeysByFixedType
 * @desc get col keys by fixed type
 * @param {string} fixedType - fixed type
 * @param {array<object>} colgroups
 * * @param {boolean} isExcludeOperationColumn
 * @return colKey
 */
export function getColKeysByFixedType({ fixedType, colgroups, isExcludeOperationColumn, }: string): any;
/**
 * @getRowKeysByRangeRowKeys
 * @desc get row keys by range row keys
 * @param {any} topRowKey - top row key
 * @param {any} bottomRowKey - bottom row key
 * @return Array<colKeys>
 */
export function getRowKeysByRangeRowKeys({ topRowKey, bottomRowKey, allRowKeys, }: any): any;
/**
 * @isCellInSelectionRange
 * @desc is cell in selection range
 * @param {object} cellData - cell data
 * @param {object} cellSelectionRangeData
 * @param {array<object>} colgroups
 * @param {array<object>} allRowKeys
 * @return {Array<colKeys>}
 */
export function isCellInSelectionRange({ cellData, cellSelectionRangeData, colgroups, allRowKeys, }: object): Array<any>;
/**
 * @isClearSelectionByBodyCellRightClick
 * @desc is clear selection by body cell click
 * @param {number} mouseEventClickType
 * @param {object} cellData - cell data
 * @param {object} cellSelectionRangeData
 * @param {array<object>} colgroups
 * @param {array<object>} allRowKeys
 * @return {bool}
 */
export function isClearSelectionByBodyCellRightClick({ mouseEventClickType, cellData, cellSelectionData, cellSelectionRangeData, colgroups, allRowKeys, }: number): bool;
/**
 * @getSelectionRangeKeys
 * @desc get selection range keys
 * @param {object} cellSelectionRangeData
 * @return Array<colKeys>
 */
export function getSelectionRangeKeys({ cellSelectionRangeData }: object): {
    startColKey: any;
    endColKey: any;
    startRowKey: any;
    endRowKey: any;
};
/**
 * @getSelectionRangeIndexes
 * @desc get selection range indexes
 * @param {object} cellSelectionRangeData
 * @param {array<object>} colgroups
 * @param {array<object>} allRowKeys
 * @return Array<colKeys>
 */
export function getSelectionRangeIndexes({ cellSelectionRangeData, colgroups, allRowKeys, }: object): {
    startColIndex: any;
    endColIndex: any;
    startRowIndex: any;
    endRowIndex: any;
};
/**
 * @getSelectionRangeData
 * @desc get selection range data
 * @param {object} cellSelectionRangeData
 * @param {string} resultType "normal": contains key/value ; "flat":only contains value
 * @param {array<object>} tableData
 * @param {array<object>} colgroups
 * @param {array<object>} allRowKeys
 * @return Array<colKeys>
 */
export function getSelectionRangeData({ cellSelectionRangeData, resultType, tableData, colgroups, allRowKeys, }: object): any;
/**
 * @isExistFixedColKey
 * @desc is exist given fixed col key
 * @param {string} fixedType - fixed type
 * @param {array<T>} colKeys
 * @param {array<object>} colgroups
 * @return bool
 */
export function isExistGivenFixedColKey({ fixedType, colKeys, colgroups }: string): boolean;
/**
 * @isExistNotFixedColKey
 * @desc is exist not fixed col key
 * @param {array<T>} colKeys
 * @param {array<object>} colgroups
 * @return bool
 */
export function isExistNotFixedColKey({ colKeys, colgroups }: array<T>): boolean;
/**
 * @getLeftmostColKey
 * @desc get leftmost column key
 * @param {array<object>} colgroups
 * @param {array<any>} colKeys
 * @return colKey
 */
export function getLeftmostColKey({ colgroups, colKeys }: array<any>): any;
/**
 * @getRightmostColKey
 * @desc get rightmost column key
 * @param {array<object>} colgroups
 * @param {array<any>} colKeys
 * @return colKey
 */
export function getRightmostColKey({ colgroups, colKeys }: array<any>): any;
/**
 * @getPreviewColKey
 * @desc get preview column key
 * @param {array<object>} colgroups
 * @param {any} currentColKey
 * @return colKey
 */
export function getPreviewColKey({ colgroups, currentColKey }: array<any>): any;
/**
 * @getNextColKey
 * @desc get next column key
 * @param {array<object>} colgroups
 * @param {any} currentColKey
 * @return colKey
 */
export function getNextColKey({ colgroups, currentColKey }: array<any>): any;
/***
 * @cellAutofill
 * @desc cell auto fill
 * @param {bool} isReplaceData
 * @param {array<object>} tableData
 * @param {array<any>} allRowKeys
 * @param {array<object>} colgroups
 * @param {string} direction
 * @param {string} rowKeyFieldName
 * @param {object} nextCurrentCell next current cell
 * @param {object} nextNormalEndCell next normal end cell
 * @return autofillChangeDatas
 */
export function cellAutofill({ isReplaceData, tableData, allRowKeys, colgroups, direction, rowKeyFieldName, cellSelectionRangeData, nextCurrentCell, nextNormalEndCell, }: bool): {
    direction: bool;
    sourceSelectionRangeIndexes: {
        startRowIndex: number;
        endRowIndex: number;
        startColIndex: number;
        endColIndex: number;
    };
    targetSelectionRangeIndexes: {
        startRowIndex: number;
        endRowIndex: number;
        startColIndex: number;
        endColIndex: number;
    };
    sourceSelectionData: any[];
    targetSelectionData: any[];
};
/***
 * @setColumnFixed
 * @desc set column fixed
 * @param {array<object>} cloneColumns
 * @param {object} cellSelectionRangeData
 * @param {string} fixedType COLUMN_FIXED_TYPE
 * @param {array<object>} colgroups
 * @param {bool} enableColumnResize
 * @return cloneColumns
 */
export function setColumnFixed({ cloneColumns, cellSelectionRangeData, fixedType, colgroups, enableColumnResize, }: array<any>): any;
/***
 * @cancelColumnFixed
 * @desc cancel column fixed
 * @param {array<object>} cloneColumns
 * @param {array<object>} colgroups
 * @param {string} fixedType COLUMN_FIXED_TYPE
 * @param {bool} enableColumnResize
 * @return cloneColumns
 */
export function cancelColumnFixed({ cloneColumns, colgroups, fixedType, enableColumnResize, }: array<any>): any;
