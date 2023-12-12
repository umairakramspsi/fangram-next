
import styles from './page.module.css'
import HeroSection from '@/components/Home/Hero/HeroSection';
import FeatheredCelebrity from '@/components/Home/FeatheredCel';
import 'react-multi-carousel/lib/styles.css';
export default function Home() {
  return (
    <>
      <HeroSection />
      <FeatheredCelebrity />
      <section className={styles.papoCat}>
        <div className='container'>
          <h2>Popular Categories to explore</h2>
          <div className={styles.catList}>
            <span className={styles.active}>Popular</span>
            <span>Trending</span>
            <span>Movie Star</span>
            <span>TV Star</span>
            <span>Model</span>
            <span>Charity</span>
            <span>Sport man</span>
            <span>Singer</span>
            <span>Prime Time</span>
            <span>More</span>
          </div>
        </div>
      </section>
    </>
  )
}
