(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/d9b6c_cjs_use-sync-external-store-shim_with-selector.development_fda431.js", {

"[project]/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js (ecmascript)": (function({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname, m: module, e: exports }) { !function() {

'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    (function() {
        'use strict';
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React = __turbopack_external_require__('react');
        var shim = __turbopack_require__("[project]/node_modules/use-sync-external-store/shim/index.js (ecmascript)");
        function is(x, y) {
            return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === 'function' ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        var useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
        function useSyncExternalStoreWithSelector(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
            var instRef = useRef(null);
            var inst;
            if (instRef.current === null) {
                inst = {
                    hasValue: false,
                    value: null
                };
                instRef.current = inst;
            } else {
                inst = instRef.current;
            }
            var _useMemo = useMemo(function() {
                var hasMemo = false;
                var memoizedSnapshot;
                var memoizedSelection;
                var memoizedSelector = function(nextSnapshot) {
                    if (!hasMemo) {
                        hasMemo = true;
                        memoizedSnapshot = nextSnapshot;
                        var _nextSelection = selector(nextSnapshot);
                        if (isEqual !== undefined) {
                            if (inst.hasValue) {
                                var currentSelection = inst.value;
                                if (isEqual(currentSelection, _nextSelection)) {
                                    memoizedSelection = currentSelection;
                                    return currentSelection;
                                }
                            }
                        }
                        memoizedSelection = _nextSelection;
                        return _nextSelection;
                    }
                    var prevSnapshot = memoizedSnapshot;
                    var prevSelection = memoizedSelection;
                    if (objectIs(prevSnapshot, nextSnapshot)) {
                        return prevSelection;
                    }
                    var nextSelection = selector(nextSnapshot);
                    if (isEqual !== undefined && isEqual(prevSelection, nextSelection)) {
                        return prevSelection;
                    }
                    memoizedSnapshot = nextSnapshot;
                    memoizedSelection = nextSelection;
                    return nextSelection;
                };
                var maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;
                var getSnapshotWithSelector = function() {
                    return memoizedSelector(getSnapshot());
                };
                var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? undefined : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                };
                return [
                    getSnapshotWithSelector,
                    getServerSnapshotWithSelector
                ];
            }, [
                getSnapshot,
                getServerSnapshot,
                selector,
                isEqual
            ]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
            var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
            useEffect(function() {
                inst.hasValue = true;
                inst.value = value;
            }, [
                value
            ]);
            useDebugValue(value);
            return value;
        }
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === 'function') {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
    })();
}

}.call(this) }),
}]);

//# sourceMappingURL=d9b6c_cjs_use-sync-external-store-shim_with-selector.development_fda431.js.map