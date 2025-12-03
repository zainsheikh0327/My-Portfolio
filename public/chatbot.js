window.embeddedChatbotConfig = {
    assistant_slug: "zain-sheikh",
    api_domain: "https://api.aiva.aiintegrations.tech",
    frontend_domain: "https://aiva.aiintegrations.tech"
  };
  
  (function () {
    const script = document.createElement("script");
    script.src = "https://bot.aiva.aiintegrations.tech/embed.min.js";
    script.defer = true;
    document.body.appendChild(script);
  })();