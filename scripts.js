const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

      document.addEventListener('click', function (e) {
	        if (e.target.matches('.item__button')) {
              deleteItem(e.target);
          }
	        if (e.target.matches('.item__checkbox')) {
              finish(e.target);
	        }
	        if (e.target.matches('.item__text')) {
		          edit(e.target); 
	        }

      }, false);
  }
    
    function formHandler(e) {
        e.preventDefault();
    }
    
  // event handler fyrir það að klára færslu
    function finish(e) {
        let klára = e.nextElementSibling;
        klára.parentNode.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
    function edit(e) {
       
    }

  // event handler fyrir það að klára að breyta færslu
    function commit(e) {
  }

  // fall sem sér um að bæta við nýju item
    function add(value) {
  }

  // event handler til að eyða færslu
    function deleteItem(e) {
        e.parentNode.remove(e);
    }

  // hjálparfall til að útbúa element
    function el(type, className, clickHandler) {
    }

  return {
    init: init
  }
})();
