import renderToDOM from './render-to-dom';
import makeMessage from './make-message';

const waitTime = new Promise((ok,mal) => {
  setTimeout(() => {
    ok('han pasado 3 segundos, omg');
  },3000)
})

module.exports = {
  firstMessage: 'hola mundo desde un modulo',
  delayMessage: async () => {
    const message = await waitTime;
    console.log(message);
    //const element = document.createElement('p')
    //element.textContent = message;
    renderToDOM(makeMessage(message));
  }
}
