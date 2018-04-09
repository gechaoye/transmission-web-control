﻿//語言檔
system.lang = {
	"name": "zh-TW",
	"system": {
		"title": "Transmission WEB 控制台",
		"status": {
			"connect": "正在連接伺服器…",
			"connected": "已連接至伺服器",
			"queue": "佇列：",
			"queuefinish": "本次佇列完成。",
			"notfinal": "未完成……",
			"checked": "已選中 %n 條數據："
		}
	},
	"error": {
		"data-error": "資料錯誤",
		"data-post-error": "資料提交錯誤",
		"rename-error": "修改名稱失敗！"
	},
	"config": {
		"save-path": "儲存資料夾"
	},
	"toolbar": {
		"start": "開始",
		"pause": "暫停",
		"recheck": "稽核",
		"start-all": "全部開始",
		"pause-all": "全部暫停",
		"remove": "刪除",
		"remove-all": "刪除所有",
		"remove-data": "刪除任務和資料",
		"add-torrent": "新增種子",
		"attribute": "屬性",
		"alt-speed": "限速",
		"system-config": "參數",
		"system-reload": "重新整理",
		"about": "關於",
		"reload-time": "自動重整：",
		"reload-time-unit": "秒/次",
		"autoreload-disabled": "已停用",
		"autoreload-enabled": "已啟用",
		"search-prompt": "搜尋本機種子",
		"tracker-replace": "更換 Tracker",
		"queue": "佇列",
		"ui-mobile": "行動UI",
		"ui-original": "原版UI",
		"ui-computer": "桌面UI",
		"plugin": "擴充功能/外掛",
		"rename": "改名",
		"copy-path-to-clipboard": "複製保存目錄到剪切板",
		"tip": {
			"start": "重新開始已經選取的種子",
			"pause": "暫停已經選取的種子",
			"recheck": "重新稽核已經選取的種子",
			"recheck-confirm": "確定要重新稽核選取的種子嗎？這可能需要些時間！",
			"start-all": "全部開始",
			"pause-all": "全部暫停",
			"remove": "刪除已經選取的任務",
			"delete-all": "刪除所有任務（不刪除檔案）",
			"delete-data": "刪除選取的種子任務和檔案",
			"add-torrent": "新增種子",
			"attribute": "屬性",
			"alt-speed": "以系統設定的速度限制上傳和下載",
			"system-config": "配置系統參數",
			"system-reload": "更新目前資料",
			"about": "關於本程式",
			"autoreload-disabled": "停用自動重整",
			"autoreload-enabled": "啟用自動重整",
			"tracker-replace": "取代 Tracker",
			"change-download-dir": "變更下載資料夾",
			"ui-mobile": "切換到行動裝置界面",
			"ui-original": "切換到原版界面",
			"more-peers": "取得更多Peer",
			"rename": "修改種子文件或目錄名稱",
			"copy-path-to-clipboard": "複製保存目錄到剪切板",
		}
	},
	"menus": {
		"queue": {
			"move-top": "置頂",
			"move-up": "上移",
			"move-down": "下移",
			"move-bottom": "置底"
		},
		"plugin": {
			"auto-match-data-folder": "自動配對資料夾"
		}
	},
	"title": {
		"left": "分類資料夾",
		"list": "種子清單",
		"attribute": "目前種子屬性",
		"status": "狀態"
	},
	"tree": {
		"all": "全部",
		"active": "正在使用",
		"paused": "暫停",
		"downloading": "正在下載",
		"sending": "正在做種",
		"error": "錯誤",
		"warning": "警告",
		"actively": "正在使用",
		"check": "正在稽核",
		"wait": "等待",
		"search-result": "搜尋結果",
		"status": {
			"loading": "載入中…"
		},
		"statistics": {
			"title": "資料統計",
			"cumulative": "累計",
			"current": "目前工作階段",
			"uploadedBytes": "已上傳：",
			"downloadedBytes": "已下載：",
			"filesAdded": "已增加檔案：",
			"sessionCount": "工作階段次數：",
			"secondsActive": "使用時間："
		},
		"servers": "伺服器分佈",
		"folders": "資料夾",
		"toolbar": {
			"nav": {
				"folders": "資料夾"
			}
		}
	},
	"statusbar": {
		"downloadspeed": "下載速度：",
		"uploadspeed": "上傳速度：",
		"version": "版本："
	},
	"dialog": {
		"torrent-add": {
			"download-dir": "下載資料夾：",
			"torrent-url": "種子地址：",
			"tip-torrent-url": "註：貼上種子連結到清單中，多個種子用「換行」分隔。",
			"autostart": "自動開始：",
			"tip-autostart": "若選取，新增種子將自動開始下載（如不選取，則為暫停狀態）",
			"set-default-download-dir": "設為預設儲存資料夾",
			"upload-file": "種子檔案：",
			"nosource": "沒有選擇種子或沒有輸入URL位址",
			"tip-title": "上傳檔案優先於URL"
		},
		"system-config": {
			"title": "伺服器參數設定",
			"tabs": {
				"base": "基本設定",
				"network": "網路傳輸",
				"limit": "頻寬限制",
				"alt-speed": "時段限制",
				"dictionary-folders": "資料夾字典",
				"more": "額外設置"
			},
			"config-dir": "Transmission 組態檔資料夾（唯讀）：",
			"download-dir": "預設儲存資料夾：",
			"download-dir-free-space": "可用空間：",
			"incomplete-dir-enabled": "啟用臨時資料夾",
			"cache-size-mb": "磁碟快取大小：",
			"rename-partial-files": "在未完成的檔案名後加上「.part」尾碼",
			"start-added-torrents": "自動開始新加的種子",
			"download-queue-enabled": "啟用下載佇列，最大同時下載數：",
			"seed-queue-enabled": "啟用上傳佇列，最大同時上傳數：",
			"peer-port-random-on-start": "啟用隨機埠，或使用固定埠：",
			"port-forwarding-enabled": "啟用埠轉送",
			"test-port": "測試埠",
			"port-is-open-true": "埠可連接",
			"port-is-open-false": "埠不可連接",
			"testing": "測試中...",
			"encryption": "資料傳輸加密方式：",
			"encryption-type": {
				"required": "必須(required)",
				"preferred": "優先(preferred)",
				"tolerated": "允許(tolerated)"
			},
			"utp-enabled": "啟用 µTP (UPnP)",
			"dht-enabled": "啟用分散式雜湊表(DHT)",
			"lpd-enabled": "啟用本機點探索(LPD)",
			"pex-enabled": "啟用用戶交換",
			"peer-limit-global": "全域連結數限制為：",
			"peer-limit-per-torrent": "每個種子最大連結數：",
			"speed-limit-down-enabled": "啟用最大下載速度限制：",
			"speed-limit-up-enabled": "啟用最大上傳速度限制：",
			"alt-speed-enabled": "啟用備用頻寬",
			"alt-speed-down": "最大下載速度限制為：",
			"alt-speed-up": "最大上傳速度限制為：",
			"alt-speed-time-enabled": "啟用時段限制",
			"alt-speed-time": "時間：",
			"weekday": {
				"1": "星期一",
				"2": "星期二",
				"3": "星期三",
				"4": "星期四",
				"5": "星期五",
				"6": "星期六",
				"0": "星期天"
			},
			"blocklist-enabled": "啟用黑名單：",
			"blocklist-size": "可用規則數量：%n",
			"seedRatioLimited": "當種子的分享率達到這個數時，自動停止做種：",
			"queue-stalled-enabled": "當未完成的種子超過這個時間沒有收到資料時，自動停止下載：",
			"idle-seeding-limit-enabled": "當種子超過這個時間沒有流量時，自動停止做種：",
			"minutes": "分鐘",
			"nochange": "參數未改變",
			"saving": "儲存中...",
			"show-bt-servers": "在『伺服器分佈』中顯示『BT』伺服器列表。",
			"restore-default-settings": "恢復界面默認設置（含主題）",
			"language": "界面語言："
		},
		"public": {
			"button-ok": "確定",
			"button-cancel": "取消",
			"button-reload": "重整",
			"button-save": "儲存",
			"button-close": "關閉",
			"button-update": "更新",
			"button-config": "設定"
		},
		"about": {
			"infos": "程式設計、製作：栽培者<br/>聲明：本程式使用的大部分圖示來自網路，如有侵犯您的權益，請與本人聯繫刪除。<br/>如您有什麼意見建議，也歡迎與我聯繫。",
			"check-update": "檢查更新",
			"home": "項目主頁",
			"help": "使用幫助",
			"donate": "捐贈",
			"pt-plugin": "PT助手"
		},
		"torrent-remove": {
			"title": "刪除種子確認",
			"confirm-text": "確認要刪除已選擇的種子嗎？",
			"remove-data": "同時刪除資料",
			"remove-error": "種子刪除失敗！"
		},
		"torrent-changeDownloadDir": {
			"title": "設定新資料夾",
			"old-download-dir": "原資料夾：",
			"new-download-dir": "新資料夾：",
			"move-data": "同時移動資料（如不勾選，則從新資料夾下搜尋資料）",
			"set-error": "設定資料夾失敗！",
			"recheck-data": "設定完成後重新稽核。"
		},
		"system-replaceTracker": {
			"title": "取代 Tracker 地址",
			"old-tracker": "原 Tracker：",
			"new-tracker": "新 Tracker：",
			"tip": "此功能將搜尋<b>所有種子</b>的 Tracker，如果找到相等的，則取代。",
			"not-found": "未找到符合條件的 Tracker。"
		},
		"auto-match-data-folder": {
			"title": "自動配對目錄",
			"torrent-count": "將被操作的種子數量：",
			"folder-count": "目錄字典數量：",
			"dictionary": "目錄字典",
			"time-begin": "開始始時間：",
			"time-now": "目前時間：",
			"status": "狀態：",
			"ignore": "忽略",
			"working-close-confirm": "系統正在進行目錄配對，確定要終止並關閉嗎？",
			"time-interval": "時間間隔（秒）：",
			"work-mode-title": "處理方式：",
			"work-mode": {
				"1": "按種子逐個配對目錄",
				"2": "按目錄逐個配對種子"
			}
		},
		"torrent-rename": {
			"title": "修改種子檔或目錄名稱",
			"oldname": "原名稱",
			"newname": "新名稱"
		},
		"torrent-attribute-add-tracker": {
			"title": "增加 Tracker",
			"tip": "每行表示一個 Tracker"
		}
	},
	"torrent": {
		"fields": {
			"id": "#",
			"name": "名稱",
			"hashString": "雜湊",
			"downloadDir": "下載資料夾",
			"totalSize": "大小總計",
			"status": "狀態",
			"percentDone": "進度",
			"remainingTime": "剩餘時間",
			"addedDate": "加入時間",
			"completeSize": "完整大小",
			"rateDownload": "下載速度",
			"rateUpload": "上傳速度",
			"leecherCount": "下載|活躍",
			"seederCount": "種子|活躍",
			"uploadedEver": "已上傳",
			"uploadRatio": "分享率",
			"queuePosition": "佇列",
			"activityDate": "最後活動於"
		},
		"status-text": {
			"0": "已暫停",
			"1": "正在等待稽核",
			"2": "正在稽核",
			"3": "正在等待下載",
			"4": "下載中",
			"5": "等待做種",
			"6": "做種中"
		},
		"attribute": {
			"tabs": {
				"base": "基本",
				"servers": "伺服器",
				"files": "檔案",
				"users": "帳號",
				"config": "設定"
			},
			"files-fields": {
				"name": "名稱",
				"length": "大小",
				"percentDone": "進度",
				"bytesCompleted": "已下載",
				"wanted": "需要下載",
				"priority": "優先順序別"
			},
			"servers-fields": {
				"announce": "伺服器",
				"announceState": "狀態",
				"lastAnnounceResult": "訊息",
				"lastAnnounceSucceeded": "已連接",
				"lastAnnounceTime": "更新時間",
				"lastAnnounceTimedOut": "超時",
				"downloadCount": "總下載數",
				"nextAnnounceTime": "下次更新時間"
			},
			"peers-fields": {
				"address": "IP地址",
				"clientName": "用戶端",
				"flagStr": "標記",
				"progress": "完成進度",
				"rateToClient": "下載速度",
				"rateToPeer": "上傳速度"
			},
			"status": {
				"true": "是",
				"false": "否"
			},
			"priority": {
				"0": "正常",
				"1": "高",
				"-1": "低"
			},
			"label": {
				"name": "名稱：",
				"addedDate": "添加時間：",
				"totalSize": "大小：",
				"completeSize": "已完成大小：",
				"leftUntilDone": "剩餘：",
				"hashString": "雜湊：",
				"downloadDir": "下載資料夾：",
				"status": "狀態：",
				"rateDownload": "下載速度：",
				"rateUpload": "上傳速度：",
				"leecherCount": "下載(活躍)：",
				"seederCount": "種子(活躍)：",
				"uploadedEver": "已上傳：",
				"uploadRatio": "分享率：",
				"creator": "建立者：",
				"dateCreated": "建立時間：",
				"comment": "描述：",
				"errorString": "錯誤資訊：",
				"downloadLimited": "啟用最大下載速度限制：",
				"uploadLimited": "啟用最大上傳速度限制：",
				"peer-limit": "最大連結數：",
				"seedRatioMode": "當種子的分享率達到這個數時，自動停止做種：",
				"seedIdleMode": "當種子超過這個時間沒有流量時，自動停止做種：",
				"doneDate": "完成時間：",
				"seedTime": "做種時間："
			},
			"tip": {
				"button-allow": "下載已選擇的檔",
				"button-deny": "忽略已選擇的檔",
				"button-priority": "設置優先順序別",
				"button-tracker-add": "增加新的 Tracker",
				"button-tracker-edit": "修改已選中的 Tracker 地址",
				"button-tracker-remove": "刪除已選中的 Tracker 地址"
			},
			"other": {
				"tracker-remove-confim": "確認要刪除這個 Tracker 嗎？"
			}
		}
	},
	"torrent-head": {
		"buttons": {
			"autoExpandAttribute": "自動顯示種子屬性"
		}
	},
	"public": {
		"text-unknown": "未知",
		"text-drop-title": "將檔拖放在該區域內即可加到 Transmission。",
		"text-nochange": "參數未改變",
		"text-saved": "已儲存",
		"text-info": "資息",
		"text-confirm": "確認要這樣做嗎？",
		"text-browsers-not-support-features": "目前瀏覽器不支援該功能！",
		"text-download-update": "下載這個更新",
		"text-have-update": "有可用的更新"
	}
};