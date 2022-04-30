function findBestApproximate(target, accurate = 3) {
    if ((typeof target != 'number') || (typeof accurate != 'number')) {
        throw 'Data Error! Arguments should be number'
    }
    if ((target <= 0) || (accurate <= 0)) {
        throw 'Data Error! Arguments should not be negtaive'
    }
    if ((parseInt(accurate) != accurate) || (accurate > 7)) {
        throw 'Algotheim Error! Accurate should be INTGER which less than 7'
    }
    //确保传入参数正确

    let closet = [0, 1];
    let differance = target;
    const range = Math.pow(10, accurate);
    //初始化

    for (let index = 0; index <= range; index++) {
        //index为分子 $index为分母
        for (let $index = 1; $index <= range; $index++) {
            if (Math.abs(index / $index - target) < differance) {
                closet[0] = index;
                closet[1] = $index;
                differance = Math.abs(index / $index - target);
            }
        }
    }
    //找到最佳逼近

    return closet;
}

function useFinding(num, text, accurate = 3) {
    const frag = findBestApproximate(num, accurate);
    const differance = Math.abs(frag[0] / frag[1] - num);
    return (`${text}的${accurate}位最佳逼近分数是${frag[0]} / ${frag[1]}.误差为${differance}`);
}

this.exports={findBestApproximate,useFinding};



