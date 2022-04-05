function saturdayFun(act1 = 'roller-skate'){
    return `This Saturday, I want to ${act1}!`
}
saturdayFun();

function mondayWork(act2 = 'go to the office'){
    return `This Monday, I will ${act2}.`
}
mondayWork();

function wrapAdjective(flair='*'){
    return function(adj='special'){
        return `You are ${flair}${adj}${flair}!`
    }
}