import React, { ReactNode } from 'react';
import AnimatedSectionWrapper from "../Home/HomeStyleComponent/AnimatedSectionWrapper";


interface LazyLoadedSectionProps {
  children: ReactNode;

}

const LazyLoadedSection: React.FC<LazyLoadedSectionProps> = ({ children }) => {

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
      console.log("뷰포트침범")
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
        console.log("뷰포트해제")
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
