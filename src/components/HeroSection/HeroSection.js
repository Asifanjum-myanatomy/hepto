import React from 'react';
import { Link } from 'react-router-dom';
import HeroCategories from './HeroCategories';
import Card from '../Card/Card';
import styles from './HeroSection.module.css';
import heroBg from '../../assets/hero-bg.jpg';

const categories = [
  {
    id: '1', name: 'Fruits & Vegetables', image:
      'https://cdn.zeptonow.com/production/cms/category/38047553-95f3-47c6-a1ff-4794e1227d3a.png'
  },
  { id: '2', name: 'Atta, Rice, Oil & Dals', image: 'https://cdn.zeptonow.com/production/cms/category/54dd01e1-2781-4a45-bc3a-ed53ebab9bd9.png', link: '/hero-bg.jpg' },
  { id: '3', name: 'Masala & Dry Fruits', image: 'https://cdn.zeptonow.com/production/cms/category/8d4d3977-5197-49d9-9867-8a670524e48b.png', link: '/cn/masala-dry-fruits-more/masala-dry-fruits-more/cid/0c2ccf87-e32c-4438-9560-8d9488fc73e0/scid/8b44cef2-1bab-407e-aadd-29254e6778fa?' },
  { id: '4', name: 'Sweet Cravings', image: 'https://cdn.zeptonow.com/production/cms/category/ec7b14c6-2640-4165-b3ae-68c09a249ae0.png', link: '/sweet-cravings' },
  { id: '5', name: 'Frozen Food & Ice Creams', image: 'https://cdn.zeptonow.com/production/cms/category/db346f5e-644f-426a-85af-92d707e086ac.png', link: '/frozen-food-ice-creams' },
  { id: '6', name: 'Baby care', image: 'https://cdn.zeptonow.com/production/cms/category/227b70d5-d1cf-428b-a276-1392c5067eb3.png', link: '/baby-care' },
  { id: '7', name: 'Dairy, Bread & Eggs', image: 'https://cdn.zeptonow.com/production/cms/category/d311c777-75d7-48f6-8418-a5a6ee5169b4.png', link: '/dairy-bread-eggs' },
  { id: '8', name: 'Cold Drinks & Juices', image: 'https://cdn.zeptonow.com/production/cms/category/59d2c0cc-e776-407c-9142-7e69898d9eab.png', link: '/cold-drinks-juices' },
  { id: '9', name: 'Biscuits', image: 'https://cdn.zeptonow.com/production/cms/category/9b88fff5-73f5-46fd-999f-1622db4203d7.png', link: '/biscuits' },
  { id: '10', name: 'Munchies', image: '	https://cdn.zeptonow.com/production/cms/category/90b2faee-1461-465a-a8c6-8c84716dd7dc.png', link: '/munchies' },
  { id: '11', name: 'Meats, Fish & Eggs', image: 'https://cdn.zeptonow.com/production/cms/category/1237afd6-40bf-4942-a266-25f23025e86c.png', link: '/meats-fish-eggs' },
  { id: '12', name: 'Breakfast & Sauces', image: 'https://cdn.zeptonow.com/production/cms/category/ab241d87-da5b-4830-b38f-1a6cd30d0d41.png', link: '/breakfast-sauces' },
  { id: '13', name: 'Tea, Coffee & More', image: 'https://cdn.zeptonow.com/production/cms/category/92493ad5-6242-42f9-b951-dca41e55d744.png', link: '/tea-coffee-more' },
  { id: '14', name: 'Makeup & Beauty', image: 'https://cdn.zeptonow.com/production/cms/category/d1127e88-d743-457a-a588-489267297de4.png', link: '/makeup-beauty' },
  { id: '15', name: 'Bath & Body', image: 'https://cdn.zeptonow.com/production/cms/category/b1909dfd-726c-412b-beb7-9553bc909363.png', link: '/bath-body' }
];


export default function HeroSection() {



  return (
    <>
      <HeroCategories />

      {/* 1️⃣ Cards Carousel */}
      <div className={styles.carousel}>
        {categories.map(cat => (
          <Card
            key={cat.id}
            image={cat.image}
            link={`/category/${cat.id}`}
          />
        ))}
      </div>

      {/* 2️⃣ PREMIUM PROMO BANNER */}

      {/* 2️⃣ PROMO BANNER – 80% width, centered */}
      <div className={styles.promo}>
        <a
          aria-label="Paan Corner"
          href="/cn/paan-corner/cigarettes/cid/cd50825e-baf8-47fe-9abc-ed9556122a9a/scid/5bcbee47-7c83-4279-80f0-7ecc068496df"
        >
          <img
            src="https://cdn.zeptonow.com/production/tr:w-1280,ar-3840-705,pr-true,f-auto,q-80/inventory/banner/4ea3de05-f469-4df2-9548-db9c9863dfdf.png"
            alt="Paan Corner Banner"
            loading="lazy"
            style={{
              width: '80%',                // ← your requested width
              aspectRatio: '5.44681 / 1',  // ← maintain ratio
              objectFit: 'contain',
              display: 'block',            // ← needed for margin auto
              margin: '0 auto 52px'        // ← center + bottom spacing
            }}
          />
        </a>
      </div>


      {/* 3️⃣ Hero Banner */}
      <section
        className={styles.hero}
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)),
            url(${heroBg})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className={styles.heroContent}>
          <div className={styles.textContainer}>
            <h1 className={styles.mainHeading}>
              Get Everything You Need{' '}
              <span className={styles.highlight}>In Minutes</span>
            </h1>
            <p className={styles.subHeading}>
              Groceries, Toys, Café Delights &amp; More — Delivered Lightning Fast
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
