// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
mode.OnInstalled(function () {
  //添加popup
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostEquals: 'hinative.com' },
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
})
// execute_script("window.need_featured_answer=true")

mode.OnPageUpdated(function (tabId, changeInfo, tab) {
  execute_script("window.data_loaded=false")
  //在这里初始化变量
  let obj={
    "show_log": true,
    "extension_enabled": true,
    "auto_block": false,
    "need_featured_answer": true,
    "cache_new_users": false,
    "block_rate_below": 0.3,
    "validity_duration": 7,
    "blocked_users": [],
    "result_buffer": {},
    "white_list": [],
    "self_name":(()=>{})(),
    "self_url":(()=>{})(),
    "questions_info":{},
    "request_interval":200,
    "fap_count":2,
    "old_question_age":7,
    "rearrange":true,
    "questions_info":{},
    "languages":{},
    "selected_languages":[],
  }
  //数据加载完后添加全局变量data_loaded
  preload(obj).then(function(){
    // alert("preloaded")
    execute_script("window.data_loaded=true")
  })

  $.ajaxSetup({
    crossDomain: true,
    xhrFields: {
        withCredentials: true
    }
});
})
