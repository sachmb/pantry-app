// import fire from './fire';

export const foods = 
// [
//   {
//     id: 1,
//     title: 'Fried Rice',
//     description: 'Rice',
//     url: 'https://www.foodpanda.co.th/',
//     votes: 2,
//     submitterAvatarUrl: 'images/avatars/daniel.jpg',
//     productImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu2lt7OWVXYgKfG7gZ0vjjM6NU3_W99Ndkc6Er57KOjRwuqWYu',
//   },
//   {
//     id: 2,
//     title: 'Chicken Chilly',
//     description: 'Chicken',
//     url: 'https://www.ubereats.com/en-US/',
//     votes: 1,
//     submitterAvatarUrl: 'images/avatars/kristy.png',
//     productImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQH2Uy_MR2pvv5clKmB0RpWEu_Pr-Rwb6x8XcmbXQmwg9ElBwq',
//   },
//   {
//     id: 3,
//     title: 'Pork Momo',
//     description: 'Pork',
//     url: 'https://deliveroo.co.uk/',
//     votes: 3,
//     submitterAvatarUrl: 'images/avatars/veronika.jpg',
//     productImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz-k-gBKI70Y8z1clMVrnGoEUImkBYL5z9rtuDmXcwN6PpI5Tn',
//   },
//   {
//     id: 4,
//     title: 'Daal',
//     description: 'Pulses',
//     url: 'https://foodmandu.com',
//     votes: 10,
//     submitterAvatarUrl: 'images/avatars/molly.png',
//     productImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1knzAQRDqaWXLWEf-cMogIZAsvQswI7KFCW6zwb5yUf5l58GE',
//   },
// ];

[
  {
    id: 1,
    title: 'Fried Rice',
    description: ['Rice','Oil'],
    url: 'https://www.foodpanda.co.th/',
    votes: 2,
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSu2lt7OWVXYgKfG7gZ0vjjM6NU3_W99Ndkc6Er57KOjRwuqWYu',
  },
  {
    id: 2,
    title: 'Chicken Chilly',
    description: ['Chicken','Oil', 'Pepper'],
    url: 'https://www.ubereats.com/en-US/',
    votes: 1,
    submitterAvatarUrl: 'images/avatars/kristy.png',
    productImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQH2Uy_MR2pvv5clKmB0RpWEu_Pr-Rwb6x8XcmbXQmwg9ElBwq',
  },
  {
    id: 3,
    title: 'Pork Momo',
    description: ['Pork','Flour','Oil'],
    url: 'https://deliveroo.co.uk/',
    votes: 3,
    submitterAvatarUrl: 'images/avatars/veronika.jpg',
    productImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTz-k-gBKI70Y8z1clMVrnGoEUImkBYL5z9rtuDmXcwN6PpI5Tn',
  },
  {
    id: 4,
    title: 'Daal',
    description: ['Pulses','Onions'],
    url: 'https://foodmandu.com',
    votes: 10,
    submitterAvatarUrl: 'images/avatars/molly.png',
    productImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1knzAQRDqaWXLWEf-cMogIZAsvQswI7KFCW6zwb5yUf5l58GE',
  },
  {
    id: 5,
    title: 'Chowmein',
    description: ['Noodles','Onions'],
    url: 'https://foodmandu.com',
    votes: 10,
    submitterAvatarUrl: 'images/avatars/molly.png',
    productImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSur75GbwM9es3_6la0j1SekYE7E1HcOFrr9alx88FALKFQCGok',
  },
];
// fire.firestore().collection('fried rice');


export default { foods, };

