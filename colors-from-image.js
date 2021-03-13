/**
 * This class help to find colors from image
 * @param {object} args  e.g. data {height: 10, width: 10, isAllowCrossOrigin: false }
 */


function ColorsfromImage(args) {
    var canvas, context;
    canvas = document.createElement('canvas');
    canvas.height = args.height || 15;
    canvas.width = args.width || 15;
    context = canvas.getContext('2d');
    /**
     * @param {string} src input image
     * @param {function} callback Success callback function with colors data. e.g. {
                "palettes": colors,
                "highPresenceColor": "rgba(233,255,255,1)", //ignores white and black colors
                "lessPresenceColor": "rgba(1,1,1,1)",
                "highPresenceForeColor":"rgba(0,0,0,1)",
                "lessPresenceForeColor":"rgba(255,255,255,1)" }
     * @param {function} errorCallback Error callback function with message
     */
    this.getColors = function (src, callback, errorCallback) {
        var colorsData = {};
        var loadingError = function () {
            if (errorCallback)
                errorCallback("Sorry unable to get colors from image");
        };
        var base_image = new Image();
        if (args.isAllowCrossOrigin) {
            //Cross origin images loading
            base_image.setAttribute('crossOrigin', 'anonymous');
        }
        base_image.onload = function () {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.fillStyle = "#FFFFFF";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.drawImage(base_image, 0, 0, canvas.width, canvas.height);
            for (var x = 0; x < canvas.width; x++) {
                for (var y = 0; y < canvas.height; y++) {
                    var data = context.getImageData(x, y, 1, 1).data;
                    var key = 'rgba(' + data[0] + ',' + data[1] + ',' + data[2] + ',' + (data[3] / 255) + ')';
                    colorsData[key] = (colorsData[key]) ? colorsData[key] + 1 : 1;
                }
            }
            var colors = Object.keys(colorsData).sort(function (a, b) {
                return colorsData[b] - colorsData[a]
            });

            var highPresenceColor = getHighPresenceColor(colors);
            var lessPresenceColor = (colors && colors.length > 0 ? colors[colors.length - 1] : "rgba(255,255,255,0)");
            var callbackData = {
                "palettes": colors,
                "highPresenceColor": highPresenceColor, //ignores white and black colors
                "lessPresenceColor": lessPresenceColor,
                "highPresenceForeColor": getForeColor(highPresenceColor),
                "lessPresenceForeColor": getForeColor(lessPresenceColor)
            }

            if (callback) {
                callback(callbackData);
            }
        }
        base_image.onerror = loadingError;
        base_image.onabort = loadingError;
        base_image.src = src;
    };
    /**
     * To get high Presence of Color
     * @param {array} colors 
     */
    var getHighPresenceColor = function (colors) {
        var color = colors && colors.length > 0 ? colors[0] : "rgba(255,255,255,0)";
        if (colors.length > 1 && (color === 'rgba(255,255,255,1)' || color === 'rgba(0,0,0,1)')) {
            colors.splice(0, 1);
            color = getHighPresenceColor(colors);
        }
        return color;
    };

    /**
     * To get forecolor for given color
     * @param {string} rgbaColor - e.g. rgba(1,1,1,1)
     * @return {string} foreColor - e.g. rgba(255,255,255,1)
     */
    var getForeColor = function (rgbaColor) {
        var rgbs = rgbaColor.replace("rgba(", "").split(",");
        if (rgbs.length < 3) {
            return "rgba(0,0,0,1)";
        }
        // Counting the perceptive luminance - human eye favors green color... 
        var a = 1 - (0.299 * rgbs[0] + 0.587 * rgbs[1] + 0.114 * rgbs[2]) / 255;
        var d = 0;
        /**
        * in case we need force bright color
        // if (a < 0.5) {
        //    d = 0; // bright colors - black font
        // }
        */
        if (a >= 0.5){
            d = 255; // dark colors - white font
        }

        return "rgba(" + d + "," + d + "," + d + ", 1)";
    }

    var getInvertColor = function (rgbaColor) {
        var rgbs = rgbaColor.replace("rgba(", "").split(",");
        if (rgbs.length < 3) {
            return "rgba(255,255,255,1)";
        }
        return "rgba(" + (255 - rgbs[0]) + "," + (255 - rgbs[1]) + "," + (255 - rgbs[2]) + ", 1)";
    }

    /**
     * Byte to Hex 
     * @param {int} byte - byte which need to change to hex code 
     * @return 
     */
    function byteToHex(byte) {
        // Change number (0-255) into a hex number (00-ff). -2 is from back, 2 letters
        return ('0' + byte.toString(16)).slice(-2);
    }

    /**
     * To fillstyle in canvas and get color data by pixel
     * @param {string} color - e.g. 'red' or '#ff0000' or rgba(255,0,0,1)
     * @return {string} hexColor - e.g. #FF0000 or by default #FFFFFF
     */
    function getColorData(color) {
        // Setting an invalid fillStyle leaves this unchanged
        context.fillStyle = 'rgba(255, 255, 255, 0)';
        context.clearRect(0, 0, 1, 1);
        context.fillStyle = color;
        context.fillRect(0, 0, 1, 1);
        return context.getImageData(0, 0, 1, 1).data;
    }

    /**
     * To convert color to Hex color code
     * @param {string} color - e.g. 'red' or '#ff0000' or rgba(255,0,0,1)
     * @return {string} hexColor - e.g. #FF0000 or by default #FFFFFF
     */
    function toHex(color) {
        var a = getColorData(color);
        var hex = [0, 1, 2].map(function (i) { return byteToHex(a[i]) }).join('');
        return '#' + hex.toUpperCase();
    }

    this.getForeColor = getForeColor;
    this.getInvertColor = getInvertColor;
    this.toHexString = toHex;
}
