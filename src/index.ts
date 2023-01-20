import cluster from "cluster";

const listen=(app:any,PORT:Number,callback:(...args:String[])=>void)=>{
const numCPUs = require('os').cpus().length;
if (cluster.isPrimary) {
//   console.log(`Master ${process.pid} is running`);
  
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  
  // This event is firs when worker died
  // cluster.on('exit', (worker, code, signal) => {
  //   // console.log(`worker ${worker.process.pid} died`);
  // });
}
  
// For Worker

else {
app.listen(PORT, callback);

}
}
export default listen;