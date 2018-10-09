/**
 * Created by shijunfeng on 2018/09/10.
 */
window.BuffUI = {
    _version: 'v1.0.0.0',
    _buffFroms: [], //所有打开的窗体
    init: function () {
        alert("初始化方法");
        //初始化时钟
        //初始化开始菜单
        //初始化消息
        //初始化菜单
        //消息窗口消失事件注册
        $(".buff-desktop").click(function () {
            alert("关闭消息窗口");
            alert("关闭开始菜单");
        })
    },
    menuClose: function () { //关闭菜单
        alert("munuclose");
    },
    menuOpen: function () {//打开菜单
        alert("menuopen");
    }
}
$(function () {
    BuffUI.init();
})
