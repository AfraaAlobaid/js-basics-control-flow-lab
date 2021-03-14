function scuberGreetingForFeet(dis) {
  if (dis > 2500) return "No can do.";
  else if (dis > 2000) return "I will gladly take your thirty bucks.";
  else if (dis <= 400) return "This one is on me!";
}

function ternaryCheckCity(city) {
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(str) {
  switch (str) {
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return "Bye.";
  }
}
