declare namespace _default {
    let name: string;
    namespace props {
        namespace width {
            export let type: NumberConstructor;
            let _default: number;
            export { _default as default };
        }
        namespace maxWidth {
            let type_1: NumberConstructor;
            export { type_1 as type };
            let _default_1: number;
            export { _default_1 as default };
        }
        namespace isMultiple {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
        namespace value {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            let _default_3: any;
            export { _default_3 as default };
        }
        namespace placeholder {
            let type_4: StringConstructor;
            export { type_4 as type };
            let _default_4: string;
            export { _default_4 as default };
            export function validator(value: any): boolean;
        }
        namespace textAlign {
            let type_5: StringConstructor;
            export { type_5 as type };
            let _default_5: string;
            export { _default_5 as default };
        }
        namespace isInput {
            let type_6: BooleanConstructor;
            export { type_6 as type };
            let _default_6: boolean;
            export { _default_6 as default };
        }
        namespace popperAppendTo {
            let type_7: any[];
            export { type_7 as type };
            function _default_7(): any;
            export { _default_7 as default };
        }
    }
    let emits: string[];
    function data(): {
        visible: boolean;
        internalOptions: any[];
        inputValue: string;
        dropdownVisible: boolean;
    };
    namespace computed {
        function iconClass(): {
            [x: string]: any;
        };
    }
    namespace watch {
        export function value_1(): void;
        export { value_1 as value };
    }
    function created(): void;
    namespace methods {
        function init(): void;
        function showSelectInfo(): any;
        function selectedLabels(): any;
        function dropdownChange(): void;
    }
    function render(): any;
}
export default _default;
