// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector: any, text: string) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }
})
