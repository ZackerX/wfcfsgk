Page({
  data: {
    objectArray: [
      {
        id: 0,
        name: '1号阀室',
      },
      {
        id: 1,
        name: '2号阀室',
      },
      {
        id: 2,
        name: '3号阀室',
      },
    ],
    arrIndex: 0,
    index: 0
  },
  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },
  showMonitorVideo() {
    dd.chooseVideo({
      sourceType: ['camera'],
      maxDuration: 60,
      success:(res)=> {
        console.log(res.apFilePath)
      },
      fail: (err)=> {
        console.log(err)
      }
    })
    
  },
  showHistroyDetail() {
    dd.showActionSheet({
      title: '历史记录选择',
      items: ['2018/11/16 06:00:00', '2018/11/16 04:00:00', '2018/11/16 02:00:00'],
      cancelButtonText: '取消',
      //success: (res) => {
      //  const btn = res.index === -1 ? '取消' : '第' + res.index + '个';
      //  dd.alert({
      //    title: `你点了${btn}按钮`
      //  });
      //},
    });
    
  },
  showEmergencyCall(){
    dd.showCallMenu({
      phoneNumber: '15968498652', // 期望拨打的电话号码
      code: '+86', // 国家代号，中国是+86
      showDingCall: true, // 是否显示钉钉电话
      success:function(res){   
        console.log('成功');
      },
      fail:function(err){
        console.log('失败'+err);
      }
    });
  },
  doWatchClock(e) {
    dd.vibrate({
      success: (res) => {
        console.log(e.data);
        dd.alert({ title: '打卡时间 2018/11/16 09:00:00'});
      }
    });
  },
});