(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/8069e_use-sync-external-store_cjs_use-sync-external-store-shim.development_969153.js", {

"[project]/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = __turbopack_external_require__('react');
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
            {
                {
                    for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++){
                        args[_key2 - 1] = arguments[_key2];
                    }
                    printWarning('error', format, args);
                }
            }
        }
        function printWarning(level, format, args) {
            {
                var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
                var stack = ReactDebugCurrentFrame.getStackAddendum();
                if (stack !== '') {
                    format += '%s';
                    args = args.concat([
                        stack
                    ]);
                }
                var argsWithFormat = args.map(function(item) {
                    return String(item);
                });
                argsWithFormat.unshift('Warning: ' + format);
                Function.prototype.apply.call(console[level], console, argsWithFormat);
            }
        }
        function is(x, y) {
            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === 'function' ? Object.is : is;
        var useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
            {
                if (!didWarnOld18Alpha) {
                    if (React.startTransition !== undefined) {
                        didWarnOld18Alpha = true;
                        error('You are using an outdated, pre-release alpha of React 18 that ' + 'does not support useSyncExternalStore. The ' + 'use-sync-external-store shim will not work correctly. Upgrade ' + 'to a newer pre-release.');
                    }
                }
            }
            var value = getSnapshot();
            {
                if (!didWarnUncachedGetSnapshot) {
                    var cachedValue = getSnapshot();
                    if (!objectIs(value, cachedValue)) {
                        error('The result of getSnapshot should be cached to avoid an infinite loop');
                        didWarnUncachedGetSnapshot = true;
                    }
                }
            }
            var _useState = useState({
                inst: {
                    value: value,
                    getSnapshot: getSnapshot
                }
            }), inst = _useState[0].inst, forceUpdate = _useState[1];
            useLayoutEffect(function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                if (checkIfSnapshotChanged(inst)) {
                    forceUpdate({
                        inst: inst
                    });
                }
            }, [
                subscribe,
                value,
                getSnapshot
            ]);
            useEffect(function() {
                if (checkIfSnapshotChanged(inst)) {
                    forceUpdate({
                        inst: inst
                    });
                }
                var handleStoreChange = function() {
                    if (checkIfSnapshotChanged(inst)) {
                        forceUpdate({
                            inst: inst
                        });
                    }
                };
                return subscribe(handleStoreChange);
            }, [
                subscribe
            ]);
            useDebugValue(value);
            return value;
        }
        function checkIfSnapshotChanged(inst) {
            var latestGetSnapshot = inst.getSnapshot;
            var prevValue = inst.value;
            try {
                var nextValue = latestGetSnapshot();
                return !objectIs(prevValue, nextValue);
            } catch (error) {
                return true;
            }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
            return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined');
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
        var useSyncExternalStore$2 = React.useSyncExternalStore !== undefined ? React.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
    })();
}

}.call(this) }),
}]);

//# sourceMappingURL=8069e_use-sync-external-store_cjs_use-sync-external-store-shim.development_969153.js.map