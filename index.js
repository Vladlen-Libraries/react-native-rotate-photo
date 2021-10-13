import { NativeModules, Platform } from 'react-native';

const RotatePhotoAndroid = NativeModules.RotatePhotoAndroid;

let exportObject = {};

if (Platform.OS === 'android') {
  exportObject = {
    createRotatedPhoto: (
      imagePath,
      newWidth,
      newHeight,
      compressFormat,
      quality,
      rotation = 0,
      outputPath,
      keepMeta = false,
    ) => {

      return new Promise((resolve, reject) => {
        RotatePhotoAndroid.createRotatedPhoto(
          imagePath,
          newWidth,
          newHeight,
          compressFormat,
          quality,
          rotation,
          outputPath,
          keepMeta,
          resolve,
          reject
        );
      });
    },
  };
} else {
  exportObject = {
    createRotatedPhoto: (
      path,
      width,
      height,
      format,
      quality,
      rotation = 0,
      outputPath,
      keepMeta = false,
    ) => {
      if (format !== 'JPEG' && format !== 'PNG') {
        throw new Error('Only JPEG and PNG format are supported by createResizedImage');
      }

      return new Promise((resolve, reject) => {
        NativeModules.RotatePhoto.createRotatedPhoto(
          path,
          width,
          height,
          format,
          quality,
          rotation,
          outputPath,
          keepMeta,
          (err, response) => {
            if (err) {
              return reject(err);
            }
            resolve(response);
          }
        );
      });
    },
  };
}

export default exportObject;
