require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name     = "react-native-rotate-photo"
  s.version  = package['version']
  s.summary  = package['description']
  s.homepage = "https://gitlab.com/getgain-public/libs/react-native-rotate-photo"
  s.license  = package['license']
  s.author   = package['author']
  s.source   = { :git => "https://gitlab.com/getgain-public/libs/react-native-rotate-photo.git", :tag => "v#{s.version}" }

  s.platform = :ios, "8.0"

  s.preserve_paths = 'README.md', 'LICENSE', 'package.json', 'index.js'
  s.source_files   = "ios/RCTRotatePhoto/*.{h,m}"

  s.dependency 'React-Core'
end
