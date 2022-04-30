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

this.exports={findBestApproximate,useFinding}

useFinding(Math.LN2, 'ln 2');
useFinding(Math.log(3), 'ln 3');
useFinding(Math.log(5), 'ln 5');
useFinding(Math.log(7), 'ln 7')
useFinding(Math.LN10, 'ln 10')
useFinding(Math.log(11), 'ln 11')
useFinding(Math.SQRT2, 'sqrt 2');
useFinding(Math.sqrt(3), 'sqrt 3');
useFinding(Math.sqrt(5), 'sqrt 5');
useFinding(Math.E, 'e');
useFinding(Math.PI, 'pi');

console.log('=======================================');

useFinding(Math.LN2, 'ln 2', 2);
useFinding(Math.log(3), 'ln 3', 2);
useFinding(Math.log(5), 'ln 5', 2);
useFinding(Math.log(7), 'ln 7', 2)
useFinding(Math.LN10, 'ln 10', 2)
useFinding(Math.log(11), 'ln 11', 2)
useFinding(Math.SQRT2, 'sqrt 2', 2);
useFinding(Math.sqrt(3), 'sqrt 3', 2);
useFinding(Math.sqrt(5), 'sqrt 5', 2);
useFinding(Math.E, 'e', 2);
useFinding(Math.PI, 'pi', 2);

console.log('=======================================');

useFinding(Math.LN2, 'ln 2', 4);
useFinding(Math.log(3), 'ln 3', 4);
useFinding(Math.log(5), 'ln 5', 4);
useFinding(Math.log(7), 'ln 7', 4)
useFinding(Math.LN10, 'ln 10', 4)
useFinding(Math.log(11), 'ln 11', 4)
useFinding(Math.SQRT2, 'sqrt 2', 4);
useFinding(Math.sqrt(3), 'sqrt 3', 4);
useFinding(Math.sqrt(5), 'sqrt 5', 4);
useFinding(Math.E, 'e', 4);
useFinding(Math.PI, 'pi', 4);

console.log('=======================================');

useFinding(Math.LN2, 'ln 2', 5);
useFinding(Math.log(3), 'ln 3', 5);
useFinding(Math.log(5), 'ln 5', 5);
useFinding(Math.log(7), 'ln 7', 5);
useFinding(Math.LN10, 'ln 10', 5);
useFinding(Math.log(11), 'ln 11', 5);
useFinding(Math.SQRT2, 'sqrt 2', 5);
useFinding(Math.sqrt(3), 'sqrt 3', 5);
useFinding(Math.sqrt(5), 'sqrt 5', 5);
useFinding(Math.E, 'e', 5);
useFinding(Math.PI, 'pi', 5);
