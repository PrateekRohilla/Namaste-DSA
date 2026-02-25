//https://leetcode.com/problems/merge-sorted-array/description/

function mergeSorted(nums1, m, nums2, n){

    if(n == 0)
        return nums1;

    let i = m-1, j = n-1;
    let k = nums1.length-1;

    while(i >= 0 && j >= 0){

        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }
        else{
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    while(j >= 0){
        nums1[k] = nums2[j];
        j--,k--;
    }

    return nums1;
}



let m = 3, n = 3;
let nums1 = [1,2,3,0,0,0];
let nums2 = [2,5,6];

//test case 2
//let nums1 = [1], m = 1, nums2 = [], n = 0;

//test case 3
//let nums1 = [0], m = 0, nums2 = [1], n = 1;

let merged = mergeSorted(nums1, m, nums2, n);
console.log(merged);