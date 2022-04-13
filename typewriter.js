const sentence = "hello there from lighthouse labs";

const typewriter = (string) => {
  if (typeof string !== 'string') {
    return console.log("Input is not a string");
  }
  
  for (let i = 0; i < string.length; i++) {

    if (i === string.length - 1) {
      setTimeout(() => {
        process.stdout.write(string[i] + "\n");
      }, 50 + i * 50);
    } else {
      setTimeout(() => {
        process.stdout.write(string[i]);
      }, 50 + i * 50);
    }
  }
};

typewriter(sentence);

// Note: if two ore more functions are run at once, the results get jumbled together because of the use of equal setTimeout()s- I talked to a mentor and he thought at this point creating a function that will wait for the first iteration to finish is outside of the scope of the problem (since that requires promises, which we haven't covered yet)

// const altSentence = "this should work too";
// typewriter(altSentence);

// const testErrorNum = 123;
// const testErrorBoolean = true;
// typewriter(testErrorNum);
// typewriter(testErrorBoolean);