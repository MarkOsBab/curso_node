const fs = require('fs');
try {
    fs.writeFileSync('./fyh.txt', `${new Date()}`);
    const data = fs.readFileSync('./fyh.txt', 'utf-8');
    // console.log(data);
} catch(e){
    console.log(`${e}`);
}

fs.readFile('./fyh.txt', 'utf-8', (err, content) => {
    if(err){
        console.log(err);
    } else {
        console.log(content);
    }
})

fs.promises.writeFile('./info.txt', '{author: `Marcos`}').then(() => {
    console.log('Writed');
    fs.promises.appendFile('./info.txt', '{author: `Coderhouse`}');
    fs.promises.writeFile('./info.txt', '')
    fs.promises.writeFile('./package.json.coder', '');
}).catch((e) => {
    console.log(e);
})