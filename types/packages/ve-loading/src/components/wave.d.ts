declare namespace _default {
    let name: string;
    namespace props {
        namespace color {
            let type: StringConstructor;
            let required: boolean;
        }
        namespace width {
            let type_1: (StringConstructor | NumberConstructor)[];
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace height {
            let type_2: (StringConstructor | NumberConstructor)[];
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
    }
    namespace computed {
        function spinStyle(): {
            width: any;
            height: any;
        };
        function itemStyle(): {
            'background-color': any;
        };
    }
    function render(): any;
}
export default _default;
