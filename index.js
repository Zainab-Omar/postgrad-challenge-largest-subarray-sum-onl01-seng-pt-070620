// Simple idea of the Kadane’s algorithm is to 
// look for all positive contiguous segments of the array 
// (max_ending_here is used for this). And keep track of 
// maximum sum contiguous segment among all positive segments (max_so_far is used for this). 
// Each time we get a positive sum compare it with max_so_far and update max_so_far if it 
// is greater than max_so_far
// Initialize: max_so_far = 0
// max_ending_here = 0

function largestSubarraySum(array){
    let current_max = 0
    let max_so_far = 0

    for(let i=0; i < array.length; i++){
        current_max = Math.max(0, current_max + array[i])
        max_so_far = Math.max(current_max, max_so_far)
    }
    return max_so_far
}

// array = [-2, 1, -3, 4, -1, 2, 1, -5, 4]