const responses = {
  hello: "Hi there! How can I assist you today?",
  whatsapp: "WhatsApp lets you chat and share videos. Would you like a tutorial?",
  maps: "Google Maps helps you navigate easily. We have a guide on our Tutorials page!",
  paytm: "Paytm helps in online payments and mobile recharges. Need help with it?",
  thanks: "You're welcome! I'm always here to help."
};

document.addEventListener('DOMContentLoaded', () => {
  const chatInput = document.getElementById('chat-input');
  const chatBox = document.getElementById('chat-box');

  document.getElementById('send-btn').addEventListener('click', () => {
    const msg = chatInput.value.toLowerCase().trim();
    if (!msg) return;

    const reply = responses[msg] || "Hmm, that's interesting! Let me think... Can you rephrase or ask something else?";

    const userMsg = `<div class='chat user'><strong>You:</strong> ${msg}</div>`;
    const botMsg = `<div class='chat bot'><strong>DigiBuddy:</strong> ${reply}</div>`;

    chatBox.innerHTML += userMsg + botMsg;
    chatBox.scrollTop = chatBox.scrollHeight;
    chatInput.value = '';
  });
});
