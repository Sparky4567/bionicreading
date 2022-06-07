class BionicReader {
  constructor() {
    this.paragraphs = document.querySelectorAll("p");
    this.divs = document.querySelectorAll("div");
  }

  makeBionicpara() {
    this.paragraphs.forEach((element) => {
      const text = element.innerText;
      const words = text.split(" ");
      element.innerText = "";
      let newArray = [];
      for (let index = 0; index < words.length; index++) {
        const word = words[index];
        const wordLength = word.length;
        const firstWordHalf = word.slice(0, Math.floor(word.length / 2));
        const secondWordHalf = word.slice(
          Math.floor(word.length / 2),
          wordLength
        );
        const reconstructed = `<b>${firstWordHalf}</b>${secondWordHalf}`;
        newArray.push(reconstructed);
      }
      let textString = "";
      newArray.forEach((element, index) => {
        if (index == 0) {
          textString = textString + element;
        } else {
          textString = textString + ` ${element}`;
        }
      });
      const finalText = textString;
      element.innerHTML = "";
      element.innerHTML = finalText;
    });
  }

  makeBionicdivs() {
    this.divs.forEach((element) => {
      const innerCode = String(element.innerHTML);
      if (!innerCode.includes(">")) {
        const text = element.innerText;
        const words = text.split(" ");
        element.innerText = "";
        let newArray = [];
        for (let index = 0; index < words.length; index++) {
          const word = words[index];
          const wordLength = word.length;
          const firstWordHalf = word.slice(0, Math.floor(word.length / 2));
          const secondWordHalf = word.slice(
            Math.floor(word.length / 2),
            wordLength
          );
          const reconstructed = `<b>${firstWordHalf}</b>${secondWordHalf}`;
          newArray.push(reconstructed);
        }
        let textString = "";
        newArray.forEach((element, index) => {
          if (index == 0) {
            textString = textString + element;
          } else {
            textString = textString + ` ${element}`;
          }
        });
        const finalText = textString;
        element.innerHTML = "";
        element.innerHTML = finalText;
      }
    });
  }
}


