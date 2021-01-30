import lifecycle from '/util/lifecycle';
import animModal from '/util/items';

const lastComponents = [
  {
    icon: '/image/canvas.png',
    title: '画布',
    entitle: 'Canvas',
    page: 'canvas',
  },
];

// lastComponents.push({
//   icon: '/image/api_open.png',
//   title: '开放组件',
//   entitle: 'OpenComponents',
//   subs: [
//     {
//       title: '跳转生活号',
//       entitle: 'Lifestyle',
//       page: 'lifestyle',
//     },
//     // {
//     //   title: '跳转云客服',
//     //   entitle: 'contact-button',
//     //   page: 'contact-button',
//     // },
//   ],
// });

Page({
  ...lifecycle,
  ...animModal.animOp,
  data: {
    ...animModal.data,
    pageName: 'home/home',
    pageInfo: {
      pageId: 0,
    },
    hidden: true,
    curIndex: 0,
    arr: {
      onItemTap: 'onGridItemTap',
      onChildItemTap: 'onChildItemTap',
      list: [
        {
          icon: '',
          title: '寿光站',
          entitle: 'View',
          page: 'faDetail',
        }, {
          icon: '/image/basic.png',
          title: '昌邑站',
          entitle: 'Basic Content',
          page: 'faDetail',
          subs: [
            {
              title: '文字',
              entitle: 'Text',
              page: 'text',
            },
            {
              title: '图标',
              entitle: 'Icon',
              page: 'icon',
            },
            {
              title: '进度条',
              entitle: 'Progress',
              page: 'progress',
            },
          ],
        }, {
          icon: '/image/form.png',
          title: '广饶站',
          entitle: 'Form',
          page: 'faDetail',
          subs: [
            {
              title: '按钮',
              entitle: 'Button',
              page: 'button',
            },
            {
              title: '复选框',
              entitle: 'Checkbox',
              page: 'checkbox',
            },
            {
              title: '表单',
              entitle: 'Form',
              page: 'form',
            },
            {
              title: '文本输入',
              entitle: 'Input',
              page: 'input',
            },
            {
              title: '标签',
              entitle: 'Label',
              page: 'label',
            },
            {
              title: '选择器视图',
              entitle: 'PickerView',
              page: 'picker-view',
            },
            {
              title: '选择器',
              entitle: 'Picker',
              page: 'picker',
            },
            {
              title: '单选框',
              entitle: 'Radio',
              page: 'radio',
            },
            {
              title: '滑动条',
              entitle: 'Slider',
              page: 'slider',
            },
            {
              title: '开关',
              entitle: 'Switch',
              page: 'switch',
            },
            {
              title: '多行输入',
              entitle: 'Textarea',
              page: 'textarea',
            },
          ],
        }, {
          icon: '/image/feedback.png',
          title: '齐鲁站',
          entitle: 'Feedback',
          page: 'faDetail',
          subs: [
            {
              title: '动作面板',
              entitle: 'ActionSheet',
              page: 'action-sheet',
            },
            {
              title: '对话框',
              entitle: 'Modal',
              page: 'modal',
            },
            {
              title: '轻提示',
              entitle: 'Toast',
              page: 'toast',
            },
            {
              title: '加载提示',
              entitle: 'Loading',
              page: 'loading',
            },
          ],
        }, {
          icon: '/image/navigator.png',
          title: '乔庄站',
          entitle: 'Navigator',
          page: 'faDetail',
        }, {
          icon: '/image/media.png',
          title: '淄角站',
          entitle: 'Media', page: 'faDetail',
        }, {
          icon: '/image/media.png',
          title: '滨州站',
          entitle: 'Media', page: 'faDetail',
        }, {
          icon: '/image/media.png',
          title: '商河站',
          entitle: 'Media', page: 'faDetail',
        }, {
          icon: '/image/media.png',
          title: '东营站',
          entitle: 'Media', page: 'faDetail',
        },
        // {
        //   icon: '/image/map.png',
        //   title: '地图',
        //   entitle: 'Map',
        //   page: 'map',
        // },
        //...lastComponents,
      ],
    },
  },
  /*
  onGridItemTap(e) {
    const curIndex = e.currentTarget.dataset.index;
    const childList = this.data.arr.list[curIndex];
    if (childList.subs) {
      this.setData({
        hidden: !this.data.hidden,
        curIndex,
      });
      this.createMaskShowAnim();
      this.createContentShowAnim();
    } else {
      this.onChildItemTap({
        currentTarget: {
          dataset: { page: childList.page },
        },
      });
    }
  },
  */
  onGridItemTap(e) {
    const curIndex = e.currentTarget.dataset.index;
    const childList = this.data.arr.list[curIndex];
    console.log(childList);
    const { page } = childList.page;
    //console.log(e.currentTarget);
    console.log(`${ page }`);
    console.log(`${page}/${page}`);
    dd.navigateTo({
      url: `/page/fsgk/fsDetail/fsDetail?dept_id=1&valve_room_id=1`,
    });
  },
  onChildItemTap(e) {
    const { page } = e.currentTarget.dataset;
    dd.navigateTo({
      url: `${page}/${page}`,
    });
  },
  onModalCloseTap() {
    this.createMaskHideAnim();
    this.createContentHideAnim();
    setTimeout(() => {
      this.setData({
        hidden: true,
      });
    }, 210);
  },
});
