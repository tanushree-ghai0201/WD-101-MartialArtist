let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");
let loadimage = (src, callback) => {
  let img = document.createElement("img");
  img.onload = () => callback(img);
  img.src = src; 
};

loadimage("\images/idle/1.png", (img) => {
 
 ctx.drawImage(img, 0, 0, 500, 500);
});
