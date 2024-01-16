declare namespace _default {
    let name: string;
    namespace components {
        export { BodyCheckboxContent };
        export { ExpandTrIcon };
    }
    let inject: string[];
    namespace props {
        namespace rowData {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace column {
            let type_1: ObjectConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace columnCollection {
            let type_2: ArrayConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace rowIndex {
            let type_3: NumberConstructor;
            export { type_3 as type };
            let required_3: boolean;
            export { required_3 as required };
        }
        namespace colgroups {
            let type_4: ArrayConstructor;
            export { type_4 as type };
            let required_4: boolean;
            export { required_4 as required };
        }
        namespace rowKeyFieldName {
            let type_5: StringConstructor;
            export { type_5 as type };
            let _default: any;
            export { _default as default };
        }
        namespace allRowKeys {
            let type_6: ArrayConstructor;
            export { type_6 as type };
            let required_5: boolean;
            export { required_5 as required };
        }
        namespace expandOption {
            let type_7: ObjectConstructor;
            export { type_7 as type };
            function _default_1(): any;
            export { _default_1 as default };
        }
        namespace isExpandRow {
            let type_8: BooleanConstructor;
            export { type_8 as type };
            let required_6: boolean;
            export { required_6 as required };
        }
        namespace expandedRowkeys {
            let type_9: ArrayConstructor;
            export { type_9 as type };
            function _default_2(): any[];
            export { _default_2 as default };
        }
        namespace checkboxOption {
            let type_10: ObjectConstructor;
            export { type_10 as type };
            function _default_3(): any;
            export { _default_3 as default };
        }
        namespace internalCheckboxSelectedRowKeys {
            let type_11: ArrayConstructor;
            export { type_11 as type };
            function _default_4(): any;
            export { _default_4 as default };
        }
        namespace radioOption {
            let type_12: ObjectConstructor;
            export { type_12 as type };
            function _default_5(): any;
            export { _default_5 as default };
        }
        namespace internalRadioSelectedRowKey {
            let type_13: (StringConstructor | NumberConstructor)[];
            export { type_13 as type };
            let _default_6: any;
            export { _default_6 as default };
        }
        namespace cellStyleOption {
            let type_14: ObjectConstructor;
            export { type_14 as type };
            function _default_7(): any;
            export { _default_7 as default };
        }
        namespace eventCustomOption {
            let type_15: ObjectConstructor;
            export { type_15 as type };
            function _default_8(): any;
            export { _default_8 as default };
        }
        namespace cellSelectionData {
            let type_16: ObjectConstructor;
            export { type_16 as type };
            function _default_9(): any;
            export { _default_9 as default };
        }
        namespace cellSelectionRangeData {
            let type_17: ObjectConstructor;
            export { type_17 as type };
            function _default_10(): any;
            export { _default_10 as default };
        }
        namespace bodyIndicatorRowKeys {
            let type_18: ObjectConstructor;
            export { type_18 as type };
            function _default_11(): any;
            export { _default_11 as default };
        }
        namespace cellSpanOption {
            let type_19: ObjectConstructor;
            export { type_19 as type };
            function _default_12(): any;
            export { _default_12 as default };
        }
        namespace editOption {
            let type_20: ObjectConstructor;
            export { type_20 as type };
            function _default_13(): any;
            export { _default_13 as default };
        }
    }
    let emits: string[];
    function data(): {
        rawCellValue: string;
    };
    namespace computed {
        function currentColumnCollectionItem(): any;
        function currentRowKey(): any;
    }
    namespace watch {
        export namespace rowData_1 {
            function handler(rowData: any): void;
            let deep: boolean;
            let immediate: boolean;
        }
        export { rowData_1 as rowData };
    }
    namespace methods {
        function bodyTdStyle(): {};
        function bodyTdClass(): {
            [x: string]: boolean;
        };
        function getEllipsisContentStyle(): {
            '-webkit-line-clamp': any;
        };
        function getRenderContent(h: any): any;
        function getCheckboxContent(): any;
        function getRadioContent(): any;
        function getCellSpan(): {
            rowspan: number;
            colspan: number;
        };
        function cellClick(e: any, fn: any): boolean;
        function cellDblclick(e: any, fn: any): void;
        function cellContextmenu(e: any, fn: any): void;
        function cellMouseenter(e: any, fn: any): void;
        function cellMouseleave(e: any, fn: any): void;
        function cellMousemove(e: any, fn: any): void;
        function cellMouseover(e: any, fn: any): void;
        function cellMousedown(e: any, fn: any): void;
        function cellMouseup(e: any, fn: any): void;
    }
    function render(h: any): any;
}
export default _default;
import BodyCheckboxContent from './body-checkbox-content.jsx';
import ExpandTrIcon from './expand-tr-icon.jsx';
