//　デフォルトのnew Date
const DEFAULT_DATE = new Date()
console.log(DEFAULT_DATE)
//　日本の時間ではなく世界標準時を取得しているので時差がある


const SET_TIMEZONE_DATE = new Date().toLocaleString({timeZone:"Asia/Tokyo"})
console.log(SET_TIMEZONE_DATE)
//　これで日本での現在時刻を取得できる
//　ただフォーマットが少し変わっている


const　TOMORROW_DATE = new Date(new Date().setDate(new Date().getDate()))
console.log(TOMORROW_DATE)
//　明日の時刻を取得(ぴったり24時間後)
//　これマジでもっといいやり方あるよね？？？？

const　SET_TIMEZONE_TOMORROW_DATE = new Date(new Date().setDate(new Date().getDate())).toLocaleString({timeZone:"Asia/Tokyo"})
console.log(SET_TIMEZONE_TOMORROW_DATE)
// 日本の時刻に合わせたうえで明日の時刻を取得
