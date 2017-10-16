'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPlayer = require('react-player');

var _reactPlayer2 = _interopRequireDefault(_reactPlayer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CrossfadingMediaPlayer = function (_Component) {
  _inherits(CrossfadingMediaPlayer, _Component);

  function CrossfadingMediaPlayer() {
    _classCallCheck(this, CrossfadingMediaPlayer);

    return _possibleConstructorReturn(this, (CrossfadingMediaPlayer.__proto__ || Object.getPrototypeOf(CrossfadingMediaPlayer)).apply(this, arguments));
  }

  _createClass(CrossfadingMediaPlayer, [{
    key: 'render',


    //   let player_a = 
    //     <ReactPlayer 
    //       url='https://d2t4zkoyu407b2.cloudfront.net/media/previews/066/6415a9b0ca3b03bc0354/7b4971z8cmft4lrl.mp3?Expires=1508755634&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMnQ0emtveXU0MDdiMi5jbG91ZGZyb250Lm5ldC9tZWRpYS9wcmV2aWV3cy8wNjYvNjQxNWE5YjBjYTNiMDNiYzAzNTQvN2I0OTcxejhjbWZ0NGxybC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1MDg3NTU2MzR9fX1dfQ__&Signature=DeojNJ2nmuei8zg5M6IALY2ALjH21jYuOkuulN7ad8hBn19613qPyGSMuYOk0pbEfFU2QbRDSveprMeC6LazWuKXeOFMjC8N9~mLt3zjdwPekcEMqjsnMRec7VfuHrxy~nT5jPgFtUtG8qqjx~w6dd5eNa2dsv-Hrg8PIV5WSmc2oaL0u-984fXLFlpAtVlp1hUkZ~zHcg6dPxJKOQoGPeE9~KH3Fce4KxuQ6ST84hcr3I~E2ZeMXFPbqfquoU-KTr7HZdp41gnksCr-sjMXeHt3PQTh0QsQbkI8iSEWYiOGAMKYsb9RxS1RmCv350QEXQGPHHT7SE6Sv021B6ldbw__&Key-Pair-Id=APKAIN372WB5K3OMOVWQ' 
    //       playing />;

    //   let player_b = 
    //     <ReactPlayer 
    //       url='https://d2t4zkoyu407b2.cloudfront.net/media/previews/066/6415a9b0ca3b03bc0354/7b4971z8cmft4lrl.mp3?Expires=1508755634&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9kMnQ0emtveXU0MDdiMi5jbG91ZGZyb250Lm5ldC9tZWRpYS9wcmV2aWV3cy8wNjYvNjQxNWE5YjBjYTNiMDNiYzAzNTQvN2I0OTcxejhjbWZ0NGxybC5tcDMiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE1MDg3NTU2MzR9fX1dfQ__&Signature=DeojNJ2nmuei8zg5M6IALY2ALjH21jYuOkuulN7ad8hBn19613qPyGSMuYOk0pbEfFU2QbRDSveprMeC6LazWuKXeOFMjC8N9~mLt3zjdwPekcEMqjsnMRec7VfuHrxy~nT5jPgFtUtG8qqjx~w6dd5eNa2dsv-Hrg8PIV5WSmc2oaL0u-984fXLFlpAtVlp1hUkZ~zHcg6dPxJKOQoGPeE9~KH3Fce4KxuQ6ST84hcr3I~E2ZeMXFPbqfquoU-KTr7HZdp41gnksCr-sjMXeHt3PQTh0QsQbkI8iSEWYiOGAMKYsb9RxS1RmCv350QEXQGPHHT7SE6Sv021B6ldbw__&Key-Pair-Id=APKAIN372WB5K3OMOVWQ' 
    //       playing />;

    value: function render() {
      return;
    }
  }]);

  return CrossfadingMediaPlayer;
}(_react.Component);

exports.default = CrossfadingMediaPlayer;