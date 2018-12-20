var fs = require('fs');
var Jimp = require("jimp");
var mime = require('mime-types')

var types = ['jpg', 'jpeg', 'png'];

exports.check = function(image_path) {

	return new Promise((resolve, reject) => {
		
		var image_mime = mime.lookup(image_path)

		if (image_mime && types.includes(String(image_mime.split('/')[1]))) {
		 	resolve('Image valid')
		} else {
			reject('Image format not valid')
		}		
	})
}

exports.destroy = function(image_path) {

	return new Promise(function(resolve, reject) {

		fs.unlink('./'+image_path, (err) => {
	    	if (err) {
				reject('Fail image delete')
	    	} else {
				resolve('Image deleted')
	    	}
		});
	})
}

exports.crop = function(image_path, crop_points) {
	return Jimp.read(image_path).then(function(image) {
        return Promise.resolve(image.crop(	Number(crop_points.x), 
	                					Number(crop_points.y), 
	                					Number(crop_points.w), 
	                					Number(crop_points.h))
	                			.write(image_path))
    }).catch(function(error) {
    	return Promise.reject('Fail image crop');
    })
}
