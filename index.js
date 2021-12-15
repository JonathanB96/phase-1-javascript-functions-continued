// code your solution here
function saturdayFun(msg = 'roller-skate'){
return `This Saturday, I want to ${msg}!`;
    
}
const mondayWork = function(msg = 'go to the office'){
    return `This Monday, I will ${msg}.`;
}
function wrapAdjective(wrap = "*"){
   
    return function innerFunc(adj = "special"){
        return `You are ${wrap}${adj}${wrap}!`;

    }


}

