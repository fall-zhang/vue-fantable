declare namespace _default {
    let name: string;
    namespace components {
        export { Plane };
        export { Bounce };
        export { Wave };
        export { Pulse };
        export { Flow };
        export { Grid };
    }
    function data(): {
        loading: boolean;
    };
    namespace computed {
        function loadingClass(): {
            [x: string]: any;
        };
        function loadingStyle(): {
            'background-color': any;
        };
        function loadIcon(): any;
    }
    namespace methods {
        function show(): void;
        function close(): void;
        function destroy(): void;
    }
    function render(): any;
}
export default _default;
import Plane from './components/plane.jsx';
import Bounce from './components/bounce.jsx';
import Wave from './components/wave.jsx';
import Pulse from './components/pulse.jsx';
import Flow from './components/flow.jsx';
import Grid from './components/grid.jsx';
