var A_POST_MSG_IFRAME_ID="a-post-msg-iframe";var A_POST_MSG_BIND_NAME="a-auth-msg";jQuery(function(){});function a_initAuth(){a_processAuth()}function a_processAuth(){a_validateUserSession()}function a_authenticateUser(c,b){var a=a_buildMashupUrl(A_AUTH_URL);if(c!=null&&c!=""&&b!=null&&b!=""){c=c.replace(/</g,"&lt;").replace(/>/g,"&gt;");b=b.replace(/<\/(.|\n)*?>/,"").replace(/<(.|\n)*?>/,"");if(jQuery("#"+A_POST_MSG_IFRAME_ID).length==0){jQuery("<iframe style='display:none'/>").attr({id:A_POST_MSG_IFRAME_ID,name:A_POST_MSG_IFRAME_ID,src:a}).on("load",function(){a_processAuthenticateUser(c,b)}).prependTo(jQuery("body"))}else{a_processAuthenticateUser(c,b)}}else{}}function a_processAuthenticateUser(f,e){var d=a_buildMashupUrl(A_AUTH_URL);var a=window.location+"";var c="";if(typeof IEEE_MASHUP_ENGINE_SERVER_URL!="undefined"&&IEEE_MASHUP_ENGINE_SERVER_URL!=""){c=IEEE_MASHUP_ENGINE_SERVER_URL}else{c=IEEE_MASHUP_ENGINE_SERVER_URL_DEF}var b={username:f,password:e,parentUrl:a,serverUrl:c};pm({target:window.frames[""+A_POST_MSG_IFRAME_ID+""],type:A_POST_MSG_BIND_NAME,data:b,url:d})}function a_validateUserSession(){var a=a_buildMashupUrl(A_AUTH_VALIDATOR_URL);jQuery.ajax({url:a,type:"GET",data:({action:"validateUserSession"}),dataType:"jsonp",success:function(b){if(b!=null&&b.authStatus=="success"){if(typeof mn_refreshMetaNav=="function"){mn_refreshMetaNav()}}if(typeof mn_updateCartItemQtyIfNull=="function"){mn_updateCartItemQtyIfNull()}},error:function(b){if(typeof mn_updateCartItemQtyIfNull=="function"){mn_updateCartItemQtyIfNull()}}})}function a_validatePingAccess(){var a=a_buildMashupUrl(A_AUTH_VALIDATOR_URL);jQuery.ajax({url:a,type:"GET",data:({action:"validatePingAccess"}),dataType:"jsonp",success:function(b){if(b!=null&&b.authStatus=="success"){if(typeof mn_refreshMetaNav=="function"){mn_refreshMetaNav()}}else{var c=jQuery.cookie(MN_COOKIE_OPENTOKEN);if(typeof c!="undefined"&&c!=null){a_validateOpenToken(c)}}if(typeof mn_updateCartItemQtyIfNull=="function"){mn_updateCartItemQtyIfNull()}},error:function(b){if(typeof mn_updateCartItemQtyIfNull=="function"){mn_updateCartItemQtyIfNull()}}})}function a_validateOpenToken(){var a=a_buildMashupUrl(A_AUTH_VALIDATOR_URL);jQuery.ajax({url:a,type:"GET",data:({action:"validateOpenToken"}),dataType:"jsonp",success:function(b){if(b!=null&&b.authStatus=="success"){if(typeof mn_refreshMetaNav=="function"){mn_refreshMetaNav()}}if(typeof mn_updateCartItemQtyIfNull=="function"){mn_updateCartItemQtyIfNull()}},error:function(b){if(typeof mn_updateCartItemQtyIfNull=="function"){mn_updateCartItemQtyIfNull()}}})}function a_buildMashupUrl(b){var a="";if(typeof IEEE_MASHUP_ENGINE_SERVER_URL!="undefined"){a=IEEE_MASHUP_ENGINE_SERVER_URL+b}else{a=IEEE_MASHUP_ENGINE_SERVER_URL_DEF+b}return a};