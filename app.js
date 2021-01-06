document.addEventListener("DOMContentLoaded", () => {
  let teamList = document.getElementById('team').querySelector('ul');

  teamList.addEventListener('click', event => {
    event.preventDefault();

    let target = event.target;

    if (target.tagName === 'UL') return;

    let list = parent(target, 'LI');
    let name = document.createElement('h3');
    let img = list.querySelector('img').cloneNode(true);
    let paragraph = document.createElement('p');

    paragraph.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, enim dolorem? Molestiae quia a veniam, dolor, consequuntur unde vitae accusantium distinctio quis nemo vero? Nobis dolorum aspernatur nisi tempore assumenda molestiae fugiat rem facilis hic impedit est vero iusto repudiandae optio, temporibus consectetur voluptatibus doloribus odit, sapiente dolor quasi. Ea veniam architecto omnis, earum possimus modi impedit quidem, quas hic iure enim est! Iste, explicabo numquam amet dolore nisi voluptate.";

    name.textContent = img.alt;

    let modal = document.createElement('div');

    let closeButton = document.createElement('img');
    closeButton.classList.add('close-button');
    closeButton.src = "images/icon_close.png";
    closeButton.alt = "Close Modal";

    let nameImage = document.createElement('div');
    nameImage.appendChild(img);
    nameImage.appendChild(name);

    modal.appendChild(closeButton);
    modal.appendChild(nameImage);
    modal.appendChild(paragraph);

    modal.classList.add('modal');

    let overlay = document.createElement('div');

    overlay.classList.add('overlay');
    overlay.appendChild(modal);

    document.body.appendChild(overlay);

    overlay.addEventListener('click', event => {
      let target = event.target;
      console.log(target, event.currentTarget);

      if (target === event.currentTarget || target.classList.contains('close-button')) {
        document.body.removeChild(overlay);
      }
    });
  });
});

function parent(element, tagName) {

  let currentElement = element.parentElement;

  while (!!currentElement && currentElement.tagName !== tagName) {
    currentElement = currentElement.parentElement;
  }

  return currentElement;
}