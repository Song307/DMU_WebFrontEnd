import lodash from "lodash";
const arr=[1,1,1,1,2,2,2,4,4,3,2,1,];
const uniArr=lodash.uniqBy(arr);
console.log(uniArr);