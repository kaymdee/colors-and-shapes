function randomItemPic(){
  // let websiteLink = document.getElementById("randomLink");
  // let websiteVar = Math.floor(Math.random() * 3);

  let item1 = document.getElementById("item1");
  let item2 = document.getElementById("item2");

  let item1Var = Math.floor(Math.random() * 6);
  let item2Var = Math.floor(Math.random() * 6);

  console.log(item1Var);
  console.log(item2Var);

  let equalFlag = (item1Var == item2Var)

  while (equalFlag){
    item2Var = Math.floor(Math.random() * 6);
    if (item1Var != item2Var){
      equalFlag = false;
    }
    console.log(item2Var)
  }

  if (item1Var == 0){
    item1Var = "../static/images/1.jpg";
  }
  else if (item1Var == 1){
    item1Var = "../static/images/2.jpg";
  }
  else if (item1Var == 2) {
    item1Var = "../static/images/3.jpg";
  }
  else if (item1Var == 3) {
    item1Var = "../static/images/4.png";
  }
  else if (item1Var == 4) {
    item1Var = "../static/images/5.jpg";
  }
  else if (item1Var == 5) {
    item1Var = "../static/images/6.png";
  }

  if (item2Var == 0){
    item2Var = "../static/images/1.jpg";
  }
  else if (item2Var == 1){
    item2Var = "../static/images/2.jpg";
  }
  else if (item2Var == 2) {
    item2Var = "../static/images/3.jpg";
  }
  else if (item2Var == 3) {
    item2Var = "../static/images/4.png";
  }
  else if (item2Var == 4) {
    item2Var = "../static/images/5.jpg";
  }
  else if (item2Var == 5) {
    item2Var = "../static/images/6.png";
  }

  console.log(item1Var)
  console.log(item2Var)

  item1.src = item1Var;
  item2.src = item2Var;

};
