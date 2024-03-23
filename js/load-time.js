// 页面开始加载时记录时间戳  
var startTime = window.performance.timing.navigationStart;  
  
// 当页面完全加载后，停止计时并显示加载耗时  
window.onload = function() {  
    // 获取页面加载完成时的当前时间戳  
    var endTime = window.performance.timing.loadEventEnd;  
  
    // 计算加载耗时（毫秒）  
    var loadTime = endTime - startTime;  
  
    // 将加载耗时转换为可读的格式（例如：秒和毫秒）  
    var loadTimeStr = (loadTime / 1000).toFixed(2) + " 秒";  
  
    // 在网页上显示加载耗时  
    document.getElementById("loadTime").textContent = "页面加载耗时：" + loadTimeStr;  
};