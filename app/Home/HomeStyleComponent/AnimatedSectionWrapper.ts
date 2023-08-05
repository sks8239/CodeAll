'use client'
import styled, {css, keyframes} from "styled-components";

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


const SectionWrapper = styled.div`
  background-color: white;
  opacity: 0;
  visibility: hidden;
  padding: 100vh;
`;

const AnimatedSectionWrapper = styled(SectionWrapper)<{ loaded: string }>`
  ${({ loaded }) =>
    loaded==="true" &&
    css`
      opacity: 1;
      visibility: visible;
      animation: ${fadeInAnimation} 1s ease-in-out forwards;
      animation-delay: 0s;
      height: 100vh; /* 높이를 100vh로 설정 */
      padding: 0; /* padding 제거 */
    `}
`;
export default AnimatedSectionWrapper;