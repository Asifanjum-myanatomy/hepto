import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ItemsList from '../components/ItemsList/ItemsList';
import styles   from './CategoryPage.module.css';

// mirror your HeroSection categories (minus image URLs if you like)
const categories = [
  { id: '1', name: 'Fruits & Vegetables' },
  { id: '2', name: 'Atta, Rice, Oil & Dals' },
  { id: '3', name: 'Masala & Dry Fruits' },
  // …add up to id '15'
];

// demo items for each category
const itemsData = {
  '1': [
    { id: 'f1', name: 'Apple',   image: '/apple.png',   price: 120 },
    { id: 'f2', name: 'Tomato',  image: '/tomato.png',  price: 60  },
    { id: 'f3', name: 'Patato',  image: '/patato.png',  price: 40  },
  ],
  '2': [
    { id: 'a1', name: 'Rice',    image: '/demo/rice.jpg',    price: 80  },
    { id: 'a2', name: 'Dal',     image: '/demo/dal.jpg',     price: 100 },
  ],
  '3': [
    { id: 'm1', name: 'Almonds', image: '/demo/almonds.jpg', price: 500 },
    { id: 'm2', name: 'Spices',  image: '/demo/spices.jpg',  price: 150 },
  ],
  // …etc.
};

export default function CategoryPage() {
  const { categoryId } = useParams();
  const category = categories.find(c => c.id === categoryId);
  const items    = itemsData[categoryId] || [];

  if (!category) {
    return (
      <div className={styles.notFound}>
        <h2>Category not found</h2>
        <Link to="/">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{category.name}</h1>
      <ItemsList items={items} />
      <Link to="/" className={styles.backLink}>← Back to Home</Link>
    </div>
  );
}
