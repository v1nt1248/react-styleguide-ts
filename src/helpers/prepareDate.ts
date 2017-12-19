import * as moment from 'moment'

/**
 * преобразование timestamp в строку вида '%n дней назад'
 * @param timestamp {number}
 * @return {string}
 */
export function daysAgoToString(timestamp: number): string {
	const dist = Date.now() - timestamp
	const minute = 60 * 1000
	const hour = minute * 60
	const day = hour * 24

	moment.locale('ru')

	if (dist < (minute - 1)) {
		return moment(timestamp)
			.startOf('second')
			.fromNow()
	}

	if (dist < (hour - 1)) {
		return moment(timestamp)
			.startOf('minute')
			.fromNow()
	}

	if (dist < (day - 1)) {
		return moment(timestamp)
			.startOf('hour')
			.fromNow()
	}

	return moment(timestamp)
		.startOf('day')
		.fromNow()
}
