declare namespace _default {
    let name: string;
    let directives: {
        'click-outside': {
            mounted: (el: any, binding: any, vNode: any) => void;
            unmounted: (el: any) => void;
        };
    };
    namespace props {
        namespace isSelect {
            export let type: BooleanConstructor;
            let _default: boolean;
            export { _default as default };
        }
        namespace showOperation {
            let type_1: BooleanConstructor;
            export { type_1 as type };
            let _default_1: boolean;
            export { _default_1 as default };
        }
        namespace width {
            let type_2: NumberConstructor;
            export { type_2 as type };
            let _default_2: number;
            export { _default_2 as default };
        }
        namespace maxWidth {
            let type_3: NumberConstructor;
            export { type_3 as type };
            let _default_3: number;
            export { _default_3 as default };
        }
        namespace maxHeight {
            let type_4: NumberConstructor;
            export { type_4 as type };
            let _default_4: number;
            export { _default_4 as default };
        }
        namespace isMultiple {
            let type_5: BooleanConstructor;
            export { type_5 as type };
            let _default_5: boolean;
            export { _default_5 as default };
        }
        namespace value {
            let type_6: ArrayConstructor[];
            export { type_6 as type };
            let _default_6: any;
            export { _default_6 as default };
        }
        namespace textAlign {
            let type_7: StringConstructor;
            export { type_7 as type };
            let _default_7: string;
            export { _default_7 as default };
        }
        namespace isInput {
            let type_8: BooleanConstructor;
            export { type_8 as type };
            let _default_8: boolean;
            export { _default_8 as default };
        }
        namespace confirmFilterText {
            let type_9: StringConstructor;
            export { type_9 as type };
            let _default_9: string;
            export { _default_9 as default };
        }
        namespace resetFilterText {
            let type_10: StringConstructor;
            export { type_10 as type };
            let _default_10: string;
            export { _default_10 as default };
        }
        namespace hideByItemClick {
            let type_11: BooleanConstructor;
            export { type_11 as type };
            let _default_11: boolean;
            export { _default_11 as default };
        }
        namespace showRadio {
            let type_12: BooleanConstructor;
            export { type_12 as type };
            let _default_12: boolean;
            export { _default_12 as default };
        }
        namespace visible {
            let type_13: BooleanConstructor;
            export { type_13 as type };
            let _default_13: boolean;
            export { _default_13 as default };
        }
        namespace isControlled {
            let type_14: BooleanConstructor;
            export { type_14 as type };
            let _default_14: boolean;
            export { _default_14 as default };
        }
        namespace isCustomContent {
            let type_15: BooleanConstructor;
            export { type_15 as type };
            let _default_15: boolean;
            export { _default_15 as default };
        }
        namespace defaultInstance {
            let type_16: NumberConstructor;
            export { type_16 as type };
            let _default_16: number;
            export { _default_16 as default };
        }
        namespace popperAppendTo {
            let type_17: any[];
            export { type_17 as type };
            function _default_17(): any;
            export { _default_17 as default };
        }
        namespace beforeVisibleChange {
            let type_18: FunctionConstructor;
            export { type_18 as type };
            let _default_18: any;
            export { _default_18 as default };
        }
    }
    let emits: string[];
    function data(): {
        internalVisible: boolean;
        internalOptions: any[];
        inputValue: string;
        isDropdownShowTriggerClicked: boolean;
        rootId: string;
        dropdownItemsPanelId: string;
        popperAppendToEl: any;
        appendToElTagName: any;
    };
    namespace computed {
        function isDropdownVisible(): any;
        function getMaxWidth(): number;
        function selectedLabels(): any;
        function operationFilterClass(): {
            [x: string]: boolean;
        };
        function dropdownItemsClass(): {
            [x: string]: boolean | (() => any);
        };
    }
    namespace watch {
        export function value_1(): void;
        export { value_1 as value };
        export namespace visible_1 {
            function handler(visible: any): void;
            let immediate: boolean;
        }
        export { visible_1 as visible };
    }
    function created(): void;
    function mounted(): void;
    function unmounted(): void;
    namespace methods {
        function init(): void;
        function confirm(): void;
        function reset(): void;
        function showDropDown(): boolean;
        function hideDropDown(): boolean;
        function beforeVisibleChangeCallback(nextVisible: any): any;
        function removeOrEmptyRootPanel(): void;
        function changDropdownPanelPosition(): boolean;
        function setInputValue(): void;
        function dropdownPanelClick(): void;
        function dropdownShowToggle(): void;
        function singleSelectOptionClick(e: any, item: any): void;
        function getTextAlignClass(): string;
        function dropdownClickOutside(): void;
        function checkedChangeControl(item: any, isChecked: any): void;
        function getRandomIdWithPrefix(): string;
        function addRootElementToElement(): boolean;
    }
    function render(): any;
}
export default _default;
