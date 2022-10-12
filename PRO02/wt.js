var spawn = require('child_process').spawn;

const result = spawn('py',['pmain.py']);

result_01.stdout.on('data',(result)=>{
    console.log(result.toStribg());
})