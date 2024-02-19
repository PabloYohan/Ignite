import http from 'node:http'
import {Transform} from 'node:stream'

class InverseNumber extends Transform{
    _transform(chunk, enconding, callback){
        const transformed = Number(chunk.toString()) * -1

        console.log(transformed)

        const buf = Buffer.from(transformed.toString())

        callback(null, buf)
    }
}

const server = http.createServer(async (req, res) => {
    const buffers = []

    for await (const chunk of req){
        buffers.push(chunk)
    }

    const fullStreamContent = Buffer.concat(buffers).toString()

    console.log(fullStreamContent)

    return res.end(fullStreamContent)
    // return req  
    //     .pipe(new InverseNumber())
    //     .pipe(res)
})

server.listen(3334)