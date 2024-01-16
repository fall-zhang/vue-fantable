declare namespace _default {
    let name: string;
    namespace props {
        export namespace name_1 {
            let type: StringConstructor;
            let required: boolean;
        }
        export { name_1 as name };
        export namespace color {
            let type_1: StringConstructor;
            export { type_1 as type };
            let _default: any;
            export { _default as default };
        }
        export namespace size {
            let type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
            let _default_1: string;
            export { _default_1 as default };
        }
    }
    namespace computed {
        function iconStyle(): {
            color: any;
            'font-size': any;
        };
        function iconNameVue(): any;
    }
    let methods: {};
    function render(): any;
}
export default _default;
