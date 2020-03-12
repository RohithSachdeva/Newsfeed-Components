/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
*/   // just need a div and ul? 


  const newMenu = menuItems => {
    const menuDiv = document.createElement('div')
    const menuList = document.createElement('ul');
    menuItems.forEach(content =>{
      let item = document.createElement('li');
      item.textContent = content;
      menuList.appendChild(content);
    });

    menuDiv.classList.add('menu');
    menuDiv.appendChild(menuList);

    const menuButton = document.querySelector('.menu-button');
    menuButton.addEventListener('click', () => {
      menuDiv.classList.toggle('menu--open');
    });
    return menuDiv;

  };

  const head = document.querySelector('.header');
  head.prepend(newMenu(menuItems));
  console.log(menuDiv);
  
//should change menuDiv to menu probably

//   (students, faculty, firstParagraph, secondParagraph, thirdParagraph) => {
// const article = document.createElement('div');
// const articleTitle = document.createElement('h2');
// const articleDate = document.createElement('p');
// const articleP1 = document.createElement('p'); //articleP1.textcontent = newP1; ??
// const articleP2 = document.createElement('p');
// const articleP3 = document.createElement('p');
// const articleButton = document.createElement('span');

/*
  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
