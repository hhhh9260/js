/*
IOS/安卓： 快手 普通版
邀请下载链接：https://kicdjpmlo.sx3i65zvgw3g8k.com/fission/offkwai/landpagex?code=2235402609&platform=qrcode&fid=2764597391&subBiz=INVITE_CODE&kpn=KUAISHOU&shareToken=Y3rDbpqo1
邀请二维码(直接扫描打不开的话，下载后用快手APP扫一扫)：https://raw.githubusercontent.com/leafxcy/JavaScript/main/ks.png

脚本目前会做签到和翻倍，开宝箱和翻倍，看广告任务，逛街任务，直播任务

CK里的api_st跟快手极速版的通用，但是需要额外一个did(设备号)，同一台设备捉包的话可以把did复制一遍粘贴到每个账号的api_st后面，建议用不同设备捉包
V2P和圈X配置好重写后，应该打开APP就能获取到CK，重写跟快手极速版的冲突，需要关掉其中一个
青龙把任意包里的kuaishou.api_st=xxxxxxxxxxxx;和did=yyyyyyyyyyy;这两段连在一起放到变量ksCookie里，多账户换行或者@隔开
export ksCookie='kuaishou.api_st=xxxxxxxxxxxx; did=yyyyyyyyyyy;'

默认每天14点提现，0点自动兑换金币，要改提现时间的话，把提现时间(小时)填到变量ksWithdrawTime里
默认提现2块到绑定的提现账号，都有绑定的话默认提现到支付宝
要改金额的话把提现金额填到变量ksCash里。如果提现失败，手动接验证码提现一次
需要手动设置提现渠道的话，微信把 ksPayType=WECHAT; ，支付宝把 ksPayType=ALIPAY; 写到对应账号ck后面
设置变量ksNotify为0/1/2可以控制不通知/提现时间通知/每次运行都通知，默认提现时间通知

定时一天最少10次(一般10次能做完任务)，最好改掉默认时间，不然太多人同一时间跑

重写：
[task_local]
#快手
22 10-20 * * * https://raw.githubusercontent.com/leafxcy/JavaScript/main/ks.js, tag=快手, enabled=true
[rewrite_local]
appsupport/yoda/biz/info url script-request-header https://raw.githubusercontent.com/leafxcy/JavaScript/main/ks.js
ksapp/client/package/renew url script-request-header https://raw.githubusercontent.com/leafxcy/JavaScript/main/ks.js
[MITM]
hostname = api.kuaisho*.com
hostname = open.kuaisho*.com
*/
const _0x2fc758=_0x42bc;(function(_0x308438,_0x45a55d){const _0x542a0d=_0x42bc,_0x2d0af6=_0x308438();while(!![]){try{const _0x4ac7f0=parseInt(_0x542a0d(0x239))/(-0xd+-0x542+0x550)+parseInt(_0x542a0d(0x2b0))/(0xc6a+0x1*-0x21e7+0x157f)+-parseInt(_0x542a0d(0x44c))/(-0x1*0x254b+-0xf*0x13c+0x37d2)*(-parseInt(_0x542a0d(0x590))/(0x13b8+0x21bf+-0x3573))+-parseInt(_0x542a0d(0x313))/(-0x1f42+-0x1c3c+0x3b83)+parseInt(_0x542a0d(0x1f9))/(0x16db+-0x8cf+-0xe06)*(-parseInt(_0x542a0d(0x288))/(0x1552+0x126e+-0x27b9))+-parseInt(_0x542a0d(0x63e))/(-0xd*0x13e+-0x788+0x4be*0x5)*(-parseInt(_0x542a0d(0x59f))/(0x5f*-0x61+0x38b*-0x1+0x133*0x21))+-parseInt(_0x542a0d(0x428))/(-0xcd8+-0x2201+0x2ee3)*(parseInt(_0x542a0d(0x25d))/(-0x5ef*-0x5+-0x2*0x715+-0x1*0xf76));if(_0x4ac7f0===_0x45a55d)break;else _0x2d0af6['push'](_0x2d0af6['shift']());}catch(_0x9ada51){_0x2d0af6['push'](_0x2d0af6['shift']());}}}(_0x46e9,0xaa52c+0x2*-0x88cfc+0x13108b));const _0x92317c='\u5feb\u624b',_0x3ba1e8=new _0xbd0ce1(_0x92317c),_0x5791a4=-0x545*-0x7+-0x2640+0x1*0x15d;let _0xf2cfe8='',_0x1b0221,_0x2fab55=['\x0a','\x40'],_0x1a1c58=(_0x3ba1e8[_0x2fc758(0x3d6)+'\x65']()?process[_0x2fc758(0x29f)]['\x6b\x73\x43\x6f\x6f'+_0x2fc758(0x3d8)]:_0x3ba1e8[_0x2fc758(0x40c)+'\x74\x61']('\x6b\x73\x43\x6f\x6f'+'\x6b\x69\x65'))||'',_0x5b586=[],_0x2eb5c1=(_0x3ba1e8[_0x2fc758(0x3d6)+'\x65']()?process[_0x2fc758(0x29f)][_0x2fc758(0x1f3)+'\x68']:_0x3ba1e8['\x67\x65\x74\x76\x61'+'\x6c'](_0x2fc758(0x1f3)+'\x68'))||'',_0xa3917b=(_0x3ba1e8[_0x2fc758(0x3d6)+'\x65']()?process[_0x2fc758(0x29f)][_0x2fc758(0x2e7)+_0x2fc758(0x28d)+_0x2fc758(0x58e)]:_0x3ba1e8['\x67\x65\x74\x76\x61'+'\x6c'](_0x2fc758(0x2e7)+'\x68\x64\x72\x61\x77'+_0x2fc758(0x58e)))||-0x1cf+-0x2b5*0x9+0x1a3a,_0xc17e17=(_0x3ba1e8[_0x2fc758(0x3d6)+'\x65']()?process['\x65\x6e\x76'][_0x2fc758(0x6a5)+_0x2fc758(0x3ae)+'\x76\x65']:_0x3ba1e8['\x67\x65\x74\x76\x61'+'\x6c'](_0x2fc758(0x6a5)+_0x2fc758(0x3ae)+'\x76\x65'))||-0x1f*0x101+0x23e+0x1ce1,_0xe984ce=(_0x3ba1e8[_0x2fc758(0x3d6)+'\x65']()?process[_0x2fc758(0x29f)][_0x2fc758(0x6cd)+_0x2fc758(0x52d)]:_0x3ba1e8['\x67\x65\x74\x76\x61'+'\x6c'](_0x2fc758(0x6cd)+'\x69\x66\x79'))||0x1e1d+0x25b4+-0x43d0,_0x5c5531=-0x1877+-0x79c+0x2013,_0x1d8cbf=0xd*-0xbc+0x4d+-0x93f*-0x1,_0x152066=0x1*-0x17ba+0x7*-0x24b+0x27d1,_0x2c2403=[];const _0x1428fe={};_0x1428fe['\x61\x64']=0x64,_0x1428fe[_0x2fc758(0x364)]=0x65,_0x1428fe['\x67\x6a']=0xcb,_0x1428fe[_0x2fc758(0x354)]=0xc;let _0x425116=_0x1428fe,_0xec9f77=_0x2fc758(0x469)+_0x2fc758(0x454)+_0x2fc758(0x3a7)+_0x2fc758(0x322)+_0x2fc758(0x1cb)+_0x2fc758(0x694)+_0x2fc758(0x3ed)+_0x2fc758(0x4be)+'\x64\x39\x34\x31\x32'+_0x2fc758(0x5ea)+_0x2fc758(0x62e)+_0x2fc758(0x5a9)+_0x2fc758(0x3d3)+_0x2fc758(0x464)+_0x2fc758(0x2c1)+_0x2fc758(0x210)+_0x2fc758(0x2ec)+_0x2fc758(0x375)+'\x31\x31\x36\x65\x38'+_0x2fc758(0x530)+'\x63\x36\x38\x31\x31'+_0x2fc758(0x289)+_0x2fc758(0x462)+_0x2fc758(0x45f)+_0x2fc758(0x281)+_0x2fc758(0x503)+_0x2fc758(0x30e)+'\x32\x35\x34\x36\x66'+_0x2fc758(0x44b)+_0x2fc758(0x49f)+_0x2fc758(0x5f3)+_0x2fc758(0x67f)+_0x2fc758(0x342)+'\x30\x61\x66\x62\x39'+_0x2fc758(0x570)+'\x34\x31\x35\x61\x35'+_0x2fc758(0x1fe)+_0x2fc758(0x244)+'\x35\x32';const _0x146faa={};_0x146faa['\x69\x64']=0x64,_0x146faa['\x70\x61\x67\x65\x49'+'\x64']=0x5f60cf3,_0x146faa[_0x2fc758(0x3a0)+'\x67\x65\x49\x64']=0x5f60cf4,_0x146faa[_0x2fc758(0x42c)]='\u5e7f\u544a\u89c6\u9891';const _0x134980={};_0x134980['\x69\x64']=0x65,_0x134980[_0x2fc758(0x542)+'\x64']=0x5f60cf3,_0x134980[_0x2fc758(0x3a0)+_0x2fc758(0x52e)]=0x5f60cf4,_0x134980[_0x2fc758(0x42c)]=_0x2fc758(0x282);const _0x8a9186={};function _0x42bc(_0x1e3d63,_0x1e2c6b){const _0x2e1b18=_0x46e9();return _0x42bc=function(_0x3c7516,_0x270cb6){_0x3c7516=_0x3c7516-(0x1*-0x158f+-0x791*-0x2+0x82e*0x1);let _0x20b523=_0x2e1b18[_0x3c7516];r
