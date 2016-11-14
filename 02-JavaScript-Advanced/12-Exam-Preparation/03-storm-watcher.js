let result = (function () {
    let id = 0;
    class Record {
        constructor(temperature, humidity, pressure, windSpeed) {
            this.id = id++;
            this.temperature = temperature;
            this.humidity = humidity;
            this.pressure = pressure;
            this.windSpeed = windSpeed;
        }

        isStormy() {
            if (this.temperature < 20 &&
                (this.pressure < 700 || this.pressure > 900) &&
                this.windSpeed > 25) {
                return true;
            }

            return false;
        }

        toString() {
            let stormyStatus = ''
            if(this.isStormy()) {
                stormyStatus = 'Stormy'
            } else {
                stormyStatus = 'Not stormy'
            }

            let result = '';
            result += `Reading ID: ${this.id}\n`
            result += `Temperature: ${this.temperature}*C\n`
            result += `Relative Humidity: ${this.humidity}%\n`
            result += `Pressure: ${this.pressure}hpa\n`
            result += `Wind Speed: ${this.windSpeed}m/s\n`
            result += `Weather: ${stormyStatus}\n`

            return result.trim()
        }
    }

    return Record;
})()
