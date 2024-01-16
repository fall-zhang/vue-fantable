declare namespace _default {
    let name: string;
    namespace props {
        namespace colgroups {
            let type: ArrayConstructor;
            let required: boolean;
        }
        namespace footerData {
            let type_1: ArrayConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace hasFixedColumn {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default: boolean;
            export { _default as default };
        }
        namespace allRowKeys {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace rowKeyFieldName {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_1: any;
            export { _default_1 as default };
        }
        namespace cellStyleOption {
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
        namespace footerRows {
            let type_7: ArrayConstructor;
            export { type_7 as type };
            function _default_4(): any[];
            export { _default_4 as default };
        }
        namespace fixedFooter {
            let type_8: BooleanConstructor;
            export { type_8 as type };
            let _default_5: boolean;
            export { _default_5 as default };
        }
        namespace cellSpanOption {
            let type_9: ObjectConstructor;
            export { type_9 as type };
            function _default_6(): any;
            export { _default_6 as default };
        }
    }
    namespace computed {
        function footerClass(): {
            [x: string]: any;
        };
    }
    namespace methods {
        function getTrKey({ rowData, rowIndex }: {
            rowData: any;
            rowIndex: any;
        }): any;
    }
    function render(): any;
}
export default _default;
