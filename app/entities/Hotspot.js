﻿define(['_', 'entities/Question'], function (_, Question) {

    var ctor = function (id, title, type, isMultiple, background, spots) {
        var that = this,
            _protected = {
                answer: answer
            };

        Question.call(that, id, title, type, _protected);

        that.isMultiple = isMultiple;
        that.background = background;
        that.spots = spots;

        function answer(marks) {
            if (!_.isArray(that.spots) || that.spots.length == 0) {
                that.score = 100;
                return;
            }

            if (!_.isArray(marks)) {
                that.score = 0;
                return;
            }

            var answerCorrect;
            if (isMultiple) {

                var spotsWithMarks = [];
                var marksOnSpots = [];

                _.each(marks, function (mark) {
                    _.each(that.spots, function (spot) {
                        if (isMarkInSpot(mark, spot)) {
                            spotsWithMarks.push(spot);
                            marksOnSpots.push(mark);
                        }
                    });
                });

                answerCorrect = _.uniq(spotsWithMarks).length === that.spots.length && _.uniq(marksOnSpots).length === marks.length;

            } else {
                answerCorrect = _.some(that.spots, function (spot) {
                    return _.some(marks, function (mark) {
                        return isMarkInSpot(mark, spot);
                    });
                });
            }

            that.score = answerCorrect ? 100 : 0;
        };
    };

    return ctor;


    function isMarkInSpot(mark, spot) {
        var x = mark.x, y = mark.y;

        var inside = false;
        for (var i = 0, j = spot.length - 1; i < spot.length; j = i++) {
            var xi = spot[i].x, yi = spot[i].y;
            var xj = spot[j].x, yj = spot[j].y;

            var intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        return inside;
    };

})