declare namespace _default {
    let name: string;
    namespace props {
        namespace value {
            export let type: (StringConstructor | BooleanConstructor | NumberConstructor)[];
            let _default: any;
            export { _default as default };
        }
        namespace label {
            let type_1: StringConstructor[];
            export { type_1 as type };
            let _default_1: any;
            export { _default_1 as default };
        }
        let disabled: BooleanConstructor;
        let indeterminate: BooleanConstructor;
        namespace isControlled {
            let type_2: BooleanConstructor;
            export { type_2 as type };
            let _default_2: boolean;
            export { _default_2 as default };
        }
        namespace isSelected {
            let type_3: BooleanConstructor;
            export { type_3 as type };
            let _default_3: boolean;
            export { _default_3 as default };
        }
    }
    let emits: string[];
    function data(): {
        model: any;
        checkboxGroup: {};
    };
    namespace computed {
        function checkboxClass(): (string | {
            [x: string]: any;
        })[];
        function checkboxStyle(): {
            display: string;
        };
        function internalIsSelected(): any;
    }
    namespace watch {
        function value(): void;
    }
    function created(): void;
    namespace methods {
        function checkboxChange(event: any): boolean;
        function isCheckBoxGroup(): boolean;
        function getLabelContent(): any;
        function initModel(): void;
        function updateModelBySingle(): void;
        function updateModelByGroup(checkBoxGroup: any): void;
    }
    function render(): any;
}
export default _default;
