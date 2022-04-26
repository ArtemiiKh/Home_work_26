function sum(accum = 0) {
	const statistic = {
		increase: 0,
		decrease: 0,
		get: 0,
		getStatistic: 0
	};

	return {
		increase(num) {
			statistic.increase++;
			return accum += num;
		},

		decrease(num) {
			statistic.decrease++;
			return accum -= num;
		},

		get() {
			statistic.get++;
			return accum;
		},

		getStatistic() {
			statistic.getStatistic++;
			return statistic;
		},

		clearAccum() {
			return accum = 0;
		},

		clearStatistic() {
			for (const key in statistic) {
				statistic[key] = 0;
			}
			return statistic;
		},

		clearAll() {
			this.clearAccum();
			this.clearStatistic();
			return {
				accum,
				statistic
			}
		}
	};
}

const result = sum();
console.log(result.increase(4));
console.log(result.decrease(1));
console.log(result.decrease(1));
console.log(result.get());
console.log(result.getStatistic());

console.log(result.clearAll());