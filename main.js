// ==UserScript==
// @name         b站评论区右置
// @description  b站/哔哩哔哩/bilibili评论区右置，将b站的评论区和推荐区调换方向，适用于强迫症患者，此时评论区在右边而不是左边，由于阿b的css写得太复杂了，所以该脚本还增加了个自动宽屏功能，否则难以实现评论区右置
// @version      1.0.0
// @author       hty
// @namespace    https://github.com/HTY-DBY/script-biliRight
// @icon         https://hty.ink/logo.jpg
// @grant        none
// @match        *.bilibili.com/bangumi*
// @match        *.bilibili.com/video*
// @license      MIT
// ==/UserScript==

// @note         1.0.0 这里是版本更新注释


// 宽屏处理
let timer_kp = setInterval(function () {
    if (document.getElementById('bilibili-player')) {
        if (!document.getElementsByClassName('bpx-state-entered')[0]) {
            try {
                document.getElementsByClassName('bpx-player-ctrl-wide')[0].click()
            } catch { }
        }
        if (!document.getElementsByClassName('squirtle-video-widescreen squirtle-video-item active')[0]) {
            try {
                document.getElementsByClassName('squirtle-video-widescreen squirtle-video-item')[0].click()
            } catch { }
        }
        if (!document.getElementsByClassName('bilibili-player-video-btn bilibili-player-video-btn-widescreen closed')[0]) {
            try {
                document.getElementsByClassName('bilibili-player-video-btn bilibili-player-video-btn-widescreen')[0].click()
            } catch { }
        }
        if (getComputedStyle(document.querySelector("#bilibili-player"), null).position == 'relative') {
            clearInterval(timer_kp)
        }
    }
}, 200)


// *.bilibili.com/bangumi*
if (window.location.pathname.substring(window.location.pathname.indexOf("/", 0) + 1, window.location.pathname.indexOf("/", 1)) == "bangumi") {
    let hty_set = '340px'
    // 版本 1
    let timer_1 = setInterval(function () {
        if (document.getElementsByClassName('mediainfo_media_info__zMH8V')[0]) {
            try {
                document.getElementsByClassName('plp-l')[0].style.position = 'absolute'
                document.getElementsByClassName('plp-r')[0].style.right = 'auto'
                // -----
                document.getElementsByClassName('mediainfo_media_info__zMH8V')[0].style.borderTop = '0'
                document.getElementById('review-module').style.borderBottom = '0'
                document.getElementsByClassName('operation_split_line__lrq_H')[0].style.borderTop = '0'
                document.getElementsByClassName('comment-wrapper')[0].style.borderTop = 'none'
                for (let idx = 0; idx < document.getElementsByClassName('split-line').length; idx++) {
                    document.getElementsByClassName('split-line')[idx].style.borderTop = 'none'
                }
                // -----
                document.getElementsByClassName('mediainfo_media_info__zMH8V')[0].style.paddingLeft = hty_set
                document.getElementsByClassName('toolbar_toolbar__NJCNy')[0].style.paddingLeft = hty_set
                document.getElementsByClassName('comment-wrapper')[0].style.paddingLeft = hty_set
                document.getElementById('review-module').style.paddingLeft = hty_set
                document.getElementsByClassName('player-left-components')[0].style.paddingRight = '0'
            } catch (error) {
                console.log(error)
                clearInterval(timer_1)
            }
        }
    }, 200)
    // 版本 2
    let timer_ = setInterval(function () {
        if (document.getElementById('media_module')) {
            try {
                document.getElementsByClassName('plp-l')[0].style.position = 'absolute'
                document.getElementsByClassName('plp-r')[0].style.right = 'auto'
                // -----
                document.getElementById('media_module').style.borderTop = '0'
                // document.getElementById('review-module').style.borderBottom = '0'
                // document.getElementsByClassName('operation_split_line__lrq_H')[0].style.borderTop = '0'
                document.getElementsByClassName('comment-wrapper')[0].style.borderTop = 'none'
                for (let idx = 0; idx < document.getElementsByClassName('split-line').length; idx++) {
                    document.getElementsByClassName('split-line')[idx].style.borderTop = 'none'
                }
                document.getElementById('review_module').style.borderBottom = 'none'
                // -----
                document.getElementById('media_module').style.paddingLeft = hty_set
                document.getElementById('toolbar_module').style.paddingLeft = hty_set
                document.getElementsByClassName('comment-wrapper')[0].style.paddingLeft = hty_set
                document.getElementById('review_module').style.paddingLeft = hty_set
            } catch (error) {
                console.log(error)
                clearInterval(timer_1)
            }
        }
    }, 200)
}


