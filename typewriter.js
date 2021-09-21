// animated sentence //

const sentence = "this is a string test";

// for (const char of sentence) {
//   // console.log(char);
//   const timer = 3000 * (char + 1);
//   // print each char
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, timer);
// }

for (let i = 0; i < sentence.length; i++) {
  const waitTime = 100 * (i + 1);
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, waitTime);
}