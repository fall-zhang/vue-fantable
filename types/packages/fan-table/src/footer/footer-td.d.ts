declare namespace _default {
    let name: string;
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
        namespace rowIndex {
            let type_2: NumberConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace colgroups {
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
        namespace cellSpanOption {
            let type_5: ObjectConstructor;
            export { type_5 as type };
            function _default_1(): any;
            export { _default_1 as default };
        }
        namespace cellStyleOption {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            function _default_2(): any;
            export { _default_2 as default };
        }
        namespace eventCustomOption {
            let type_7: ObjectConstructor;
            export { type_7 as type };
            function _default_3(): any;
            export { _default_3 as default };
        }
        namespace cellSelectionData {
            let type_8: ObjectConstructor;
            export { type_8 as type };
            function _default_4(): any;
            export { _default_4 as default };
        }
        namespace footerRows {
            let type_9: ArrayConstructor;
            export { type_9 as type };
            function _default_5(): any[];
            export { _default_5 as default };
        }
        namespace fixedFooter {
            let type_10: BooleanConstructor;
            export { type_10 as type };
            let _default_6: boolean;
            export { _default_6 as default };
        }
    }
    namespace computed {
        function isLastLeftFixedColumn(): boolean;
        function isfirstRightFixedColumn(): boolean;
    }
    namespace methods {
        function getBodyTdClass({ fixed }: {
            fixed: any;
        }): {
            [x: string]: boolean;
        };
        function getBodyTdStyle({ key, align, fixed }: {
            key: any;
            align: any;
            fixed: any;
        }): {
            'text-align': any;
            left: string | number;
            right: string | number;
            bottom: number;
        };
        function getRenderContent(h: any): any;
        function getCellSpan(): {
            rowspan: number;
            colspan: number;
        };
        function cellClick(e: any, fn: any): void;
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
