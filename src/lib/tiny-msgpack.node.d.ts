declare module "tiny-msgpack" {
    import msgpack from "tiny-msgpack"

    function encode(value: any): any
    function decode(text: any): any
}
