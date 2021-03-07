"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Main = /*#__PURE__*/function (_React$Component) {
  _inherits(Main, _React$Component);

  var _super = _createSuper(Main);

  function Main(props) {
    var _this;

    _classCallCheck(this, Main);

    _this = _super.call(this, props);
    _this.state = {
      loading: true
    };
    _this.weather = [];
    _this.cities = [];
    _this.error = false;
    return _this;
  }

  _createClass(Main, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.cities = {
        key: 'vancouver',
        name: 'Vancouver, BC'
      };
      this.loadCities();
      this.getWeather().then(function (weather) {
        _this2.weather = weather;

        _this2.setState({
          loading: false
        });
      })["catch"](function (error) {
        _this2.setState({
          loading: false
        });

        _this2.error = true;
      });
    }
  }, {
    key: "loadCities",
    value: function loadCities() {
      var _this3 = this;

      var http = new XMLHttpRequest();
      http.open('POST', '/cities');
      http.addEventListener('loadend', function () {
        _this3.cities = JSON.parse(http.response);
      });
      http.addEventListener('error', function (error) {
        _this3.error = error;
      });
      http.send();
    }
  }, {
    key: "getWeather",
    value: function getWeather(city) {
      return new Promise(function (resolve, reject) {
        var weather = [];
        var http = new XMLHttpRequest();
        http.open('POST', '/seven/' + city);
        http.addEventListener('loadend', function () {
          weather = JSON.parse(http.response).daily;
          resolve(weather);
        });
        http.addEventListener('error', function () {
          reject('error fetching weather');
        });
        http.send();
      });
    }
  }, {
    key: "updateWeather",
    value: function updateWeather(city) {
      var _this4 = this;

      this.setState({
        loading: true
      }, function () {
        _this4.getWeather(city).then(function (weather) {
          _this4.weather = weather;

          _this4.setState({
            loading: false
          });
        })["catch"](function (error) {
          _this4.error = error;

          _this4.setState({
            loading: false
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      var weatherCards = function weatherCards() {
        return _this5.weather.map(function (dayofweather) {
          var day = new Date(dayofweather.dt * 1000);
          return /*#__PURE__*/React.createElement("div", {
            className: "weathercard"
          }, /*#__PURE__*/React.createElement("p", {
            className: "date"
          }, day.toDateString()), /*#__PURE__*/React.createElement("p", {
            className: "icon"
          }, /*#__PURE__*/React.createElement("img", {
            src: "http://openweathermap.org/img/wn/".concat(dayofweather.weather[0].icon, "@2x.png")
          })), /*#__PURE__*/React.createElement("p", null, dayofweather.weather[0].description), /*#__PURE__*/React.createElement("p", null, dayofweather.temp.day, "\xB0C"));
        });
      };

      var cityoptions = function cityoptions() {
        return /*#__PURE__*/React.createElement("select", {
          onChange: function onChange(e) {
            _this5.updateWeather(e.target.value);
          }
        }, _this5.cities.map(function (city) {
          return /*#__PURE__*/React.createElement("option", {
            value: city.key
          }, city.name.toUpperCase());
        }));
      };

      return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("h1", null, "The Weather Forecast"), /*#__PURE__*/React.createElement("p", null, cityoptions()), /*#__PURE__*/React.createElement("div", {
        className: "container"
      }, this.state.loading ? /*#__PURE__*/React.createElement("p", {
        className: "date"
      }, "LOADING...") : weatherCards()));
    }
  }]);

  return Main;
}(React.Component);

ReactDOM.render( /*#__PURE__*/React.createElement(Main, null), document.getElementById('incredible-purpose'));
//# sourceMappingURL=app.js.map
