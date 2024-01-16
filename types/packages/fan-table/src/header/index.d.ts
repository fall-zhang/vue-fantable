declare namespace _default {
    let name: string;
    namespace components {
        export { HeaderTr };
    }
    let inject: string[];
    namespace props {
        namespace columnsOptionResetTime {
            export let type: NumberConstructor;
            let _default: number;
            export { _default as default };
        }
        namespace groupColumns {
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
        namespace fixedHeader {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace isGroupHeader {
            let type_4: BooleanConstructor;
            export { type_4 as type };
            let required_3: boolean;
            export { required_3 as required };
        }
        namespace cellSelectionData {
            let type_5: ObjectConstructor;
            export { type_5 as type };
            function _default_1(): any;
            export { _default_1 as default };
        }
        namespace cellSelectionRangeData {
            let type_6: ObjectConstructor;
            export { type_6 as type };
            function _default_2(): any;
            export { _default_2 as default };
        }
        namespace headerIndicatorColKeys {
            let type_7: ObjectConstructor;
            export { type_7 as type };
            function _default_3(): any;
            export { _default_3 as default };
        }
        namespace headerRows {
            let type_8: ArrayConstructor;
            export { type_8 as type };
            function _default_4(): any[];
            export { _default_4 as default };
        }
        namespace checkboxOption {
            let type_9: ObjectConstructor;
            export { type_9 as type };
            function _default_5(): any;
            export { _default_5 as default };
        }
        namespace sortOption {
            let type_10: ObjectConstructor;
            export { type_10 as type };
            function _default_6(): any;
            export { _default_6 as default };
        }
        namespace cellStyleOption {
            let type_11: ObjectConstructor;
            export { type_11 as type };
            function _default_7(): any;
            export { _default_7 as default };
        }
        namespace eventCustomOption {
            let type_12: ObjectConstructor;
            export { type_12 as type };
            function _default_8(): any;
            export { _default_8 as default };
        }
    }
    function data(): {
        sortColumns: {};
    };
    namespace computed {
        function headerClass(): {
            [x: string]: any;
        };
    }
    namespace watch {
        export namespace colgroups_1 {
            function handler(): void;
            let immediate: boolean;
        }
        export { colgroups_1 as colgroups };
    }
    function mounted(): void;
    namespace methods {
        function sortChange({ currentField, sortResult }: {
            currentField: any;
            sortResult: any;
        }): void;
        function initSortColumns(): void;
    }
    function render(): any;
}
export default _default;
import HeaderTr from './header-tr.jsx';
