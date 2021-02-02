(function() {
    const quotes = [
      {
        quote: "Give yourself a manicure or pedicure. ",
        author:"Difficulty: Medium"
        },
        {
          quote:"Try out a new hairstyle or experiment with your hair.",
          author:"Difficulty: Medium"
        },
        {
          quote:"Take a bubble bath.",
          author:"Difficulty: Easy"
        },
        {
          quote:"Try out a new facemask or beauty product. ",
          author:"Difficulty: Easy"
        },
        {
          quote:"Doodle, color, or draw on some paper. ",
          author:"Difficulty: Easy"
        },
        {
          quote:"Do yoga (check out YouTube for tutorials).",
          author:"Difficulty: Medium"
        },
        {
          quote:"Write a poem or write in a journal.",
          author:"Difficulty: Medium"
        },
        {
          quote:"Take a nap.",
          author:"Difficulty: Easy"
        },
        {
          quote:"Read a book.",
          author:"Difficulty: Medium"
        },
        {
          quote:"Listen to music. ",
          author:"Difficulty: Easy"
        },
        {
          quote:"Stretch.",
          author:"Difficulty: Easy"
        },
        {
          quote:"Watch some Netflix.",
          author:"Difficulty: Easy"
        },
        {
          quote:"Look through old photos and videos.",
          author:"Difficulty: Easy"
        },
        {
          quote:"Go watch a sunset or sunrise.",
          author:"Difficulty: Medium"
        },
        {
          quote:"Meditate.",
          author:"Difficulty: Medium"
        },
        {
          quote:"Write a poem.",
          author:"Difficulty: Medium"
        },
        {
          quote:"Eat snacks in bed.",
          author:"Difficulty: Easy"
        },
        {
          quote:"Sit or lay outside in good weather.",
          author:"Difficulty: Medium"
        },
        {
          quote:"Look for a new favorite quote or saying.",
          author:"Difficulty: Medium"
        },
        {
          quote:"Write a letter to your future self.",
          author:"Difficulty: Easy"
        },
        {
          quote:"Take a long shower.",
          author:"Difficulty: Easy"
        },
        {
          quote:"Drink tea.",
          author:"Difficulty: Easy"
        },
        {
          quote:"Cuddle with a pet or S.O.",
          author:"Difficulty: Easy"
        },
        {
          quote:"Create a self-love list.",
          author:"Difficulty: Medium"
        }
  
    ];
  
    const btn = document.getElementById("generate-btn");
    
    btn.addEventListener("click", function() {
      let random = Math.floor(Math.random() * quotes.length);
      console.log(random);
  
      document.getElementById("quote").textContent = quotes[random].quote;
      document.querySelector(".author").textContent = quotes[random].author;
    });
  })();