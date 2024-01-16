declare namespace _default {
    let name: string;
    let directives: {
        'click-outside': {
            mounted: (el: any, binding: any, vNode: any) => void;
            unmounted: (el: any) => void;
        };
    };
    namespace components {
        export { VueDomResizeObserver };
        export { ColumnResizer };
        export { ColGroup };
        export { TableHeader };
        export { TableBody };
        export { TableFooter };
        export { EditInput };
        export { Selection };
        export { VeContextmenu };
    }
    function provide(): {
        eventCenter: any;
    };
    namespace props {
        namespace tableData {
            let required: boolean;
            let type: ArrayConstructor;
        }
        namespace footerData {
            let type_1: ArrayConstructor;
            export { type_1 as type };
            function _default(): any[];
            export { _default as default };
        }
        namespace showHeader {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace columns {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace rowKeyFieldName {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_2: any;
            export { _default_2 as default };
        }
        namespace scrollWidth {
            let type_5: (StringConstructor | NumberConstructor)[];
            export { type_5 as type };
            let _default_3: any;
            export { _default_3 as default };
        }
        namespace maxHeight {
            let type_6: (StringConstructor | NumberConstructor)[];
            export { type_6 as type };
            let _default_4: any;
            export { _default_4 as default };
        }
        namespace fixedHeader {
            let type_7: BooleanConstructor;
            export { type_7 as type };
            let _default_5: boolean;
            export { _default_5 as default };
        }
        namespace fixedFooter {
            let type_8: BooleanConstructor;
            export { type_8 as type };
            let _default_6: boolean;
            export { _default_6 as default };
        }
        namespace borderAround {
            let type_9: BooleanConstructor;
            export { type_9 as type };
            let _default_7: boolean;
            export { _default_7 as default };
        }
        namespace borderX {
            let type_10: BooleanConstructor;
            export { type_10 as type };
            let _default_8: boolean;
            export { _default_8 as default };
        }
        namespace borderY {
            let type_11: BooleanConstructor;
            export { type_11 as type };
            let _default_9: boolean;
            export { _default_9 as default };
        }
        namespace eventCustomOption {
            let type_12: ObjectConstructor;
            export { type_12 as type };
            function _default_10(): any;
            export { _default_10 as default };
        }
        namespace cellStyleOption {
            let type_13: ObjectConstructor;
            export { type_13 as type };
            function _default_11(): any;
            export { _default_11 as default };
        }
        namespace cellSpanOption {
            let type_14: ObjectConstructor;
            export { type_14 as type };
            function _default_12(): any;
            export { _default_12 as default };
        }
        namespace rowStyleOption {
            let type_15: ObjectConstructor;
            export { type_15 as type };
            function _default_13(): any;
            export { _default_13 as default };
        }
        namespace virtualScrollOption {
            let type_16: ObjectConstructor;
            export { type_16 as type };
            let _default_14: any;
            export { _default_14 as default };
        }
        namespace sortOption {
            let type_17: ObjectConstructor;
            export { type_17 as type };
            function _default_15(): any;
            export { _default_15 as default };
        }
        namespace expandOption {
            let type_18: ObjectConstructor;
            export { type_18 as type };
            function _default_16(): any;
            export { _default_16 as default };
        }
        namespace checkboxOption {
            let type_19: ObjectConstructor;
            export { type_19 as type };
            function _default_17(): any;
            export { _default_17 as default };
        }
        namespace radioOption {
            let type_20: ObjectConstructor;
            export { type_20 as type };
            function _default_18(): any;
            export { _default_18 as default };
        }
        namespace cellSelectionOption {
            let type_21: ObjectConstructor;
            export { type_21 as type };
            function _default_19(): any;
            export { _default_19 as default };
        }
        namespace cellAutofillOption {
            let type_22: (ObjectConstructor | BooleanConstructor)[];
            export { type_22 as type };
            function _default_20(): any;
            export { _default_20 as default };
        }
        namespace editOption {
            let type_23: ObjectConstructor;
            export { type_23 as type };
            function _default_21(): any;
            export { _default_21 as default };
        }
        namespace columnHiddenOption {
            let type_24: ObjectConstructor;
            export { type_24 as type };
            function _default_22(): any;
            export { _default_22 as default };
        }
        namespace contextmenuHeaderOption {
            let type_25: ObjectConstructor;
            export { type_25 as type };
            function _default_23(): any;
            export { _default_23 as default };
        }
        namespace contextmenuBodyOption {
            let type_26: ObjectConstructor;
            export { type_26 as type };
            function _default_24(): any;
            export { _default_24 as default };
        }
        namespace clipboardOption {
            let type_27: ObjectConstructor;
            export { type_27 as type };
            function _default_25(): any;
            export { _default_25 as default };
        }
        namespace columnWidthResizeOption {
            let type_28: ObjectConstructor;
            export { type_28 as type };
            function _default_26(): any;
            export { _default_26 as default };
        }
    }
    function data(): {
        eventCenter: import("mitt").Emitter<Record<import("mitt").EventType, unknown>>;
        hooks: {};
        parentRendered: boolean;
        tableViewportWidth: number;
        columnsOptionResetTime: number;
        tableRootRef: string;
        tableContainerWrapperRef: string;
        tableContainerRef: string;
        tableRef: string;
        tableBodyRef: string;
        tableContentWrapperRef: string;
        virtualPhantomRef: string;
        editInputRef: string;
        cellSelectionRef: string;
        contextmenuRef: string;
        cloneColumns: any[];
        isGroupHeader: boolean;
        headerRows: any[];
        footerRows: any[];
        colgroups: any[];
        groupColumns: any[];
        hiddenColumns: any[];
        virtualScrollVisibleData: any[];
        virtualScrollVisibleIndexs: {
            start: number;
            end: number;
        };
        defaultVirtualScrollBufferScale: number;
        defaultVirtualScrollMinRowHeight: number;
        defaultPlaceholderPerScrollingRowCount: number;
        virtualScrollStartIndex: number;
        previewVirtualScrollStartIndex: number;
        virtualScrollEndIndex: number;
        showVirtualScrollingPlaceholder: boolean;
        disablePointerEventsTimeoutId: any;
        isLeftScrolling: boolean;
        isRightScrolling: boolean;
        isVerticalScrolling: boolean;
        hasXScrollBar: boolean;
        hasYScrollBar: boolean;
        scrollBarWidth: number;
        previewTableContainerScrollLeft: any;
        headerIndicatorColKeys: {
            startColKey: string;
            startColKeyIndex: number;
            endColKey: string;
            endColKeyIndex: number;
        };
        bodyIndicatorRowKeys: {
            startRowKey: string;
            startRowKeyIndex: number;
            endRowKey: string;
            endRowKeyIndex: number;
        };
        cellSelectionData: {
            currentCell: {
                rowKey: string;
                colKey: string;
                rowIndex: number;
            };
            normalEndCell: {
                rowKey: string;
                colKey: string;
                rowIndex: number;
            };
            autoFillEndCell: {
                rowKey: string;
                colKey: string;
            };
        };
        cellSelectionRangeData: {
            leftColKey: string;
            rightColKey: string;
            topRowKey: string;
            bottomRowKey: string;
        };
        isHeaderCellMousedown: boolean;
        isBodyCellMousedown: boolean;
        isBodyOperationColumnMousedown: boolean;
        isAutofillStarting: boolean;
        autofillingDirection: any;
        currentCellSelectionType: string;
        tableOffestHeight: number;
        tableHeight: number;
        highlightRowKey: string;
        editingCell: {
            rowKey: string;
            colKey: string;
            row: any;
            column: any;
        };
        editorInputStartValue: string;
        enableStopEditing: boolean;
        contextmenuEventTarget: string;
        contextmenuOptions: any[];
        isColumnResizerHover: boolean;
        isColumnResizing: boolean;
    };
    namespace computed {
        function actualRenderTableData(): any;
        function allRowKeys(): any;
        function virtualScrollBufferCount(): number;
        function virtualScrollVisibleCount(): number;
        function tableContainerWrapperStyle(): {
            width: string;
        };
        function tableContainerStyle(): {
            'max-height': any;
            height: any;
        };
        function tableStyle(): {
            width: any;
        };
        function tableClass(): {
            [x: string]: any;
        };
        function tableContainerClass(): {
            [x: string]: any;
        };
        function tableBodyClass(): {
            [x: string]: boolean;
        };
        function isVirtualScroll(): any;
        function hasFixedColumn(): any;
        function hasLeftFixedColumn(): any;
        function hasRightFixedColumn(): any;
        function isCellEditing(): boolean;
        function hasEditColumn(): any;
        function enableHeaderContextmenu(): boolean;
        function enableBodyContextmenu(): boolean;
        function contextMenuType(): string;
        function enableCellSelection(): boolean;
        function enableClipboard(): any;
        function enableColumnResize(): boolean;
        function headerTotalHeight(): number;
        function footerTotalHeight(): any;
    }
    let watch: {
        tableData: {
            handler(newVal: any, oldVal: any): void;
            deep: boolean;
            immediate: boolean;
        };
        allRowKeys: {
            handler(newVal: any): void;
            immediate: boolean;
        };
        columns: {
            handler(newVal: any, oldVal: any): void;
            immediate: boolean;
        };
        cloneColumns: {
            handler(): void;
            immediate: boolean;
        };
        groupColumns: {
            handler(val: any): void;
            immediate: boolean;
        };
        footerData: {
            handler(val: any): void;
            immediate: boolean;
        };
        'virtualScrollOption.enable': {
            handler(newVal: any): void;
            immediate: boolean;
        };
        isAutofillStarting: {
            handler(val: any): void;
        };
        'cellSelectionData.currentCell': {
            handler: () => void;
            deep: boolean;
            immediate: boolean;
        };
        'cellSelectionData.normalEndCell': {
            handler: () => void;
            deep: boolean;
            immediate: boolean;
        };
        headerIndicatorColKeys: {
            handler: () => void;
            deep: boolean;
        };
        bodyIndicatorRowKeys: {
            handler: () => void;
            deep: boolean;
        };
    };
    function created(): void;
    function mounted(): void;
    function unmounted(): void;
    let methods: {
        [x: string]: (keyCode: any, nextRowKey: any) => void;
        initHeaderRows(): void;
        initFooterRows(): void;
        headerRowHeightChange({ rowIndex, height }: {
            rowIndex: any;
            height: any;
        }): void;
        footRowHeightChange({ rowIndex, height }: {
            rowIndex: any;
            height: any;
        }): void;
        bodyCellWidthChange(colWidths: any): void;
        setColumnWidth({ colKey, width }: {
            colKey: any;
            width: any;
        }): void;
        updateColgroupsBySortChange(sortColumns: any): void;
        initColumnWidthByColumnResize(): void;
        initColumns(): void;
        showOrHideColumns(): void;
        initGroupColumns(): void;
        getScrollBarWidth(): number;
        selectedAllChange({ isSelected }: {
            isSelected: any;
        }): void;
        setSelectedAllInfo({ isSelected, isIndeterminate }: {
            isSelected: any;
            isIndeterminate: any;
        }): void;
        cellSelectionCurrentCellChange({ rowKey, colKey }: {
            rowKey: any;
            colKey: any;
        }): void;
        cellSelectionNormalEndCellChange({ rowKey, colKey }: {
            rowKey: any;
            colKey: any;
        }): void;
        cellSelectionAutofillCellChange({ rowKey, colKey }: {
            rowKey: any;
            colKey: any;
        }): void;
        clearCellSelectionCurrentCell(): void;
        clearCellSelectionNormalEndCell(): void;
        clearCellSelectionAutofillEndCell(): void;
        headerIndicatorColKeysChange({ startColKey, endColKey }: {
            startColKey: any;
            endColKey: any;
        }): void;
        clearHeaderIndicatorColKeys(): void;
        bodyIndicatorRowKeysChange({ startRowKey, endRowKey }: {
            startRowKey: any;
            endRowKey: any;
        }): void;
        clearBodyIndicatorRowKeys(): void;
        setCellSelectionByAutofill(): boolean;
        cellSelectionRangeDataChange(newData: any): void;
        autofillingDirectionChange(direction: any): void;
        setCurrentCellSelectionType(): void;
        dealKeydownEvent(event: any): void;
        selectCellByDirection({ direction }: {
            direction: any;
        }): void;
        columnToVisible(nextColumn: any): boolean;
        rowToVisible(keyCode: any, nextRowKey: any): void;
        setVirtualScrollVisibleData(): void;
        getVirtualScrollAboveCount(): number;
        getVirtualScrollBelowCount(): number;
        getVirtualViewPhantom(): any;
        initVirtualScrollPositions(): void;
        bodyRowHeightChange({ rowKey, height }: {
            rowKey: any;
            height: any;
        }): void;
        setVirtualPhantomHeight(): void;
        setVirtualScrollStartOffset(): void;
        setTableContentTopValue({ top }: {
            top: any;
        }): void;
        getVirtualScrollStartIndex(scrollTop?: number): number;
        virtualScrollBinarySearch(list: any, value: any): number;
        tableContainerVirtualScrollHandler(tableContainerRef: any): void;
        debounceScrollEnded(): void;
        debounceScrollEndedCallback(): void;
        initVirtualScroll(): void;
        setScrolling(tableContainerRef: any): void;
        setScrollBarStatus(): void;
        initScrolling(): void;
        tableClickOutside(e: any): boolean;
        saveCellWhenStopEditing(): boolean;
        cellSelectionByClick({ rowData, column }: {
            rowData: any;
            column: any;
        }): void;
        bodyCellContextmenu({ event, rowData, column }: {
            event: any;
            rowData: any;
            column: any;
        }): void;
        bodyCellDoubleClick({ event, rowData, column }: {
            event: any;
            rowData: any;
            column: any;
        }): boolean;
        bodyCellClick({ event, rowData, column }: {
            event: any;
            rowData: any;
            column: any;
        }): void;
        bodyCellMousedown({ event, rowData, column }: {
            event: any;
            rowData: any;
            column: any;
        }): boolean;
        bodyCellMouseover({ event, rowData, column }: {
            event: any;
            rowData: any;
            column: any;
        }): boolean;
        bodyCellMousemove({ event, rowData, column }: {
            event: any;
            rowData: any;
            column: any;
        }): void;
        bodyCellMouseup({ event, rowData, column }: {
            event: any;
            rowData: any;
            column: any;
        }): void;
        headerCellClick({ event, column }: {
            event: any;
            column: any;
        }): void;
        headerCellContextmenu({ event, column }: {
            event: any;
            column: any;
        }): void;
        setContextmenuOptions(column: any): void;
        headerCellMousedown({ event, column }: {
            event: any;
            column: any;
        }): boolean;
        headerCellMouseover({ event, column }: {
            event: any;
            column: any;
        }): void;
        headerCellMousemove({ event, column }: {
            event: any;
            column: any;
        }): void;
        headerCellMouseleave({ event, column }: {
            event: any;
            column: any;
        }): void;
        headerMouseleave(event: any): void;
        tableContainerMouseup(): void;
        cellSelectionCornerMousedown({ event }: {
            event: any;
        }): void;
        cellSelectionCornerMouseup({ event }: {
            event: any;
        }): void;
        isEditColumn(colKey: any): any;
        editCellByClick({ isDblclick, rowKey, colKey }: {
            isDblclick: any;
            rowKey: any;
            colKey: any;
        }): boolean;
        setEditingCell({ rowKey, colKey, column, row }: {
            rowKey: any;
            colKey: any;
            column: any;
            row: any;
        }): void;
        updateEditingCellValue(value: any): void;
        clearEditingCell(): void;
        contextmenuItemClick(type: any): void;
        headerContextmenuItemClick(type: any): boolean;
        bodyContextmenuItemClick(type: any): boolean;
        editorCopy(event: any): boolean;
        editorPaste(event: any): boolean;
        editorCut(event: any): boolean;
        deleteCellSelectionRangeValue(): boolean;
        setRangeCellSelectionByHeaderIndicator(): boolean;
        setRangeCellSelectionByBodyIndicator(): boolean;
        setIsColumnResizerHover(val: any): void;
        setIsColumnResizing(val: any): void;
        setCellSelection(receive: any): boolean;
    };
    function render(): any;
}
export default _default;
import VueDomResizeObserver from '@P/src/components/resize-observer/index';
import ColumnResizer from './column-resizer/index.jsx';
import ColGroup from './colgroup/index.jsx';
import TableHeader from './header/index.jsx';
import TableBody from './body/index.jsx';
import TableFooter from './footer/index.jsx';
import EditInput from './editor/index.jsx';
import Selection from './selection/index.jsx';
import VeContextmenu from '@P/ve-contextmenu/ve-contextmenu.js';
