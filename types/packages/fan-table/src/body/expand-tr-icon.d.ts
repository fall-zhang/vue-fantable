declare namespace _default {
    let name: string;
    namespace props {
        namespace column {
            let type: ObjectConstructor;
            let required: boolean;
        }
        namespace expandOption {
            let type_1: ObjectConstructor;
            export { type_1 as type };
            function _default(): any;
            export { _default as default };
        }
        namespace rowData {
            let type_2: ObjectConstructor;
            export { type_2 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace expandedRowkeys {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            function _default_1(): any[];
            export { _default_1 as default };
        }
        namespace rowKeyFieldName {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_2: any;
            export { _default_2 as default };
        }
        namespace cellClick {
            let type_5: FunctionConstructor;
            export { type_5 as type };
            let _default_3: any;
            export { _default_3 as default };
        }
    }
    namespace computed {
        function isExpanded(): boolean;
        function expandRowIconContainerClass(): {
            [x: string]: boolean | (() => boolean);
        };
    }
    function render(): any;
}
export default _default;
