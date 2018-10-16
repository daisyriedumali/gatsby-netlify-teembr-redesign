const IS_CLOUDINARY   = true;
const CLOUDINARY_URL  = 'https://res.cloudinary.com/teembr/image/upload/v1/';
const LOCAL_IMAGE_URL = '/img/';

// var cloudinary = require('cloudinary');

// cloudinary.config({ 
// 	cloud_name: 'teembr', 
// 	api_key:    '717524696988347', 
// 	api_secret: 'qNw_WmYHZx62Vs3D4Kcn7ECh1rA' 
// });


const imagePathHelper = (image_url) => {
    image_url = image_url.charAt(0) == '/' ? image_url.substring(1) : image_url;

    // cloudinary.image("sample.jpg", { width: 100, height: 150, crop: "fill" });
	// cloudinary.v2.api.resource(image_url,
 //    	function(error, result){
 //    		console.log(result);
 //    	}
 //    );

    if(IS_CLOUDINARY) {
		return CLOUDINARY_URL + image_url;
	}

	return LOCAL_IMAGE_URL + image_url;
}

export default imagePathHelper;