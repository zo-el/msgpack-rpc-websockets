interface IRPCError {
    code: number;
    message: string;
    data?: string;
}
/**
 * Creates a MSGPACK-compliant error.
 * @param {Number} code - error code
 * @param {String} details - error details
 * @return {Object}
 */
declare function createError(code: number, details?: string): IRPCError;
/**
 * Creates a ArrayBuffer from a uInt8Array.
 * @param {Uint8Array} array - data
 * @return {ArrayBuffer}
 */
declare function typedArrayToBuffer(array: Uint8Array): ArrayBuffer;
export { createError, typedArrayToBuffer };
