import React, { useState, useEffect } from 'react';
import clock_img from '../../../assets/clock.jpeg'

const QuoteGenerator = () => {
    const quotes = [
        { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
        { quote: "In the end, we only regret the chances we didn’t take.", author: "Lewis Carroll" },
        { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
        { quote: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
        { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
        { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
        { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
        { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
        { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
        { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
        { quote: "You can’t use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
        { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
        { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
        { quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
        { quote: "It’s not whether you get knocked down; it’s whether you get up.", author: "Vince Lombardi" },
        { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { quote: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
        { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
        { quote: "The harder you work for something, the greater you’ll feel when you achieve it.", author: "Unknown" },
        { quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", author: "Christian D.Larson" },
        { quote: "You are never too old to set another goal or to dream a new dream.", author: "C.S.Lewis" },
        { quote: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
        { quote: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
        { quote: "You must expect great things of yourself before you can do them.", author: "Michael Jordan" },
        { quote: "Don’t limit your challenges. Challenge your limits.", author: "Unknown" },
        { quote: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S.Lewis" },
        { quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", author: "William Butler Yeats" },
        { quote: "Don’t be afraid to give up the good to go for the great.", author: "John D.Rockefeller" },
        { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
        { quote: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
        { quote: "Whether you think you can or think you can’t, you’re right.", author: "Henry Ford" },
        { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
        { quote: "If opportunity doesn’t knock, build a door.", author: "Milton Berle" },
        { quote: "What would you do if you weren’t afraid?", author: "Sheryl Sandberg" },
        { quote: "We generate fears while we sit. We overcome them by action.", author: "Dr.Henry Link" },
        { quote: "Nothing in the world is more common than unsuccessful people with talent.", author: "Calvin Coolidge" },
        { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
        { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
        { quote: "I am not a product of my circumstances. I am a product of my decisions.", author: "Stephen Covey" },
        { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
        { quote: "Success is how high you bounce when you hit bottom.", author: "George S.Patton" },
        { quote: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
        { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D.Roosevelt" },
        { quote: "A person who never made a mistake never tried anything new.", author: "Albert Einstein" },
        { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
        { quote: "Perseverance is failing 19 times and succeeding the 20th.", author: "Julie Andrews" },
        { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
        { quote: "Great things never come from comfort zones.", author: "Unknown" },

        { quote: "Why so serious?", author: "The Dark Knight (2008)" },
        { quote: "If you’re good at something, never do it for free.", author: "The Dark Knight (2008)" },
        { quote: "All it takes is one bad day to reduce the sanest man alive to lunacy.", author: "The Killing Joke (Comic)" },
        { quote: "Madness is like gravity. All it takes is a little push.", author: "The Dark Knight (2008)" },
        { quote: "I’m not a monster. I’m just ahead of the curve.", author: "The Dark Knight (2008)" },
        { quote: "I used to think that my life was a tragedy, but now I realize it’s a comedy.", author: "Joker (2019)" },
        { quote: "As you know, madness is like gravity… all it takes is a little push!", author: "The Dark Knight (2008)" },
        { quote: "Smile, because it confuses people. Smile, because it’s easier than explaining what is killing you inside.", author: "Joker (Various)" },
        { quote: "They laugh at me because I’m different. I laugh at them because they’re all the same.", author: "The Killing Joke (Comic)" },
        { quote: "Is it just me, or is it getting crazier out there?", author: "Joker (2019)" },

        { quote: "You can’t kill me without becoming like me! I can’t kill you without losing the only human being who can keep up with me!", author: "Batman: Under the Red Hood (2010)" },
        { quote: "Do I really look like a guy with a plan?", author: "The Dark Knight (2008)" },
        { quote: "Nobody panics when things go according to plan. Even if the plan is horrifying!", author: "The Dark Knight (2008)" },
        { quote: "We stopped checking for monsters under our bed when we realized they were inside us.", author: "Joker (Various)" },
        { quote: "I’m not a monster. I’m just ahead of the curve.", author: "The Dark Knight (2008)" },
        { quote: "What doesn’t kill you simply makes you stranger.", author: "The Dark Knight (2008)" },
        { quote: "They need you right now, but when they don’t, they’ll cast you out. Like a leper.", author: "The Dark Knight (2008)" },
        { quote: "The only sensible way to live in this world is without rules.", author: "The Dark Knight (2008)" },
        { quote: "I believe whatever doesn’t kill you simply makes you… stranger.", author: "The Dark Knight (2008)" },
        { quote: "Introduce a little anarchy. Upset the established order, and everything becomes chaos.", author: "The Dark Knight (2008)" },
    ];

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');

    const fetchQuote = () => {
        const random_quote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(random_quote.quote);
        setAuthor(random_quote.author);
    }

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className='container-fluid'>
            <div className='row'>
            <div className='col-md-6 d-flex justify-content-center align-items-center'>
                    <img src={clock_img} alt='' className='rounded h-75 w-75' />
                </div>
                <div className='col-md-6 text-container'>
                    <div className='border border-5 rounded text-center feature-card bg-light'>
                        <div class="card">
                            <div className='card-header d-flex justify-content-between'>
                                <h4 className='fw-bold'>Quote</h4>
                                <button className='btn btn-sm btn-primary rounded-pill' onClick={fetchQuote}>Get New Quote</button>
                            </div>
                            <div class="card-body">
                                <p class="card-title">"{quote}"</p>
                                <p class="card-text"> - {author}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteGenerator;
