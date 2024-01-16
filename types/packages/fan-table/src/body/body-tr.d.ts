declare namespace _default {
    let name: string;
    namespace components {
        export { BodyTd };
    }
    let inject: string[];
    namespace props {
        namespace rowData {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace rowIndex {
            let type_1: NumberConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace colgroups {
            let type_2: ArrayConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace columnCollection {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            let required_3: boolean;
            export { required_3 as required };
        }
        namespace rowKeyFieldName {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default: any;
            export { _default as default };
        }
        namespace allRowKeys {
            let type_5: ArrayConstructor;
            export { type_5 as type };
            let required_4: boolean;
            export { required_4 as required };
        }
        namespace expandOption {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            function _default_1(): any;
            export { _default_1 as default };
        }
        namespace isExpandRow {
            let type_7: BooleanConstructor;
            export { type_7 as type };
            let required_5: boolean;
            export { required_5 as required };
        }
        namespace expandedRowkeys {
            let type_8: ArrayConstructor;
            export { type_8 as type };
            function _default_2(): any[];
            export { _default_2 as default };
        }
        namespace expandRowChange {
            let type_9: FunctionConstructor;
            export { type_9 as type };
            let _default_3: any;
            export { _default_3 as default };
        }
        namespace checkboxOption {
            let type_10: ObjectConstructor;
            export { type_10 as type };
            function _default_4(): any;
            export { _default_4 as default };
        }
        namespace internalCheckboxSelectedRowKeys {
            let type_11: ArrayConstructor;
            export { type_11 as type };
            function _default_5(): any;
            export { _default_5 as default };
        }
        namespace radioOption {
            let type_12: ObjectConstructor;
            export { type_12 as type };
            function _default_6(): any;
            export { _default_6 as default };
        }
        namespace internalRadioSelectedRowKey {
            let type_13: (StringConstructor | NumberConstructor)[];
            export { type_13 as type };
            let _default_7: any;
            export { _default_7 as default };
        }
        namespace isVirtualScroll {
            let type_14: BooleanConstructor;
            export { type_14 as type };
            let _default_8: boolean;
            export { _default_8 as default };
        }
        namespace cellStyleOption {
            let type_15: ObjectConstructor;
            export { type_15 as type };
            function _default_9(): any;
            export { _default_9 as default };
        }
        namespace highlightRowKey {
            let type_16: (StringConstructor | NumberConstructor)[];
            export { type_16 as type };
            let _default_10: any;
            export { _default_10 as default };
        }
        namespace eventCustomOption {
            let type_17: ObjectConstructor;
            export { type_17 as type };
            function _default_11(): any;
            export { _default_11 as default };
        }
        namespace cellSelectionData {
            let type_18: ObjectConstructor;
            export { type_18 as type };
            function _default_12(): any;
            export { _default_12 as default };
        }
        namespace cellSelectionRangeData {
            let type_19: ObjectConstructor;
            export { type_19 as type };
            function _default_13(): any;
            export { _default_13 as default };
        }
        namespace bodyIndicatorRowKeys {
            let type_20: ObjectConstructor;
            export { type_20 as type };
            function _default_14(): any;
            export { _default_14 as default };
        }
        namespace cellSpanOption {
            let type_21: ObjectConstructor;
            export { type_21 as type };
            function _default_15(): any;
            export { _default_15 as default };
        }
        namespace editOption {
            let type_22: ObjectConstructor;
            export { type_22 as type };
            function _default_16(): any;
            export { _default_16 as default };
        }
    }
    namespace computed {
        function currentRowKey(): any;
        function trClass(): {
            [x: string]: boolean;
        };
    }
    namespace methods {
        function rowClick(e: any, fn: any): void;
        function rowDblclick(e: any, fn: any): void;
        function rowContextmenu(e: any, fn: any): void;
        function rowMouseenter(e: any, fn: any): void;
        function rowMouseleave(e: any, fn: any): void;
        function rowMousemove(e: any, fn: any): void;
        function rowMouseover(e: any, fn: any): void;
        function rowMousedown(e: any, fn: any): void;
        function rowMouseup(e: any, fn: any): void;
    }
    function render(): any;
}
export default _default;
import BodyTd from './body-td.jsx';
