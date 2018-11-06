/*
 * 过滤器
 */

import { formatDate, parseDate } from './date';
import language from './language';

const typeNames = {
  text: {
    '1': '是',
    '0': '否'
  }
  /* 特殊描述文本（与公共部分冲突的可以作为特殊处理） */
};

const filters = [
  { // 时间格式化
    name: 'formatDate',
    /**
     * @param {any} value 需要处理的时间数据
     * @param {any} format 字符模版 yyyy-MM-dd HH:mm:ss.SSS
     * @returns
     */
    call (value, format) {
      return typeof date === 'string' ? parseDate(value, format) : formatDate(value, format);
    }
  },
  { // 系统语言
    name: 'sysLan',
    /**
     * @param value 字典
     * @param type 语言版本（默认简体中文）
     * @returns {*}
     */
    call (value, type = 'zh_ch') {
      return language[type][value] || value;
    }
  },
  { // 保留几位小数
    name: 'toFixed',
    call (value, len = 2) {
      return isNaN(value) ? 0 : Number(Number(value).toFixed(len));
    }
  },
  {
    // 传入字符串分割为数组
    name: 'getStr',
    call (value, fileterName) {
      let list = [];
      if (!value) {
        return '-';
      } else {
        value.split(',').map(item => list.push(typeNames[fileterName][item.toLocaleUpperCase()]));
      }
      return list.join('、');
    }
  },
  {
    name: 'getArrText', // 获取数组中的指定属性的值
    call (arr, key) {
      let list = [];
      if (arr && arr instanceof Array) {
        arr.map(item => list.push(item[key]));
      }
      return list.join('、') || '-';
    }
  },
  {
    name: 'num2Str', // 数字转文字
    call (index) {
      index += 1;
      let text = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
      let str = [];
      let bit = index % 10; // 个位
      let ten = (index - bit) / 10; // 十位
      ten > 1 && (str[0] = text[ten - 1]);
      index > 9 && (str[1] = text[9]);
      str[2] = (text[bit - 1]) || '';
      return str.join('');
    }
  },
  { // 移除html标签
    name: 'delHtmlTag',
    call (html, keepStyleText = false) {
      let resultStr = '';
      if (html) {
        if (keepStyleText) {
          resultStr = html.replace(/<img[^>]+>/g, '[图片]');
          resultStr = resultStr.replace(/<video[^>]*>/g, '[视频]');
          resultStr = resultStr.replace(/<audio[^>]+>/g, '[音频]');
        }
        resultStr = (resultStr || html).replace(/<[^>]+>/g, '');
        // 转换
        resultStr = resultStr.replace(/&nbsp;/g, ' ');
        // 多个空格转为一个空格
        resultStr = resultStr.replace(/\t+/g, ' ');
        // 去掉回车换行
        resultStr = resultStr.replace(/[\r\n]/g, '');
      }
      return resultStr;
    }
  },
  {
    // 字符串截取
    name: 'sliceText',
    call (val, len = 10, str = '') {
      let temp = val ? val.slice(0, len) : val;
      return val.length > len ? temp + str : val;
    }
  }
];

export default {
  install (Vue) {
    // 全局注册自定义过滤器
    filters.map(item => Vue.filter(item.name, item.call)); // 在应用中直接通过name使用
    Object.keys(typeNames).map(item => Vue.filter(item, function (value) { // 在应用中直接通过typeNames中的对象名使用
      if (typeof value === 'number' || typeof value === 'string') {
        // 如果描述文本中没有匹配的则返回原字符
        return typeNames[item][value.toString().toUpperCase()] || value;
      }
      return value;
    }));
  }
};
