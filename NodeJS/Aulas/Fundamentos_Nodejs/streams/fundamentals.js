import { Readable, Writable, Transform } from 'node:stream'

class OneToHundread extends Readable{
    index = 1

    _read(){
        const i = this.index++
        setTimeout(() => {
            if(i > 100){
                this.push(null)
            }else{
                const buf = Buffer.from(String(i))

                this.push(buf)
            }
        }, 1000)
    }
}

class MutiplyByTen extends Writable{
    _write(chunk, enconding, callback){
        console.log(chunk.toString() * 10)
        callback()
    }
}

class InverseNumber extends Transform{
    _transform(chunk, enconding, callback){
        const transformed = Number(chunk.toString()) * -1

        const buf = Buffer.from(transformed.toString())

        callback(null, buf)
    }
}

new OneToHundread()
    .pipe(new InverseNumber())
    .pipe(new MutiplyByTen())