# React Native Rotate Photo

[Original library](https://github.com/bamlab/react-native-image-resizer)

A React Native module that can create rotated versions of local images (also supports the assets library on iOS).

## Setup

Install the package:

- React Native >= 0.60

```
yarn add https://gitlab.com/getgain-public/libs/react-native-rotate-photo.git
cd ios && pod install
```

- React Native <= 0.59

```
yarn add https://gitlab.com/getgain-public/libs/react-native-rotate-photo.git
react-native link react-native-rotate-photo
```

### Android

Note: on latest versions of React Native, you may have an error during the Gradle build on Android (`com.android.dex.DexException: Multiple dex files define Landroid/support/v7/appcompat/R$anim`). Run `cd android && ./gradlew clean` to fix this.

#### Manual linking

Manual link information for Android: [Link](docs/android_manual_config.md)

## Usage example

```javascript
import RotatePhoto from 'react-native-rotate-photo';

RotatePhoto.createRotatedPhoto(path, maxWidth, maxHeight, compressFormat, quality, rotation, outputPath)
  .then(response => {
    // response.uri is the URI of the new image that can now be displayed, uploaded...
    // response.path is the path of the new image
    // response.name is the name of the new image with the extension
    // response.size is the size of the new image
  })
  .catch(err => {
    // Oops, something went wrong. Check that the filename is correct and
    // inspect err to get more details.
  });
```

### Sample app

A basic, sample app is available in [the `example` folder](https://github.com/bamlab/react-native-image-resizer/tree/master/example). It uses the module to resize a photo from the Camera Roll.

## API

```javascript
createRotatedPhoto(
  path,
  maxWidth,
  maxHeight,
  compressFormat,
  quality,
  rotation = 0,
  outputPath,
  keepMeta = false,
); // Returns a Promise
```

The promise resolves with an object containing: `path`, `uri`, `name`, `size` (bytes), `width` (pixels), and `height` of the new file. The URI can be used directly as the `source` of an [`<Image>`](https://facebook.github.io/react-native/docs/image.html) component.

| Option                | Description                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| path                  | Path of image file, or a base64 encoded image string prefixed with 'data:image/imagetype' where `imagetype` is jpeg or png.                                                                                                                                                                                                                                                                                    |
| width                 | Width to resize to (see `mode` for more details)                                                                                                                                                                                                                                                                                                                                                               |
| height                | Height to resize to (see `mode` for more details)                                                                                                                                                                                                                                                                                                                                                              |
| compressFormat        | Can be either JPEG, PNG or WEBP (android only).                                                                                                                                                                                                                                                                                                                                                                |
| quality               | A number between 0 and 100. Used for the JPEG compression.                                                                                                                                                                                                                                                                                                                                                     |
| rotation              | Rotation to apply to the image, in degrees, for android. On iOS, rotation is limited (and rounded) to multiples of 90 degrees.                                                                                                                                                                                                                                                                                 |
| outputPath            | The resized image path. If null, resized image will be stored in cache folder. To set outputPath make sure to add option for rotation too (if no rotation is needed, just set it to 0).                                                                                                                                                                                                                        |
| keepMeta              | If `true`, will attempt to preserve all file metadata/exif info, except the orientation value since the resizing also does rotation correction to the original image. Defaults to `false`, which means all metadata is lost. Note: This can only be `true` for `JPEG` images which are loaded from the file system (not Web).                                                                                  |

