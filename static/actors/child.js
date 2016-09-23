console.log("HELO child");

const el = document.createElement("h1");
el.textContent = "Child";
document.body.appendChild(el);

const server = find("server");

server.cast("named", {"named": "cast"});

recv("test").then(([pat, msg]) => {
  console.log("GOT testMESSG", pat, msg);
  msg.from.cast("response", "it works!");
});
