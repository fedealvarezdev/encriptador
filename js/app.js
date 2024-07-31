let encryptBtn = document.querySelector(".encryption-form .primary-btn");
let decryptBtn = document.querySelector(".encryption-form .secondary-btn");
let copyBtn = document.querySelector(
  ".sidebar .message-wrapper .secondary-btn"
);
let messageInput = document.querySelector(".encryption-form [name=message]");
let infoMsg = document.querySelector(".encryption-form .info");
let resultContainer = document.querySelector(".sidebar .message-wrapper");
let resultMsg = document.querySelector(".sidebar .message-wrapper .message p");
let emptyResultContainer = document.querySelector(".sidebar .default-wrapper");

let encrypt = (msg) => {
  return msg
    .split("")
    .map((letter) => {
      switch (letter) {
        case "a":
          return "ai";
        case "e":
          return "enter";
        case "i":
          return "imes";
        case "o":
          return "ober";
        case "u":
          return "ufat";
        default:
          return letter;
      }
    })
    .join("");
};

let decrypt = (msg) => {
  return msg
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
};

let validateMsg = (msg) => {
  return msg.trim().length && msg.search(/[^a-z0-9 !]/) == -1;
};

messageInput.addEventListener("input", () => {
  if (!validateMsg(messageInput.value)) {
    infoMsg.classList.add("error");
    messageInput.classList.add("error");
  } else {
    infoMsg.classList.remove("error");
    messageInput.classList.remove("error");
  }
});

encryptBtn.addEventListener("click", () => {
  if (!validateMsg(messageInput.value)) {
    infoMsg.classList.add("error");
    messageInput.classList.add("error");
  } else {
    resultMsg.innerHTML = encrypt(messageInput.value);
    infoMsg.classList.remove("error");
    messageInput.classList.remove("error");
    emptyResultContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
  }
});

decryptBtn.addEventListener("click", () => {
  if (!validateMsg(messageInput.value)) {
    infoMsg.classList.add("error");
    messageInput.classList.add("error");
  } else {
    resultMsg.innerHTML = decrypt(messageInput.value);
    infoMsg.classList.remove("error");
    messageInput.classList.remove("error");
    emptyResultContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
  }
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(resultMsg.innerHTML);
});
