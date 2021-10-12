import * as moment from 'moment';

export function isToday(created: moment.MomentInput) {
  return moment(created).isSame(moment().startOf('day'), 'day')
}

export function isYesterday(created: moment.MomentInput){
  return moment(created).isSame(moment().subtract(1, 'days')
    .startOf('day'), 'day');
}
export class Util {
}
