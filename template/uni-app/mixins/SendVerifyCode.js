// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2023 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

export default {
	data() {
		return {
			disabled: false,
			text: this.$t('验证码'),
			runTime: undefined
		};
	},
	methods: {
		sendCode() {
			if (this.disabled) return;
			this.disabled = true;
			let n = 20;
			this.text = this.$t('剩余') + n + "s";
			this.runTime = setInterval(() => {
				n = n - 1;
				if (n < 0) {
					clearInterval(this.runTime);
					this.disabled = false;
					this.text = this.$t('重新获取');
					return
				}
				this.text = this.$t('剩余') + n + "s";
			}, 1000);
		}
	},
	onHide() {
		clearInterval(this.runTime);
	}
};
