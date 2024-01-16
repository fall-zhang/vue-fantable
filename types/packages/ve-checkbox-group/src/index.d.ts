declare namespace _default {
    let name: string;
    namespace props {
        namespace value {
            export let type: ArrayConstructor;
            function _default(): any[];
            export { _default as default };
        }
        namespace isVerticalShow {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default: boolean;
            export { _default as default };
        }
    }
    let emits: string[];
    namespace watch {
        function value(newVal: any): void;
    }
    namespace methods {
        function updateModel(label: any, checkedVal: any): void;
    }
    function render(): any;
}
export default _default;
