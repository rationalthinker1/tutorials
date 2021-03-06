var loaded = false

function onPhotosLoad() {
	// only load the camera selector on first load
	if (!loaded) {
	navigator.camera.getPicture(onPhotoLoadSuccess, onFail,
		{
			quality: 50,
			encodingType: Camera.EncodingType.PNG,
			destinationType: navigator.camera.DestinationType.FILE_URI
		});

		/* Use below to access the photo library instead. Replace destinationType with sourceType
			sourceType: Camera.PictureSourceType.PHOTOLIBRARY		
		*/

		loaded = true
	}	
}

function onPhotoLoadSuccess(photoUri) {
	document.getElementById('photo').src = photoUri;
}

function onFail(message) {
	alert('Failed because: ' + message);
}