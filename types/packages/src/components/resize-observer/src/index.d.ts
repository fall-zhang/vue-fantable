declare namespace _default {
    let name: string;
    namespace props {
        namespace tagName {
            let type: StringConstructor;
            let required: boolean;
        }
        namespace id {
            let type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            let _default: any;
            export { _default as default };
        }
    }
    let emits: string[];
    function mounted(): void;
    function unmounted(): void;
    namespace methods {
        function resizeListener(contentRect: any): void;
    }
    function render(): any;
}
export default _default;
