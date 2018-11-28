import React from 'react'
import imagePathHelper from '../components/helper/imagePathHelper'

// const authorDetails = {
//   "Daisy Dumali" : {
//     "description": " is co-founder and COO at Teembr. She's also a self-confessed feline person and a sucker for bitter sweet latte. She had worked on various development projects and is super kin to details. When she isn't hustling at the Teembr HQ, you can most likely find her wandering around local shops or reading strategy book at home.",
//     "social_media": [
//       {type: "facebook", url: "https://facebook.com/daisyrie.dumali"},
//       {type: "instagram", url: "https://www.instagram.com/dess.desu"},
//       {type: "medium", url: "https://medium.com/@daisyriedumali"},
//       {type: "linkedin", url: "https://www.linkedin.com/in/daisyrie-dumali-81405677"},
//     ]
//   },
//   "Errol Tiozon" : {
//     "description": " is co-founder at Teembr and a branding & identity design specialist. He had collaborated with top teams working across a variety of B2C and B2B industries across the globe. During his free time, he loves watching Netflix and playing his Nintendo Switch.",
//     "social_media": [
//       {type: "facebook", url: "https://www.facebook.com/errol90"},
//       {type: "instagram", url: "https://www.instagram.com/erroltiozon"},
//       {type: "twitter", url: "https://twitter.com/mistertiozon"},
//       {type: "medium", url: "https://medium.com/@erroltiozon"},
//       {type: "linkedin", url: "https://www.linkedin.com/in/errol-tiozon/"},
//     ]
//   }
// }
const authorDetails = {
  "Daisy Dumali" : {
    "description": " is co-founder and COO at Teembr. She's also a self-confessed feline person and a sucker for bitter sweet latte. She had worked on various development projects and is super kin to details. When she isn't hustling at the Teembr HQ, you can most likely find her wandering around local shops or reading strategy book at home.",
    "social_media": [
      {type: "facebook", url: ""},
      {type: "instagram", url: "h"},
      {type: "medium", url: ""},
      {type: "linkedin", url: ""},
    ]
  },
  "Errol Tiozon" : {
    "description": " is co-founder at Teembr and a branding & identity design specialist. He had collaborated with top teams working across a variety of B2C and B2B industries across the globe. During his free time, he loves watching Netflix and playing his Nintendo Switch.",
    "social_media": [
      {type: "facebook", url: ""},
      {type: "instagram", url: ""},
      {type: "twitter", url: ""},
      {type: "medium", url: ""},
      {type: "linkedin", url: ""},
    ]
  }
}

const Author = ({ iconfill, authorName, authorImage }) => {
    const getSocialMedia = () => {
        let cards = authorDetails[authorName].social_media.map(function(sm, index){
            return <a href={sm.url} className={sm.type}><i className={"fa fa-" + sm.type} /></a>
        });
        
        return cards;
    }

    return (
        <div className="blog-author-wrapper">
          <div className="blog-author">
            <h4 className="mobile-only">About the Author</h4>
            <div className="author-info-wrapper">
              <img className="author-headshot" src={imagePathHelper(authorImage)} />
              <div className="author-info">
                <h4 className="desktop-only">About the Author</h4>
                <p>{(authorName == "Daisy Dumali") ? "Lorem Ipsum" : "Dolor Sit Amet"} {authorDetails[authorName].description}</p>
                <div className="social">
                  <span>Follow on:</span>
                  {getSocialMedia()}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default Author