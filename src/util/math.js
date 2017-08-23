EJSC.math = {
    degreesToRadians: function(degrees) {
        return degrees / 180 * Math.PI;
    },

    distance: function(point1, point2) {
        return Math.sqrt(
            Math.pow(Math.abs(point2[0] - point1[0]), 2) +
            Math.pow(Math.abs(point2[1] - point1[1]), 2)
        );
    },

    radiansToDegrees: function(radians) {
        return radians / Math.PI * 180;
    }
};
