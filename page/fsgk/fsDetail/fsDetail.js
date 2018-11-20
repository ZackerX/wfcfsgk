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
  showActionSheet() {
    dd.showActionSheet({
      title: '历史记录选择',
      items: ['2018/11/16 06:00:00', '2018/11/16 04:00:00', '2018/11/16 02:00:00'],
      cancelButtonText: '取消',
      success: (res) => {
        const btn = res.index === -1 ? '取消' : '第' + res.index + '个';
        dd.alert({
          title: `你点了${btn}按钮`
        });
      },
    });
  },
});