// *.bilibili.com/video*
if (window.location.pathname.substring(window.location.pathname.indexOf("/", 0) + 1, window.location.pathname.indexOf("/", 1)) == "video") {
    let hty_set_old = '340px', hty_set_new = '430px'
    // 旧版
    let timer_old = setInterval(function () {
        if (document.getElementsByClassName('l-con')[0]) {
            let hty_set = '340px'
            try {
                document.getElementsByClassName('l-con')[0].style.width = 'auto'
                document.getElementsByClassName('r-con')[0].style.position = 'absolute'
                document.getElementsByClassName('r-con')[0].style.marginLeft = '0'
                // -----
                document.getElementsByClassName('video-info')[0].style.textAlign = 'right'
                document.getElementsByClassName('video-data')[0].style.display = 'block'
                document.getElementsByClassName('v-wrap')[0].style.justifyContent = 'left'
                document.getElementsByClassName('s_tag')[0].style.borderBottom = '0'
                document.getElementsByClassName('video-toolbar')[0].style.borderBottom = '0'
                // -----
                document.getElementsByClassName('comment')[0].style.paddingLeft = hty_set_old
                document.getElementsByClassName('video-toolbar')[0].style.paddingLeft = hty_set_old
                document.getElementsByClassName('video-desc')[0].style.paddingLeft = hty_set_old
                document.getElementsByClassName('report-scroll-module')[0].style.paddingLeft = hty_set_old
                document.getElementsByClassName('tag-area')[0].style.paddingLeft = hty_set_old
                document.getElementsByClassName('b-head')[0].style.paddingLeft = hty_set_old
                clearInterval(timer_old)
            } catch (error) {
                console.log(error)
                // clearInterval(timer_old)
            }
        }
    }, 200)
    // 新版
    let timer_new = setInterval(function () {
        if (document.getElementsByClassName('left-container')[0]) {
            try {
                document.getElementsByClassName('left-container')[0].style.width = 'auto'
                document.getElementsByClassName('right-container')[0].style.position = 'absolute'
                document.getElementsByClassName('right-container')[0].style.marginLeft = '0'
                document.getElementsByClassName('right-container')[0].style.zIndex = '5'
                document.getElementById('bilibili-player').style.width = '100%'
                document.getElementsByClassName('player-wrap')[0].style.justifyContent = 'center'
                document.getElementsByClassName('player-wrap')[0].style.display = 'flex'
                document.getElementById('bilibili-player').style.position = 'absolute'
                document.getElementsByClassName('video-container-v1')[0].style.flexDirection = 'column'
                document.getElementsByClassName('video-container-v1')[0].style.justifyContent = 'left'
                // -----
                document.getElementsByClassName('video-toolbar-v1')[0].style.borderBottom = '0'
                document.getElementsByClassName('s_tag-v1')[0].style.borderBottom = '0'
                document.getElementsByClassName('video-container-v1')[0].style.padding = '0px 9%'
                document.getElementById('viewbox_report').style.textAlign = 'right'
                document.getElementsByClassName('video-data')[0].style.display = 'inline-block'
                // -----
                document.getElementsByClassName('video-toolbar-v1')[0].style.paddingLeft = hty_set_new
                document.getElementsByClassName('comment')[0].style.paddingLeft = hty_set_new
                document.getElementsByClassName('s_tag-v1')[0].style.paddingLeft = hty_set_new
                document.getElementsByClassName('video-desc-v1')[0].style.paddingLeft = hty_set_new
                clearInterval(timer_new)
            } catch (error) {
                console.log(error)
                // clearInterval(timer_new)
            }
        }
    }, 200)
    // 广告处理，这里太麻烦了，需要去广告话的自己用 ad 插件吧
    let timer_ad = setInterval(function () {
        try {
            if (document.getElementsByClassName('l-con')[0]) {
                if (document.getElementsByClassName('inside-wrp')[0]) {
                    document.getElementsByClassName('inside-wrp')[0].style.paddingLeft = hty_set_old
                    document.getElementsByClassName('inside-wrp')[0].style.border = '0'

                }
                if (document.getElementById('bannerAd')) {
                    document.getElementById('bannerAd').style.paddingLeft = hty_set_old
                }
            }
            if (document.getElementsByClassName('left-container')[0]) {
                if (document.getElementsByClassName('inside-wrp')[0]) {
                    document.getElementsByClassName('inside-wrp')[0].style.paddingLeft = hty_set_new
                    document.getElementsByClassName('inside-wrp')[0].style.border = '0'
                }
                if (document.getElementById('bannerAd')) {
                    document.getElementById('bannerAd').style.paddingLeft = hty_set_new
                }
            }
        } catch (error) {
            console.log(error)
        }
    }, 200)
}
