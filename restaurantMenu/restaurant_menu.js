const breakfastMenu = [{'Pancakes':12}, {'Eggs Benedict':22.99}, {'Oatmeal':21.99}, {'Frittata':15}];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];


const breakfastMenuItemsHTML = Object.entries(breakfastMenu).map(([item, price], index) => `<p>Item ${index + 1}: ${item}- $${price}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;


let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;


const dessertMenuItemsHTML = dessertMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemsHTML;
