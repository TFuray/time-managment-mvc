// popup time selector
const timer = document.querySelector("#startTime")
M.Timepicker.init(timer,{
    showClearBtn:true,
    twelveHour: false,
})
const timer2 = document.querySelector("#endTime")
M.Timepicker.init(timer2,{
    showClearBtn:true,
    twelveHour: false,
})

