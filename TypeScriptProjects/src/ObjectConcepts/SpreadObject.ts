let defaults = { width: 100, height: 100 };
let customSettings = { color: 'blue' }; 

let mergedSetting={...defaults,...customSettings}
console.log(mergedSetting)