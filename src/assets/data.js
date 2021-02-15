import cake from './images/cake.jpg';
import canadagoosebomber from './images/canadagoosebomber.jpg';
import cola from './images/cola.jpg';
import croissant from './images/croissant.jpg';
import fenderguitar from './images/fenderguitar.jpg';
import galaxynote10 from './images/galaxynote10.jpg';
import kiwi from './images/kiwi.jpg';
import martinguitar from './images/martinguitar.jpg';
import milk from './images/milk.jpg';
import nike from './images/nike.jpg';
import samsungtv from './images/samsungtv.jpg';
import strawberry from './images/strawberry.jpg';

const productData = [
  {
    id: 1,
    name: 'Cake',
    category: 'bakery',
    price: 39.99,
    discount: '',
    quantity: 0,
    image: cake
  },
  {
    id: 2,
    name: 'Croissant',
    category: 'bakery',
    price: 12.99,
    discount: '',
    quantity: 1,
    image: croissant
  },
  {
    id: 3,
    name: 'Kiwi 20 lbs',
    category: 'grocery',
    price: 39.99,
    discount: '',
    quantity: 5,
    image: kiwi
  },
  {
    id: 4,
    name: 'strawberry 10 lbs',
    category: 'grocery',
    price: 29.99,
    discount: '',
    quantity: 5,
    image: strawberry
  },
  {
    id: 5,
    name: 'Martin Standard Series D-35',
    category: 'instrument',
    price: 299.99,
    discount: '',
    quantity: 5,
    image: martinguitar
  },
  {
    id: 6,
    name: 'Fender Stratocaster',
    category: 'instrument',
    price: 1299.99,
    discount: '',
    quantity: 5,
    image: fenderguitar
  },
  {
    id: 7,
    name: 'Canada Goose - Bomber',
    category: 'clothes',
    price: 799.99,
    discount: '',
    quantity: 5,
    image: canadagoosebomber
  },
  {
    id: 8,
    name: 'Nike - Air MAX 2019',
    category: 'clothes',
    price: 215.99,
    discount: '',
    quantity: 5,
    image: nike
  },
  {
    id: 9,
    name: 'Coca Cola Bottle 351ml',
    category: 'convenience',
    price: 2.49,
    discount: '',
    quantity: 5,
    image: cola
  },
  {
    id: 10,
    name: 'Milk 2L',
    category: 'convenience',
    price: 3.49,
    discount: '',
    quantity: 5,
    image: milk
  },
  {
    id: 11,
    name: 'Galaxy Note 10',
    category: 'samsung',
    price: 1234.99,
    discount: '',
    quantity: 5,
    attributeName: '',
    attribute: [
      { optionName: '2G', optionPrice: 18.99 },
      { optionName: '4G', optionPrice: 24.99 }
    ],
    image: galaxynote10
  },
  {
    id: 12,
    name: 'Samsung Curved TV 65 inch',
    category: 'samsung',
    price: 699.99,
    discount: '',
    quantity: 5,
    image: samsungtv
  }
];

export default productData;
