let length=[]
let words=[]
// def rebuild_sentence(words,length):
//     for i in range(len(length)):
//         for j in range (length[i]):
//             print(words[i][j],end="")
//         print(end=" ")
            
// rebuild_sentence( [ "the", "sky", "is", "blue" ] , [ 3, 2, 2, 1 ] ) 
function rebuildSentence(words, lengths) {
  for (let i = 0; i < lengths.length; i++) {
    for (let j = 0; j < lengths[i]; j++) {
      console.log(words[i][j]) 
    }
   console.log(' ') 
  }
}