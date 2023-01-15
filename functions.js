const is_equal = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new Error('its not an array')
    }

    if (arr1.length !== arr2.length) {
        return false;
    }
    else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return false;
            }
        }
        return true;
    }
}


const is_bigger = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        throw new Error('not a number')
    }

    if (x > y)
        return true; 
    else return false;
}

module.exports = { is_equal, is_bigger }
