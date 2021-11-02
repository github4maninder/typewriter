const sentence = " The future belongs to those who believe in the beauty of their dreams.\n";
let letter = sentence.slice(" ");

let delay = 500;
 for(const char of letter){
   setTimeout(()=>{
 process.stdout.write(char);},delay);
 delay += 50;
 };

 let author = ()=> {
  console.log("- Eleanor Roosevelt")};
 setTimeout(author,4000);