const quotes = [
  {
    quote: '삶이 있는 한 희망은 있다',
    author: '키케로',
  },
  {
    quote:
      '진정으로 웃으려면 고통을 참아야하며 , 나아가 고통을 즐길 줄 알아야 해',
    author: '찰리 채플린',
  },
  {
    quote:
      '절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다',
    author: '론허바드',
  },
  {
    quote:
      '성공의 비결은 단 한 가지, 잘 할 수 있는 일에 광적으로 집중하는 것이다',
    author: '톰 모나건',
  },
  {
    quote: '자신감 있는 표정을 지으면 자신감이 생긴다',
    author: '찰스다윈',
  },
  {
    quote:
      '해야 할 것을 하라. 모든 것은 타인의 행복을 위해서, 동시에 특히 나의 행복을 위해서이다',
    author: '톨스토이',
  },
  {
    quote: '인간의 삶 전체는 단지 한 순간에 불과하다. 인생을 즐기자',
    author: '플루타르코스',
  },
  {
    quote:
      '사람들이 인생에서 실패하는 가장 큰 이유는 친구, 가족, 이웃들의 말을 듣기 때문이다',
    author: '나폴레온 힐',
  },
  {
    quote: '과정에서 재미를 느끼지 못하는데 성공하는 일은 거의 없다',
    author: '데일 카네기',
  },
  {
    quote:
      '성공하려면 당신을 찾아오는 모든 도전을 다 받아들여야 한다. 마음에 드는 것만 골라 받을 수는 없다',
    author: '마이크 가프카',
  },
];
const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;
