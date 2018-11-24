var extended = require("../extended"),
    out = process.stdout,
    stream = require("stream"),
    ParserStream = require('./parser_stream');


function parse(options) {
    return new ParserStream(options);
}

function fromStream(stream, options) {
    return stream.pipe(new ParserStream(options));
}

function fromPath(location, options) {
    throw new Error("fs not supported");
}

function fromString(string, options) {
    var rs = new stream.Readable();
    rs.push(string);
    rs.push(null);
    return rs.pipe(new ParserStream(options));
}

parse.fromStream = fromStream;
parse.fromPath = fromPath;
parse.fromString = fromString;
module.exports = parse;
