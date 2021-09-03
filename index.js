// 1) 
function getMiddle(s)
{
  //Code goes here!
  let len = s.length;
  if (len%2 == 0){
    return s.substr(len/2 - 1, 2);
  }else{
    return s.substr(len/2 , 1);
  }
}


// 2)
function accum(s) {
  let tab = [];
  let a;
	for (i in s){
    tab.push("" +s[i].toUpperCase() + "" + s[i].toLowerCase().repeat(i));
  }
    return tab.join("-");
}

// 3)
function spinWords(string){
  let wordsTab = string.split(" ");

  for (let i in wordsTab){
    if(wordsTab[i].length  > 4){
     console.log(wordsTab[i]);
     wordsTab[i] = wordsTab[i].split("").reverse().join("");
    }
  }
  return wordsTab.join(" ");
}