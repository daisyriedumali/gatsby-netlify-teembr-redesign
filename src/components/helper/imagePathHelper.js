const IS_CLOUDINARY   = true;
const CLOUDINARY_URL  = 'https://res.cloudinary.com/teembr/image/upload/v1/';
const LOCAL_IMAGE_URL = '/img/';

const imagePathHelper = (image_url) => {
    if(IS_CLOUDINARY) {
		return CLOUDINARY_URL + image_url;
	}

	return LOCAL_IMAGE_URL + image_url;
}

export default imagePathHelper;