declare module 'react-native-rotate-photo' {
  export interface Response {
    path: string;
    uri: string;
    size: number;
    name: string;
    width: number;
    height: number;
  }

  export type ResizeFormat = 'PNG' | 'JPEG' | 'WEBP';

  export default class RotatePhoto {
    static createRotatedPhoto(
      uri: string,
      width: number,
      height: number,
      format: ResizeFormat,
      quality: number,
      rotation?: number,
      outputPath?: string,
      keepMeta?: boolean,
    ): Promise<Response>;
  }
}
