declare namespace _default {
    let name: string;
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
        namespace rowKeyFieldName {
            let type_3: StringConstructor;
            export { type_3 as type };
            let _default: any;
            export { _default as default };
        }
        namespace cellStyleOption {
            let type_4: ObjectConstructor;
            export { type_4 as type };
            function _default_1(): any;
            export { _default_1 as default };
        }
        namespace cellSpanOption {
            let type_5: ObjectConstructor;
            export { type_5 as type };
            function _default_2(): any;
            export { _default_2 as default };
        }
        namespace eventCustomOption {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            function _default_3(): any;
            export { _default_3 as default };
        }
        namespace cellSelectionData {
            let type_7: ObjectConstructor;
            export { type_7 as type };
            function _default_4(): any;
            export { _default_4 as default };
        }
        namespace footerRows {
            let type_8: ArrayConstructor;
            export { type_8 as type };
            function _default_5(): any[];
            export { _default_5 as default };
        }
        namespace fixedFooter {
            let type_9: BooleanConstructor;
            export { type_9 as type };
            let _default_6: boolean;
            export { _default_6 as default };
        }
    }
    namespace computed {
        function currentRowKey(): any;
        function trClass(): {
            [x: string]: boolean;
        };
    }
    namespace methods {
        function trHeightChange({ height }: {
            height: any;
        }): void;
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
