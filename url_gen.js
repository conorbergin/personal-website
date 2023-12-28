
let buffer = new Uint8Array(11)
crypto.getRandomValues(buffer)

// const mapByte = (x) => x > 128 ? 65 + x%26 : 97 + x%26

let id = buffer.map(x => x > 128 ? 65 + x%26 : 97 + x%26)
console.log(id.reduce((acc,x) => acc + String.fromCharCode(x),''))


if (process.argv.length  > 2) {
    let s = process.argv[2]
    console.log(s)
    s = s.split('').filter(c => /^[a-z]|[A-z]/.test(c))
    if (s.length > 10) {
        s = s.slice(0,10)
    }
    s.forEach((c,index) => {
        const upper = /^[A-Z]/.test(String.fromCharCode(id[index]))
        id[index] = upper ? c.toUpperCase().charCodeAt(0) : c.toLowerCase().charCodeAt(0)
    })
    
}

console.log(id.reduce((acc,x) => acc + String.fromCharCode(x),''))

console.log("hello")