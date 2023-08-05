import React, { ReactNode } from 'react';
import AnimatedSectionWrapper from "../Home/HomeStyleComponent/AnimatedSectionWrapper";


interface LazyLoadedSectionProps {
  children: ReactNode;

}

const LazyLoadedSection: React.FC<LazyLoadedSectionProps> = ({ children,  backgroundcolor }) => {

  const [loaded, setLoaded] = React.useState<string>("false");

  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setLoaded("true");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: [0.1] });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <AnimatedSectionWrapper loaded={loaded}  ref={sectionRef}>
      {children}
    </AnimatedSectionWrapper>
  );
};

export default LazyLoadedSection;
