declare namespace _default {
    let name: string;
    namespace components {
        export { BodyTr };
    }
    let inject: string[];
    namespace props {
        namespace tableViewportWidth {
            export let type: NumberConstructor;
            let _default: number;
            export { _default as default };
        }
        namespace columnsOptionResetTime {
            let type_1: NumberConstructor;
            export { type_1 as type };
            let _default_1: number;
            export { _default_1 as default };
        }
        namespace colgroups {
            let type_2: ArrayConstructor;
            export { type_2 as type };
            export let required: boolean;
        }
        namespace actualRenderTableData {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace hasFixedColumn {
            let type_4: BooleanConstructor;
            export { type_4 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
        namespace allRowKeys {
            let type_5: ArrayConstructor;
            export { type_5 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace expandOption {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            function _default_3(): any;
            export { _default_3 as default };
        }
        namespace checkboxOption {
            let type_7: ObjectConstructor;
            export { type_7 as type };
            function _default_4(): any;
            export { _default_4 as default };
        }
        namespace radioOption {
            let type_8: ObjectConstructor;
            export { type_8 as type };
            function _default_5(): any;
            export { _default_5 as default };
        }
        namespace virtualScrollOption {
            let type_9: ObjectConstructor;
            export { type_9 as type };
            let _default_6: any;
            export { _default_6 as default };
        }
        namespace isVirtualScroll {
            let type_10: BooleanConstructor;
            export { type_10 as type };
            let _default_7: boolean;
            export { _default_7 as default };
        }
        namespace showVirtualScrollingPlaceholder {
            let type_11: BooleanConstructor;
            export { type_11 as type };
            let _default_8: boolean;
            export { _default_8 as default };
        }
        namespace rowKeyFieldName {
            let type_12: StringConstructor;
            export { type_12 as type };
            let _default_9: any;
            export { _default_9 as default };
        }
        namespace cellStyleOption {
            let type_13: ObjectConstructor;
            export { type_13 as type };
            function _default_10(): any;
            export { _default_10 as default };
        }
        namespace cellSpanOption {
            let type_14: ObjectConstructor;
            export { type_14 as type };
            function _default_11(): any;
            export { _default_11 as default };
        }
        namespace highlightRowKey {
            let type_15: (StringConstructor | NumberConstructor)[];
            export { type_15 as type };
            let _default_12: any;
            export { _default_12 as default };
        }
        namespace eventCustomOption {
            let type_16: ObjectConstructor;
            export { type_16 as type };
            function _default_13(): any;
            export { _default_13 as default };
        }
        namespace cellSelectionOption {
            let type_17: ObjectConstructor;
            export { type_17 as type };
            function _default_14(): any;
            export { _default_14 as default };
        }
        namespace cellSelectionData {
            let type_18: ObjectConstructor;
            export { type_18 as type };
            function _default_15(): any;
            export { _default_15 as default };
        }
        namespace cellSelectionRangeData {
            let type_19: ObjectConstructor;
            export { type_19 as type };
            function _default_16(): any;
            export { _default_16 as default };
        }
        namespace bodyIndicatorRowKeys {
            let type_20: ObjectConstructor;
            export { type_20 as type };
            function _default_17(): any;
            export { _default_17 as default };
        }
        namespace editOption {
            let type_21: ObjectConstructor;
            export { type_21 as type };
            function _default_18(): any;
            export { _default_18 as default };
        }
    }
    let emits: string[];
    function data(): {
        colsWidths: Map<any, any>;
        internalExpandRowkeys: any[];
        internalCheckboxSelectedRowKeys: any[];
        internalRadioSelectedRowKey: any;
        virtualScrollPreviewRenderedRowKeys: any[];
        virtualScrollRepeatRenderedRowKeys: any[];
    };
    namespace computed {
        function columnCollection(): any[];
        function expandColumn(): any;
        function isControlledExpand(): boolean;
        function expandedRowkeys(): any;
        function disableCheckboxSelectedRowKeys(): any[];
        function disableCheckboxUnselectedRowKeys(): any[];
        function isCheckboxSelectedAll(): boolean;
        function isCheckboxIndeterminate(): boolean;
        function isControlledRadio(): boolean;
    }
    let watch: {
        expandOption: {
            handler: () => void;
            immediate: boolean;
        };
        'expandOption.expandedRowKeys': {
            handler: () => void;
        };
        checkboxOption: {
            handler: () => void;
            immediate: boolean;
        };
        'checkboxOption.selectedRowKeys': {
            handler: () => void;
        };
        internalCheckboxSelectedRowKeys: {
            handler: () => void;
        };
        radioOption: {
            handler: () => void;
            immediate: boolean;
        };
        'radioOption.selectedRowKey': {
            handler: () => void;
        };
    };
    function mounted(): void;
    namespace methods {
        function isLastLeftFixedColumn(column: any): boolean;
        function isfirstRightFixedColumn(column: any): boolean;
        function expandRowChange(rowData: any, rowIndex: any): boolean;
        function rowClick({ rowData, rowIndex }: {
            rowData: any;
            rowIndex: any;
        }): boolean;
        function isExpandRow({ rowData, rowIndex }: {
            rowData: any;
            rowIndex: any;
        }): boolean;
        function tdSizeChange({ key, width }: {
            key: any;
            width: any;
        }): void;
        function initInternalExpandRowKeys(): boolean;
        function getExpandRowComp({ rowData, rowIndex }: {
            rowData: any;
            rowIndex: any;
        }): any;
        function sendToCheckboxAll(): void;
        function initInternalRadioSelectedRowKey(): boolean;
        function initInternalCheckboxSelectedRowKeys(): boolean;
        function resetInternalCheckboxSelectedRowKeys(): void;
        function checkboxSelectedRowChange({ rowKey, isSelected }: {
            rowKey: any;
            isSelected: any;
        }): void;
        function checkboxSelectedAllChange({ isSelected }: {
            isSelected: any;
        }): void;
        function radioSelectedRowChange({ rowKey }: {
            rowKey: any;
        }): void;
        function getTrKey({ rowData, rowIndex }: {
            rowData: any;
            rowIndex: any;
        }): any;
        function renderingRowKeys(rowKeys: any): void;
    }
    function render(): any;
}
export default _default;
import BodyTr from './body-tr.jsx';
