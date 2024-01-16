declare namespace _default {
    let name: string;
    let inject: string[];
    namespace props {
        namespace radioOption {
            export let type: ObjectConstructor;
            function _default(): any;
            export { _default as default };
        }
        namespace rowKey {
            let type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            export let required: boolean;
        }
        namespace internalRadioSelectedRowKey {
            let type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
            let _default_1: any;
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
        export namespace internalRadioSelectedRowKey_1 {
            function handler(): void;
            let immediate: boolean;
        }
        export { internalRadioSelectedRowKey_1 as internalRadioSelectedRowKey };
    }
    namespace methods {
        function initSelected(): void;
        function selectedChange(): void;
    }
    function render(): any;
}
export default _default;
