function randomItemPic(){
  // let websiteLink = document.getElementById("randomLink");
  // let websiteVar = Math.floor(Math.random() * 3);

  let item1 = document.getElementById("item1");
  let item2 = document.getElementById("item2");

  let item1Var = Math.floor(Math.random() * 6);
  let item2Var = Math.floor(Math.random() * 6);

  let equalFlag = (item1Var == item2Var)

  while (equalFlag && True){
    item2Var = Math.floor(Math.random() * 6);
    if (item1Var != item2Var){
      equalFlag == True;
    }
  }

  if (item1Var == 0){
    item1Var = "../images/1.jpg";
  }
  else if (item1Var == 1){
    item1Var = "../images/2.jpg";
  }
  else if (item1Var == 2) {
    item1Var = "../images/3.jpg";
  }
  else if (item1Var == 3) {
    item1Var = "../images/png";
  }
  else if (item1Var == 4) {
    item1Var = "../images/5.jpg";
  }
  else if (item1Var == 5) {
    item1Var = "../images/6.png";
  }

  if (item2Var == 0){
    item2Var = "../images/1.jpg";
  }
  else if (item2Var == 1){
    item2Var = "../images/2.jpg";
  }
  else if (item2Var == 2) {
    item2Var = "../images/3.jpg";
  }
  else if (item2Var == 3) {
    item2Var = "../images/4.png";
  }
  else if (item2Var == 4) {
    item2Var = "../images/5.jpg";
  }
  else if (item2Var == 5) {
    item2Var = "../images/6.png";
  }

  item1.src = item1Var;
  item2.src = item2Var;

};
