import React from 'react'
import BlogCard from '../components/BlogCard'

const data = [
    {
        image : 'post-01.jpg',
        title  : 'Why investing in branding is important for',
        snippet : 'The Harvard Review once warned the growing number of small business owners that there will soon be so many small businesses, owners will',
        headshot : '/errol.jpg',
        author: 'Errol B. Tiozon',
        link  : '/',
        date : 'Sep 5',
    },
    {
        image : 'post-02.jpeg',
        title  : 'Here are some golden nuggets you can learn to not suck in managing people.',
        claps : <span><img src="/img/svg/clap.svg" /> Errol B. Tiozon and 1 other</span>,
        snippet : 'Does B.S. in Executive Leadership even exist? I honestly have not heard of any leadership degrees until I googled it today.',
        headshot : '/daisyrie.jpg',
        author: 'Daisyrie Dumali',
        link  : '/',
        date : 'Sep 3',
    },
    {
        image : 'post-03.jpg',
        title  : 'Rate how poor of a leader are you',
        claps : <span><img src="/img/svg/clap.svg" /> Errol B. Tiozon and 1 other</span>,
        snippet : 'In a classic working environment, people get a promotion when they are good at doing their jobs. Someone might be a good developer and',
        headshot : '/daisyrie.jpg',
        author: 'Daisyrie Dumali',
        link  : '/',
        date : 'Aug 26',
    },
    {
        image : 'post-04.jpg',
        title  : '3 FREE Fathers Day-related designs',
        snippet : 'It is time to celebrate the guy who taught us everything we know about telling grade-A dad jokes. And if you are a print-on-demand seller',
        headshot : '/errol.jpg',
        author: 'Errol B. Tiozon',
        link  : '/',
        date : 'Jun 5',
    },
    {
        image : 'post-05.jpeg',
        title  : 'What will the Consumer Journey in Retail look like in 2025?',
        claps : <span><img src="/img/svg/clap.svg" /> Jung Hoseok and 1 other</span>,
        snippet : 'Back in the 70’s, dealing with customers was a piece of cake. You could simply create an advert and hand it over to the media guys for',
        headshot : '/errol.jpg',
        author: 'Errol B. Tiozon',
        link  : '/',
        date : 'Jun 1',
    },
];

const Blogs = ({ iconfill }) => {

    const getBlogCards = () => {
        let cards = data.map(function(datum, index){
            return <BlogCard data={datum} key={index}/>;
        });
        
        return cards;
    }

    return (
        <div className="blog">
            <div className="blog-nav">
                <nav>
                    <a href="/" className="selected">Design Resources</a>
                    <a href="/">Articles</a>
                </nav>
            </div>
            <div className="blog-cards-wrapper">
                <div className="blog-cards">
                    {getBlogCards()}
                </div>
            </div>
        </div>
    );
}

export default Blogs