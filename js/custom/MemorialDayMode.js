/*---------特殊日子自动变黑白模式----------*/
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

/*特殊日子日期列表设置*/
const dateList = [
  '7/7', // 七七事变
  '9/18', // 九一八事变
  '12/13', // 国家公祭日，南京！
];
const toMonthDay = `${month}/${day}`;

/*特殊时间段设置*/
var beginDate = new Date("2022-11-30 12:13:00"); /*特殊时间段开始时间*/
var endDate = new Date("2022-12-07 00:00:01"); /*特殊时间段结束时间*/
var today = day;

/*特殊日子自动变黑白*/
if (dateList.some((day) => day === toMonthDay)) {
  document.documentElement.style.filter = "grayscale(100%)";
  console.log("昭昭前事，惕惕后人，勿忘历史，吾辈自强！");
}

/*特殊时间段自动变黑白*/
else if (today >= beginDate && today <= endDate) {
  document.documentElement.style.filter = "grayscale(100%)";
  console.log("昭昭前事，惕惕后人，勿忘历史，吾辈自强！");
}
/*---------特殊日子自动变黑白模式---------*/