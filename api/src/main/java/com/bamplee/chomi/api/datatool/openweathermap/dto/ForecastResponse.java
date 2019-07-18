package com.bamplee.chomi.api.datatool.openweathermap.dto;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class ForecastResponse {
    private String cod;
    private Double message;
    private Integer cnt;
    private List<Item> list;

    public String getCod() {
        return cod;
    }

    public void setCod(String cod) {
        this.cod = cod;
    }

    public Double getMessage() {
        return message;
    }

    public void setMessage(Double message) {
        this.message = message;
    }

    public Integer getCnt() {
        return cnt;
    }

    public void setCnt(Integer cnt) {
        this.cnt = cnt;
    }

    public List<Item> getList() {
        return list;
    }

    public void setList(List<Item> list) {
        this.list = list;
    }

    public static class Item {
        private Integer dt;
        @JsonProperty("dt_txt")
        private String dtTxt;
        private Main main;
        private List<Weather> weather;
        private Clouds clouds;
        private Wind wind;
        private Rain rain;
        private Snow snow;

        public Integer getDt() {
            return dt;
        }

        public void setDt(Integer dt) {
            this.dt = dt;
        }

        public String getDtTxt() {
            return dtTxt;
        }

        public void setDtTxt(String dtTxt) {
            this.dtTxt = dtTxt;
        }

        public Main getMain() {
            return main;
        }

        public void setMain(Main main) {
            this.main = main;
        }

        public List<Weather> getWeather() {
            return weather;
        }

        public void setWeather(List<Weather> weather) {
            this.weather = weather;
        }

        public Clouds getClouds() {
            return clouds;
        }

        public void setClouds(Clouds clouds) {
            this.clouds = clouds;
        }

        public Wind getWind() {
            return wind;
        }

        public void setWind(Wind wind) {
            this.wind = wind;
        }

        public Rain getRain() {
            return rain;
        }

        public void setRain(Rain rain) {
            this.rain = rain;
        }

        public Snow getSnow() {
            return snow;
        }

        public void setSnow(Snow snow) {
            this.snow = snow;
        }

        public static class Main {
            private Double temp;
            @JsonProperty("temp_min")
            private Double tempMin;
            @JsonProperty("temp_max")
            private Double tempMax;
            private Double pressure;
            @JsonProperty("sea_level")
            private Double seaLevel;
            @JsonProperty("grnd_level")
            private Double grndLevel;
            private Double humidity;
            @JsonProperty("temp_kf")
            private Double tempKf;

            public Double getTemp() {
                return temp;
            }

            public void setTemp(Double temp) {
                this.temp = temp;
            }

            public Double getTempMin() {
                return tempMin;
            }

            public void setTempMin(Double tempMin) {
                this.tempMin = tempMin;
            }

            public Double getTempMax() {
                return tempMax;
            }

            public void setTempMax(Double tempMax) {
                this.tempMax = tempMax;
            }

            public Double getPressure() {
                return pressure;
            }

            public void setPressure(Double pressure) {
                this.pressure = pressure;
            }

            public Double getSeaLevel() {
                return seaLevel;
            }

            public void setSeaLevel(Double seaLevel) {
                this.seaLevel = seaLevel;
            }

            public Double getGrndLevel() {
                return grndLevel;
            }

            public void setGrndLevel(Double grndLevel) {
                this.grndLevel = grndLevel;
            }

            public Double getHumidity() {
                return humidity;
            }

            public void setHumidity(Double humidity) {
                this.humidity = humidity;
            }

            public Double getTempKf() {
                return tempKf;
            }

            public void setTempKf(Double tempKf) {
                this.tempKf = tempKf;
            }
        }

        public static class Weather {
            private Long id;
            private String main;
            private String description;
            private String icon;

            public Long getId() {
                return id;
            }

            public void setId(Long id) {
                this.id = id;
            }

            public String getMain() {
                return main;
            }

            public void setMain(String main) {
                this.main = main;
            }

            public String getDescription() {
                return description;
            }

            public void setDescription(String description) {
                this.description = description;
            }

            public String getIcon() {
                return icon;
            }

            public void setIcon(String icon) {
                this.icon = icon;
            }
        }

        public static class Clouds {
            @JsonProperty("all")
            private Double percent;

            public Double getPercent() {
                return percent;
            }

            public void setPercent(Double percent) {
                this.percent = percent;
            }
        }

        public static class Wind {
            private Double speed;
            private Double deg;

            public Double getSpeed() {
                return speed;
            }

            public void setSpeed(Double speed) {
                this.speed = speed;
            }

            public Double getDeg() {
                return deg;
            }

            public void setDeg(Double deg) {
                this.deg = deg;
            }
        }

        public static class Rain {
            @JsonProperty("1h")
            private Double oneHour;
            @JsonProperty("3h")
            private Double threeHour;

            public Double getOneHour() {
                return oneHour;
            }

            public void setOneHour(Double oneHour) {
                this.oneHour = oneHour;
            }

            public Double getThreeHour() {
                return threeHour;
            }

            public void setThreeHour(Double threeHour) {
                this.threeHour = threeHour;
            }
        }

        public static class Snow {
            @JsonProperty("1h")
            private Double oneHour;
            @JsonProperty("3h")
            private Double threeHour;

            public Double getOneHour() {
                return oneHour;
            }

            public void setOneHour(Double oneHour) {
                this.oneHour = oneHour;
            }

            public Double getThreeHour() {
                return threeHour;
            }

            public void setThreeHour(Double threeHour) {
                this.threeHour = threeHour;
            }
        }
    }
}
