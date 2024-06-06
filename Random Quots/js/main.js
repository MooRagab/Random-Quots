let quotesList = [
  {
    author: "Jim Rohn",
    quote: "Beware of what you become in pursuit of what you want.",
  },
  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },
  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: "Nelson Mandela",
    quote:
      "Resentment is like drinking poison and waiting for your enemies to die.",
  },
  {
    author: "Elbert Hubbard",
    quote: "Do not take life too seriously. You will not get out alive.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Albert Einstein",
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle.But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },
  {
    author: "Sylas",
    quote: "Those who wait to be freed do not deserve freedom.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  { author: "Frank Zappa", quote: "So many books, so little time." },
  {
    author: "Marcus Tullius Cicero",
    quote: "A room without books is like a body without a soul.",
  },
  {
    author: "Bernard M. Baruch",
    quote:
      "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
  },
  {
    author: "William W. Purkey",
    quote:
      "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.",
  },
  {
    author: "Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: "Mae West",
    quote: "You only live once, but if you do it right, once is enough.",
  },
  {
    author: "Robert Frost",
    quote:
      "In three words I can sum up everything I've learned about life: it goes on.",
  },
  {
    author: "Albert Camus",
    quote:
      "Don’t walk in front of me… I may not followDon’t walk behind me… I may not leadWalk beside me… just be my friend",
  },
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "Maya Angelou",
    quote:
      "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
  },
  {
    author: "Mahatma Gandhi",
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  },
  {
    author: "Bob Marley",
    quote:
      "Only once in your life, I truly believe, you find someone who can completely turn your world around. You tell them things that you’ve never shared with another soul and they absorb everything you say and actually want to hear more. You share hopes for the future, dreams that will never come true, goals that were never achieved and the many disappointments life has thrown at you. When something wonderful happens, you can’t wait to tell them about it, knowing they will share in your excitement. They are not embarrassed to cry with you when you are hurting or laugh with you when you make a fool of yourself. Never do they hurt your feelings or make you feel like you are not good enough, but rather they build you up and show you the things about yourself that make you special and even beautiful. There is never any pressure, jealousy or competition but only a quiet calmness when they are around. You can be yourself and not worry about what they will think of you because they love you for who you are. The things that seem insignificant to most people such as a note, song or walk become invaluable treasures kept safe in your heart to cherish forever. Memories of your childhood come back and are so clear and vivid it’s like being young again. Colours seem brighter and more brilliant. Laughter seems part of daily life where before it was infrequent or didn’t exist at all. A phone call or two during the day helps to get you through a long day’s work and always brings a smile to your face. In their presence, there’s no need for continuous conversation, but you find you’re quite content in just having them nearby. Things that never interested you before become fascinating because you know they are important to this person who is so special to you. You think of this person on every occasion and in everything you do. Simple things bring them to mind like a pale blue sky, gentle wind or even a storm cloud on the horizon. You open your heart knowing that there’s a chance it may be broken one day and in opening your heart, you experience a love and joy that you never dreamed possible. You find that being vulnerable is the only way to allow your heart to feel true pleasure that’s so real it scares you. You find strength in knowing you have a true friend and possibly a soul mate who will remain loyal to the end. Life seems completely different, exciting and worthwhile. Your only hope and security is in knowing that they are a part of your life.",
  },
  {
    author: "Albert Einstein",
    quote:
      "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
  },
  {
    author: "Albert Einstein",
    quote:
      "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
  },
  {
    author: "Markus Herz",
    quote:
      "Be careful about reading health books. Some fine day you'll die of a misprint.",
  },
  {
    author: "Isaac Asimov",
    quote:
      "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
  },
  {
    author: "Helen Keller",
    quote:
      "I would rather walk with a friend in the dark, than alone in the light.",
  },
  {
    author: "Mother Teresa",
    quote:
      "Not all of us can do great things. But we can do small things with great love.",
  },
  {
    author: "Oscar Wilde",
    quote: "Never love anyone who treats you like you're ordinary",
  },
  {
    author: "Robert Frost",
    quote: "We love the things we love for what they are.",
  },
  {
    author: "George Harrison",
    quote: "If you don't know where you're going, any road'll take you there",
  },
  {
    author: "Ray Bradbury",
    quote:
      "You don't have to burn books to destroy a culture. Just get people to stop reading them.",
  },
  {
    author: "Audrey Hepburn",
    quote: "Nothing is impossible, the word itself says 'I'm possible'!",
  },
  {
    author: "John Green",
    quote:
      "You can love someone so much...But you can never love people as much as you can miss them.",
  },
  {
    author: "Eleanor Roosevelt",
    quote:
      "Do what you feel in your heart to be right – for you’ll be criticized anyway.",
  },
  {
    author: "Herbert Bayard Swope",
    quote:
      "I can't give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.",
  },
  {
    author: "Douglas Adams",
    quote:
      "I refuse to answer that question on the grounds that I don't know the answer.",
  },
  {
    author: "Margaret Mead",
    quote:
      "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.",
  },
  {
    author: "Albert Einstein",
    quote: "Never memorize something that you can look up.",
  },
];

function giveQuote() {
  let random = Number.parseInt(Math.random() * quotesList.length + 1);
  document.querySelector(
    "#quoteOutput"
  ).textContent = `\"${quotesList[random].quote}\"`;
  document.querySelector(
    "#authorOutput"
  ).textContent = `--${quotesList[random].author}`;
}
