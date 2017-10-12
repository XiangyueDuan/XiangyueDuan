function TsitesClickUtil() {
	var _this = this;
	/**
	 * 更新一个内容的点击次数
	 * 
	 * @param {}
	 *            teacherid
	 * @param {}
	 *            apptype
	 * @param {}
	 *            lang
	 * @param {}
	 *            contentid
	 */
	_this.updateClick = function(teacherid, apptype, lang, contentid) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.updateClick(teacherid, apptype, lang, contentid);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"teacherid" : teacherid,
									"apptype" : apptype,
									"lang" : lang,
									"contentid" : contentid,
									"ac" : "updateclicks"
								}, function() {
								}, "json");
					});
		}
	}
/**
 * 先更新然后获取点击次数
 * @param {} domnode
 * @param {} teacherid
 * @param {} apptype
 * @param {} lang
 * @param {} contentid
 */	
 _this.updateAndGetClick = function(domnode, teacherid, apptype, lang, contentid) {
        if (!window.jQuery) {
            _this._checkjquery();
            setTimeout(function() {
                        _this.updateClick(teacherid, apptype, lang, contentid);
                    }, 1000);
        } else {
            jQuery(document).ready(function() {
                        jQuery.post("/system/resource/tsites/click.jsp", {
                                    "teacherid" : teacherid,
                                    "apptype" : apptype,
                                    "lang" : lang,
                                    "contentid" : contentid,
                                    "ac" : "updateAndGetClick"
                                },function(data) {
                                    if (domnode && data) {
                                    	var dn  = jQuery(domnode);
                                    	if(dn)
                                    	{
                                            dn.html(data.click);
                                    	}
                                    }
                                }, "json");
                    });
        }
    }
    
	/**
	 * 查询一个内容点击次数
	 * 
	 * @param {}
	 *            domnode
	 * @param {}
	 *            teacherid
	 * @param {}
	 *            apptype
	 * @param {}
	 *            contentid
	 */
	_this.getClick = function(domnode, teacherid, apptype, contentid) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getClick(domnode, teacherid, apptype, contentid);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"teacherid" : teacherid,
									"apptype" : apptype,
									"contentid" : contentid,
									"ac" : "getClick"
								}, function(data) {
									if (domnode && data) {
										jQuery(domnode).html(data.click);
									}
								}, "json");
					});
		}
	}
	/**
	 * 批量获取内容点击次数,使用在列表组件上
	 * 
	 * @param {}
	 *            domcss
	 * @param {}
	 *            teacherid
	 * @param {}
	 *            apptype
	 * @param {}
	 *            ids
	 */
	_this.getClicks = function(viewid, teacherid, apptype, ids) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getClicks(viewid, teacherid, apptype, ids);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
				jQuery.post("/system/resource/tsites/click.jsp", {
							"teacherid" : teacherid,
							"apptype" : apptype,
							"ids" : ids,
							"ac" : "getClicks"
						}, function(data) {
							if (data) {
								for (var i = 0; i < data.length; i++) {
									var id = data[i].id;
									var click = data[i].click;
									jQuery("#" + apptype + "_" + viewid + "_"
											+ id).html(click);
								}
							}
						}, "json");
			});
		}
	}
	/**
	 * 获取整个主页门户的点击次数
	 * 
	 * @param {}
	 *            nodeobj
	 * @param {}
	 *            basenum 初始值
	 * @param {}
	 *            len 显示长度
	 */
	_this.getSiteClicks = function(nodeobj, basenum, len) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getSiteClicks(nodeobj, basenum, len);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"basenum" : basenum,
									"len" : len,
									"ac" : "getSiteClicks"
								}, function(data) {
									jQuery(nodeobj).html(data.click);
								}, "json");
					});
		}
	}
		/**
	 * 获取整个主页门户的点击次数
	 * 
	 * @param {}
	 *            nodeobj
	 * @param {}
	 *            basenum 初始值
	 * @param {}
	 *            len 显示长度
	 */
	_this.getSiteClicksByType = function(nodeobj, basenum, len,type,average_click_form_days) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getSiteClicksByType(nodeobj, basenum, len,type,average_click_form_days);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"basenum" : basenum,
									"len" : len,
									"type":type,
									"average_click_form_days":average_click_form_days,
									"ac" : "getSiteClicksByType"
								}, function(data) {
									jQuery(nodeobj).html(data.click);
								}, "json");
					});
		}
	}
	/**
	 * 获取一个教师主页访问次数
	 * 
	 * @param {}
	 *            nodeobj
	 * @param {}
	 *            basenum
	 * @param {}
	 *            len
	 * @param {}
	 *            teacherid
	 * @param {}
	 *            homepageid
	 */
	_this.getHomepageClick = function(nodeobj, basenum, len, teacherid,homepageid) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getHomepageClick(nodeobj, basenum, len, teacherid,homepageid);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"basenum" : basenum,
									"len" : len,
									"teacherid" : teacherid,
									"homepageid" : homepageid,
									"ac" : "getHomepageClick"
								}, function(data) {
									jQuery(nodeobj).html(data.click);
								}, "json");
					});
		}
	}

	/**
	 * 获取一个教师主页访问次数
	 * 
	 * @param {}
	 *            nodeobj
	 * @param {}
	 *            basenum
	 * @param {}
	 *            len
	 * @param {}
	 *            teacherid
	 * @param {}
	 *            homepageid
	 */
	_this.getHomepageClickByType = function(nodeobj, basenum, len,type, teacherid,homepageid) {
		if (!window.jQuery) {
			_this._checkjquery();
			setTimeout(function() {
						_this.getHomepageClickByType(nodeobj, basenum, len,type, teacherid,homepageid);
					}, 1000);
		} else {
			jQuery(document).ready(function() {
						jQuery.post("/system/resource/tsites/click.jsp", {
									"basenum" : basenum,
									"len" : len,
									"type":type,
									"teacherid" : teacherid,
									"homepageid" : homepageid,
									"ac" : "getHomepageClickByType"
								}, function(data) {
									jQuery(nodeobj).html(data.click);
								}, "json");
					});
		}
	}
	
	/** 判断jquery是否引入* */
	_this._checkjquery = function() {
		if (!window.jQuery) {
			_this._loadJquery();
		}
	}
	/** 加载jquey* */
	_this._loadJquery = function() {
		if(_tsites_com_view_mode_type_&&(_tsites_com_view_mode_type_==8||_tsites_com_view_mode_type_==10))
		{
    		var head = document.getElementsByTagName('head');
    		var jqueryScript = document.createElement('script');
    		jqueryScript.src = "/system/resource/js/jquery/jquery-latest.min.js";
    		jqueryScript.type = 'text/javascript';
    		head[0].appendChild(jqueryScript);
		}
	}

}