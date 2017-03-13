This library [Demo](https://rish7.github.io/Colors-from-image/index.html).
# Colors from image
This library helps to get colors from image. We can get high presence, low presence, Font color based on give color and also invert Color.

### Getting started

var cfi = new ColorsfromImage({});

or else
```javascript
var cfi = new ColorsfromImage({
    width:20,
    height:20,
    isAllowCrossOrigin:true
});
```

###### CrossOrigin images
This libary utlizes the <canvas> element and the ImageData, and because of cross-site security limitations, the script will fail. If try to extract colors from an image not hosted on the same domain, unless the image allows for *Cross Origin Resource Sharing*.

To get colors data from image `cfi.getColors(path, successCallback, errorCallback)`

#### Methods and use status:

| Feature          | Description                               | Parameters                            | Notes or e.g. data                     |
|------------------|-------------------------------------------|---------------------------------------|----------------------------------------|
| getColors        | To get Object of colors info data         | path, successCallback, errorCallback  | ```{"palettes": colors,"highPresenceColor": "rgba(233,255,255,1)","lessPresenceColor": "rgba(1,1,1,1)","highPresenceForeColor":"rgba(0,0,0,1)","lessPresenceForeColor":"rgba(255,255,255,1)" }``` |
| getForeColor     | To get font color based in given color    | rgbaColor                             |  font rgbaColor    rgba(255,255,255,1) |
| getInvertColor   | To get invert color of give color         | rgbaColor                             |  invertColor rgba(0,0,0,1)             |
| toHexString      | To get hex color of give color code       | color (e.g 'red' or rgba(255,0,0,1))  |  #FF0000                               |


*Tested in all major browsers, but still test after add this to your great project*
