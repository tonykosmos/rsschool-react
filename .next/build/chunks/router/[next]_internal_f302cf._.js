(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/router/[next]_internal_f302cf._.js", {

"[next]/internal/headers.ts (ecmascript, router)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "headersFromEntries": ()=>headersFromEntries,
    "toPairs": ()=>toPairs
});
function headersFromEntries(entries) {
    const headers = Object.create(null);
    for (const [key, value] of entries){
        if (key in headers) {
            const prevValue = headers[key];
            if (typeof prevValue === 'string') {
                headers[key] = [
                    prevValue,
                    value
                ];
            } else {
                prevValue.push(value);
            }
        } else {
            headers[key] = value;
        }
    }
    return headers;
}
function toPairs(arr) {
    if (arr.length % 2 !== 0) {
        throw new Error('toPairs: expected an even number of elements');
    }
    const pairs = [];
    for(let i = 0; i < arr.length; i += 2){
        pairs.push([
            arr[i],
            arr[i + 1]
        ]);
    }
    return pairs;
}

})()),
"[next]/internal/server.ts (ecmascript, router)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "createServer": ()=>createServer,
    "makeRequest": ()=>makeRequest
});
var __TURBOPACK__external__node$3a$http__ = __turbopack_external_require__("node:http", true);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$headers$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[next]/internal/headers.ts (ecmascript, router)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
function createServer() {
    return new Promise((resolve)=>{
        const server = __TURBOPACK__external__node$3a$http__["default"].createServer();
        server.listen(0, ()=>{
            resolve(server);
        });
    });
}
function makeRequest(server, method, path, rawQuery, rawHeaders) {
    return new Promise((resolve, reject)=>{
        let clientRequest = null;
        let clientResponseResolve;
        let clientResponseReject;
        const clientResponsePromise = new Promise((resolve, reject)=>{
            clientResponseResolve = resolve;
            clientResponseReject = reject;
        });
        let serverRequest = null;
        let serverResponse = null;
        const maybeResolve = ()=>{
            if (clientRequest != null && serverRequest != null && serverResponse != null) {
                cleanup();
                resolve({
                    clientRequest,
                    clientResponsePromise,
                    serverRequest,
                    serverResponse
                });
            }
        };
        const cleanup = ()=>{
            server.removeListener('error', errorListener);
            server.removeListener('request', requestListener);
        };
        const errorListener = (err)=>{
            cleanup();
            reject(err);
        };
        const requestListener = (req, res)=>{
            serverRequest = req;
            serverResponse = res;
            maybeResolve();
        };
        const cleanupClientResponse = ()=>{
            if (clientRequest != null) {
                clientRequest.removeListener('response', responseListener);
                clientRequest.removeListener('error', clientResponseErrorListener);
            }
        };
        const clientResponseErrorListener = (err)=>{
            cleanupClientResponse();
            clientResponseReject(err);
        };
        const responseListener = (res)=>{
            cleanupClientResponse();
            clientResponseResolve(res);
        };
        server.once('request', requestListener);
        server.once('error', errorListener);
        const address = server.address();
        clientRequest = __TURBOPACK__external__node$3a$http__["default"].request({
            host: 'localhost',
            port: address.port,
            method,
            path: rawQuery != null && rawQuery.length > 0 ? `${path}?${rawQuery}` : path,
            headers: rawHeaders != null ? __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$headers$2e$ts__$28$ecmascript$29$__["headersFromEntries"](rawHeaders) : undefined
        });
        clientRequest.flushHeaders();
        clientRequest.once('response', responseListener);
        clientRequest.once('error', clientResponseErrorListener);
    });
}

})()),
}]);

//# sourceMappingURL=[next]_internal_f302cf._.js.map