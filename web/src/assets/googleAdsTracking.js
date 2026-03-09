export const trackFormConversion = () => {
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "conversion", {
    send_to: "AW-17928107635/R8L8CPOz2vIbEPPs5ORC",
  });
};

export const trackWhatsappConversion = (url) => {
  if (typeof window.gtag !== "function") {
    window.open(url, "_blank");
    return;
  }

  const callback = () => {
    window.open(url, "_blank");
  };

  window.gtag("event", "conversion", {
    send_to: "AW-17928107635/uTWoCLXdwYUcEPPs5ORC",
    event_callback: callback,
  });

  setTimeout(callback, 800);
};
