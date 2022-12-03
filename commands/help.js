function helpFn(dirPath){
    console.log(`
    List of All commands:
            node main.js tree "directoryPath"
            node main.js organize "directoryPath"
            node main.js help
    `);
}
module.exports={
    helpKey:helpFn
}