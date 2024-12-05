// def find_peaks(array):
//   for i in range (1,len(array)-1):
//     if(array[i] > array[i-1]  and array[i] > array[i+1]):
//         return array[i]
// result =find_peaks([1,4,2,8,9,19])
// print(result)
function findPeaks(array) {
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i] > array[i - 1] && array[i] > array[i + 1]) {
      return array[i]
    }
  }
  return null 
}