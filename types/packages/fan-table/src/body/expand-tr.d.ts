declare namespace _default {
    let name: string;
    namespace props {
        namespace tableViewportWidth {
            export let type: NumberConstructor;
            let _default: number;
            export { _default as default };
        }
        namespace expandColumn {
            let type_1: ObjectConstructor;
            export { type_1 as type };
            function _default_1(): any;
            export { _default_1 as default };
        }
        namespace colgroups {
            let type_2: ArrayConstructor;
            export { type_2 as type };
            export let required: boolean;
        }
        namespace expandOption {
            let type_3: ObjectConstructor;
            export { type_3 as type };
            function _default_2(): any;
            export { _default_2 as default };
        }
        namespace expandedRowkeys {
            let type_4: ArrayConstructor;
            export { type_4 as type };
            function _default_3(): any[];
            export { _default_3 as default };
        }
        namespace rowData {
            let type_5: ObjectConstructor;
            export { type_5 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace rowIndex {
            let type_6: NumberConstructor;
            export { type_6 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace rowKeyFieldName {
            let type_7: StringConstructor;
            export { type_7 as type };
            let _default_4: any;
            export { _default_4 as default };
        }
    }
    namespace computed {
        function columnCount(): any;
        function currentRowKey(): any;
        function isRowExpanded(): boolean;
        function expanRowClass(): {
            [x: string]: boolean;
        };
        function hasLeftFixedColumn(): any;
        function expandTdContentStyle(): {
            width: string;
        };
    }
    namespace methods {
        function getExpandRowContent(h: any): any;
    }
    function render(h: any): any;
}
export default _default;
