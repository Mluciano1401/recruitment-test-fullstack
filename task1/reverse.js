function isSpecialChar(char){
    let specialChars = ['#','%','&','$','@'];
    let flag = false;
    specialChars.forEach(element => {
        if(char == element){
            flag = true;
        }
    });
    return flag;
}

let arr = ['n','2','&','a','l','9','$','q','47','i','a','j','b','z','%','8'];
let position = [];
let arr2 = []

for(let i = arr.length - 1; i >= 0; i--){
    if(isSpecialChar(arr[i]) == true){
        position.push([i, arr[i]]);
    }else{
        arr2.push(arr[i]);
    }
}

position.reverse();

for(let [i, char] of position){
    arr2.splice(i,0,char);
}

console.log(arr2);

/*case 1
original
 [n,2,&,a,l,9,$,q,47,i,a,j,b,z,%,8]
result
 [8,z,&,b,j,a,$,i,47,q,9,l,a,2,%,n]
*/