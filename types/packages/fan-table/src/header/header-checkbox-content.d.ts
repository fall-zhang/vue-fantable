declare namespace _default {
    let name: string;
    let inject: string[];
    namespace props {
        namespace checkboxOption {
            export let type: ObjectConstructor;
            function _default(): any;
            export { _default as default };
        }
    }
    function data(): {
        isSelected: boolean;
        isIndeterminate: boolean;
    };
    function mounted(): void;
    function unmounted(): void;
    namespace methods {
        function selectedChange(isSelected: any): void;
        function setSelectedAllInfo({ isSelected, isIndeterminate }: {
            isSelected: any;
            isIndeterminate: any;
        }): void;
    }
    function render(): any;
}
export default _default;
