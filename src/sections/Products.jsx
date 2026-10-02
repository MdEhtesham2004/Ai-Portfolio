import React, { useRef } from 'react';
import { gsap, useMotion } from '../lib/motion';
import { projects } from '../data/projects';
import Mockup from './Mockups';
import './Products.css';

const products = projects
    .filter((p) => p.product)
    .sort((a, b) => a.product.order - b.product.order);

const Products = () => {
    const ref = useRef(null);

    useMotion(ref, () => {
        gsap.from('.products-title span', {
            yPercent: 100, duration: 1.2, ease: 'expo.out', stagger: 0.08,
            scrollTrigger: { trigger: '.products-title', start: 'top 85%' }
        });
        gsap.utils.toArray('.product').forEach((row) => {
            const scrub = { trigger: row, start: 'top 85%', end: 'top 30%', scrub: true };
            gsap.fromTo(row.querySelector('.product-media'), { clipPath: 'inset(10% 10% 10% 10% round 10px)' },
                { clipPath: 'inset(0% 0% 0% 0% round 10px)', ease: 'none', scrollTrigger: scrub });
            gsap.from(row.querySelectorAll('.product-info > *'), {
                opacity: 0, y: 36, stagger: 0.07, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: row, start: 'top 72%' }
            });
        });
    });

    return (
        <section id="products" className="products section" ref={ref} aria-labelledby="products-title">
            <div className="container">
                <div className="products-head">
                    <span className="label">Featured products</span>
                    <h2 id="products-title" className="products-title">
                        <span>Built and</span> <span>in the market</span>
                    </h2>
                </div>

                {products.map((p, i) => (
                    <article key={p.id} className="product">
                        <div className="product-media">
                            <Mockup type={p.product.mockup} label={`Illustrative interface of ${p.title}`} />
                        </div>
                        <div className="product-info">
                            <div className="product-top">
                                <span className="product-number">{i + 1}</span>
                                <span className="product-status">In market</span>
                            </div>
                            <h3 className="product-title">{p.title}</h3>
                            <p className="product-tagline">{p.product.tagline}</p>
                            <p className="product-desc">{p.description}</p>
                            <ul className="product-highlights">
                                {p.product.highlights.map((h) => <li key={h}>{h}</li>)}
                            </ul>
                            <p className="tag-list">{p.techStack.join(' · ')}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Products;
