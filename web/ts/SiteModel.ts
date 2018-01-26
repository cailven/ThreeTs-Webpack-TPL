/// <reference path="../dts/Bone.d.ts" />
export class SiteModel {
    public signalBus: Bone.Events;
    public isTestCam: boolean = false;
    public isEnding = false;

    public isStart: boolean = false;

    public domain1 = "dqctcc.h5designer.com";
    public domain2 = "kfctcc.h5designer.com";

    public constructor() {
        this.signalBus = Bone.extend({}, Bone.Events, {});
    }

    public isDrag(): boolean {
        if (this.isIos()) {
            return false;
        } else {
            return true;
        }
        // return false;
    }

    private static instance: SiteModel;

    private sharePic1 = window.location.origin + "/sharepic/share1.png";
    private sharePic2 = window.location.origin + "/sharepic/share2.png";


    public isAndroid(): boolean {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Adr') > -1) {
            return true;
        } else {
            return false;
        }
    }

    public isIos(): boolean {
        var u = navigator.userAgent;
        if (!!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
            return true;
        } else {
            return false;
        }

    }

    public isInWX(): boolean {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        var ua: string = navigator.userAgent.toLowerCase();
        var t: string = ua.match(/MicroMessenger/i) + "";
        if (t == "micromessenger") {
            return true;
        } else {
            return false;
        }
    }

    public shangShareTxt() {
        this.timeLineInfo.title = '';
        this.shareInfo.desc = '';
        this.timeLineInfo.imgUrl = this.sharePic2;
        this.shareInfo.imgUrl = this.sharePic2;
    }

    public timeLineInfo = {
        title: '', // 分享标题
        link: window.location.href, // 分享链接
        imgUrl: this.sharePic1, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    }
    public shareInfo = {
        title: '', // 分享标题
        desc: '', // 分享描述
        link: window.location.href, // 分享链接
        imgUrl: this.sharePic1, // 分享图标
        success: function () {
            // 用户确认分享后执行的回调函数
        },
        cancel: function () {
            // 用户取消分享后执行的回调函数
        }
    }

    public static getInstance(): SiteModel {
        if (SiteModel.instance == null) {
            SiteModel.instance = new SiteModel();
        }
        return SiteModel.instance;
    }
}
