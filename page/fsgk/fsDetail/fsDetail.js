//let url = "https://oapi.dingtalk.com/topapi/ding/task/create?access_token=ACCESS_TOKEN";
let url = "http://wfcfsgk.vaiwan.com/dingding-app/monitor/detailView/info/";
Page({
  data: {
    monitor_datetime:0,
    temperature:0,
    humidity:0,
    LEL_monitor_data:0,
    H2S_monitor_data:0,
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
  onLoad(query){

        let _this = this;
        
        dd.httpRequest({
            url: url,
            method: 'POST',
            data: {
                dept_id: query.dept_id,
                valve_room_id: query.valve_room_id,
            },
            dataType: 'json',
            success: (res) => {
                //dd.alert({content: "step2"});
                console.log('success----',res)
                this.setData({
                    monitor_datetime:res.data.result.monitor_datetime,
                    temperature:res.data.result.temperature,
                    humidity:res.data.result.humidity,
                    LEL_monitor_data:res.data.result.LEL_monitor_data,
                    H2S_monitor_data:res.data.result.H2S_monitor_data,
                })
            },
            fail: (res) => {
                console.log("httpRequestFail---",res)
                dd.alert({content: JSON.stringify(res)});
            },
            complete: (res) => {
                dd.hideLoading();
            }
            
        });

    },
  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },
  showMonitorVideo() {
    dd.navigateTo({
      url: `/page/fsgk/monitorVideo/monitorVideo`,
    });
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
    dd.httpRequest({
            //url: "http://wfcfsgk.vaiwan.com/dingding-app/monitor/detailView/info/",
            url: "http://wfcfsgk.vaiwan.com/dingding-app/monitor/alarm",
            method: 'POST',
            dataType: 'json',
            success: (res) => {
                //dd.alert({content: "step2"});
                console.log('success----',res)
                dd.vibrate({
                      success: (res) => {
                        console.log(e.data);
                        dd.alert({ title: '打卡成功 2018/11/16 09:00:00'});
                      }
                    });
            },
            fail: (res) => {
                console.log("httpRequestFail---",res)
                dd.alert({content: JSON.stringify(res)});
            },
            complete: (res) => {
                dd.hideLoading();
            }
            
        });
    
  },
});