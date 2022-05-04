const buf=Buffer.from('Hey!')
console.log(buf[0]);//72
console.log(buf[1]);//101
console.log(buf[2]);//121
// we get such numbers as it uses utf-8 ani utf-8 is like built on top of 
// ASCII raixa so the Ascii stuff is preserved
console.log(buf.toString())
console.log(buf.length)

// iterating over buffer
for(const item of buf){
    console.log(item);
    // console.log(item.toString())
}

const buf2=Buffer.alloc(1024);
console.log(buf2)

const buf3=Buffer.allocUnsafe(1024)
console.log(buf3);

const buf4=Buffer.alloc(4);
buf4.write('Hey!')// alloc le ta sabai 0 banako hunthoyo
// by using .write() we changed it to desired stuff; write only takes exact value ig
// to like write we from other buffer we have to use another method

console.log(buf4);


// just like array we can also set the contents of array as we want

buf[1]=111;
console.log(buf.toString())// we changed the stuff

// the d
// to like write we from other buffer we have to use another method
const buf5=Buffer.alloc(4);
buf5.set(buf);
console.log(buf5.toString())

// also like array we can slice a buffer also
