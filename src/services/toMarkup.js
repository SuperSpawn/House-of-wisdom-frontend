const toMarkup = (type, firstInput, secondInput) => {
  switch (type) {
    case "h1":
      return `\n# ${firstInput.trim()}\n`;
    case "h2":
      return `\n## ${firstInput.trim()}\n`;
    case "p":
      return `${firstInput.trim()}`;
    case "bold":
      return `**${firstInput.trim()}**`;
    case "img":
      return `\n![image](${firstInput.trim()})\n`;
    case "a":
      return `\n[${firstInput.trim()}](${secondInput.trim()})\n`;
    case "quote":
      return `\n> ${firstInput.trim()}\n`;
    case "code":
      return `\n\`\`\`\n${firstInput.trim()}\n\`\`\`\n`;
    case "h3":
      return `\n### ${firstInput.trim()}\n`;
    case "h4":
      return `\n#### ${firstInput.trim()}\n`;
    case "h5":
      return `\n##### ${firstInput.trim()}\n`;
    case "h6":
      return `\n###### ${firstInput.trim()}\n`;
    case "h7":
      return `\n####### ${firstInput.trim()}\n`;
    default:
      return "";
  }
};

export default toMarkup;
