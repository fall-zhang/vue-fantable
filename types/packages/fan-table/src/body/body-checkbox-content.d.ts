declare namespace _default {
    let name: string;
    let inject: string[];
    namespace props {
        namespace checkboxOption {
            export let type: ObjectConstructor;
            function _default(): any;
            export { _default as default };
        }
        namespace rowKey {
            let type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            export let required: boolean;
        }
        namespace internalCheckboxSelectedRowKeys {
            let type_2: ArrayConstructor;
            export { type_2 as type };
            function _default_1(): any;
            export { _default_1 as default };
        }
    }
    function data(): {
        isSelected: boolean;
    };
    namespace computed {
        function disabled(): boolean;
        function isControlledProp(): boolean;
    }
    namespace watch {
        export namespace internalCheckboxSelectedRowKeys_1 {
            function handler(): void;
            let immediate: boolean;
        }
        export { internalCheckboxSelectedRowKeys_1 as internalCheckboxSelectedRowKeys };
    }
    namespace methods {
        function initSelected(): void;
        function selectedChange(isSelected: any): void;
    }
    function render(): any;
}
export default _default;
