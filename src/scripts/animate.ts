// Import the animate.css library
import 'animate.css';

// Define the ElementVisible function for checking element visibility
function ElementVisible(
  element: HTMLElement,
  percentage: number,
  callback: (isVisible: boolean) => void,
): void {
  const options = {
    threshold: percentage / 100,
  };

  //set innitial opacity to 0
  element.style.opacity = '0';

  const observer = new IntersectionObserver((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      callback(true);
      observer.disconnect();
    }
  }, options);

  observer.observe(element);

  const initialEntry = observer.takeRecords()[0];
  const isVisible = initialEntry ? initialEntry.isIntersecting : false;

  if (isVisible) {
    callback(true);
    observer.disconnect();
  }
}

// Define the handleScrollAnimation function for applying animations
function handleScrollAnimation(element: HTMLElement) {
  element.classList.add('animate__animated');

  const animationName = element.getAttribute('data-scroll-animate');
  if (animationName) {
    element.classList.add(`animate__${animationName}`);
  }

  // Remove the data-scroll-animate attribute to prevent re-triggering the animation
  // element.removeAttribute("data-scroll-animate");
}

// Define the main scroll event listener function
function handleScroll() {
  const elementsToAnimate = document.querySelectorAll('[data-scroll-animate]');

  elementsToAnimate.forEach((element) => {
    ElementVisible(element as HTMLElement, 30, (isVisible) => {
      if (isVisible) {
        handleScrollAnimation(element as HTMLElement);
      }
    });
  });
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);
