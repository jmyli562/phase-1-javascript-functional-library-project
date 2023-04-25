function myEach(coll, callback){
    let type = "";

    if(Array.isArray(coll)){
        type = "array";
        coll.forEach((element)=>{
            callback(element);
        })

    }else if(typeof coll === 'object'){
        type = "object";
        for(const element in coll){
            callback(coll[element]);
        }
    }

    return coll;
}

function myMap(coll, callback){
    let type = "";
    let newArray = [];
    if(Array.isArray(coll)){
        coll.forEach((element)=>{
            newArray.push(callback(element));
        })

    }else if(typeof coll === 'object'){
        for(const element in coll){
            newArray.push(callback(coll[element]));
        }
    }

    return newArray;
}

function myReduce(coll, callback, acc = 0){

    if(Array.isArray(coll)){
        coll.forEach((element)=>{
            acc = callback(acc, element);
        })

    }else if(typeof coll === 'object'){
        for(const element in coll){
            acc = callback(acc, coll[element]);
        }
    }

    return acc;
}

function myFind(coll, pred){
    let result;
    if(Array.isArray(coll)){
        for(let i = 0; i < coll.length; i++){
            if(pred(coll[i])){
                result = coll[i];
                break;
            }else{
                result = undefined;
            }
        }
    }else if(typeof coll === 'object'){
        for(const element in coll){
            if(pred(coll[element])){
                result = coll[element];
                break;
            }else{
                result = undefined;
            }
        }
    }

    return result;
}

function myFilter(coll, pred){
    const arr = [];

    if(Array.isArray(coll)){
        for(let i = 0; i < coll.length; i++){
            if(pred(coll[i])){
                arr.push(coll[i]);
            }else{
                
            }
        }
    }else if(typeof coll === 'object'){
        for(const element in coll){
            if(pred(coll[element])){
                arr.push(coll[element]);
            }else{

            }
        }
    }

    return arr;
}

function mySize(coll){
    let size = 0;
    if(Array.isArray(coll)){
        coll.forEach((element)=>{
            size = size + 1;
        })

    }else if(typeof coll === 'object'){
        for(const element in coll){
            size = size + 1;
        }
    }

    return size;
}

function myFirst(arr, num = 1){
    let result;
    if(Array.isArray(arr)){
        for(let i = 0; i < arr.length; i++){
            if(num === 1){
                result = arr[0];
            }else{
                result = arr.slice(0, num);
            }
        }
    }

    return result;
}

function myLast(arr, num = 0){
    let result; 
    if(Array.isArray(arr)){
        for(let i = 0; i < arr.length; i++){
            if(num === 0){
                result = arr[arr.length - 1];
            }else{
                result = arr.slice(num * -1);
            }
        }
    }

    return result;
}

function myKeys(obj){
    let arr = [];

    for(let keys in obj){
        arr.push(keys);
    }

    return arr;
}

function myValues(obj){
    let arr = [];

    for(let values in obj){
        arr.push(obj[values]);
    }

    return arr;
}


