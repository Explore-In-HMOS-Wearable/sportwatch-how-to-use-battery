import battery from '@system.battery';

export default {
    data: {
        status: '',
        level: 0
    },
    onInit() {
        const that = this;
        battery.getStatus({
            success: function (data) {
                that.status = data.charging ? 'Charging' : 'Not charging'
                that.level = data.level
            }
        });
    }
};
