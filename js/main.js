//Mobile Navigation

const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav a');

navIcon.addEventListener('click', function () {
	this.classList.toggle('nav-icon--active');
	nav.classList.toggle('nav--active');
});

navLinks.forEach(function (item, index) {
	item.addEventListener('click', function () {
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('nav--active');
	});

	item.addEventListener('keydown', function (event) {
		if (nav.classList.contains('nav--active') && event.keyCode === 9) {
			if (event.shiftKey) {
				if (index === 0) {
					event.preventDefault();
					navIcon.focus();
				}
			} else {
				if (index === navLinks.length - 1) {
					event.preventDefault();
					navIcon.focus();
				}
			}
		}
	});
});

navIcon.addEventListener('keydown', function (event) {
	if (nav.classList.contains('nav--active') && event.keyCode === 9) {
		event.preventDefault();
		navLinks[0].focus();
	}
});

document.addEventListener('keydown', function (event) {
	if (event.key === 'Escape') {
		navIcon.classList.remove('nav-icon--active');
		nav.classList.remove('nav--active');
	}
});

//Filter Service

const filterButton = document.querySelectorAll('[data-filter]');
const filterCard = document.querySelectorAll('[data-filter-item]');
const resetbutton = document.querySelector('.button-reset');

filterButton.forEach(function(item) {
	item.addEventListener('click', function() {
	  const filterTarget = item.dataset.filter;
	  
	  if (item.classList.contains('button-filter--active')) {
		item.classList.remove('button-filter--active');
		filterCard.forEach(function(elem) {
		  elem.classList.remove('card--blur');
		});
	  } else {
		filterButton.forEach(function(button) {
		  button.classList.remove('button-filter--active');
		});
		item.classList.add('button-filter--active');
		
		filterCard.forEach(function(elem) {
		  if (elem.dataset.filterItem !== filterTarget) {
			elem.classList.add('card--blur');
		  } else {
			elem.classList.remove('card--blur');
		  }
		});
	  }
	});
  });


//Accordion Price

const option = document.querySelectorAll('.option');

option.forEach(function(item) {
  item.addEventListener('click', function (){

    if (!item.classList.contains('option--active')) {
      option.forEach(function(i) {
        if (i !== item) {
          i.classList.add('hidden');
        }
      });

      item.classList.add('option--active');
    } else {
      option.forEach(function(elem) {
        elem.classList.remove('hidden');
      });
      item.classList.remove('option--active');
    }
  });
});

// Select Contact

const select = document.querySelector('.select');
const selectButton = select.querySelector('.select__button');
const selectList = select.querySelector('.select__list');
const selectItems = select.querySelectorAll('.select__list-item');
const contactCard = document.querySelectorAll('.contact__card');
const contactImg = document.querySelector('.contact__img');

function hideContactImg() {
	if (window.innerWidth < 380 && select.classList.contains('select--active')) {
		contactImg.classList.add('hidden');
	}
}

function visibleContactImg() {
	if (window.innerWidth < 380 && !select.classList.contains('select--active')) {
			contactImg.classList.remove('hidden');
	}
}

function closeSelect() {
  select.classList.remove('select--active');
  selectList.classList.add('hidden');
  selectButton.classList.remove('select__button--active');
}

selectButton.addEventListener('click', function() {
  if (select.classList.contains('select--active')) {
    closeSelect();
	visibleContactImg();
  }
  else {
	select.classList.add('select--active');
	selectList.classList.remove('hidden');
	contactCard.forEach(function(card) {
		card.classList.add('hidden');
	});
	selectButton.textContent = 'City';
    selectButton.classList.add('select__button--active');
	hideContactImg();
  }
});

for (let item of selectItems) {
  item.addEventListener('click', function() {
    selectButton.textContent = item.textContent;
    const selectedValue = item.dataset.selectButton;
    contactCard.forEach(function(card) {
      if (card.dataset.address === selectedValue) {
		  card.classList.remove('hidden');
		  hideContactImg();
      } else {
        card.classList.add('hidden');
      }
    });
    closeSelect();
    selectButton.classList.add('select__button--active');
  });
}

select.addEventListener('keydown', function(event) {
  if (event.code === 'Tab') {
    const focusedElement = document.activeElement;
    if (focusedElement === selectItems[selectItems.length - 1]) {
      closeSelect();
	  visibleContactImg();
	  selectButton.classList.add('select__button--active');
    }
  }
});

document.addEventListener('click', function(event) {
  if (!select.contains(event.target)) {
    closeSelect();
	visibleContactImg();
  }

})

document.addEventListener('keydown', function(event) {
	if (event.key === 'Escape') {
	  select.classList.remove('select--active');
	  selectList.classList.add('hidden');
	  visibleContactImg();
	}
})

//AOS
AOS.init();
//# sourceMappingURL=main.js.map
