function createHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";

  // calm random position
  heart.style.left = Math.random() * 60 + 20 + "vw";
  heart.style.bottom = "-40px";

  // slow natural timing
  heart.style.animationDuration = (6 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 9000);
}

// heartbeat rhythm (not spam)
setInterval(createHeart, 2200);
