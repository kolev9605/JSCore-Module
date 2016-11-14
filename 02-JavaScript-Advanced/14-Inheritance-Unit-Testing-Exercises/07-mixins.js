function createMixins() {
    function computerQualityMixin(c) {
        c.prototype.getQuality = function () {
            return (this.ram + this.processorSpeed + this.hardDiskSpace) / 3;
        }

        c.prototype.isFast = function () {
            return this.processorSpeed > (this.ram / 4)
        }

        c.prototype.isRoomy = function () {
            return this.hardDiskSpace > Math.floor(this.ram * this.processorSpeed)
        }
    }

    function styleMixin(c) {
        c.prototype.isFullSet = function () {
            return this.manufacturer === this.keyboard.manufacturer &&
                this.manufacturer === this.monitor.manufacturer;
        };

        c.prototype.isClassy = function () {
            return this.battery.expectedLife >= 3 &&
                (this.color === 'Silver' || this.color === 'Black') &&
                this.weight < 3;
        }
    }
    return {
        computerQualityMixin,
        styleMixin
    }
}
