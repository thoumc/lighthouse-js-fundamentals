for (var nums = 100; nums <= 200; nums ++){
  if (nums % 3 === 0 && nums % 4 === 0) {
    console.log ("LoopyLighthouse");
  } else if (nums % 4 === 0){
    console.log("Lighthouse");
  } else if (nums % 3 ===0){
    console.log ("Loopy");
  } else {
    console.log(nums);
  }
  }