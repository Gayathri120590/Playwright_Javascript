function intersection(array1, array2) {
    let intersectedArray = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            if (intersectedArray.includes(array1[i]) === false) {
                intersectedArray.push(array1[i]);
            }
        }
    }
    console.log(intersectedArray)
    return intersectedArray;
}
intersection([1,2,3,4],[3,4,5,6])
