     const countingParagraph=document.getElementById('numaratoare');
    const targetNumber=500; 
    function countUp() {
      let currentNumber = 0;

      const intervalId = setInterval(() => {
        countingParagraph.textContent = currentNumber;
        currentNumber=currentNumber+2;

        if (currentNumber >= targetNumber) {
          clearInterval(intervalId);
          countingParagraph.textContent = currentNumber+"+";
        }
      }, 10);
    }

    // Check if the element is in view
    function isInView() {
      const rect = countingParagraph.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    // Add a scroll event listener to start counting when the element is in view
    const number=countingParagraph.textContent;
    
   const evL =  () => {
      if (isInView()) {
        countUp();
        
        window.removeEventListener('scroll',evL);
      }};
    window.addEventListener('scroll', evL);
    
  



//ptsec2

   const countingParagraph1=document.getElementById('numaratoare1');
    const targetNumber1=700;
    const final='Prea multe...'; 
    function countUp1() {
      let currentNumber = 0;

      const intervalId = setInterval(() => {
        countingParagraph1.textContent = currentNumber;
        currentNumber=currentNumber+2;

        if (currentNumber > targetNumber1) {
          clearInterval(intervalId);
            countingParagraph1.textContent = final;
        }
      }, 10);
   
    
      
    }

    // Check if the element is in view
    function isInView1() {
      const rect = countingParagraph1.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
    }

    // Add a scroll event listener to start counting when the element is in view
    const number1=countingParagraph.textContent;
    
   const evL1 =  () => {
      if (isInView1()) {
        countUp1();
       
        window.removeEventListener('scroll',evL1);
      }};
    window.addEventListener('scroll', evL1);