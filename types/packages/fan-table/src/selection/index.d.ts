declare namespace _default {
    let name: string;
    let inject: string[];
    namespace props {
        namespace tableEl {
            export let type: any;
            let _default: any;
            export { _default as default };
        }
        namespace allRowKeys {
            let type_1: ArrayConstructor;
            export { type_1 as type };
            export let required: boolean;
        }
        namespace colgroups {
            let type_2: ArrayConstructor;
            export { type_2 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace parentRendered {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace hooks {
            let type_4: ObjectConstructor;
            export { type_4 as type };
            let required_3: boolean;
            export { required_3 as required };
        }
        namespace cellAutofillOption {
            let type_5: (ObjectConstructor | BooleanConstructor)[];
            export { type_5 as type };
            function _default_1(): any;
            export { _default_1 as default };
        }
        namespace cellSelectionData {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            let required_4: boolean;
            export { required_4 as required };
        }
        namespace cellSelectionRangeData {
            let type_7: ObjectConstructor;
            export { type_7 as type };
            let required_5: boolean;
            export { required_5 as required };
        }
        namespace isAutofillStarting {
            let type_8: BooleanConstructor;
            export { type_8 as type };
            let required_6: boolean;
            export { required_6 as required };
        }
        namespace currentCellSelectionType {
            let type_9: StringConstructor;
            export { type_9 as type };
            let _default_2: string;
            export { _default_2 as default };
        }
        namespace showVirtualScrollingPlaceholder {
            let type_10: BooleanConstructor;
            export { type_10 as type };
            let _default_3: boolean;
            export { _default_3 as default };
        }
        namespace isVirtualScroll {
            let type_11: BooleanConstructor;
            export { type_11 as type };
            let _default_4: boolean;
            export { _default_4 as default };
        }
        namespace virtualScrollVisibleIndexs {
            let type_12: ObjectConstructor;
            export { type_12 as type };
            let required_7: boolean;
            export { required_7 as required };
        }
        namespace isCellEditing {
            let type_13: BooleanConstructor;
            export { type_13 as type };
            let _default_5: boolean;
            export { _default_5 as default };
        }
    }
    let emits: string[];
    function data(): {
        currentCellEl: any;
        normalEndCellEl: any;
        autoFillEndCellEl: any;
        cellSelectionRect: {
            currentCellRect: {
                left: number;
                top: number;
                width: number;
                height: number;
            };
            normalEndCellRect: {
                left: number;
                top: number;
                width: number;
                height: number;
            };
            autoFillEndCellRect: {
                left: number;
                top: number;
                width: number;
                height: number;
            };
        };
    };
    namespace computed {
        function selectionBordersVisibility(): boolean;
        function showCorner(): boolean;
        function cornerCellInfo(): {
            isLastColumn: boolean;
            isLastRow: boolean;
        };
        function isFirstSelectionRow(): boolean;
        function isFirstSelectionCol(): boolean;
        function isFirstNotFixedSelectionCol(): boolean;
    }
    let watch: {
        parentRendered: {
            handler: (val: any) => void;
            immediate: boolean;
        };
        'cellSelectionData.currentCell': {
            handler: (val: any) => void;
            deep: boolean;
            immediate: boolean;
        };
        'cellSelectionData.normalEndCell': {
            handler: (val: any) => void;
            deep: boolean;
            immediate: boolean;
        };
        'cellSelectionData.autoFillEndCell': {
            handler: (val: any) => void;
            deep: boolean;
            immediate: boolean;
        };
    };
    function created(): void;
    let methods: {
        [x: string]: (({ cellEl, tableLeft, tableTop }: {
            cellEl: any;
            tableLeft: any;
            tableTop: any;
        }) => false | {
            left: number;
            top: number;
            width: any;
            height: any;
        }) | (({ tableLeft, tableTop, colKey, isFirstRow, isLastRow, }: {
            tableLeft: any;
            tableTop: any;
            colKey: any;
            isFirstRow: any;
            isLastRow: any;
        }) => any) | (({ type }: {
            type: any;
        }) => boolean) | (({ areaPostions, fixedType }: {
            areaPostions: any;
            fixedType: any;
        }) => any) | (({ borderWidth, borderHeight, topBorder, rightBorder, bottomBorder, leftBorder, corner, className, fixedType, totalColKeys, fixedColKeys, }: {
            borderWidth: any;
            borderHeight: any;
            topBorder: any;
            rightBorder: any;
            bottomBorder: any;
            leftBorder: any;
            corner: any;
            className: any;
            fixedType: any;
            totalColKeys: any;
            fixedColKeys: any;
        }) => any);
        resetCellPositions(): void;
        setCellEls(): void;
        setCellSelectionRangeData(): void;
        getCellPosition({ cellEl, tableLeft, tableTop }: {
            cellEl: any;
            tableLeft: any;
            tableTop: any;
        }): false | {
            left: number;
            top: number;
            width: any;
            height: any;
        };
        getCellPositionByColKey({ tableLeft, tableTop, colKey, isFirstRow, isLastRow, }: {
            tableLeft: any;
            tableTop: any;
            colKey: any;
            isFirstRow: any;
            isLastRow: any;
        }): any;
        setSelectionPositions({ type }: {
            type: any;
        }): boolean;
        getSelectionCurrent({ fixedType }: {
            fixedType: any;
        }): {
            selectionCurrent: any;
            autoFillArea: any;
        };
        getSelectionAreas({ fixedType }: {
            fixedType: any;
        }): {
            normalArea: any;
            autoFillArea: any;
        };
        getSelectionAutofillArea({ areaPostions, fixedType }: {
            areaPostions: any;
            fixedType: any;
        }): any;
        getBorders({ borderWidth, borderHeight, topBorder, rightBorder, bottomBorder, leftBorder, corner, className, fixedType, totalColKeys, fixedColKeys, }: {
            borderWidth: any;
            borderHeight: any;
            topBorder: any;
            rightBorder: any;
            bottomBorder: any;
            leftBorder: any;
            corner: any;
            className: any;
            fixedType: any;
            totalColKeys: any;
            fixedColKeys: any;
        }): any;
        getAreaLayer({ borderWidth, borderHeight, topBorder, className, fixedType, totalColKeys, fixedColKeys, }: {
            borderWidth: any;
            borderHeight: any;
            topBorder: any;
            className: any;
            fixedType: any;
            totalColKeys: any;
            fixedColKeys: any;
        }): any;
        getTableFirstRowCellByColKey(colKey: any): any;
        getTableLastRowCellByColKey(colKey: any): any;
        getTableCellEl({ rowKey, colKey }: {
            rowKey: any;
            colKey: any;
        }): any;
        setCurrentCellEl(): void;
        setNormalEndCellEl(): void;
        setAutofillEndCellEl(): void;
        clearAutofillEndCellRect(): void;
    };
    function render(): any;
}
export default _default;
