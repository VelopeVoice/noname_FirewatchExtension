game.import("extension",function(lib,game,ui,get,ai,_status){return {name:"守林人",content:function(){
	//新增势力函数
		game.Firewatch_addGroup = function(name, mapping, gradient) {
			var n, t;
			if (!name) return;
			if (typeof name == "string") {
				n = name;
				t = name
			} else if (Array.isArray(name) && name.length == 2 && typeof name[0] == "string") {
				n = name[0];
				t = name[1]
			} else return;
			if (!mapping || !Array.isArray(mapping) || mapping.length != 3) mapping = [199, 21, 133];
			var y = "(" + mapping[0] + "," + mapping[1] + "," + mapping[2];
			var y1 = y + ",1)", y2 = y + ")";
			var s = document.createElement('style');
			s.innerHTML = ".player .identity[data-color='diy" + n + "'],";
			s.innerHTML += "div[data-nature='diy" + n + "'],";
			s.innerHTML += "span[data-nature='diy" + n + "'] {text-shadow: black 0 0 1px,rgba" + y1 + " 0 0 2px,rgba" + y1 + " 0 0 5px,rgba" + y1 + " 0 0 10px,rgba" + y1 + " 0 0 10px}";
			s.innerHTML += "div[data-nature='diy" + n + "m'],";
			s.innerHTML += "span[data-nature='diy" + n + "m'] {text-shadow: black 0 0 1px,rgba" + y1 + " 0 0 2px,rgba" + y1 + " 0 0 5px,rgba" + y1 + " 0 0 5px,rgba" + y1 + " 0 0 5px,black 0 0 1px;}";
			s.innerHTML += "div[data-nature='diy" + n + "mm'],";
			s.innerHTML += "span[data-nature='diy" + n + "mm'] {text-shadow: black 0 0 1px,rgba" + y1 + " 0 0 2px,rgba" + y1 + " 0 0 2px,rgba" + y1 + " 0 0 2px,rgba" + y1 + " 0 0 2px,black 0 0 1px;}";
			document.head.appendChild(s);
			if (gradient && Array.isArray(gradient) && Array.isArray(gradient[0]) && gradient[0].length == 3) {
				var str = "", st2 = [];
				for (var i = 0; i < gradient.length; i++) {
					str += ",rgb(" + gradient[i][0] + "," + gradient[i][1] + "," + gradient[i][2] + ")";
					if (i < 2) st2[i] = "rgb(" + gradient[i][0] + "," + gradient[i][1] + "," + gradient[i][2] + ")";
				}
				var tenUi = document.createElement('style');
				tenUi.innerHTML = ".player>.camp-wrap[data-camp='" + n + "']>.camp-back {background: linear-gradient(to bottom" + str + ");}";
				tenUi.innerHTML += ".player>.camp-wrap[data-camp='" + n + "']>.camp-name {text-shadow: 0 0 5px " + st2[0] + ", 0 0 10px " + st2[1] + ";}";
				document.head.appendChild(tenUi);
			}
			lib.group.add(n);
			lib.translate[n] = t;
			lib.translate[n + '2'] = t;
			lib.groupnature[n] = "diy" + n;
		};
		
		game.Firewatch_addGroup(["kazimierz", "卡"], [30, 220, 120], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["ursus", "乌"], [255, 30, 30], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["sami", "萨"], [144, 144, 255], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["iberia", "伊"], [255, 200, 200], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["columbia", "哥"], [200, 255, 144], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["sargon", "贡"], [250, 220, 30], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["minos", "米"], [90, 30, 144], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["victoria", "维"], [255, 200, 30], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["laterano", "拉"], [144, 144, 144], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["siracusa", "叙"], [144, 90, 30], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["yan", "炎"], [255, 90, 90], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["leithanien", "莱"], [144, 90, 30], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["higashi", "东"], [255, 144, 144], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["kazdel", "戴"], [30, 30, 30], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
		game.Firewatch_addGroup(["rhodes", "罗"], [30, 144, 255], [[110, 110, 110], [20, 20, 20]]);//[势力id, 势力中文翻译], [势力颜色], [十周年UI的渐变映射]
//    lib.group.push('kazimierz');
//    lib.translate.kazimierz='卡'; 
//lib.translate.kazimierz2='卡西米尔';
//    lib.translate.kazimierzColor='#32CD32';
//lib.groupnature.kazimierz='wood';
//lib.group.push('ursus');
//    lib.translate.ursus='乌'; 
//lib.translate.ursus2='乌萨斯';
//    lib.translate.ursusColor='#751400';
//lib.groupnature.ursus='fire';
//lib.group.push('sami');
//    lib.translate.sami='萨'; 
//lib.translate.sami2='萨米';
//    lib.translate.samiColor='#5A96BE';
//lib.groupnature.sami='water';
//lib.group.push('iberia');
//    lib.translate.iberia='伊'; 
//lib.translate.iberia2='伊比利亚';
//    lib.translate.iberiaColor='#5A96BE';
//lib.groupnature.iberia='ice';
//lib.group.push('columbia');
//    lib.translate.columbia='哥'; 
//lib.translate.columbia2='哥伦比亚';
//    lib.translate.columbiaColor='#5A96BE';
//lib.groupnature.columbia='metal';
//lib.group.push('sargon');
//    lib.translate.sargon='贡'; 
//lib.translate.sargon2='萨尔贡';
//    lib.translate.sargonColor='#5A96BE';
//lib.groupnature.sargon='metal';
//lib.group.push('minos');
//    lib.translate.minos='米'; 
//lib.translate.minos2='米诺斯';
//    lib.translate.minosColor='#5A96BE';
//lib.groupnature.minos='thunder';
//lib.group.push('victoria');
//    lib.translate.victoria='维'; 
//lib.translate.victoria2='维多利亚';
//    lib.translate.victoriaColor='#5A96BE';
//lib.groupnature.victoria='metal';
//lib.group.push('laterano');
//    lib.translate.laterano='拉'; 
//lib.translate.laterano2='拉特兰';
//    lib.translate.lateranoColor='#5A96BE';
//lib.groupnature.laterano='metal';
//lib.group.push('siracusa');
//    lib.translate.siracusa='叙'; 
//lib.translate.siracusa2='叙拉古';
//    lib.translate.siracusaColor='#5A96BE';
//lib.groupnature.siracusa='metal';
//lib.group.push('kazdel');
//    lib.translate.kazdel='兹'; 
//lib.translate.kazdel2='卡兹戴尔';
//    lib.translate.kazdelColor='#5A96BE';
//lib.groupnature.kazdel='black';
//lib.group.push('rhodes');
//    lib.translate.rhodes='罗'; 
//lib.translate.rhodes2='罗德岛';
//    lib.translate.rhodesColor='#5A96BE';
//lib.groupnature.rhodes='water';
},precontent:function(){
    
},help:{},config:{},package:{
    character:{
        characterSort:{
            "守林人":{
                "kazimierz2":["old_firewatch","re_firewatch","sb_firewatch","sp_firewatch","star_firewatch","restar_firewatch","meteorite","sp_meteorite","meteor","sp_meteor","catapult","fang","czcibor","platinum","fartooth","gravel"],
                "ursus2":["absinthe","zima","istina","gumi","leto","beehunter"],
                "sami2":["bibeak","gitano","qanipalaat","santalla","santalla","valarqvin","extilnir","kumikupit"],
                "iberia2":["irene","dario"],
                "columbia2":["robin","greyy"],
                "sargon2":["heavyrain","tuye","flint","inam"],
                "minos2":["pallas"],
                "extra2":["breeze","velliv","agenir","talulah","alina"],
            },
        },
        character:{
            "old_firewatch":["female","kazimierz",3,["fire_old_fuxue","fire_old_youlin"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：刘十四<br>称号：<font color=#757F60>落叶如雨</font><br>姓名：守林人<br><br><li>【能力数据】<br>身份定位：主公，反贼<br>能力定位：防御<br><br><li>【背景故事】<br>守林人，出身不详，于卡西米尔-乌萨斯边境地区作战多年，推测身份：游击队员。在伏击、远程狙击、散兵战术、流动战术等非对称作战中展现出深厚经验。现于罗德岛狙击小组任职，提供射击援护方面的保障服务。"]],
            "re_firewatch":["female","kazimierz",3,["fire_re_standard_fuxue","fire_re_standard_youlin"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：刘十四<br>称号：<font color=#899338>落叶随风</font><br>姓名：守林人<br><br><li>【能力数据】<br>身份定位：反贼，内奸<br>能力定位：爆发<br><br><li>【背景故事】<br>守林人，出身不详，于卡西米尔-乌萨斯边境地区作战多年，推测身份：游击队员。在伏击、远程狙击、散兵战术、流动战术等非对称作战中展现出深厚经验。现于罗德岛狙击小组任职，提供射击援护方面的保障服务。"]],
            "sb_firewatch":["female","kazimierz",2,["fire_final_youlin","fire_final_fuxue","fire_final_dongmu"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：刘十四<br>称号：<font color=#899338>林深见鹿</font><br>姓名：守林人<br><br><li>【能力数据】<br>身份定位：主公，反贼<br>能力定位：防御，输出<br><br><li>【背景故事】<br>守林人，出身不详，于卡西米尔-乌萨斯边境地区作战多年，推测身份：游击队员。在伏击、远程狙击、散兵战术、流动战术等非对称作战中展现出深厚经验。现于罗德岛狙击小组任职，提供射击援护方面的保障服务。"]],
            "standard_firewatch":["female","kazimierz",3,["fire_standard_fuxue","fire_standard_youlin"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：刘十四<br>称号：<font color=#899338>落叶如雨</font><br>姓名：守林人<br><br><li>【能力数据】<br>身份定位：反贼，内奸<br>能力定位：爆发，防御<br><br><li>【背景故事】<br>守林人，出身不详，于卡西米尔-乌萨斯边境地区作战多年，推测身份：游击队员。在伏击、远程狙击、散兵战术、流动战术等非对称作战中展现出深厚经验。现于罗德岛狙击小组任职，提供射击援护方面的保障服务。"]],
            meteor:["female","kazimierz",4,["fire_new_zhixing","fire_sp_qifeng"],["zhu","des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：侯小菲<br>称号：<font color=#439C6A>背隐风声</font><br>姓名：流星 <br><br><li>【能力数据】<br>身份定位：主公，忠臣<br>能力定位：防御，控牌<br><br><li>【背景故事】<br>前卡西米尔守林人，拥有高超的弓箭技巧，并且在追踪和野外生存方面拥有丰富经验。 现于罗德岛接受治疗的同时，作为狙击干员活跃在第一线。"]],
            "re_meteor":["female","kazimierz",4,["fire_new_re_zhixing","fire_qifeng"],["zhu","des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：侯小菲<br>称号：<font color=#439C6A>悠然烁星</font><br>姓名：界流星 <br><br><li>【能力数据】<br>身份定位：反贼，忠臣<br>能力定位：控牌，防御<br><br><li>【背景故事】<br>前卡西米尔守林人，拥有高超的弓箭技巧，并且在追踪和野外生存方面拥有丰富经验。 现于罗德岛接受治疗的同时，作为狙击干员活跃在第一线。"]],
            catapult:["female","kazimierz",4,["fire_baopo"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#299C3D>千转空留</font><br>姓名：空爆<br><br><li>【能力数据】<br>身份定位：主公，反贼<br>能力定位：输出<br><br><li>【背景故事】<br>作为患者被罗德岛接收，因能力出众，在征求本人意见后，接受并通过测试，成为罗德岛的一员，被分配到预备行动组A6。"]],
            fang:["female","kazimierz","3/3/1",["fire_chongfeng","fire_qingzhuang"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#346C9A>勇敢的心</font><br>姓名：芬<br><br><li>【能力数据】<br>身份定位：忠臣，反贼<br>能力定位：输出，防御<br><br><li>【背景故事】<br>行动预备组A1队长，之前有在警备队实习的经验。战斗能力出众，进入罗德岛后很顺利地适应了现在的工作。 和原本的队员米格鲁、克洛丝一起进入了行动预备组，为了成为独当一面的干员努力着。"]],
            czcibor:["male","kazimierz","3/3/1",["fire_hunsuo","fire_yinguang","fire_qianjun"],["zhu","des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#34BC9C>冥行盲索</font><br>姓名：切斯柏<br><br><li>【能力数据】<br>身份定位：主公，反贼<br>能力定位：输出，辅助<br><br><li>【背景故事】<br>"]],
            platinum:["female","kazimierz",3,["fire_new_tianma","fire_new_lvxing"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#FFFFF0>骑士杀手</font><br>姓名：白金<br><br><li>【能力数据】<br>身份定位：反贼，内奸<br>能力定位：防御，爆发<br><br><li>【背景故事】<br>白金，卡西米尔无胄盟刺客，其他履历缺失。在机动作战、歼灭战与巷战中皆表现出极高的战斗技巧与特殊的战术素养。 现于凯尔希医生的指导下，作为狙击干员为罗德岛提供服务。"]],
            fartooth:["female","kazimierz","2/2/1",["fire_qianmo","fire_new_jiyu","fire_new_yiyuan"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#8A2C2D>隐</font><font color=#BBBB66>入尘</font><font color=#899338>硝</font></font><br>姓名：远牙<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：爆发，破核<br><br><li>【背景故事】<br>“远牙”骑士查丝汀娜，于特锦赛上打响名气，目前隶属于由感染者骑士组建的红松骑士团，是一名在卡西米尔拥有相当程度知名度的感染者骑士。在卡西米尔本届特锦赛及一系列风波之后，红松骑士团与罗德岛达成合作关系，远牙骑士也作为合作者来到罗德岛，接受矿石病相关治疗，并为罗德岛提供战斗支援。"]],
            gravel:["female","kazimierz","2/2/2",["fire_fuyong","fire_chengying"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#EEAAAA>侧位双刃</font><br>姓名：砾<br><br><li>【能力数据】<br>身份定位：主公，内奸<br>能力定位：防御，输出<br><br><li>【背景故事】<br>卡西米尔四阶骑士，因故在罗德岛逗留。擅长隐秘行动和暗杀，自愿成为博士的近卫之一。"]],
            absinthe:["female","ursus",3,["fire_yizhi","fire_new_jianhu","fire_gaosi"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：村川梨衣<br>称号：<font color=#751400>殉法者</font><br>姓名：苦艾<br><br><li>【能力数据】<br>身份定位：主公，反贼<br>能力定位：防御，破核<br><br><li>【背景故事】<br>干员苦艾，切尔诺伯格事件中被救助的乌萨斯平民之一，自愿申请加入罗德岛。 在接受了一系列测试与培训后，被批准作为术师干员加入作战小队，同时也提供舰内巡逻等相关服务。 等到这个冬天过去,天气暖和,我们一起去送冬吧?喝一点淡蜜酒,围着火炉烙饼,我们牵手唱啊跳,踩在开始变软的土地上,即便是冻土,到时也会开出小小的花。"]],
            "star_firewatch":["female","sami",3,["fire_zhujian","fire_kuye"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：刘十四<br>称号：<font color=#899338>等待希望</font><br>姓名：守林人<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：输出，防御<br><br><li>【背景故事】<br>守林人，出身不详，于卡西米尔-乌萨斯边境地区作战多年，推测身份：游击队员。在伏击、远程狙击、散兵战术、流动战术等非对称作战中展现出深厚经验。现于罗德岛狙击小组任职，提供射击援护方面的保障服务。"]],
            "restar_firewatch":["female","sami",3,["fire_re_zhujian","fire_re_kuye"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：刘十四<br>称号：<font color=#899338>等待希望</font><br>姓名：守林人<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：输出，防御<br><br><li>【背景故事】<br>守林人，出身不详，于卡西米尔-乌萨斯边境地区作战多年，推测身份：游击队员。在伏击、远程狙击、散兵战术、流动战术等非对称作战中展现出深厚经验。现于罗德岛狙击小组任职，提供射击援护方面的保障服务。"]],
            bibeak:["female","sami",3,["fire_shehun","fire_yuzhi"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#4DB09F>万剑之刃</font><br>姓名：柏喙<br><br><li>【能力数据】<br>身份定位：反贼，忠臣<br>能力定位：输出，控制<br><br><li>【背景故事】<br>干员柏喙，雷神工业装备设计师之女，遭遇工厂工人暴动而不幸感染矿石病。现作为医疗救助对象加入罗德岛，依照本人的意愿，允许调入作战部门，她的剑术如同她纺线一般优雅而有韵律。"]],
            gitano:["female","sami",4,["fire_buce","fire_qiusheng"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#DD9999>命运之攫</font><br>姓名：远山<br><br><li>【能力数据】<br>身份定位：内奸<br>能力定位：控制，辅助<br><br><li>【背景故事】<br>萨米出身的神秘学家，最擅长塔罗占卜，也玩得一手好牌。从不向别人透露任何来到罗德岛之前的故事，因此过往成谜。人们所被允许知道的，只有她占卜很成功这一点。"]],
            qanipalaat:["male","sami",4,["fire_panbing"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#999999>攀山之雪</font><br>姓名：雪绒<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：输出，控制<br><br><li>【背景故事】<br>干员雪绒，过去曾作为搜救队员在萨米地区活动，有丰富的野外救援经验。出生于萨米部落的他对外界知之甚少，为了寻求更高水平的医疗条件而走出萨米。现作为罗德岛外勤干员，为在恶劣环境中开展的任务提供支援。"]],
            santalla:["female","sami",3,["fire_sixue","fire_bingyan","fire_gushan"],["zhu","des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#292CCD>巫女之泪</font><br>姓名：寒檀<br><br><li>【能力数据】<br>身份定位：主公，忠臣<br>能力定位：输出，控牌<br><br><li>【背景故事】<br>因故自我流放的萨米部族萨满，在矿石病病情延缓后将罗德岛当作自己的部族，从此获得了新生。擅长操控风雪，能在低温环境和能见度极低的暴风中来去自如，被不了解萨米的敌人畏惧地称作“女巫”。 "]],
            kumikupit:["male","sami",3,["fire_xuezi","fire_benchu"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#DFC6AD>橡树之子</font><br>姓名：橡杯<br><br><li>【能力数据】<br>身份定位：忠臣<br>能力定位：<br><br><li>【背景故事】<br>"]],
            extilnir:["male","sami",6,["fire_jianding","fire_yanmie","fire_new_shunxi","fire_muhen"],["zhu","des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#446D65>树痕之裂</font><br>姓名：埃克提尔尼尔<br><br><li>【能力数据】<br>身份定位：主公，反贼<br>能力定位：输出<br><br><li>【背景故事】<br>"]],
            valarqvin:["female","sami",3,["fire_yuanjian","fire_xianmen"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#002BC8>末烛之见</font><br>姓名：凛视<br><br><li>【能力数据】<br>身份定位：忠臣，内奸<br>能力定位：信息，辅助<br><br><li>【背景故事】<br>干员凛视，隐居于萨米北部冬牙群山的独眼巨人族群的一员，据称该族群拥有能预见未来的源石技艺。为了其预见的某种未来，正在积极主动地向各方寻求合作，现与罗德岛达成协议，为罗德岛在萨米及其北方冰原上的相关事务提供帮助。"]],
            zima:["female","ursus",4,["fire_zhanhou","fire_new_lingxiu","fire_tuanhuo"],["zhu","des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#AC2F2E>领军者</font><br>姓名：凛冬<br><br><li>【能力数据】<br>身份定位：主公，忠臣<br>能力定位：防御，辅助<br><br><li>【背景故事】<br>凛冬，切尔诺伯格事变前于切城某中学就读，在校期间已表现出对战斗与突击行为的热情。在多项测试中表现出乌萨斯人与生俱来的强健力量和坚实体质。现作为先锋干员担任作战小队队长。"]],
            "re_zima":["female","ursus",4,["fire_re_zhanhou","fire_new_lingxiu","fire_re_tuanhuo"],["zhu","des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#AC2F2E>先军者</font><br>姓名：凛冬<br><br><li>【能力数据】<br>身份定位：主公，忠臣<br>能力定位：防御，辅助<br><br><li>【背景故事】<br>凛冬，切尔诺伯格事变前于切城某中学就读，在校期间已表现出对战斗与突击行为的热情。在多项测试中表现出乌萨斯人与生俱来的强健力量和坚实体质。现作为先锋干员担任作战小队队长。"]],
            istina:["female","ursus",4,["fire_xianqv","fire_fanshen"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#0CB3B4>先驱者</font><br>姓名：真理<br><br><li>【能力数据】<br>身份定位：主公，反贼<br>能力定位：防御，辅助<br><br><li>【背景故事】<br>真理，切尔诺伯格事变前于切城某中学就读，在校期间多次向源石技艺相关杂志撰稿。知识领域：名家著作、推理文学、社会学期刊。于多项测试中展现出优异的控制类源石技艺，获准作为实习辅助干员加入战斗，并为罗德岛提供信息与资料整理等相关服务。"]],
            "re_istina":["female","ursus",4,["fire_xianqv","fire_new_fanshen"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#0CB3B4>先导者</font><br>姓名：真理<br><br><li>【能力数据】<br>身份定位：主公，反贼<br>能力定位：防御，辅助<br><br><li>【背景故事】<br>真理，切尔诺伯格事变前于切城某中学就读，在校期间多次向源石技艺相关杂志撰稿。知识领域：名家著作、推理文学、社会学期刊。于多项测试中展现出优异的控制类源石技艺，获准作为实习辅助干员加入战斗，并为罗德岛提供信息与资料整理等相关服务。"]],
            gumi:["female","ursus",4,["fire_pengzhi","fire_buji"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#E55C00>心巧者</font><br>姓名：古米<br><br><li>【能力数据】<br>身份定位：忠臣<br>能力定位：防御，辅助<br><br><li>【背景故事】<br>古米，曾取得全乌萨斯童子军活动大赛青少年组亚军，切尔诺伯格事变前于切城某中学就读。技术领域：乌萨斯式烹调。于多项测试中表现出乌萨斯人与生俱来的强健力量和坚实体质，获准作为实习重装干员加入战斗，并为罗德岛提供后勤保障与战地烹饪等相关服务。"]],
            leto:["female","ursus",4,["fire_bazhu","fire_new_haoling","fire_yuehuo"],["zhu","des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#EEAA22>荣耀者</font><br>姓名：烈夏<br><br><li>【能力数据】<br>身份定位：主公，反贼<br>能力定位：防御，控牌<br><br><li>【背景故事】<br>"]],
            poca:["female","ursus",4,["fire_yibo","fire_suiding"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#4682B4>名世者</font><br>姓名：早露<br><br><li>【能力数据】<br>身份定位：反贼，主公<br>能力定位：控制，爆发<br><br><li>【背景故事】<br>早露，切尔诺伯格事变前于切城某中学就读，并担任学生会长。 事变后加入罗德岛，隶属后勤部门，工作期间风评极佳。现经本人申请，作为狙击干员转入前线。"]],
            beehunter:["female","ursus",4,["fire_jidong","fire_leitai"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#EEC700>熊神恶煞</font><br>姓名：猎蜂<br><br><li>【能力数据】<br>身份定位：忠臣，反贼<br>能力定位：输出<br><br><li>【背景故事】<br>前乌萨斯地下搏击手，所属组织分裂后加入罗德岛。现作为近卫干员，在最前线发挥她出色的破坏力。"]],
            ningciqiu:["female","yan",3,["fire_jianbie","fire_new_xieli"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#A74330>林晚辞秋</font><br>姓名：宁辞秋<br><br><li>【能力数据】<br>身份定位：忠臣，主公<br>能力定位：辅助，防御<br><br><li>【背景故事】<br>"]],
            liangxun:["male","yan",4,["fire_liming"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#A74330>恂恂以民</font><br>姓名：梁洵<br><br><li>【能力数据】<br>身份定位：忠臣，主公<br>能力定位：辅助，防御<br><br><li>【背景故事】<br>"]],
            "nine_colored_deer":["female","yan",3,["fire_riyuan","fire_linping"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#700010>天光乍现</font><br>姓名：九色鹿<br><br><li>【能力数据】<br>身份定位：反贼。主公<br>能力定位：辅助，防御<br><br><li>【背景故事】<br>"]],
            qiubai:["female","yan",3,["fire_wenxue","fire_shanwu"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#BD394A>飞鸿问雪</font><br>姓名：仇白<br><br><li>【能力数据】<br>身份定位：反贼，忠臣<br>能力定位：输出，辅助<br><br><li>【背景故事】<br>"]],
            czerny:["male","leithanien",3,["fire_qiji","fire_shenghui"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#DB6A09>定音之作</font><br>姓名：车尔尼<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：输出<br><br><li>【背景故事】<br>"]],
            vivia:["female","leithanien",3,["fire_shixuan","fire_manshu"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#ECB358>如诗如影</font><br>姓名：薇薇安娜<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：防御，破核<br><br><li>【背景故事】<br>"]],
            breeze:["female","victoria",3,["fire_duxin","fire_chixia"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#C37210></font><br>姓名：微风<br><br><li>【能力数据】<br>身份定位：忠臣<br>能力定位：辅助，防御<br><br><li>【背景故事】<br>本名格蕾丝·亚利桑那，维多利亚某旁系贵族独女，于医疗技艺进修时期接触罗德岛，并主动求职于罗德岛，在药理学与临床理论方面表现优异，现为罗德岛提供战场医疗救护服务。"]],
            melantha:["female","victoria",4,["fire_anxiang"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#6F1A6F>闻香舞剑</font><br>姓名：玫兰莎<br><br><li>【能力数据】<br>身份定位：忠臣，反贼<br>能力定位：辅助<br><br><li>【背景故事】<br>"]],
            grani:["female","victoria",3,["fire_jingshao","fire_jianshou"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#044C8C>横枪立马</font><br>姓名：格拉尼<br><br><li>【能力数据】<br>身份定位：忠臣<br>能力定位：辅助，防御<br><br><li>【背景故事】<br>"]],
            irene:["female","iberia",4,["fire_liechao","fire_bingzhu"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#CC8989>裁冤决狱</font><br>姓名：艾丽妮<br><br><li>【能力数据】<br>身份定位：反贼，忠臣<br>能力定位：爆发，破核<br><br><li>【背景故事】<br>艾丽妮，前伊比利亚审判官，大审判官达里奥的学生。对伊比利亚历史、律法、人文地理等知识十分了解。在“愚人号”事件后，辞去审判官职务，经凯尔希亲自推荐，现以审判庭信使的身份与罗德岛签订合作协议，为应对来自海洋的威胁而做准备。"]],
            heavyrain:["female","sargon",3,["fire_jianai","fire_xunyi"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#A9B358>万重千山</font><br>姓名：暴雨<br><br><li>【能力数据】<br>身份定位：主公，忠臣<br>能力定位：防御，辅助<br><br><li>【背景故事】<br>前萨尔贡某王酋麾下士兵。遭到同僚背叛后心灰意冷离开军队，几经辗转后加入罗德岛。作战经验丰富，现作为重装干员活跃于各类任务中。"]],
            inam:["female","sargon",3,["fire_shanghe","fire_daibiao","fire_ronglin"],["zhu","des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#BBC4BD>密信酋王</font><br>姓名：伊娜姆<br><br><li>【能力数据】<br>身份定位：主公，忠臣<br>能力定位：控牌，信息<br><br><li>【背景故事】<br>"]],
            tuye:["female","sargon",3,["fire_yiwu","fire_yinshui","fire_qiangxin"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#D3A95F>奇兰映泉</font><br>姓名：图耶<br><br><li>【能力数据】<br>身份定位：忠臣，反贼<br>能力定位：辅助，防御<br><br><li>【背景故事】<br>前贸易公司员工，负责后勤技术研发及运输路线规划。因为一场货运途中的沙暴事故，不幸感染矿石病。经原公司介绍，来到罗德岛医疗部门供职，同时进行必要的矿石病治疗。"]],
            pallas:["female","minos",3,["fire_new_jiefang","fire_xvmin","fire_liying"],["zhu","des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#8450C7>胜利女神</font><br>姓名：帕拉斯<br><br><li>【能力数据】<br>身份定位：主公，反贼<br>能力定位：输出，辅助<br><br><li>【背景故事】<br>帕拉斯，曾在米诺斯担任祭司职务。在离开雅赛努斯城邦去往阿克罗蒂村任职期间，带领当地民众进行了对萨尔贡周边部落长年侵扰的反抗，并在当地推行旅游及文化产业的发展。后因矿石病病况恶化，来到罗德岛进行秘密治疗。"]],
            flint:["female","sargon",3,["fire_bifeng","fire_xianshan"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#1AAF9A>其疾如蜂</font><br>姓名：燧石<br><br><li>【能力数据】<br>身份定位：主公，内奸<br>能力定位：防御，输出<br><br><li>【背景故事】<br>萨尔贡部族战士燧石，她的战斗经验从有力气挥动双拳时起就开始累积，擅长精准而快速的拳击格斗术。现经由某位隐去姓名的精英干员推荐，通过测试作为近卫干员加入罗德岛。"]],
            robin:["female","columbia",3,["fire_zhencang","fire_shangjin","fire_jiushu"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#C3A354>宾至如故</font><br>姓名：罗宾<br><br><li>【能力数据】<br>身份定位：内奸，反贼<br>能力定位：控牌，爆发<br><br><li>【背景故事】<br>前哥伦比亚保镖，经干员赫默引荐，通过测试加入罗德岛。擅长配合自制陷阱进行远程杀伤，现作为特种干员活跃于各类任务中。"]],
            velliv:["female","laterano",3,["fire_juqian","fire_suya"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#C381D7>微言枢机</font><br>姓名：薇尔丽芙<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：破核，辅助<br><br><li>【背景故事】<br>"]],
            agenir:["male","laterano",4,["fire_mucha"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#999999>外山神父</font><br>姓名：阿格尼尔<br><br><li>【能力数据】<br>身份定位：反贼，忠臣<br>能力定位：输出，破核<br><br><li>【背景故事】<br>"]],
            ambriel:["female","laterano",3,["fire_yunqi","fire_mojin"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#FF88AA>天际卷云</font><br>姓名：安比尔<br><br><li>【能力数据】<br>身份定位：反贼，内奸<br>能力定位：输出<br><br><li>【背景故事】<br>安比尔，拉特兰公民。经多项测试后获许加入罗德岛，在伏击和远程狙击等非对称作战中表现上佳。现于罗德岛狙击小组任职，提供射击援护方面的保障服务。 "]],
            plume:["female","laterano",4,["fire_shushou"],[""]],
            archetto:["female","laterano","3/3/1",["fire_keshou","fire_sanchun"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#F2A223>苦道难修</font><br>姓名：空弦<br><br><li>【能力数据】<br>身份定位：忠臣，反贼<br>能力定位：输出<br><br><li>【背景故事】<br>"]],
            executor:["male","laterano",4,["fire_zhiheng","fire_shuli"],["zhu"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#333333>预修计划</font><br>姓名：送葬人<br><br><li>【能力数据】<br>身份定位：反贼，主公<br>能力定位：输出<br><br><li>【背景故事】<br>"]],
            liskarm:["female","sargon",3,["fire_chongneng","fire_old_dianhu"],["des:<li>【基础信息】<br>技能设计：雷蛇<br>角色配音：<br>称号：<font color=#125CCF>哨戒风暴</font><br>姓名：雷蛇<br><br><li>【能力数据】<br>身份定位：忠臣，内奸<br>能力定位：防御，辅助<br><br><li>【背景故事】<br>雷蛇，黑钢国际私人安全顾问公司雇员，为跨国企业、政府部门和无国界组织等提供安全防卫服务，于冲突地带积累了丰富的实战经验。 现于安保条约期内，为罗德岛提供专业的安全保障与咨询。"]],
            meteorite:["female","kazdel",3,["fire_ranlie","fire_dunxing"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：钟可<br>称号：<font color=#CC7D12>字言星火</font><br>姓名：陨星<br><br><li>【能力数据】<br>身份定位：忠臣，反贼<br>能力定位：控牌，输出<br><br><li>【背景故事】<br>前“守林人”组织成员，现自由佣兵，此外履历不详。 现作为狙击干员为罗德岛服务，使用手中的弩炮发挥出卓越的范围杀伤力。"]],
            "sp_meteorite":["female","rhodes",3,["fire_xinghuo","fire_rezhan"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：钟可<br>称号：<font color=#CC7D12>一星萤火</font><br>姓名：陨星<br><br><li>【能力数据】<br>身份定位：内奸<br>能力定位：防御，输出<br><br><li>【背景故事】<br>前“守林人”组织成员，现自由佣兵，此外履历不详。现作为狙击干员为罗德岛服务，使用手中的弩炮发挥出卓越的范围杀伤力。"]],
            "sp_firewatch":["female","rhodes",3,["fire_sp_qinfeng","fire_dongmu"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：刘十四<br>称号：<font color=#899338>覆叶故往</font><br>姓名：守林人<br><br><li>【能力数据】<br>身份定位：反贼，忠臣<br>能力定位：输出，爆发<br><br><li>【背景故事】<br>守林人，出身不详，于卡西米尔-乌萨斯边境地区作战多年，推测身份：游击队员。在伏击、远程狙击、散兵战术、流动战术等非对称作战中展现出深厚经验。现于罗德岛狙击小组任职，提供射击援护方面的保障服务。"]],
            "wiltedcypress_firewatch":["female","rhodes",3,["fire_henhuo","fire_kugu"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：刘十四<br>称号：<font color=#899338>枯骨鹿冢</font><br>姓名：守林人<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：输出，防御<br><br><li>【背景故事】<br>守林人，出身不详，于卡西米尔-乌萨斯边境地区作战多年，推测身份：游击队员。在伏击、远程狙击、散兵战术、流动战术等非对称作战中展现出深厚经验。现于罗德岛狙击小组任职，提供射击援护方面的保障服务。"],["border:rhodes"]],
            "snowywatch_firewatch":["female","rhodes",3,["fire_ex_fuxue","fire_new_youlin"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：刘十四<br>称号：<font color=#899338>雪仇誓北</font><br>姓名：守林人<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：防御<br><br><li>【背景故事】<br>守林人，出身不详，于卡西米尔-乌萨斯边境地区作战多年，推测身份：游击队员。在伏击、远程狙击、散兵战术、流动战术等非对称作战中展现出深厚经验。现于罗德岛狙击小组任职，提供射击援护方面的保障服务。"]],
            nightingale:["female","kazdel",3,["fire_huanying","fire_tideng"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#33C5CC>提灯天使</font><br>姓名：夜莺<br><br><li>【能力数据】<br>身份定位：反贼，忠臣<br>能力定位：防御，辅助<br><br><li>【背景故事】<br>"]],
            talulah:["female","ursus",3,["fire_tongxing","fire_doushi"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#B52927>燎原红龙</font><br>姓名：塔露拉<br><br><li>【能力数据】<br>身份定位：忠臣，反贼<br>能力定位：防御，输出<br><br><li>【背景故事】<br>"]],
            alina:["female","ursus",3,["fire_qianlu","fire_qiushui"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#A2A8A6>日暮寻鹿</font><br>姓名：阿丽娜<br><br><li>【能力数据】<br>身份定位：忠臣，反贼<br>能力定位：辅助，信息<br><br><li>【背景故事】<br>"]],
            coldshot:["female","columbia",3,["fire_canyun","fire_chunyu"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#9266A2>陈年佳酿</font><br>姓名：冰酿<br><br><li>【能力数据】<br>身份定位：反贼，忠臣<br>能力定位：生存，输出<br><br><li>【背景故事】<br>"]],
            greyy:["male","columbia",4,["fire_new_chenxi"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#EBC20D></font><br>姓名：格雷伊<br><br><li>【能力数据】<br>身份定位：忠臣，反贼<br>能力定位：输出，信息<br><br><li>【背景故事】<br>格雷伊，经多项测试后获准加入罗德岛，在法术方面具有较高潜力。现于罗德岛小队担任法术人员，并提供基地电力设施维护等相关服务。/格雷伊，已通过数项工程师相关科目测试。现于工程部任职，聚焦新技术研发与应用，并视需求参与包括作战与技术实测在内的多项行动。"]],
            "re_liskarm":["female","columbia",3,["fire_chongneng","fire_dianhu"],["des:<li>【基础信息】<br>技能设计：雷蛇&&纸鸢函音<br>角色配音：<br>称号：<font color=#125CCF>极能脉冲</font><br>姓名：雷蛇<br><br><li>【能力数据】<br>身份定位：忠臣，内奸<br>能力定位：防御，辅助<br><br><li>【背景故事】<br>雷蛇，黑钢国际私人安全顾问公司雇员，为跨国企业、政府部门和无国界组织等提供安全防卫服务，于冲突地带积累了丰富的实战经验。 现于安保条约期内，为罗德岛提供专业的安全保障与咨询。"],["doublegroup:sargon:columbia"]],
            dario:["male","iberia",4,["fire_shenpan","fire_bingzhu"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#CC8989>判今揽古</font><br>姓名：达里奥<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：输出，破核<br><br><li>【背景故事】<br>"]],
            andreana:["female","iberia",3,["fire_moji","fire_baizhi"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#4545A3>墨海正心</font><br>姓名：安哲拉<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：生存，破核<br><br><li>【背景故事】<br>"]],
            clement:["male","iberia",4,["fire_konggu","fire_zhifou"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#AA8888>茫茫空谷</font><br>姓名：克莱芒<br><br><li>【能力数据】<br>身份定位：忠臣，反贼<br>能力定位：辅助，生存<br><br><li>【背景故事】<br>"]],
            pursuer:["male","ursus",3,["fire_dianguo","fire_xvgong"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#333333>癫狂国度</font><br>姓名：追猎者<br><br><li>【能力数据】<br>身份定位：反贼<br>能力定位：输出<br><br><li>【背景故事】<br>"]],
            tsukinogi:["female","higashi",3,["fire_hexin","fire_senling"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#330053>人心难弥</font><br>姓名：月禾<br><br><li>【能力数据】<br>身份定位：忠臣，反贼<br>能力定位：辅助，防御<br><br><li>【背景故事】<br>"]],
            estelle:["female","qun",4,["fire_huijin","fire_sheshen"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#333333>灰烬公主</font><br>姓名：艾丝黛尔<br><br><li>【能力数据】<br>身份定位：反贼，主公<br>能力定位：生存，输出<br><br><li>【背景故事】<br>"]],
            "Pozëmka":["female","ursus",3,["fire_dianjing","fire_chunli"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#333333>离离雪国</font><br>姓名：鸿雪<br><br><li>【能力数据】<br>身份定位：反贼，忠臣<br>能力定位：输出，破核<br><br><li>【背景故事】<br>"]],
            lunacub:["female","siracusa",3,["fire_oxenfree","fire_huangye"],["des:<li>【基础信息】<br>技能设计：纸鸢函音<br>角色配音：<br>称号：<font color=#994328>涉猎月出</font><br>姓名：子月<br><br><li>【能力数据】<br>身份定位：主公，内奸<br>能力定位：防御，输出<br><br><li>【背景故事】<br>子月，游荡在叙拉古荒野上的猎人，经由企鹅物流的介绍加入罗德岛，担任罗德岛在叙拉古野外行动的向导，兼职狙击干员。"]],
        },
        translate:{
            "old_firewatch":"旧守林人",
            "old_firewatch_prefix":"旧",
            "re_firewatch":"界守林人",
            "re_firewatch_prefix":"界",
            "sp_firewatch":"☆SP守林人",
            "sp_firewatch_prefix":"☆SP",
            "god_firewatch_prefix":"神",
            "sb_firewatch":"谋守林人",
            "sb_firewatch_prefix":"谋",
            "star_firewatch":"星守林人",
            "star_firewatch_prefix":"星",
            "restar_firewatch":"星界守林人",
            "restar_firewatch_prefix":"星界",
            "standard_firewatch":"守林人",
            "wiltedcypress_firewatch":"枯柏守林人",
            "wiltedcypress_firewatch_prefix":"枯柏",
            "snowywatch_firewatch":"覆雪守林人",
            "snowywatch_firewatch_prefix":"覆雪",
            meteor:"流星",
            meteorite:"陨星",
            "sp_meteorite":"☆SP陨星",
            "sp_meteorite_prefix":"☆SP",
            "re_meteor":"界流星",
            "re_meteor_prefix":"界",
            poca:"早露",
            absinthe:"苦艾",
            bibeak:"柏喙",
            gitano:"远山",
            zima:"凛冬",
            istina:"真理",
            "re_istina":"界真理",
            "re_istina_prefix":"界",
            qanipalaat:"雪绒",
            irene:"艾丽妮",
            heavyrain:"暴雨",
            tuye:"图耶",
            pallas:"帕拉斯",
            robin:"罗宾",
            flint:"燧石",
            greyy:"格雷伊",
            breeze:"微风",
            dario:"达里奥",
            inam:"依娜姆",
            velliv:"薇尔丽芙",
            agenir:"阿格尼尔",
            andreana:"安哲拉",
            catapult:"空爆",
            santalla:"寒檀",
            extra:"额外",
            gumi:"古米",
            leto:"烈夏",
            fang:"芬",
            czcibor:"切斯柏",
            talulah:"塔露拉",
            alina:"阿丽娜",
            beehunter:"猎蜂",
            kumikupit:"橡杯",
            extilnir:"埃克提尔尼尔",
            valarqvin:"凛视",
            firewatch:"守林人",
            liskarm:"雷蛇",
            platinum:"白金",
            lunacub:"子月",
            "re_liskarm":"界雷蛇",
            "re_liskarm_prefix":"界",
            fartooth:"远牙",
            gravel:"砾",
            ambriel:"安比尔",
            plume:"翎羽",
            pursuer:"追猎者",
            archetto:"空弦",
            ningciqiu:"宁辞秋",
            estelle:"艾丝黛尔",
            executor:"送葬人",
            nightingale:"夜莺",
            jackson:"杰克逊",
            typhon:"提丰",
            "Pozëmka":"鸿雪",
            hellaugr:"赫拉格",
            tsukinogi:"月禾",
            qiubai:"仇白",
            czerny:"车尔尼",
            "nine_colored_deer":"九色鹿",
            coldshot:"冰酿",
            clement:"克莱芒",
            vivia:"薇薇安",
            liangxun:"梁洵",
            melantha:"玫兰莎",
            "re_zima":"界凛冬",
            grani:"格拉尼",
        },
        characterTitle:{
            "old_firewatch":"<font color=#757F60>落叶如雨</font>",
            "re_firewatch":"<font color=#899338>落叶随风</font>",
            "sb_firewatch":"<font color=#899338>林深见鹿</font>",
            "sp_firewatch":"<font color=#899338>覆叶故往</font>",
            "god_firewatch":"<font color=#899338>木隐深林</font>",
            "new_firewatch":"<font color=#899338>落叶如雨</font>",
            "standard_firewatch":"<font color=#899338>落叶如雨</font>",
            "wiltedcypress_firewatch":"<font color=#899338>枯骨鹿冢</font>",
            "snowywatch_firewatch":"<font color=#899338>雪仇誓北</font>",
            "star_firewatch":"<font color=#899338>等待希望</font>",
            "restar_firewatch":"<font color=#899338>期冀希望</font>",
            meteorite:"<font color=#CC7D12>字言星火</font>",
            "sp_meteorite":"<font color=#CC7D12>一星萤火</font>",
            meteor:"<font color=#439C6A>背隐风声</font>",
            "re_meteor":"<font color=#439C6A>悠然烁星</font>",
            absinthe:"<font color=#751400>殉法者</font>",
            bibeak:"<font color=#4DB09F>万剑之刃</font>",
            gitano:"<font color=#DD9999>命运之攫</font>",
            zima:"<font color=#AC2F2E>领军者</font>",
            istina:"<font color=#0CB3B4>先驱者</font>",
            "re_zima":"<font color=#AC2F2E>先军者</font>",
            "re_istina":"<font color=#0CB3B4>先导者</font>",
            qanipalaat:"<font color=#AAAAAA>攀山之雪</font>",
            irene:"<font color=#CC8989>裁冤决狱</font>",
            heavyrain:"<font color=#A9B358>万重千山</font>",
            tuye:"<font color=#D3A95F>奇兰映泉</font>",
            pallas:"<font color=#8450C7>胜利女神</font>",
            robin:"<font color=#C3A354>宾至如故</font>",
            flint:"<font color=#1AAF9A>其疾如蜂</font>",
            greyy:"<font color=#EBC20D>能工巧匠</font>",
            breeze:"<font color=#C37210>没落贵族</font>",
            dario:"<font color=#CC8989>判今揽古</font>",
            inam:"<font color=#BBC4BD>密信酋王</font>",
            velliv:"<font color=#C381D7>微言枢机</font>",
            agenir:"<font color=#999999>外山神父</font>",
            catapult:"<font color=#299C3D>千转空留</font>",
            santalla:"<font color=#292CCD>巫女之泪</font>",
            "new_meteorite":"<font color=#CC7D12>一星萤火</font>",
            gumi:"<font color=#E55C00>心巧者</font>",
            leto:"<font color=#EEAA22>荣耀者</font>",
            fang:"<font color=#346C9A>勇敢的心</font>",
            czcibor:"<font color=#34BC9C>冥行盲索</font>",
            talulah:"<font color=#B52927>燎原红龙</font>",
            alina:"<font color=#A2A8A6>日暮寻鹿</font>",
            beehunter:"<font color=#EEC700>「<font color=#EEC700>熊</font><font color=#111111>神</font><font color=#EEC700>恶</font><font color=#111111>煞</font>」</font>",
            carolgarni:"<font color=#357CBC>永不后退</font>",
            kumikupit:"<font color=#DFC6AD>橡树之子</font>",
            extilnir:"<font color=#446D65>树痕之裂</font>",
            valarqvin:"<font color=#002BC8>末烛之见</font>",
            liskarm:"<font color=#125CCF>哨戒风暴</font>",
            platinum:"<font color=#FFFFF0>骑士杀手</font>",
            poca:"<font color=#4682B4>名世者</font>",
            lunacub:"<font color=#994328>涉猎月出</font>",
            "re_liskarm":"<font color=#125CCF>极能脉冲</font>",
            fartooth:"<font color=#8A2C2D>隐</font><font color=#BBBB99>入尘</font><font color=#89A338>嚣</font>",
            gravel:"<font color=#EEAAAA>侧位双刃</font>",
            ambriel:"<font color=#FF88AA>天际卷云</font>",
			liangxun:"<font color=#A74330>恂恂以民</font>",
			ningciqiu:"<font color=#A74330>林晚辞秋</font>",
			qiubai:"<font color=#BD394A>飞鸿问雪</font>",
			"nine_colored_deer":"<font color=#700010>天光乍现</font>",
			czerny:"<font color=#DB6A09>定音之作</font>",
			estelle:"<font color=#333333>灰烬公主</font>",
			"Pozëmka":"<font color=#333333>离离雪国</font>",
			vivia:"<font color=#ECB358>如诗如影</font>",
			grani:"<font color=#044C8C>横枪立马</font>",
			melantha:"<font color=#6F1A6F>闻香舞剑</font>",
			andreana:"<font color=#4545A3>墨海正心</font>",
			clement:"<font color=#AA8888>茫茫空谷</font>",
			coldshot:"<font color=#9266A2>陈年佳酿</font>",
			archetto:"<font color=#F2A223>苦道难修</font>",
			executor:"<font color=#333333>预修计划</font>",
			plume:"<font color=#8A3E21>羽坚边韧</font>",
			nightingale:"<font color=#33C5CC>提灯天使</font>",
			tsukinogi:"<font color=#330053>人心难弥</font>",
			pursuer:"<font color=#333333>癫狂国度</font>",
        },
    },
    card:{
        card:{
            "fire_leisibian":{
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                distance:{
                    globalFrom:1,
                },
                filterTarget:function(card,player,target){
        return player!=target;
    },
                selectTarget:1,
                toself:false,
                skills:[],
                enable:true,
                loseDelay:false,
                onEquip:function(){
        if(player.sex=='male') 
            player.turnOver()
           
          
    },
                onLose:function(character){
      if(player.sex=='female') 
            player.turnOver()
    },
                ai:{
                    order:9.5,
                    equipValue:function(card,player){
            if(card==player.getEquip(2)){
                if(player.sex!='male')
                    return 0;
             
               
            }
            return 1;
        },
                    basic:{
                        equipValue:5,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')||player.sex=='male'){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        keepAI:true,
                        target:function(player,target){
                var card=target.getEquip(2);
                if(target.sex=='male'){
                    var val=0;
                    var val2=0;
                    if(card){
                        val2=get.value(card,target);
                        if(val2<0) return 0;
                    }
                    var num=target.countCards('he',function(cardx){
                        return cardx!=card
                    });
                    if(num>0) val+=4/num;
                    return -val;
                }
                if(card){
                    var val2=get.value(card,target);
                    if(val2>0) return -val2/4;
                }
                return 0;
            },
                    },
                },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
            },
            "fire_fieldsniper":{
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["fieldsniper_skill"],
                ai:{
                    basic:{
                        equipValue:5,
                    },
                },
            },
            "fire_bulinsuo":{
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                skills:["bulin_skill"],
                ai:{
                    basic:{
                        equipValue:5,
                    },
                },
            },
            "fire_lantern":{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:0,
                },
                ai:{
                    equipValue:function(card,player){
            var num=player.countCards('h','sha');
                if(num>1) return 6+num;
                return 3+num;
        },
                    basic:{
                        equipValue:3.5,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                skills:["fire_lantern_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
            },
            "fire_scout":{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-4,
                },
                ai:{
                    basic:{
                        equipValue:3,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                skills:["fire_scout_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
            },
            "fire_knightid":{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-1,
                },
                ai:{
                    basic:{
                        equipValue:2,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                skills:["qishi_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
            },
            "fire_camouflage":{
                audio:true,
                fullskin:true,
                type:"trick",
                enable:true,
                selectTarget:-1,
                cardcolor:"black",
                toself:true,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                content:function(){
       
        target.addTempSkill('fire_ex_fuxue',{player:'phaseBegin'});
    },
                ai:{
                    basic:{
                        order:7.2,
                        useful:4.5,
                        value:9.2,
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        draw:2,
                    },
                },
            },
            "fire_tacticaltransceiver":{
                audio:true,
                fullskin:true,
                type:"delay",
                cardnature:"thunder",
                modTarget:function(card,player,target){
        return lib.filter.judge(card,player,target);
    },
                enable:function(card,player){
        return player.canAddJudge(card);
    },
                filterTarget:function(card,player,target){
        return (lib.filter.judge(card,player,target)&&player==target);
    },
                selectTarget:[-1,-1],
                toself:true,
                judge:function(card){
        if(get.suit(card)=='heart'&&get.number(card)>1&&get.number(card)<10) return -5;
        return 1;
    },
                "judge2":function(result){
        if(result.bool==false) return true;
        return false;
    },
                effect:function(){
        if(result.bool==false){
            player.damage(3,'fire','nosource');
        }
        else{
            player.addJudgeNext(card);
        }
    },
                cancel:function(){
        player.addJudgeNext(card);
    },
                ai:{
                    basic:{
                        order:1,
                        useful:0,
                        value:0,
                    },
                    result:{
                        target:function(player,target){
                var num=game.countPlayer(function(current){
                    var skills=current.getSkills();
                    for(var j=0;j<current.skills.length;j++){
                        var rejudge=get.tag(current.skills[j],'rejudge',current);
                        if(rejudge!=undefined){
                            if(get.attitude(target,current)>0&&
                            get.attitude(current,target)>0){
                                return rejudge;
                            }
                            else{
                                return -rejudge;
                            }
                        }
                    }
                });
                if(num>0) return num;
                if(num==0){
                    var mode=get.mode();
                    if(mode=='identity'){
                        if(target.identity=='nei') return 1;
                        var situ=get.situation();
                        if(target.identity=='fan'){
                            if(situ>1) return 1;
                        }
                        else{
                            if(situ<-1) return 1;
                        }
                    }
                    else if(mode=='guozhan'){
                        if(target.identity=='ye') return 1;
                        if(game.hasPlayer(function(current){
                            return current.identity=='unknown';
                        })){
                            return -1;
                        }
                        if(get.population(target.identity)==1){
                            if(target.maxHp>2&&target.hp<2) return 1;
                            if(game.countPlayer()<3) return -1;
                            if(target.hp<=2&&target.countCards('he')<=3) return 1;
                        }
                    }
                }
                return -1;
            },
                    },
                    tag:{
                    },
                },
                content:function(){
        if(lib.filter.judge(card,player,target)&&cards.length&&get.position(cards[0],true)=='o') target.addJudge(card,cards);
    },
                allowMultiple:false,
            },
            "fire_supplement":{
                fullskin:true,
                type:"basic",
                cardcolor:"black",
                toself:true,
                enable:function(card,player){
        return !player.hujia;
    },
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player&&!target.hujia;
    },
                modTarget:function(card,player,target){
        return !target.hujia;
    },
                content:function(){
        target.changeHujia(event.baseDamage||1);
    },
                ai:{
                    basic:{
                        order:function(card,player){
                
                return 2;
            },
                        useful:[4.5,3,2,1],
                        value:[4.5,3,2,1],
                    },
                    result:{
                        target:2,
                    },
                    tag:{
                        hujia:1,
                    },
                },
            },
            "fire_knightshield":{
                fullskin:true,
                type:"equip",
                subtype:"equip2",
                ai:{
                    value:function(card,player,index,method){
            if(player.isDisabled(2)) return 0.01;
            if(card==player.getEquip(2)){
                if(player.hasSkillTag('noDirectDamage')) return 10;
                if(game.hasPlayer(function(current){
                    return current!=player&&get.attitude(current,player)<0&&current.hasSkillTag('fireAttack',null,null,true);
                })) return 0;
                return 6;
            }
            var value=0;
            var info=get.info(card);
            var current=player.getEquip(info.subtype);
            if(current&&card!=current){
                value=get.value(current,player);
            }
            var equipValue=info.ai.equipValue;
            if(equipValue==undefined){
                equipValue=info.ai.basic.equipValue;
            }
            if(typeof equipValue=='function'){
                if(method=='raw') return equipValue(card,player);
                if(method=='raw2') return equipValue(card,player)-value;
                return Math.max(0.1,equipValue(card,player)-value);
            }
            if(typeof equipValue!='number') equipValue=0;
            if(method=='raw') return equipValue;
            if(method=='raw2') return equipValue-value;
            return Math.max(0.1,equipValue-value);
        },
                    equipValue:function(card,player){
            if(player.hasSkillTag('maixie')&&player.hp>1) return 0;
            if(player.hasSkillTag('noDirectDamage')) return 10;
            if(get.damageEffect(player,player,player,'fire')>=0) return 10;
            var num=4-game.countPlayer(function(current){
                if(get.attitude(current,player)<0){
                    if(current.hasSkillTag('fireAttack',null,null,true)) return 3;
                    return 1;
                }
                return false;
            });
            if(player.hp==1) num+=3;
            if(player.hp==2) num+=1;
            return num;
        },
                    basic:{
                        equipValue:3,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                skills:["fire_knightshield1","fire_knightshield2","fire_knightshield3"],
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
            },
            "fire_bladeofblazingsun":{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-1,
                },
                ai:{
                    basic:{
                        equipValue:2,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                skills:["qinggang_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
            },
            "fire_nearl":{
                fullskin:true,
                type:"equip",
                subtype:"equip3",
                distance:{
                    globalTo:1,
                },
            },
            "fire_nearl_the_radiant":{
                fullskin:true,
                type:"equip",
                subtype:"equip4",
                distance:{
                    globalFrom:-1,
                },
            },
            "fire_buwei":{
                audio:true,
                fullskin:true,
                type:"trick",
                enable:true,
                selectTarget:-1,
                cardcolor:"black",
                reverseOrder:true,
                "yingbian_prompt":"当你使用此牌选择目标后，你可为此牌减少一个目标",
                "yingbian_tags":["remove"],
                yingbian:function(event){
        event.yingbian_removeTarget=true;
    },
                filterTarget:function(card,player,target){
        //return target.hp<target.maxHp;
        return !target.hujia;
    },
                content:function(){
        target.changeHujia(1,true);
    },
                ai:{
                    basic:{
                        order:function(){
                return 11;
            },
                        useful:[3,1],
                        value:0,
                    },
                    result:{
                        target:function(player,target){
                return (target.hujia<1)?2:0;
            },
                    },
                    tag:{
                        multitarget:1,
                    },
                },
            },
            "fire_rust _lantern":{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:0,
                },
                ai:{
                    equipValue:function(card,player){
            var num=2.5+player.countCards('h','basic')/3;
            return Math.min(num,4);
        },
                    basic:{
                        equipValue:3.5,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                skills:["fire_rust_lantern_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
            },
            "fire_radio":{
                fullskin:true,
            },
            "fire_club":{
                fullskin:true,
                type:"equip",
                subtype:"equip1",
                distance:{
                    attackFrom:-2,
                },
                ai:{
                    basic:{
                        equipValue:2,
                        order:function(card,player){
                if(player&&player.hasSkillTag('reverseEquip')){
                    return 8.5-get.equipValue(card,player)/20;
                }
                else{
                    return 8+get.equipValue(card,player)/20;
                }
            },
                        useful:2,
                        value:function(card,player,index,method){
                if(player.isDisabled(get.subtype(card))) return 0.01;
                var value=0;
                var info=get.info(card);
                var current=player.getEquip(info.subtype);
                if(current&&card!=current){
                    value=get.value(current,player);
                }
                var equipValue=info.ai.equipValue;
                if(equipValue==undefined){
                    equipValue=info.ai.basic.equipValue;
                }
                if(typeof equipValue=='function'){
                    if(method=='raw') return equipValue(card,player);
                    if(method=='raw2') return equipValue(card,player)-value;
                    return Math.max(0.1,equipValue(card,player)-value);
                }
                if(typeof equipValue!='number') equipValue=0;
                if(method=='raw') return equipValue;
                if(method=='raw2') return equipValue-value;
                return Math.max(0.1,equipValue-value);
            },
                    },
                    result:{
                        target:function(player,target,card){
                return get.equipResult(player,target,card.name);
            },
                    },
                },
                skills:["fire_club_skill"],
                enable:true,
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player;
    },
                modTarget:true,
                allowMultiple:false,
                content:function(){
        if(cards.length&&get.position(cards[0],true)=='o') target.equip(cards[0]);
    },
                toself:true,
            },
            "fire_armour":{
                fullskin:true,
            },
            "fire_originium":{
                global:["du_originium"],
                fullskin:true,
                type:"basic",
                cardcolor:"red",
                toself:true,
                enable:function(card,player){
        return player.countMark('fire_change')<3;
    },
                selectTarget:-1,
                filterTarget:function(card,player,target){
        return target==player&&player.countMark('fire_change')<3;
    },
                modTarget:function(card,player,target){
        return target.countMark('fire_change')<3;
    },
                content:function(){
                    'step 0'
        target.addMark('fire_change')
        target.judge();
        'step 1'
        switch(result.suit){
                case 'heart': 
                if(target.countMark('fire_change')==1){
                target.addSkill('fire_originium2_heart')
                target.maxHp+=1
                target.update()
                }
                else if(target.countMark('fire_change')==2){
                target.addSkill('fire_originium2_heart2')
                target.maxHp+=2
                target.loseHp()
                target.update()
                }
                else if(target.countMark('fire_change')==3){
                target.die();
                }
                ;break;
                case 'spade': 
                if(target.countMark('fire_change')==1){
                target.addSkill('fire_originium2_spade')
                target.disableEquip(1);
                target.recover(2);
                }
                else if(target.countMark('fire_change')==2){
                target.addSkill('fire_originium2_spade2')
                target.disableEquip(2);
                target.recover(2);                    
                }
                else if(target.countMark('fire_change')==3){
                target.die();                    
                }        
                ;break;
                case 'diamond':
                if(target.countMark('fire_change')==1){                
                target.addSkill('fire_originium2_diamond')
                }
                else if(target.countMark('fire_change')==2){
                target.addSkill('fire_originium2_diamond2')                
                }
                else if(target.countMark('fire_change')==3){
                target.die();                    
                };break;    
                case 'club': 
                if(target.countMark('fire_change')==1){
                target.addSkill('fire_originium2_club')
                }
                else if(target.countMark('fire_change')==2){
                target.addSkill('fire_originium2_club2')                    
                }
                else if(target.countMark('fire_change')==3){
                target.die();                    
                };break;
        
  }
    },
                ai:{
                    value:-6,
                    useful:6,
                    result:{
                        player:function(player,target){
                            if(player.hp==1&&player.hasCard('h',{name:'jiu'})) return 5;
                            if(player.countMark('fire_change')==2)return 0;
                            return 0;
                        },
                    },
                    order:7.5,
                },
            },
        },
        translate:{
            "fire_leisibian":"蕾丝边裙",
            "fire_leisibian_info":"此牌的使用目标为其他角色。锁定技，你计算与其他角色的距离+1；锁定技，若你的性别为男性/女性，当此牌进入/离开你的装备区时，你将武将牌翻面。",
            "fire_bulinsuo":"捕鳞蓑",
            "fire_bulinsuo_info":"锁定技，你防止即将受到的属性伤害。",
            "fire_lantern":"提灯",
            "fire_lantern_info":"你可以将一张【闪】或【杀】当作【决斗】使用。",
            "fire_scout":"狙击镜",
            "fire_scout_info":"锁定技，当你因执行【杀】的效果而对目标角色造成伤害时，若其装备区内没有牌，则此伤害+1。",
            "fire_knightid":"骑士新编",
            "fire_knightid_info":"当你声明使用普【杀】后，你可以为此【杀】赋予雷电。",
            "fire_camouflage":"环境伪装",
            "fire_camouflage_info":"出牌阶段，对你使用。获得获得〖覆雪〗直到下回合开始。",
            "fire_tacticaltransceiver":"战术电台",
            "fire_tacticaltransceiver_info":"出牌阶段，对自己使用。若判定结果为❤️2~9，则目标角色受到3点火焰伤害。若判定不为❤️2~9，将之移动到下家的判定区里。",
            "fire_supplement":"补",
            "fire_supplement_info":"出牌阶段，对自己使用，目标角色若没有护甲则获得一点护甲。",
            "fire_knightshield":"骑士盾牌",
            "fire_knightshield_info":"锁定技。①【南蛮入侵】、【万箭齐发】和普【杀】对你无效。②当你受到雷电伤害时，此伤害+1。",
            "fire_fieldsniper":"野战狙击",
            "fire_fieldsniper_info":"锁定技，当你成为【杀】的目标后，你令使用者所有非锁定技失效直到此【杀】被抵消或造成伤害。",
            "fire_bladeofblazingsun":"耀阳锋刃",
            "fire_bladeofblazingsun_info":"锁定技，当你使用【杀】指定一名目标角色后，你令其防具技能无效直到此【杀】被抵消或造成伤害。",
            "fire_nearl":"临光",
            "fire_nearl_info":"锁定技，其他角色计算与你的距离+1。",
            "fire_nearl_the_radiant":"耀骑士",
            "fire_nearl_the_radiant_info":"锁定技，你计算与其他角色的距离-1。",
            "fire_buwei":"不畏苦暗",
            "fire_buwei_info":"出牌阶段，对所有角色使用。每名目标角色若没有护甲则获得一点护甲。",
            "fire_rust _lantern":"锈蚀提灯",
            "fire_rust _lantern_info":"你可以将两张基本牌当作【决斗】使用。",
            "fire_radio":"支援电台",
            "fire_radio_info":"①出牌阶段限一次，你可以将【支援电台】移动到一名其他角色的装备区里。②锁定技，准备阶段，你可以卜算3。",
            "fire_club":"防暴棍",
            "fire_club_info":"锁定技，当你因执行【杀】的效果而对目标角色造成伤害时，若其有护甲，则此伤害+1。",
            "fire_armour":"嵌体甲片",
            "fire_armour_info":"此牌的使用目标为其他角色。锁定技，当此牌进入你的装备区时，你获得2点护甲并流失1点体力。",
            "fire_originium":"石",
            "fire_originium_info":"①出牌阶段，对自己使用，进行一次判定并获得对应的病变。②当此牌正面向上离开你的手牌区，或作为你的拼点牌而亮出时，你失去1点体力。",
        },
        list:[["club","2","fire_bulinsuo"],["heart","2","fire_scout"],["club","11","fire_club"],["club","3","fire_originium"],["club","4","fire_originium"],["club","5","fire_originium"],["club","6","fire_originium"],["heart","7","fire_originium"],["heart","8","fire_originium"],["heart","9","fire_originium"],["heart","10","fire_originium"],["spade","3","fire_supplement"],["spade","4","fire_supplement"],["spade","5","fire_supplement"],["spade","6","fire_supplement"],["spade","12","fire_tacticaltransceiver"],["club","13","fire_nearl_the_radiant"],["diamond","7","fire_bladeofblazingsun"],["diamond","5","fire_nearl"],["spade","1","fire_buwei"],["diamond","1","fire_rust _lantern"],["heart","2","fire_knightshield"],["heart","2","fire_knightshield"],["club","1","fire_knightid"],["club","2","fire_leisibian"],["spade","1","fire_fieldsniper"]],
    },
    skill:{
        skill:{
            "fire_old_youlin":{
                audio:"ext:守林人/audio:3",
                trigger:{
                    player:"phaseAfter",
                },
                skillAnimation:false,
                animationColor:"wood",
                forced:true,
                content:function () {
        if(!player.getHistory("sourceDamage").length)
            //player.addTempSkill('fire_ex_fuxue',{player:'phaseBegin'});
        player.draw();
    },
                "_priority":0,
            },
            "fire_trap":{
                marktext:"罠",
                trigger:{
                    target:"useCardToTargeted",
                },
                popname:false,
                charlotte:true,
                filter:function(event,player,skill){
                    var card=event.card
                    var cards=player.getExpansions("fire_trap");
                    if(event.player==event.source) return false;
                    return card&&get.type(card)=='trick'&&cards.length
                },
                content:function(){
                    "step 0"
                    //game.log(get.name(trigger.card))
                    var cards=player.getExpansions('fire_trap');
        if(cards.length)
        player.chooseButton(['展示一张同名罠牌令此牌无效。',player.getExpansions('fire_trap')],1,true).set('ai',function(card){
           
            return get.name(card)==get.name(trigger.card)
        });
        var player=_status.event.player;
        var cards=player.getExpansions('fire_trap');
        "step 1"
        var cards2 = result.links[0]                 
        if(result.bool)
        {
            player.showCards(cards2);
                    //game.log(get.name(cards2))                        
                if(get.name(cards2)==get.name(trigger.card))
                {
                    //game.log('helloworld')                    
                    trigger.getParent().excluded.add(player);
                }
        }
        else{
            event.finish()
        }
                },
                intro:{
                    mark:function(dialog,storage,player){
                        var cards=player.getExpansions('fire_trap');
                        if(player.isUnderControl(true)) dialog.addAuto(cards);
                        else return '共有'+get.cnNumber(cards.length)+'张牌';
                    },
                    markcount:"expansion",
                },
                onremove:function(player,skill){
    var cards=player.getExpansions(skill);
    if(cards.length) player.loseToDiscardpile(cards);
    delete player.storage[skill];
    },
                "_priority":107,
            },
            "fire_ranlie":{
                audio:"ext:守林人/audio:3",
                enable:"phaseUse",
                filterCard:function(card){
        return get.name(card)=='sha';

    },
                position:"hes",
                viewAs:{
                    name:"guohe",
                },
                viewAsFilter:function(player){
        if(!player.countCards('hes',{name:'sha'})) return false;
        
    },
                prompt:"将一张杀当过河拆桥使用",
                check:function(card){return 4-get.value(card)},
                ai:{
                    basic:{
                        order:12,
                        useful:5,
                        value:5,
                    },
                    yingbian:function(card,player,targets,viewer){
            if(get.attitude(viewer,player)<=0) return 0;
            if(game.hasPlayer(function(current){
                return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
            })) return 6;
            return 0;
        },
                    result:{
                        target:function(player,target){
                var att=get.attitude(player,target);
                var nh=target.countCards('h');
                if(att>0){
                    if(target.countCards('j',function(card){
                        var cardj=card.viewAs?{name:card.viewAs}:card;
                        return get.effect(target,cardj,target,player)<0;
                    })>0) return 3;
                    if(target.getEquip('baiyin')&&target.isDamaged()&&
                        get.recoverEffect(target,player,player)>0){
                        if(target.hp==1&&!target.hujia) return 1.6;
                    }
                    if(target.countCards('e',function(card){
                        if(get.position(card)=='e') return get.value(card,target)<0;
                    })>0) return 1;
                }
                var es=target.getCards('e');
                var noe=(es.length==0||target.hasSkillTag('noe'));
                var noe2=(es.filter(function(esx){
                    return get.value(esx,target)>0;
                }).length==0);
                var noh=(nh==0||target.hasSkillTag('noh'));
                if(noh&&(noe||noe2)) return 0;
                if(att<=0&&!target.countCards('he')) return 1.5;
                return -1.5;
            },
                    },
                    tag:{
                        loseCard:1,
                        discard:1,
                    },
                    wuxie:(target,card,player,viewer,status)=>{
                        if(status*get.attitude(viewer,player)>0&&!player.isMad() || target.hp>2&&!target.hasCard(i=>{
                            return get.value(i,target)>3+Math.min(5,target.hp);
                        },'e')&&target.countCards('h')*_status.event.getRand('guohe_wuxie')>1.57) return 0;
                    },
                    button:(button)=>{
                        let player = _status.event.player, target = _status.event.target;
                        if(!lib.filter.canBeDiscarded(button.link,player,target)) return 0;
                        let att = get.attitude(player, target),
                            val = get.buttonValue(button),
                            pos = get.position(button.link),
                            name = get.name(button.link);
                        if(pos==='j'){
                            if(name==='lebu'){
                                let needs=target.needsToDiscard(2);
                                val *= 1.08+0.2*needs;
                            }
                            else if(name=='shandian'||name=='fulei'||name=='plague') val /= 2;
                        }
                        if(get.attitude(player,get.owner(button.link))>0) val = -val;
                        if(pos!=='e') return val;
                        let sub = get.subtypes(button.link);
                        if(sub.includes('equip1')) return val*Math.min(3.6,target.hp)/3;
                        if(sub.includes('equip2')){
                            if(name==='baiyin'&&pos==='e'&&target.isDamaged()){
                                let by=3-0.6*Math.min(5,target.hp);
                                return get.sgn(get.recoverEffect(target,player,player))*by;
                            }
                            return 1.57*val;
                        }
                        if(att<=0&&(sub.includes('equip3')||sub.includes('equip4'))&&(player.hasSkill('shouli')||player.hasSkill('psshouli'))) return 0;
                        if(sub.includes('equip6')) return val;
                        if(sub.includes('equip4')) return val/2;
                        if(sub.includes('equip3')&&!game.hasPlayer((cur)=>{
                            return !cur.inRange(target)&&get.attitude(cur,target)<0;
                        })) return 0.4*val;
                        return val;
                    },
                },
                "_priority":0,
            },
            "fire_henhuo2":{
                charlotte:true,
                mark:true,
                marktext:"火",
                forced:true,
                intro:{
                    content:"已获得火标记<br>锁定技，你的手牌上限-1；当你回复体力后，则你失去“火”标记；锁定技，失去此技能时流失1点体力。",
                },
                mod:{
                    maxHandcardBase:function(player,num){
            return num-1;
        },
                },
                trigger:{
                    player:"recoverEnd",
                },
                filter:function(event,player){
        return event.player.hasSkill('fire_henhuo2');
            
        
    },
                content:function(){
       
       trigger.player.removeSkill('fire_henhuo2',1);
        
    },
                nopop:true,
                priority:15,
                onremove:function(player){
        //var max=player.hp
        //var half=Math.floor(max/2)
        player.loseHp(1);
    },
                "_priority":1500,
            },
            "fire_kugu":{
                audio:"ext:守林人/audio:3",
                forced:true,
                trigger:{
                    source:"damageBegin3",
                },
                filter:function(trigger,player){
        return trigger.player.hasSkill('fire_henhuo2')&&trigger.player.isIn;

    },
                content:function(trigger,player){
         var all=player.countCards("h");
        if(trigger.num>0)
           //&&player.countCards('h')>0)
        {
            //player.chooseToDiscard(all,'h',true);
        trigger.player.removeSkill('fire_henhuo2');
         }
    },
                subSkill:{
                    dieclear:{
                        trigger:{
                            player:"dying",
                        },
                        skillAnimation:true,
                        animationColor:"ice",
                        direct:true,
                        forced:true,
                        filter:function(event,player){
                if(event.name=='dying') return true;
               
            },
                        content:function(trigger,player){
                'step 0'
                var all=player.countCards("h");
                //player.chooseToDiscard(all,'h',true);
                var list=game.filterPlayer(function(current){
                    return current.hasSkill('fire_henhuo2');
                });
                list.sortBySeat();
                event.list=list;
                player.line(list,'green');
                'step 1'
                if(event.list.length){
                    event.list.shift().removeSkill('fire_henhuo2');
                    event.redo();
                }
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                group:["fire_kugu_dieclear"],
                "_priority":0,
            },
            "fire_henhuo":{
                audio:"ext:守林人/audio:3",
                usable:1,
                derivation:"fire_henhuo2",
                group:["fire_henhuo_rage"],
                trigger:{
                    player:"damageBefore",
                },
                logTarget:"source",
                filter:function(event,player){
        return (event.source!=undefined&&!event.source.hasSkill('fire_henhuo2'));
    },
                check:function(event,player){
        return(get.attitude(player,event.source)<=0);
    },
                content:function(){
        
        trigger.source.addSkill('fire_henhuo2',1);
                player.loseHp(1);
        trigger.cancel();
        //player.addTempSkill('fire_ex_fuxue',{player:'phaseBegin'});
    },
                ai:{
                    jueqing:true,
                    maixie:true,
                },
                subSkill:{
                    rage:{
                        sub:true,
                        trigger:{
                            source:"damageBefore",
                        },
                        filter:function(event,player){
        return (event.player!=undefined&&!event.player.hasSkill('fire_henhuo2'));
    },
                        check:function(event,player){
        return(get.attitude(player,event.player)<0)&&player.hp>3;
    },
                        content:function(){
        trigger.player.addSkill('fire_henhuo2',1);
                player.loseHp(1);
                trigger.cancel();
                //player.addTempSkill('fire_ex_fuxue',{player:'phaseBegin'});
        
    },
                        ai:{
                            jueqing:true,
                        },
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_fuxue":{
                audio:"ext:守林人/audio:2",
                skillAnimation:false,
                forced:true,
                derivation:"fire_ex_fuxue",
                animationColor:"red",
                trigger:{
                    player:"damageEnd",
                },
                filter:function(event,player){
        return (event.source!=undefined);
    },
                check:function(event,player){
        return (get.attitude(player,event.source)<=0);
    },
                logTarget:"source",
                content:function(){
        "step 0"
        trigger.source.chooseToDiscard('请选择弃置两张手牌，否则'+get.translation(trigger.player)+'翻面并获得〖覆雪〗直到下回合开始','h',2).set('ai',function(card){
           
            return get.unuseful(card)+2.5*(5-get.player(card).hp);
        });
        "step 1"
        if(result.bool==false){
            
            player.addTempSkill('fire_ex_fuxue',{player:'phaseEnd'});
            player.turnOver();
        }
    
    },
                "_priority":0,
            },
            "fire_soufeng":{
                audio:"ext:守林人/audio:4",
                forced:true,
                trigger:{
                    player:"damageAfter",
                },
                filter:function(event,player,card){
        
        if(event.card&&(event.nature!='thunder')&&(get.name(event.card) == 'sha'||get.name(event.card) == 'juedou')&&(event.source!=undefined)) return true;
    },
                content:function(){
        "step 0"
        trigger.source.chooseToDiscard('请选择弃置一张装备区里的装备牌，否则令'+get.translation(trigger.player)+'回复1点体力','e',{type:'equip'},1).set('ai',function(card){
           
            return get.unuseful(card)+2.5*(5-get.player(card).hp);
        });
        "step 1"
        if(result.bool){
            
            //trigger.source.draw();
        }
        else if(result.bool==false)
            {
                trigger.player.recover();
            }
    
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(!get.tag(card,'damage')) return;
                if(get.nature(card)=='thunder') return;
                if(player.hasCard('e')) return;
                if(card.name=='juedou') return [0,0];
                if(card.name=='sha') return [0,1];
            },
                    },
                },
                "_priority":0,
            },
            "fire_zhixing":{
                enable:"phaseUse",
                audio:"ext:守林人/audio:2",
                usable:1,
                filterTarget:function(card,player,target){
        return player.inRange(target)&&player!=target&&target.countCards('e',{subtype:'equip2'})>0;
    },
                content:function(){
        'step 0'
        target.discard(target.getCards('e',{subtype:'equip2'}),true);
        'step 1'
        player.recover();
        target.recover();
    },
                ai:{
                    order:15,
                    threaten:6,
                    result:{
                        target:-1,
                        player:0.5,
                    },
                },
                "_priority":0,
            },
            "fire_dunxing":{
                audio:"ext:守林人/audio:2",
                enable:"chooseToUse",
                trigger:{
                    global:"respondEnd",
                },
                direct:true,
                filter:function(event,player){ 
                               if(event.name=='chooseToUse') return !player.hasSkill('fire_dunxing_used')&&player.getEquip(1)?true:false;
        var evt=event.getParent(2);
        return evt.name=='nanman'&&evt.getParent().player==player&&event.player!=player
    },
                frequent:true,
                content:function(){
        var cards=trigger.cards.slice(0);
        for(var i=0;i<cards.length;i++){
            if(get.position(cards[i],true)!='o'){
                cards.splice(i--,1);
            }
        }
        game.delay(0.5);
                player.logSkill(event.name);
        player.gain(cards,'gain2');
    },
                filterCard:function(card,player){
        return card==player.getEquip(1);
    },
                position:"e",
                viewAs:{
                    name:"nanman",
                },
                prompt:"将一张装备区内的武器牌当南蛮入侵使用",
                check:function(card){
        var player=_status.currentPhase;
        if(player.countCards('he',{subtype:get.subtype(card)})>1){
            return 11-get.equipValue(card);
        }
        if(player.countCards('h')<player.hp){
            return 6-get.value(card);
        }
        return 2-get.equipValue(card);
    },
                precontent:function(){
                    player.addTempSkill('fire_dunxing_used','phaseUseAfter');
                },
                subSkill:{
                    used:{
                        charlotte:true,
                        sub:true,
                        "_priority":0,
                    },
                },
                ai:{
                    order:9,
                    threaten:1.1,
                    wuxie:function(target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','sha')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    basic:{
                        order:9,
                        useful:[5,1],
                        value:5,
                    },
                    result:{
                        "target_use":function(player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                        target:function(player,target){
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondSha:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
                "_priority":0,
            },
            "fire_yizhi":{
                audio:"ext:守林人/audio:3",
                trigger:{
                    player:"damageEnd",
                },
                filter:function(event,player){
        return (event.source!=undefined)&&(!event.source.isLinked());
    },
                check:function(event,player){
        return (get.attitude(player,event.source)<=0);
    },
                logTarget:"source",
                content:function(){
            trigger.source.link(true);    
            
    },
                ai:{
                    maixie:true,
                },
                "_priority":0,
            },
            "fire_buce":{
                audio:"ext:守林人:4",
                trigger:{
                    global:"phaseDrawBefore",
                },
                check:function(event,player){
        return (get.attitude(player,event.source)<0);
    },
                usable:1,
                filter:function(event,player){

        if (player.countCards('h')>0) return true;
    },
                logTarget:"judge",
                content:function(){
       "step 0"
        player.chooseToDiscard('h',1).set('ai',function(card){
            
            return get.unuseful(card)+2.5*(5-get.player(card).hp);
        })
       "step 1"
       if(result.bool){
        trigger.player.judge()}
        
        "step 2"
        switch(result.suit){
                case 'heart': trigger.player.recover();
                trigger.cancel();
                //trigger.player.chooseToDiscard(2,'h',true);
                break;
                case 'club':
                trigger.cancel();
                //trigger.player.chooseToDiscard(2,'h',true);
                trigger.player.turnOver(false);
                trigger.player.link(false);
                break;
                case 'spade': trigger.player.loseHp();trigger.player.draw(2);
                break;
                case 'diamond': trigger.player.draw(2);
                trigger.player.turnOver();
                break;       
  }
  },
                "_priority":0,
            },
            "fire_fuxue2":{
                audio:"ext:守林人/audio:2",
                group:["fire_fuxue2_change"],
                subSkill:{
                    change:{
                        unique:true,
                        skillAnimation:false,
                        animationColor:"ice",
                        trigger:{
                            player:"phaseBefore",
                        },
                        forced:true,
                        content:function(){

        "step 0"

        if(player.name=='firewatch'||player.name1=='firewatch'||player.name2=='firewatch')

            {

               player.chooseControl('是','否',function(){

                  

                   return '是';   

                        return '否';

                    }).set('prompt','是否选择转变为☆守林人形态'); 

                event.goto(1);

            }

        if(player.name=='new_firewatch'||player.name1=='new_firewatch'||player.name2=='new_firewatch')

            {

               player.chooseControl('是','否',function(){


                   return '是'; 

                   

                        return '否';

                    }).set('prompt','是否选择转变为守林人形态');  

                event.goto(2);

            }

        

        "step 1"

      var hp=player.hp,num=player.maxHp;

       

                console.log(event.player.name);

                console.log(event.player.name2);if(result.control=='是'&&(event.player.name=='firewatch'||event.player.name1=='firewatch'||event.player.name2=='firewatch'))

            {

                if(event.player.name2=='firewatch')

                    player.reinit(player.name2,'new_firewatch',false);
                   

                if(event.player.name1=='firewatch')

                    player.reinit(player.name1,'new_firewatch',false)
                    player.changeGroup('sami');

                player.update();

            }

        player.hp=hp;

        event.finish();

        "step 2"

          var hp=player.hp,maxHp=player.maxHp;

        if(result.control=='是'&&(event.player.name=='new_firewatch'||event.player.name1=='new_firewatch'||event.player.name2=='new_firewatch')){

                if(event.player.name2=='new_firewatch')

                    player.reinit(player.name2,'firewatch',false);

                if(event.player.name1=='new_firewatch')

                    player.reinit(player.name1,'firewatch',false)
                    player.changeGroup('kazimierz');

                player.update();   

            }

      player.hp=hp;

           player.update();

              event.finish();

    },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_gaosi":{
                audio:"ext:守林人/audio:1",
                init:function(player,skill){

player.storage.fire_gaosi=false
},
                skillAnimation:true,
                animationColor:"fire",
                mark:true,
                marktext:"终",
                intro:{
                    name:"终结连射",
                    content:"limited",
                },
                trigger:{
                    global:"die",
                },
                filter:function(event,player){
                    return event.player.getStockSkills('仲村由理','天下第一').filter(function(skill){
                        var info=get.info(skill);
                        return player.hasSkill('fire_new_jianhu')&&info&&!info.juexingji&&!info.hiddenSkill&&!info.zhuSkill&&!info.charlotte&&!info.limited&&!info.dutySkill;
                    }).length>0;
                },
                logTarget:"player",
                limited:true,
                check:function(event,player){
                    var list=event.player.getStockSkills('仲村由理','天下第一').filter(function(skill){
                        var info=get.info(skill);
                        return info&&!info.juexingji&&!info.hiddenSkill&&!info.zhuSkill&&!info.charlotte&&!info.limited&&!info.dutySkill;
                    });
                    var negSkill=list.some(function(skill){
                        return get.skillRank(skill,'inout')<=0;
                    });
                    var att=get.sgnAttitude(event.player,player);
                    if(!player.storage.retuogu){
                        if(negSkill&&att<0) return false;
                        return true;
                    }
                    list.sort(function(a,b){
                        return att*(get.skillRank(b,'inout')-get.skillRank(a,'inout'));
                    })[0];
                    return get.skillRank(list[0],'inout')>=get.skillRank(player.storage.retuogu,'inout');
                },
                content:function(){
                    'step 0'
                    player.awakenSkill('fire_gaosi');
                    player.removeSkill('fire_new_jianhu');                    
                    player.storage.fire_gaosi=true                    
                    var list=trigger.player.getStockSkills('仲村由理','天下第一').filter(function(skill){
                        var info=get.info(skill);
                        return info&&!info.juexingji&&!info.hiddenSkill&&!info.zhuSkill&&!info.charlotte&&!info.limited&&!info.dutySkill;
                    });
                    if(list.length==1) event._result={control:list[0]};
                    else trigger.player.chooseControl(list).set('prompt','选择令'+get.translation(player)+'获得一个技能').set('forceDie',true).set('ai',function(){
                        var att=get.sgnAttitude(_status.event.getTrigger().player,player);
                        if(att==0) return list.randomGet();
                        var listx=list.map(function(skill){
                            return [skill,get.skillRank(skill,'inout')];
                        }).sort(function(a,b){
                            return att*(b[1]-a[1]);
                        }).slice(0,2);
                        var listx2=[0];
                        if(Math.abs(listx[0][1]-listx[1][1])<=0.5&&Math.sign(listx[0][1])==Math.sign(listx[1][1])) listx2.push(1);
                        return listx[listx2.randomGet()][0];
                    });
                    'step 1'
                    player.addSkillLog(result.control);
                    game.broadcastAll(function(skill){
                        var list=[skill];game.expandSkills(list);
                        for(var i of list){
                            var info=lib.skill[i];
                            if(!info) continue;
                            if(!info.audioname2) info.audioname2={};
                            info.audioname2.absinthe='fire_gaosi';
                        }
                    },result.control);
                },
                ai:{
                    order:8,
                    threaten:3,
                    result:{
                        target:-1,
                        player:0.5,
                    },
                },
                "_priority":900,
            },
            "fire_jianhu":{
                audio:"ext:守林人/audio:2",
                forced:true,
                trigger:{
                    player:"damageBegin2",
                },
                filter:function(event,player){
        return (event.source!=undefined)&&(!event.nature)&&(event.num>0)&&(event.source.isLinked());
    },
                check:function(event,player){
        return (get.attitude(player,event.source)<=0);
    },
                logTarget:"source",
                content:function(){
            "step 0"
        var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
        trigger.source.chooseToDiscard('e','监护：弃置一张装备区内的牌,否则取消对'+get.translation(player)+'造成的伤害',function(card){
            return get.position(card)=='e';
        }).set('ai',function(card){
            if(_status.event.eff>0){
                return 10-get.value(card);
            }
            return 0;
        }).set('eff',eff);
        "step 1"
        if(result.bool==false){
            trigger.cancel();
        }
            
    },
                "_priority":0,
                ai:{
                    effect:{
                        target:function(card,player,target,current){
                if((get.tag(card, 'damage'))&&get.attitude(player,target)<0){
                    var eq=player.getCards('e');
                    if(eq.length<1) return 0;
                    if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
                    return [1,0,1,-0.5];
                }
            },
                    },
                },
            },
            "fire_xianqv":{
                forced:true,
                silent:true,
                popname:false,
                trigger:{
                    player:"phaseBegin",
                },
                content:function(){
                    'step 0'
                    var targets=game.filterPlayer(current=>current!=player);
                    for(var target of targets){
                        target.addTempSkill('fire_xianqv_ban');
                    }
                },
                subSkill:{
                    ban:{
                        silent:true,
                        popname:false,
                        forced:true,
                        onremove:true,
                        charlotte:true,
                        mod:{
                            cardEnabled:function(card,player){
                                if(get.color(card)=='black') return false;
                            },
                            cardRespondable:function(card,player){
                                if(get.color(card)=='black') return false;
                            },
                            cardSavable:function(card,player){
                                if(get.color(card)=='black') return false;
                            },
                        },
                        mark:false,
                        sub:true,
                        "_priority":0,
                        popup:false,
                    },
                },
                mod:{
                    targetEnabled:function(card,player,target,now){
            
            if(_status.currentPhase!=target&&(card.name=='shunshou'||card.name=='guohe')) return false;
            
            
        },
                },
                "_priority":0,
                popup:false,
            },
            "fire_qiusheng":{
                audio:"ext:守林人:2",
                trigger:{
                    player:"judge",
                },
                direct:true,
                preHidden:true,
                filter:function(event,player){
        return player.countCards(get.mode()=='guozhan'?'hes':'hs')>0;
    },
                content:function(){
        "step 0"
        player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('fire_qiusheng'),get.mode()=='guozhan'?'hes':'hs',function(card){
            var player=_status.event.player;
            var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
            if(mod2!='unchanged') return mod2;
            var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
            if(mod!='unchanged') return mod;
            return true;
        }).set('ai',function(card){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var judging=_status.event.judging;
            var result=trigger.judge(card)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            if(attitude==0||result==0) return 0;
            if(attitude>0){
                return result-get.value(card)/2;
            }
            else{
                return -result-get.value(card)/2;
            }
        }).set('judging',trigger.player.judging[0]).setHiddenSkill('fire_qiusheng');
        "step 1"
        if(result.bool){
            player.respond(result.cards,'fire_qiusheng','highlight','noOrdering');
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            if(trigger.player.judging[0].clone){
                trigger.player.judging[0].clone.classList.remove('thrownhighlight');
                game.broadcast(function(card){
                    if(card.clone){
                        card.clone.classList.remove('thrownhighlight');
                    }
                },trigger.player.judging[0]);
                game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
            }
            game.cardsDiscard(trigger.player.judging[0]);
            trigger.player.judging[0]=result.cards[0];
            trigger.orderingCards.addArray(result.cards);
            game.log(trigger.player,'的判定牌改为',result.cards[0]);
            game.delay(2);
        }
        'step 3'
        player.recover();
    },
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                },
                "_priority":0,
            },
            "fire_femboy":{
                audio:"ext:firewatch/audio:2",
                forced:true,
                trigger:{
                    player:"phaseBegin",
                },
                filter:function(event,player){
        if(player.sex=='male') return true;
    },
                content:function(){
            player.loseHp();
            
    },
                "_priority":0,
            },
            "fire_leisibian1":{
                equipSkill:true,
                forced:true,
                priority:6,
                trigger:{
                    player:"phaseBegin",
                },
                audio:"ext:firewatch:true",
                filter:function(event,player){
        if(player.hasSkillTag('unequip2')) return false;
        if(event.player.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return false;
        if(player.sex!='female') return true;
       
    },
                content:function(){
        
            
           player.sex='female'
       
    },
                "_priority":575,
            },
            "fire_zhanhou":{
                usable:1,
                trigger:{
                    global:"useCardToTarget",
                },
                priority:15,
                filter:function(event,player){
        if(event.nature)return false;
        return (event.card.name=='sha'||event.card.name=='juedou')&&event.player!=player&&
            get.distance(player,event.targets[0])<=1&&
            
            event.targets.length==1;
        //&&(!event.card.nature)
            //&&(player.hasCard('hes',{name:'sha'})
            //||player.hasCard('hes',{name:'juedou'}));
        
        //event.targets.contains(player)==false;
    },
                direct:true,
                content:function(){
        "step 0"
        
        var effect=0;
        for(var i=0;i<trigger.targets.length;i++){
            effect+=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
        }
        var str='战吼：是否打出一张杀抵消'+get.translation(trigger.player);
        if(trigger.targets&&trigger.targets.length){
            str+='对'+get.translation(trigger.targets);
        }
        str+='的'+get.translation(trigger.card)+'并使使用者横置？';
        var next=player.chooseToRespond({name:'sha'},str);
        
        next.ai=function(card){
            if(effect<0){
                return 9-get.value(card);
            }
            return -1;
        }
        next.autodelay=true;
        next.logSkill=['fire_zhanhou',trigger.targets];
        "step 1"
        if(result.bool){
            //player.respond(result.cards,'highlight','fire_zhanhou','noOrdering');
            trigger.getParent().excluded.add(trigger.target);
            trigger.player.link(true);
            //trigger.player.addTempSkill('fire_chaofeng',{player:'phaseBegin'});
            player.draw();
        }
    },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
                "_priority":1500,
            },
            "fire_chaofeng":{
                global:"fire_chaofeng_disable",
                nopop:true,
                unique:true,
                gainable:true,
                mark:true,
                intro:{
                    content:"锁定技，与你相邻的角色只能选择你为出杀或决斗目标",
                },
                subSkill:{
                    disable:{
                        mod:{
                            targetEnabled:function(card,player,target){
                    if(player.hasSkill('fire_chaofeng')) return;
                    if(card.name=='sha'||card.name=='juedou'){
                        if(target.hasSkill('fire_chaofeng')) return;
                        if(game.hasPlayer(function(current){
                            return (current.hasSkill('fire_chaofeng')&&get.distance(player,current,'pure')==1);
                        })){
                            return false;
                        }
                    }
                },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_chaofeng_disable":{
                mod:{
                    targetEnabled:function(card,player,target){
            if(player.hasSkill('fire_chaofeng')) return;
            if(card.name=='sha'||card.name=='juedou'){
                if(target.hasSkill('fire_chaofeng')) return;
                if(game.hasPlayer(function(current){
                    return (current.hasSkill('fire_chaofeng')&&get.distance(player,current,'pure')==1);
                })){
                    return false;
                }
            }
        },
                },
                sub:true,
            },
            "fire_lingxiu":{
                trigger:{
                    player:"phaseEnd",
                },
                group:"fire_lingxiu_hujia",
                subSkill:{
                    hujia:{
                        trigger:{
                            player:"damageEnd",
                        },
                        filter:function(event){
                return event.hujia==event.num;
            },
                        forced:true,
                        content:function(){
                player.draw();
            },
                        sub:true,
                        "_priority":0,
                    },
                    hongse:{
                        sub:true,
                        trigger:{
                            target:"shaBegin",
                        },
                        forced:true,
                        priority:6,
                        audio:true,
                        filter:function(event,player){
        if(player.hujia) return false;
        if(player.hasSkillTag('unequip2')) return false;
        if(event.player.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return false;
        return (event.card.name=='sha'&&get.suit(event.card)=='heart')
    },
                        content:function(){
        trigger.cancel();
    },
                        ai:{
                            effect:{
                                target:function(card,player,target){
               
                if(!target.hujia&&card.name=='sha'&&get.suit(card)=='heart') return 'zerotarget';
            },
                            },
                        },
                        "_priority":600,
                    },
                },
                forced:true,
                filter:function(event,player){
        return !player.hujia&&event.player==player
        
    },
                content:function(){
        var list=game.countPlayer(function(current){
                    return current.isLinked();
                });
        var half=Math.floor(list/2)
        player.changeHujia(1+half);
        player.update();
    },
                "_priority":0,
            },
            "fire_shehun":{
                group:["fire_shehun_discard","fire_shehun_respond"],
                subfrequent:["judge"],
                subSkill:{
                    discard:{
                        audio:2,
                        trigger:{
                            global:"loseAfter",
                        },
                        filter:function(event,player){
                if(event.type!='discard') return false;
                if(event.player==player) return false;
                for(var i=0;i<event.cards2.length;i++){
                    if(get.name(event.cards2[i],event.player)=='sha'&&get.color(event.cards2[i],event.player)=='black'&&get.position(event.cards2[i],true)=='d'){
                        return true;
                    }
                }
                return false;
            },
                        direct:true,
                        content:function(){
                "step 0"
                if(trigger.delay==false) game.delay();
                "step 1"
                var cards=[];
                for(var i=0;i<trigger.cards2.length;i++){
                    if(get.name(trigger.cards2[i],trigger.player)=='sha'&&get.color(trigger.cards2[i],trigger.player)=='black'&&get.position(trigger.cards2[i],true)=='d'){
                        cards.push(trigger.cards2[i]);
                    }
                }
                if(cards.length){
                    player.chooseButton(['摄魂：选择要获得的牌',cards],[1,cards.length]).set('ai',function(button){
                        return get.value(button.link,_status.event.player,'raw');
                    });
                }
                "step 2"
                if(result.bool){
                    player.logSkill(event.name);
                    player.gain(result.links,'gain2','log');
                }
            },
                        sub:true,
                        "_priority":0,
                    },
                    respond:{
                        audio:2,
                        trigger:{
                            global:"respondEnd",
                        },
                        direct:true,
                        filter:function(event,player){
        if(event.card.name!='sha') return false;
             
        if(event.player==player) return false;
        if(event.cards){
            for(var i=0;i<event.cards.length;i++){
                if(get.position(event.cards[i],true)=='o') return true;
            }
        }
        return false;
    },
                        frequent:true,
                        content:function(){
        var cards=trigger.cards.slice(0);
        for(var i=0;i<cards.length;i++){
            if(get.position(cards[i],true)!='o'){
                cards.splice(i--,1);
            }
        }
        game.delay(0.5);
                player.logSkill(event.name);
        player.gain(cards,'gain2');
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_yuzhi":{
                check:function(event,player){
        return(get.attitude(player,event.player)<0);
                },
                trigger:{
                    global:"phaseUseAfter",
                },
                filter:function(event,player,card){
                    return player.hasCard({color:'black'},'h')
                },
                content:function(){
        'step 0'            
        if(player.countCards('h',{color:'black'})>=2)
        player.chooseToDiscard('h',{color:'black'},2).set('ai',function(card){
            
            return get.unuseful(card)+2.5*(5-get.player(card).hp);
        })
        else event.finish()
        'step 1'
        if(result.bool)
        {
        trigger.player.judge(card=>{
                            if(get.color(card)=='black') return -4;
                            return 2;
                        }).set('judge2',result=>{
                            return result.bool===false?true:false;
                        });
                    }
                    else event.finish();
                    'step 2'
                    if(result.bool){
                        event.finish()
                    }
                    else{
                        trigger.player.turnOver()
                    }
        
    },
                ai:{
                    order:9,
                    threaten:1.5,
                },
                "_priority":0,
            },
            "fire_old_luling":{
                audio:"fire_youlin",
                trigger:{
                    player:"phaseJieshuBefore",
                },
                derivation:"fire_ex_fuxue",
                skillAnimation:false,
                animationColor:"wood",
                forced:true,
                content:function () {
        if(player.getHistory("sourceDamage").length)player.draw();
        else{ 
            //player.turnOver();
            player.addTempSkill('fire_ex_fuxue',{player:'phaseBegin'});}
    },
                "_priority":0,
            },
            "fire_panbing":{
				derivation:"fire_fukong",
                group:"fire_panbing_lost",
                subSkill:{
                    lost:{
                        sub:true,
                        audio:"ext:firewatch/audio:3",
                        trigger:{
                            source:"damageBefore",
                        },
                        filter:function(trigger,player){
        return trigger.player.hasSkill('fire_fukong')
            &&(trigger.player!=undefined)
        &&player.getCards('h').length;
    },
                        content:function(){
       'step 0'
        trigger.cancel();
        player.chooseToDiscard('h',1,true)
        'step 1'
        if(result.bool)
            {
                trigger.player.loseMaxHp(true)
            }
        
    },
                        ai:{
                            jueqing:true,
                            order:8,
                            threaten:2,
                            result:{
                                target:-1,
                                player:0.5,
                            },
                        },
                        "_priority":0,
                    },
                },
                audio:"ext:守林人/audio:3",
                trigger:{
                    source:"damageBefore",
                },
                check:function(event,player){
                    if(get.damageEffect(event.player,player,player)<0) return get.attitude(player,event.player)<0                    
                },
                filter:function(trigger,player){
        return !trigger.player.hasSkill('fire_fukong')&&(trigger.player!=undefined);
    },
                content:function(){
        player.draw();
        trigger.player.addSkill('fire_fukong',1);
        trigger.cancel();
        
        
    },
                ai:{
                    jueqing:true,
                    order:8,
                    threaten:2,
                    result:{
                        target:-1,
                        player:0.5,
                    },
                },
                "_priority":0,
            },
            "fire_zhuixue":{
				derivation:"fire_fukong",
                audio:"ext:firewatch/audio:2",
                enable:"phaseUse",
                usable:1,
                check:function(event,player){
        var list=game.filterPlayer(function(current){
            return current.hasSkill('fire_fukong');
        });
        return list.length
    },
                filter:function(event,player){
        if (player.countCards('h')>0) return true;
    },
                position:"h",
                content:function(player){
        'step 0'
        
        player.chooseToDiscard(1,'h');
        var list=game.filterPlayer(function(current){
            return current.hasSkill('fire_fukong');
        });
        list.sortBySeat();
        event.list=list;
        player.line(list,'green');
        'step 1'
        if(result.bool){
        if(event.list.length){
            event.list.shift().removeSkill('fire_fukong');
            event.redo();
        }
            }
    },
                "_priority":0,
            },
            "fire_fukong":{
                charlotte:true,
                mark:true,
                marktext:"浮",
                forced:true,
                intro:{
                    content:"已获得浮空标记<br>锁定技，你与其他角色相互计算距离时+1；锁定技，出牌阶段结束后，若你的手牌数大于你的体力值，则你失去“浮空”标记；锁定技，失去此技能时流失1点体力。",
                },
                trigger:{
                    player:"phaseUseAfter",
                },
                filter:function(trigger,player){
        return trigger.player.hasSkill('fire_fukong');
            
        
    },
                content:function(){
       if(trigger.player.countCards('h')>trigger.player.hp)
       trigger.player.removeSkill('fire_fukong',1);
        
    },
                mod:{
                    globalFrom:function(from,to,distance){
        return distance+1;
        },
                    globalTo:function(from,to,distance){

        return distance+1; 

      },
                },
                nopop:true,
                priority:15,
                onremove:function(player){
        player.loseHp(1)
    },
                "_priority":1500,
            },
            "fire_liechao":{
				derivation:"fire_fukong",
                audio:"ext:守林人/audio:3",
                trigger:{
                    source:"damageBegin2",
                },
                filter:function(event,player){
        return event.card.name=='juedou'&&(event.player!=undefined);
    },
                content:function(event,card){
     if(trigger.player.hasSkill('fire_fukong'))
        {
            trigger.num++
        }
     else
     {
         trigger.player.addSkill('fire_fukong',1);
         trigger.cancel();
         
     }
       
        
    },
                "_priority":0,
            },
            "fire_bingzhu":{
                audio:"ext:firewatch/audio:3",
                enable:"phaseUse",
                filterCard:function(card){
        return get.name(card)=='shan'||get.name(card)=='sha';

    },
                position:"h",
                viewAs:{
                    name:"juedou",
                },
                viewAsFilter:function(player){
        if(player.countCards('h',{name:'shan'})
           ||(player.countCards('h',{name:'sha'}))) return true;
        
    },
                prompt:"将一张闪或杀当决斗使用",
                check:function(card){return 4-get.value(card)},
                ai:{
                    wuxie:function(target,card,player,viewer){
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
                    basic:{
                        order:5,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                        player:function(player,target,card){
                if(player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)){
                    return 0;
                }
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
                "_priority":0,
            },
            "fire_bifeng":{
                audio:"ext:firewatch/audio:3",
                forced:true,
                mod:{
                    globalTo:function(from,to,distance){
        return distance+1; 
        },
                    attackRange:function(player,num){
                        return num=1;
                    },
                },
                "_priority":0,
            },
            "fire_old_bifeng":{
                audio:"ext:firewatch/audio:3",
                forced:true,
                mod:{
                    globalTo:function(from,to,distance){

        return distance+1; },
                    globalFrom:function(from,to,distance){
            return distance+1;
        },
                },
                trigger:{
                    player:"damageBegin",
                },
                filter:function(event,player){

               if(event.source==player)return false;
        if(event.source==undefined)return false;
               return get.distance(player,event.source,'pure')==1;
        //if (player.countCards('h',{type:'basic'})>=1)return true;
    },
                content:function(player){
        'step 0'
       
        if(player.chooseToDiscard('h',1,{type:'basic'}).set('ai',function(card){
            
            return card.type=='basic';
        }))return true
         
        'step 1'
       if(result.bool) 
        {trigger.cancel()}
    else{
        player.removeSkill("fire_bifeng");
        player.recover(player.getDamagedHp());
    }
        
        
    },
                "_priority":0,
            },
            "fire_xianshan":{
                audio:"ext:firewatch/audio:3",
                shaRelated:true,
                forced:true,
                trigger:{
                    player:"useCardToTarget",
                },
                filter:function(event,player){
        return event.card.name=='sha'&&player.countCards('h')<player.hp;
    },
                content:function(trigger,target,event){
        'step 0'
        var evt=trigger.getParent()
        if(player.stat[player.stat.length-1].card.sha>0){
            player.stat[player.stat.length-1].card.sha--;
        }
    trigger.addCount=false;
        
    
        'step 1'
        if(trigger.target.chooseToRespond('h',1,{name:'sha'}).set('ai',function(card){
            
            return card.name='sha';
        }))return true
            
        
        'step 2'
        if(result.bool)
            
        {
            //trigger.target.respond(result.cards,'highlight','fire_xianshan','noOrdering');
            //trigger.targets.remove(trigger.target);
            //trigger.getParent().triggeredTargets2.remove(trigger.target);
            //trigger.untrigger();
            trigger.finish();
        }
        else trigger.target.damage(1,player);
        
        'step 3'
        event.finish
        
    },
                ai:{
                    order:8,
                    threaten:2,
                    result:{
                        target:-1,
                        player:0.5,
                    },
                },
                "_priority":0,
            },
            "fire_jianai":{
                audio:"ext:firewatch/audio:2",
                subSkill:{
                    phaseoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"坚",
                        intro:{
                            name:"坚爱",
                            content:"我来掩护你（我该怎样去信任别人呢）",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    global:"shaBegin",
                },
                priority:10,
                filter:function(event,player,targets){
            if(event.target.hasSkill('fire_jianai_phaseoff')) return false;
            if(event.target.contains(player))return false;
                return (event.target!=undefined)
                &&(event.target!=player)
                &&event.targets.length==1
   
    },
                check:function(event,player){
        return(get.attitude(player,event.target)>0.2);
    },
                content:function()
    {
        player.loseHp(1);
        trigger.target.draw()
        trigger.target.addTempSkill('fire_jianai_phaseoff',{global:'phaseBegin'});
        player.draw()    
            //trigger.player.addTempSkill('fire_micai',1);
            //player.addTempSkill('fire_micai',1);
            //player.addTempSkill('fire_jianai_roundoff','roundStart');
            //player.update();
            
        
    
    },
                tag:"maixie",
                ai:{
                    order:8,
                    threaten:1.5,
                    result:{
                        target:function(player,target){
            var player=_status.event.player
            if(get.attitude(player,target) >0.2&&(player.countCards('h')>1))
            return 2
               },
                        player:function(player,target,card){
                
                if(player.countCards('h',{name:'sha'})>=1) return 2
                  
               
                   
                
                  
                
                
                
            },
                    },
                },
                "_priority":0,
            },
            "fire_qiangxin":{
                audio:"ext:firewatch/audio:1",
                init:function(player,skill){
    player.storage.fire_qiangxin=false

},
                skillAnimation:true,
                animationColor:"ice",
                mark:true,
                marktext:"心",
                intro:{
                    name:"强心剂",
                    content:"limited",
                },
                trigger:{
                    global:"phaseEnd",
                },
                limited:true,
                priority:5,
                filter:function(event,player){
        return event.player.hp<event.player.maxHp&&!player.storage.fire_qiangxin&&event.player.hujia;
            
    },
                check:function(event,player){
        return (get.attitude(player,event.player)>0);
    },
                content:function(){
            player.awakenSkill('fire_qiangxin');
            player.storage.fire_qiangxin=true;
        logSkill=['fire_qiangxin',trigger.player];
        var hu=trigger.player.hujia
        trigger.player.changeHujia(-hu)
        trigger.num=trigger.num+hu
        trigger.player.recover(hu)
    },
                ai:{
                    order:9,
                    threaten:2,
                    result:{
                        target:1,
                        player:1.5,
                    },
                },
                "_priority":500,
            },
            "fire_yinshui":{
                audio:"ext:firewatch:2",
                usable:1,
                subSkill:{
                    fire:{
                        forced:true,
                        trigger:{
                            player:"damageBegin3",
                        },
                        filter:function(event,player){
        return (event.source!=undefined)&&(event.nature=='fire')
            &&(event.num>0)&&(player.hujia);
    },
                        check:function(event,player){
        return (get.attitude(player,event.source)<=0);
    },
                        logTarget:"source",
                        content:function(){
            trigger.num--;
            
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                enable:"phaseUse",
                filterCard:function(card,player,event){
        return card.name=='jiu'
    },
                position:"h",
                check:function(card){
        return 9-get.value(card)
    },
                filterTarget:function(card,player,target){
        if(target.hujia) return false;
        return player.inRange(target)||player==target
    },
                filter:function(event,player){
        return player.countCards('h',function(card){
            return card.name=='jiu'
        })
    },
                content:function(){
        target.changeHujia(2);
        
    },
                locked:false,
                ai:{
                    order:9,
                    result:{
                        target:function(player,target){
                var max=target.maxHp
                if(target.hp==max) return 5;
                if(target.hp<(max/2)) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:2,
                },
                "_priority":0,
            },
            "fire_yiwu":{
                audio:"ext:firewatch:2",
                enable:"phaseUse",
                usable:1,
                direct:true,
                filter:function(event,player){
        if(!player.countCards('h')==0) return true;
       
    },
                check:function(event,player,target){
        return(get.attitude(player,target)<=0);
    },
                filterTarget:function(card,player,target){
        return player.canCompare(target);
    },
                content:function(){
        "step 0"
        player.chooseToCompare(target);
        "step 1"
        if(result.bool){
           
            //player.gain(get.cardPile2(function(card){return card.name=="jiu"}),"gain2");
            player.storage.fire_qiangxin=false;
            player.restoreSkill('fire_qiangxin');
            game.log(player,'重置了','#g【强心】');
            
        }
        else{
            target.gain(get.discardPile(function(card){return card.name=="jiu"}),"gain2");
        }
        "step 2"
        if(result.bool){
           
            //player.gain(get.cardPile2(function(card){return card.name=="jiu"}),"gain2");
           
            event.finish();    
            
        }
        else{
            player.gain(get.discardPile(function(card){return card.name=="jiu"}),"gain2");
            event.finish();
        }
       
    },
                ai:{
                    order:9,
                    threaten:1.5,
                    result:{
                        target:function(player,target){
                var att=get.attitude(player,target);
                var oc=(target.countCards('h')==1);
                var hp=(target.hp==1);
                if(att>0&&oc) return 0;
                if(att>0&&hp) return 2;
                
            },
                        player:function(player,target){
                if(target.hasSkillTag('jueqing',false,target)) return -10;
                var mn=1;
                var hs=player.getCards('h');
                for(var i=0;i<hs.length;i++){
                    mn=Math.max(mn,get.number(hs[i]));
                }
                if(mn<=10&&player.hp<2) return -20;
                var hs=player.getCards('h');
                
                var max=player.maxHp-hs.length;
                
                switch(max){
                    case 0:return mn==13?0:-20;
                    case 1:return mn>=12?0:-15;
                    case 2:return 0;
                    case 3:return 1;
                    default:return max;
                }
            },
                    },
                },
                "_priority":0,
            },
            "fire_micai":{
                mark:true,
                marktext:"迷",
                priority:145,
                intro:{
                    content:"锁定技，你不能成为【杀】或指定单名角色为目标的牌的目标，当你成为一张普通锦囊牌的目标时，若你是此牌的唯一目标，你令此牌对你无效。",
                },
                nopop:true,
                forced:true,
                mod:{
                    targetEnabled:function(card,player,target,now){
            
                if(card.name=='sha'||!get.tag(card,'multitarget')||get.info(card).singleCard) return false;
            
            
        },
                },
                group:"fire_micai_lose",
                subSkill:{
                    lose:{
                        sub:true,
                        forced:true,
                        trigger:{
                            player:"phaseBegin",
                        },
                        content:function(){
                trigger.player.removeSkill('fire_micai',1);
            },
                        "_priority":0,
                    },
                },
                filter:function(event,player){
        return (event.card.name=='sha'||get.type(event.card)=='trick')&&event.targets&&event.targets.length==1;
    },
                check:function(event,player){
        return event.getParent().excluded.contains(player)||get.effect(player,event.card,event.player,player)<=0;
    },
                trigger:{
                    target:"useCardToTargeted",
                },
                content:function(){
        trigger.getParent().excluded.add(player);
       
        
    },
                ai:{
                    effect:{
                        target:function(card,player,target){
                if(card.name!='shuiyanqijunx'&&get.tag(card,'loseCard')) return 0;
    
            
       },
                    },
                },
                "_priority":14500,
            },
            "fire_yinshan":{
                trigger:{
                    player:"loseHpEnd",
                },
                forced:true,
                audio:"ext:守林人:2",
                content:function(){
                    var num=trigger.num;
                    player.changeHujia(num);
                },
                ai:{
                    maihp:true,
                    effect:function(card,player,target){
                        if(get.tag(card,'damage')){
                            if(player.hasSkillTag('jueqing',false,target)) return [1,1];
                            return 1.2;
                        }
                        if(get.tag(card,'loseHp')){
                            if(target.hp<=1) return;
                            var using=target.isPhaseUsing();
                            if(target.hp<=2) return [1,player.countCards('h')<=1&&using?3:0];
                            if(using&&target.countCards('h',{name:'sha',color:'red'})) return [1,3];
                            return [1,(target.countCards('h')<=target.hp||using&&game.hasPlayer(function(current){
                                return current!=player&&get.attitude(player,current)<0&&player.inRange(current);
                            }))?3:2]
                        }
                    },
                },
                "_priority":0,
            },
            "fire_old_yinshan2":{
                audio:"ext:守林人:2",
                trigger:{
                    global:"damageBegin4",
                },
                forced:true,
                filter:function(event,player){
                    return player!=event.player&&event.player.hp>player.hp;
                },
                content:function(){
                        player.recover();
                },
                "_priority":0,
            },
            "fire_old_yinshan":{
                audio:"ext:firewatch/audio:3",
                trigger:{
                    global:"damageBefore",
                },
                targetfilter:function(event,player){
                    if(event.player==player) return false;
        return get.distance(player,event.player)<=1;
        //
    },
                check:function(event,player){
        return get.attitude(player,event.player)>0||player.hp<3;
    },
                filter:function(event,player){
       if(event.player==player)return false;
        if(get.distance(player,event.player)>1)return false;
       return (player.countCards('h',{type:'basic'})>=1);
        
    },
                content:function(player){
        'step 0'
       
        if(player.chooseToDiscard('h',1,{type:'basic'}).set('ai',function(card){
            
            return (get.type(card)=='basic')+2.5*(6-get.player(card).hp);
         }))
            return true
         
        'step 1'
       if(result.bool) 
        {
            trigger.cancel();
            player.recover();
        }
        
        
    },
                ai:{
                    order:9,
                    threaten:2,
                },
                "_priority":0,
            },
            "fire_jiu":{
                trigger:{
                    player:"useCard1",
                },
                filter:function(event){
        return event.card&&event.card.name=='sha';
    },
                forced:true,
                charlotte:true,
                firstDo:true,
                content:function(){
        if(!trigger.baseDamage) trigger.baseDamage=1;
        trigger.baseDamage+=player.storage.jiu;
        trigger.jiu=true;
        trigger.jiu_add=player.storage.jiu;
        game.addVideo('jiuNode',player,false);
        game.broadcastAll(function(player){
            player.removeSkill('jiu');
        },player);
    },
                temp:true,
                vanish:true,
                silent:true,
                popup:false,
                nopop:true,
                onremove:function(player){
        if(player.node.jiu){
            player.node.jiu.delete();
            player.node.jiu2.delete();
            delete player.node.jiu;
            delete player.node.jiu2;
        }
        delete player.storage.jiu;
    },
                ai:{
                    damageBonus:true,
                },
                group:"jiu2",
                "_priority":1,
            },
            "fire_xunyi":{
                audio:"ext:firewatch/audio:1",
                derivation:"fire_yinshan",
                init:function(player,skill){

     player.storage.fire_xunyi=false

},
                skillAnimation:true,
                animationColor:"thunder",
                mark:true,
                marktext:"义",
                intro:{
                    name:"坚义",
                    content:"limited",
                },
                trigger:{
                    player:"dying",
                },
                limited:true,
                priority:4,
                filter:function(event,player){
        if(player.countCards('hes')==0) return false;
        if(player.storage.fire_xunyi) return false;
        if(event.player.hp<=0){
           
            return true;
        }
        return false;
            
    },
                prompt:"弃置所有牌",
                content:function(player){
        'step 0'
        var all=player.countCards("hes");
        player.chooseToDiscard(all,'hes').set('ai',function(card){
            
            return card.name!='tao';
            return card.name!='jiu';
            
        });
        logSkill=['fire_xunyi',trigger.player];
  
        'step 1'
        if(result.bool){
            player.awakenSkill('fire_xunyi');
            player.storage.fire_xunyi=true;
            //trigger.player.addSkill('fire_micai',1);
            var max=trigger.player.maxHp
            trigger.player.maxHp+=Math.ceil(max/2);
            
            
            trigger.player.update();
            
           
           
        }
        else{
            event.finish();
        }
        'step 2'
        if(trigger.player.isAlive())
           { var max=trigger.player.maxHp
             var mid=Math.ceil(max/2)
            trigger.player.hp=Math.ceil(mid);
            trigger.player.update();
           trigger.player.addSkill('fire_yinshan')}
        else{
            event.finish();
        }
        'step 3'
        if(!trigger.player.isAlive()){
            trigger.cancel(true);
        }
    },
                ai:{
                    order:9,
                    threaten:0,
                    result:{
                        player:1.5,
                    },
                },
                "_priority":400,
            },
            "fire_xvmin":{
                trigger:{
                    global:"phaseUseBegin",
                },
                filterCard:function(card,player,event){
        return card.name=='jiu'
    },
                check:function(event,player,current){
return (get.attitude(player,event.player)>0)&&event.player.hasSha();
    },
                subSkill:{
                    roundoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"恤",
                        intro:{
                            name:"恤民",
                            content:"心の勇敢烧麦~",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                filter:function(trigger,player){
        if(player.hasSkill('fire_xvmin_roundoff')) return false;

        return player.countCards('h',function(card){
            return card.name=='jiu'||card.name=='tao'
        })
    },
                content:function(){
      'step 0' 
      player.chooseCard({name:'jiu'},1,'h')
      'step 1'
      if(result.bool&&trigger.player.canUse({name:'jiu'},trigger.player,true))
      {player.addTempSkill('fire_xvmin_roundoff','roundStart');
      player.line(trigger.player);
      player.give(result.cards,trigger.player); 
      trigger.player.useCard(result.cards,trigger.player,true)
       }
      "step 2"
        var targets = game.filterPlayer();
        targets.remove(trigger.player);
        targets.remove(player);
        player.chooseTarget('选择另一名其他角色发动【恤民】', function(card, player, target) {
            return trigger.player.canUse({name:'sha'},target,true);
        }).set('ai', function(target) {
            return -get.attitude(_status.event.player, target);
        });
        "step 3"
        if (result.bool) {
            trigger.player.logSkill('fire_xvmin', result.targets);
            trigger.player.chooseToUse({name: 'sha'}, '是否对'+get.translation(result.targets)+'使用一次【杀】？', result.targets[0], -1);
        }
    },
                "_priority":0,
            },
            "fire_fanshen":{
                usable:1,
                enable:"phaseUse",
                filter:function(event,player){
        return game.hasPlayer(function(current){
                    return current.isLinked();
                })
    },
                check:function(event,player,target){
return (get.attitude(player,target)>0);
    },
                filterTarget:function(event,player,target){
        return target.isLinked()&&player!=target;
        
    },
                content:function(){
        var num=game.countPlayer(function(current){
                    return current.isLinked();
                });
        var half=Math.floor(num/2)
      
        player.draw(num);
        target.draw(num);
        player.link(false);
        target.link(false);
        
        
    },
                ai:{
                    order:8,
                    threaten:0.5,
                    result:{
                        target:1,
                        player:0.5,
                    },
                },
                "_priority":0,
            },
            "fire_jiefang":{
                trigger:{
                    source:"damageBegin4",
                },
                subSkill:{
                    recover:{
                        sub:true,
                        forced:true,
                        trigger:{
                            source:"damageBegin3",
                        },
                        filter:function(event,player){
                var max=player.maxHp
                if(event.card&&event.card.isCard&&event.card.name=='sha'
                   //&&(player.hp>=Math.ceil(max/2))
                    &&(event.card.suit!='heart')) 
                    return true;
                      
                       
               },
                        content:function(){
       'step 0'
        trigger.player.chooseCard('h',1,{name:'sha'}).set('ai',function(card,player,target){
                        return (2*(get.player(card).maxHp-get.player(card).hp))-get.value(card);
                    });
       'step 1'
       if(result.bool)
        {trigger.player.line(player);
        trigger.player.give(result.cards,player);}
        else player.recover(1)
            },
                        "_priority":0,
                    },
                },
                group:["fire_jiefang_recover"],
                forced:true,
                mod:{
                    attackFrom:function(from,to,distance,player){
            return distance-1;
        },
                },
                filter:function(event,player){
        var max=player.maxHp
        //&&(player.hp>=Math.ceil(max/2))
                return event.card&&event.card.isCard&&event.card.name=='sha'&&event.card.suit=='heart';
    },
                content:function(){
       'step 0'
       trigger.player.chooseCard('h',1,{name:'sha'}).set('ai',function(card,player,target){
                        return 5-get.value(card);
                    });;
       'step 1'
       if(result.bool)
       {trigger.player.line(player);
       trigger.player.give(result.cards,player);}
        else trigger.num++
      
        
        
        
    },
                "_priority":0,
            },
            "fire_new_jiefang":{
                forced:true,
                charlotte:true,
                init:(player)=>{
                    game.addGlobalSkill("fire_new_jiefang_ttk");
                    game.addGlobalSkill("fire_new_jiefang_jiu");
                },
                onremove:(player)=>{
                    if(!game.hasPlayer(current=>current.hasSkill('fire_new_jiefang'),true)) 
                    {
                        game.removeGlobalSkill("fire_new_jiefang_ttk")
                        game.removeGlobalSkill("fire_new_jiefang_jiu");
                    }
                },
                subSkill:{
                    ttk:{
                        mod:{
                            attackFrom:function(from,to,distance,player){
            if(game.hasPlayer(current=>current.hasSkill('fire_new_jiefang'),true)) 
            return distance-1;
        },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    jiu:{
                        mod:{
                            cardname:function(card){
                    if(game.hasPlayer(current=>current.hasSkill('fire_new_jiefang'),true)){
                        if(card.name=='tao') return 'jiu';
                    }
                    },
                            cardUsable:function(card,player,num){
                    if(game.hasPlayer(current=>current.hasSkill('fire_new_jiefang'),true)){
                        if(card.name=='jiu') return Infinity;
                    }
                    },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_old_soufeng":{
                audio:"fire_soufeng",
                shaRelated:true,
                forced:true,
                trigger:{
                    player:"useCardToPlayered",
                },
                check:function(event,player){
        return get.attitude(player,event.target)<=0;
    },
                filter:function(event,player){
        return event.card.name=='sha';
    },
                logTarget:"recover",
                content:function(){
        "step 0"
        player.judge();
        "step 1"
        switch(result.suit){
                case 'heart': trigger.player.recover();break;
                case 'spade': trigger.player.recover();break;
                case 'diamond': trigger.player.link(false);break;
                case 'club': trigger.player.link(false);break;
        
  }
  },
                subSkill:{
                    benzhuo:{
                        forced:true,
                        trigger:{
                            player:"damageBegin3",
                        },
                        filter:function(event,player){
        if(event.nature=='thunder') return true;
    },
                        content:function(){
           
                trigger.num++;
            
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                group:"fire_old_soufeng_benzhuo",
                "_priority":0,
            },
            "fire_old_qinfeng":{
                audio:"ext:firewatch/audio:3",
                ai:{
                    order:8,
                    threaten:2,
                    result:{
                        target:-1,
                        player:0.5,
                    },
                },
                mod:{
                    targetInRange:function(card,target){
            if(card.name=='sha') return true;  
            
        },
                },
                subSkill:{
                    damageadd:{
                        audio:"ext:守林人/audio:2",
                        sub:true,
                        forced:true,
                        trigger:{
                            source:"damageBegin3",
                        },
                        filter:function(event,player,trigger){
        return event.card&&event.card.name=='sha'&&trigger.player!=player;
           
           
        
           },
                        content:function(){
            
          if(!trigger.player.isEmpty(1))     
        trigger.num*=2;
    },
                        "_priority":0,
                    },
                },
                group:["fire_old_qinfeng_damageadd"],
                "_priority":0,
            },
            "fire_zhencang":{
                audio:"ext:守林人/audio:3",
                trigger:{
                    player:["gainAfter"],
                },
                frequent:true,
                preHidden:true,
                filter:function(event,player){
        if(event.name=='discard') return false;
       if( player.getExpansions('fire_trap').length>=10) return false;
      var evt=event.getParent('phaseDraw')
      if(evt&&evt.player) return false;
       
        return event.getg(event.player).length>0;
        
    },
                content:function(){
        'step 0'
        var next=player.judge(function(card){
            return 1
        });
        next.judge2=function(result){
            return result.bool;
        };
        if(get.mode()!='guozhan'){
            next.callback=lib.skill.fire_zhencang.callback;
            event.finish();
        }
        'step 1'
        if(!result.bool||get.position(result.card)!='d'){
            //game.cardsDiscard(card);
            event.finish();
            return;
        }
        event.card=result.card;
        player.chooseBool('是否将'+get.translation(event.card)+'作为罠牌置于武将牌前？').ai=function(){
            return true;
        };
        'step 2'
        if(!result.bool&&!event.directbool){
            return;
        };
        player.addToExpansion(event.card,'gain2').gaintag.add('fire_trap');
        player.addSkill('fire_trap')
    },
                callback:function(){
        if(!event.judgeResult.bool){
            event.finish();
            return;
        }
        player.addToExpansion(event.judgeResult.card,'gain2').gaintag.add('fire_trap');
        player.addSkill('fire_trap')
    },
                group:["fire_zhencang_dist"],
                locked:false,
                subSkill:{
                    dist:{
                        locked:false,
                        mod:{
                            maxHandcard:function (player,num){
                    var num=num+player.getExpansions('fire_trap').length;
                    
                    
                    return num;
                },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                ai:{
                    threaten:function(player,target){
            if(target.countCards('h')==0) return 2;
            return 0.5;
        },
                },
                "_priority":0,
            },
            "fieldsniper_skill":{
                equipSkill:true,
                audio:"ext:守林人:true",
                trigger:{
                    target:"useCardToTargeted",
                },
                forced:true,
                filter:function(event,player){
                    if(event.card.name!='sha')return false;
                    if(player.hasSkillTag('unequip2')) return false;
                    if(event.player.hasSkillTag('unequip',false,{
                        name:event.card?event.card.name:null,
                        target:player,
                        card:event.card
                    })) return false;
                    return true;
                },
                content:function(){
                    trigger.player.addTempSkill('fieldsniper2');
                    trigger.player.storage.fieldsniper2.add(trigger.card);
                    trigger.player.markSkill('fieldsniper2');
                    
                },
                "_priority":-25,
            },
            "fieldsniper2":{
                firstDo:true,
                init:function(player,skill){
            if(!player.storage[skill]) player.storage[skill]=[];
                    player.addSkillBlocker(skill);
                },
                onremove:function(player,skill){
                    player.removeSkillBlocker(skill);
                },
                charlotte:true,
                locked:true,
                skillBlocker:function(skill,player){
                    var info=get.info(skill);
                    return info&&!info.charlotte&&!get.is.locked(skill)&&!info.limited&&!info.juexingji;
                },
                mark:true,
                trigger:{
                    player:["damage","damageCancelled","damageZero"],
                    source:["damage","damageCancelled","damageZero"],
                    target:["shaMiss","useCardToExcluded","useCardToEnd","eventNeutralized"],
                    global:["useCardEnd"],
                },
                filter:function(event,player){
                    return player.storage.fieldsniper2&&event.card&&player.storage.fieldsniper2.contains(event.card)&&(event.name!='damage'||event.notLink());
                },
                silent:true,
                forced:true,
                popup:false,
                priority:12,
                content:function(){
                    player.storage.fieldsniper2.remove(trigger.card);
                    if(!player.storage.fieldsniper2.length) player.removeSkill('fieldsniper2');
                },
                marktext:"※",
                intro:{
                    content:function(storage,player,skill){
                        var list=player.getSkills(null,false,false).filter(function(i){
                            return lib.skill.fengyin.skillBlocker(i,player);
                        });
                        if(list.length) return '失效技能：'+get.translation(list);
                        return '无失效技能';
                    },
                },
                "_priority":1201,
            },
            "bulin_skill":{
                equipSkill:true,
                trigger:{
                    player:"damageBefore",
                },
                filter:function(event,player){
                    if(player.hasSkillTag('unequip2')) return false;
                    if(event.source&&event.source.hasSkillTag('unequip',false,{
                        name:event.card?event.card.name:null,
                        target:player,
                        card:event.card
                    })) return;
                    if(event.nature) return true;
                },
                forced:true,
                content:function(){
                    trigger.cancel();
                },
                ai:{
                    nofire:true,
                    nothunder:true,
                    effect:{
                        target:function(card,player,target,current){
                            if(target.hasSkillTag('unequip2')) return;
                            if(player.hasSkillTag('unequip',false,{
                                name:card?card.name:null,
                                target:player,
                                card:card
                            })||player.hasSkillTag('unequip_ai',false,{
                                name:card?card.name:null,
                                target:target,
                                card:card
                            })) return;
                            if(card.name=='tiesuo'||get.tag(card,'natureDamage')) return 'zeroplayertarget';
                        },
                    },
                },
                "_priority":0,
            },
            "mihang_bulin":{
                audio:"ext:firewatch/audio:2",
                equipSkill:true,
                noHidden:true,
                check:function(event,player){
    return true
    },
                filter:function(event,player){
        if(player.hasSkillTag('unequip2')) return false;
        if(event.source&&event.source.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return;
        if(event.nature) return true;
    },
                forced:true,
                trigger:{
                    player:"damageBefore",
                },
                content:function(){
        trigger.cancel();
    },
                ai:{
                    nofire:true,
                    nothunder:true,
                    effect:{
                        target:function(card,player,target,current){
                if(target.hasSkillTag('unequip2')) return;
                if(player.hasSkillTag('unequip',false,{
                    name:card?card.name:null,
                    target:player,
                    card:card
                })||player.hasSkillTag('unequip_ai',false,{
                    name:card?card.name:null,
                    target:target,
                    card:card
                })) return;
                if(card.name=='tiesuo'||get.tag(card,'natureDamage')) return 'zeroplayertarget';
            },
                    },
                },
                "_priority":-25,
            },
            "fire_duijiao":{
                audio:"ext:守林人/audio:2",
                group:"fire_duijiao_tiesuo",
                subSkill:{
                    tiesuo:{
                        sub:true,
                        enable:"phaseUse",
                        filter:function(event,player){
        return player.getExpansions('fire_trap').length>0&&event.filterCard({name:'tiesuo'},player,event);
    },
                        chooseButton:{
                            dialog:function(event,player){
            return ui.create.dialog('铁锁连环',player.getExpansions('fire_trap'),'hidden');
        },
                            filter:function(button,player){
            var card=button.link;
            if(!game.checkMod(card,player,'unchanged','cardEnabled2',player)) return false;
            var evt=_status.event.getParent();
            return evt.filterCard(get.autoViewAs({name:'tiesuo'},[card]),player,evt)
        },
                            backup:function(links,player){
            var skill=_status.event.buttoned;
            return {
                audio:2,
               
                
                position:'x',
                filterCard:function(card,player){return skill=='fire_duijiao_tiesuo'&&card==lib.skill.fire_duijiao_tiesuo_backup.card},
                viewAs:{name:'tiesuo'},
                selectCard:-1,
                card:links[0],
            }
        },
                            prompt:function(links,player){
            return '选择 铁索连环（'+get.translation(links[0])+'）的目标';
        },
                        },
                        "_priority":0,
                    },
                },
                enable:"phaseUse",
                filter:function(event,player){
        return player.getExpansions('fire_trap').length>0&&event.filterCard({name:'guohe'},player,event);
    },
                chooseButton:{
                    dialog:function(event,player){
            return ui.create.dialog('过河拆桥',player.getExpansions('fire_trap'),'hidden');
        },
                    filter:function(button,player){
            var card=button.link;
            if(!game.checkMod(card,player,'unchanged','cardEnabled2',player)) return false;
            var evt=_status.event.getParent();
            return evt.filterCard(get.autoViewAs({name:'guohe'},[card]),player,evt)
        },
                    backup:function(links,player){
            var skill=_status.event.buttoned;
            return {
                audio:2,
               
                
                position:'x',
                filterCard:function(card,player){return skill=='fire_duijiao'&&card==lib.skill.fire_duijiao_backup.card},
                viewAs:{name:'guohe'},
                selectCard:-1,
                card:links[0],
            }
        },
                    prompt:function(links,player){
            return '选择 过河拆桥（'+get.translation(links[0])+'）的目标';
        },
                },
                ai:{
                    order:10,
                    result:{
                        player:function(player){
                return player.getExpansions('fire_trap').length-1;
            },
                    },
                },
                "_priority":0,
            },
            "fire_lantern_skill":{
                enable:"phaseUse",
                selectCard:1,
                filterCard:function(card){
        return get.name(card)=='shan'||get.name(card)=='sha';

    },
                position:"hs",
                viewAs:{
                    name:"juedou",
                },
                viewAsFilter:function(player){
        if(player.countCards('hs',{name:'shan'})>1
           ||player.countCards('hs',{name:'sha'})>1) return true;
        
    },
                prompt:"将一张闪或杀当决斗使用",
                check:function(card){return 4-get.value(card)},
                ai:{
                    wuxie:function(target,card,player,viewer){
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
                    basic:{
                        order:5,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                        player:function(player,target,card){
                if(player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)){
                    return 0;
                }
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
                "_priority":0,
            },
            "fire_scout_skill":{
                equipSkill:true,
                audio:"ext:守林人:true",
                trigger:{
                    source:"damageBegin1",
                },
                filter:function(event){
                    if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
                    if(event.card&&event.card.name=='sha'){
                        if(event.player.countCards('e')==0) return true;
                    }
                    return false;
                },
                forced:true,
                content:function(){
                    trigger.num++;
                },
                ai:{
                    effect:{
                        player:function(card,player,target,current,isLink){
                            if(card.name=='sha'&&!isLink&&target.countCards('e')==0&&!target.hasSkillTag('filterDamage',null,{
                                player:player,
                                card:card,
                            })) return [1,0,1,-3];
                        },
                    },
                },
                "_priority":-25,
            },
            "fire_club_skill":{
                equipSkill:true,
                audio:"ext:守林人:true",
                trigger:{
                    source:"damageBegin1",
                },
                filter:function(event){
                    if(event.parent.name=='_lianhuan'||event.parent.name=='_lianhuan2') return false;
                    if(event.card&&event.card.name=='sha'){
                        if(event.player.hujia) return true;
                    }
                    return false;
                },
                forced:true,
                content:function(){
                    trigger.num++;
                },
                ai:{
                    effect:{
                        player:function(card,player,target,current,isLink){
                            if(card.name=='sha'&&!isLink&&target.hujia&&!target.hasSkillTag('filterDamage',null,{
                                player:player,
                                card:card,
                            })) return [1,0,1,-3];
                        },
                    },
                },
                "_priority":-25,
            },
            "fire_shenpan":{
                audio:"ext:firewatch/audio:2",
                trigger:{
                    player:"useCardToPlayered",
                    target:"useCardToTargeted",
                },
                forced:true,
                logTarget:function(trigger,player){
        return player==trigger.player?trigger.target:trigger.player
    },
                filter:function(event,player){
        return event.card.name=='juedou';
    },
                content:function(){
        var id=(player==trigger.player?trigger.target:trigger.player)['playerid'];
        var idt=trigger.target.playerid;
        var map=trigger.getParent().customArgs;
        if(!map[idt]) map[idt]={};
        if(!map[idt].shaReq) map[idt].shaReq={};
        if(!map[idt].shaReq[id]) map[idt].shaReq[id]=1;
        map[idt].shaReq[id]++;
    },
                ai:{
                    "directHit_ai":true,
                    skillTagFilter:function(player,tag,arg){
            if(arg.card.name!='juedou'||Math.floor(arg.target.countCards('h','sha')/2)>player.countCards('h','sha')) return false;
        },
                },
                "_priority":0,
            },
            "fire_mihang":{
                audio:"ext:firewatch/audio:2",
                group:"mihang_bulin",
                locked:true,
                "_priority":0,
            },
            "fire_jiushu":{
                skillAnimation:true,
                animationColor:"yellow",
                audio:"ext:firewatch/audio:2",
                unique:true,
                juexingji:true,
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
        return player.getExpansions('fire_trap').length>=5;
    },
                derivation:["fire_duijiao","fire_mihang"],
                content:function(){
        player.awakenSkill('fire_jiushu');
        player.loseMaxHp(true),
        player.addSkill('fire_duijiao');
        player.addSkill('fire_mihang');
    },
                ai:{
                    threaten:function(event,player){
        return player.getExpansions('fire_trap').length;
    },
                },
                "_priority":0,
            },
            "fire_shangjin":{
                audio:"ext:firewatch/audio:3",
                trigger:{
                    player:"phaseAfter",
                },
                forced:true,
                content:function () 
    {
        var eq=player.getCards('h',{type:'equip'})
        var blood=player.getHistory("sourceDamage").length
        var bloody=Math.ceil(blood)
        for(bloody;bloody>0;bloody--)
            player.draw();
         
        if(!blood)player.recast(eq)
    
    },
                "_priority":0,
            },
            "fire_shangjin_old":{
                trigger:{
                    global:"dieBegin",
                },
                forced:true,
                priority:9,
                filter:function (event, player)
    {
        return event.source && event.source.isIn() && event.source == player;
    },
                content:function ()
    {
        
        player.draw(2);
    },
                "_priority":900,
            },
            "fire_shanghe":{
                enable:"phaseUse",
                usable:1,
                discard:false,
                lose:false,
                delay:0,
                filterCard:true,
                filterTarget:function(card,player,target){
        return target!=player&&target.countCards('h')>0&&get.distance(player,target)<=1;
    },
                check:function(card){
        return 7-get.value(card);
    },
                position:"h",
                content:function(){
        'step 0'
        player.give(cards,target);
        
        
        var hs=target.getCards('h');
        if(hs.length){
            event.card=hs.randomGet();
            player.gain(event.card,target);
            target.$giveAuto(event.card,player);
        }
        else{
            event.finish();
        }
        'step 1'
        var source=target;
        
        player.chooseTarget('选择一个目标送出'+get.translation(event.card),function(card,player,target){
            return target!=player;
        }).ai=function(target){
            var att=get.attitude(player,target);
            if(att>3&&player.countCards('h')>target.countCards('h')){
                return att;
            }
            return 0;
        }
        'step 2'
        if(result.bool){
            result.targets[0].gain(card,player);
            player.$give(1,result.targets[0]);
            player.line(result.targets,'green');
            player.recover();
            game.delay();
        }
    },
                ai:{
                    order:9,
                    result:{
                        target:-1,
                        player:function(player,target){
                if(get.attitude(player,target)>0){
                    return 0;
                }
                return 1;
            },
                    },
                },
                "_priority":0,
            },
            "fire_daibiao":{
                trigger:{
                    player:"phaseDrawBegin",
                },
                filter:function(event,player){
                    return player.canMoveCard();
                },
                check:function(event,player){
                    return player.canMoveCard(true);
                },
                content:function () {
                    'step 0'
                    event.count=2
                    'step 1'
                    event.count--
            player.moveCard()
            'step 1'
            if(event.count>0) event.goto(1);
else{
            trigger.changeToZero();
            event.finish();
}
        
    },
                ai:{
                    threaten:2,
                    expose:0.3,
                },
                "_priority":0,
            },
            "fire_baopo":{
                audio:"ext:firewatch/audio:4",
                enable:"chooseToUse",
                filterCard:true,
                filter:function(event,player){
                return player.countCards('e')>0;             
                },
                position:"e",
                viewAs:{
                    name:"wanjian",
                },
                prompt:"将一张装备区内的牌当万箭齐发使用",
                check:function(card){
                    var player=_status.event.player;
                    var targets=game.filterPlayer(function(current){
                        return player.canUse('wanjian',current);
                    });
                    var num=0;
                    for(var i=0;i<targets.length;i++){
                        var eff=get.sgn(get.effect(targets[i],{name:'wanjian'},player,player));
                        if(targets[i].hp==1){
                            eff*=1.5;
                        }
                        num+=eff;
                    }
                    if(!player.needsToDiscard(-1)){
                        if(targets.length>=7){
                            if(num<2) return 0;
                        }
                        else if(targets.length>=5){
                            if(num<1.5) return 0;
                        }
                    }
                    return 6-get.value(card);
                },
                ai:{
                    basic:{
                        order:8.5,
                        useful:1,
                        value:5,
                    },
                    wuxie:function(target,card,player,viewer){
                        if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                            if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
                        }
                    },
                    result:{
                        "target_use":function(player,target){
                            if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                            var nh=target.countCards('h');
                            if(get.mode()=='identity'){
                                if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                            }
                            if(nh==0) return -2;
                            if(nh==1) return -1.7
                            return -1.5;
                        },
                        target:function(player,target){
                            var nh=target.countCards('h');
                            if(get.mode()=='identity'){
                                if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                            }
                            if(nh==0) return -2;
                            if(nh==1) return -1.7
                            return -1.5;
                        },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
                "_priority":0,
            },
            "fire_mucha":{
                derivation:"fire_mushi",
                trigger:{
                    player:"phaseEnd",
                },
                direct:true,
                filter:function(event,player){
        //return player.group=='laterano';
        return true;
    },
                content:function () {
     
            var check=game.hasPlayer(function(current){
                if(current.player==player) return false;
                return player.canUse({name:'sha'},current,false)
            })
            var filterTarget=function(card,player,target){
                            return player.canUse({name:'sha'},target,false,'nodistance');
                        }        
    "step 0"
    player.draw();
    if (!player.hasSkill("fire_mushi")) 
    {
      player.addTempSkill("fire_mushi", "phaseBegin");
    }
    "step 1"
            player.chooseToUse('使用一张无距离限制的【杀】',{name:'sha'}).set('filterTarget',filterTarget).set('check',check);
  },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
                "_priority":0,
            },
            "fire_mushi":{
                trigger:{
                    source:"damageAfter",
                },
                forced:true,
                filter:function (event, player) {
        return event.player !== player;
    },
                content:function () {
        "step 0"
        var next = player.judge(function (card) {
            if (get.suit(card) == 'heart')
                return true;
            return false;
        });
        next.set('fire_mushi', true);
        next.judgeResult = { suit: get.suit(event.card) };
        game.log(player, "进行一次判定");
        "step 1"
        var check= player.isAlive;
        if (result.suit == 'heart') {
            player.line(event.player);
        player.chooseTarget(get.prompt("fire_mushi"),"选择【杀】的目标",function(card,player,target){
                        if(player==target) return false;
                        return player.canUse({name:'sha'},target,false);
                    }).set('check',check).set('ai',function(target){
                        if(!_status.event.check) return 0;
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
        }
        else {
            player.draw();
        }
        "step 2"
                    if(result.bool){
                        
                        player.logSkill('fire_mushi',result.targets);
                        player.useCard({name:'sha',isCard:true},result.targets[0],false);
                        
                    
                    }
    },
                "_priority":0,
            },
            "fire_juqian":{
                trigger:{
                    global:"phaseEnd",
                },
                subSkill:{
                    roundoff:{
                        sub:true,
                        charlotte:true,
                        mark:true,
                        marktext:"遣",
                        intro:{
                            name:"距遣",
                            content:"呵呵",
                        },
                        "_priority":0,
                    },
                },
                check:function(event,player){
        return((get.attitude(player,event.player)>0)&&event.player.countCards('h') >1)
            ||(event.player==player&&player.hasSha());
    },
                filter:function(event, player) {
        if(player.hasSkill('fire_juqian_roundoff')) return false;
        return event.player.countCards('h') > 0;
    },
                content:function() {
        "step 0"
        var targets = game.filterPlayer();
        targets.remove(trigger.player);
        targets.remove(player);
        player.chooseTarget('选择另一名其他角色发动【距遣】', function(card, player, target) {
            return targets.contains(target)&&trigger.player.canUse({name:'sha'},target,false,'nodistance');
        }).set('ai', function(target) {
            return -get.attitude(_status.event.player, target);
        });
        "step 1"
        if (result.bool) {
            player.addTempSkill('fire_juqian_roundoff','roundStart');
            trigger.player.logSkill('fire_juqian', result.targets);
            trigger.player.chooseToUse({name: 'sha'}, '是否对'+get.translation(result.targets)+'使用一次【杀】？', result.targets[0], -1);
        }
    },
                ai:{
                    order:8,
                    threaten:10,
                },
                "_priority":0,
            },
            "fire_suya":{
                trigger:{
                    global:"recoverEnd",
                },
                filter:function(event, player) {
        return player!=event.player&&player.canUse({name:'sha'},event.player,false);;
    },
                content:function() {
       
        var targets = trigger.player;
       'step 0'
       player.draw();
        'step 1'
            
            player.chooseToUse({name: 'sha'}, '是否对目标使用一次【杀】？',trigger.player);
        player.logSkill('fire_suya', result.targets);
      
        
    },
                "_priority":0,
            },
            "fire_bingyan":{
                audio:"ext:firewatch/audio:2",
                init:function(player,skill){

            player.storage.fire_bingyan=false
                },
                skillAnimation:true,
                animationColor:"ice",
                mark:true,
                marktext:"冰",
                intro:{
                    name:"生于寒冰",
                    content:"limited",
                },
                trigger:{
                    global:"phaseBegin",
                },
                filter:function (event, player) {
    return (player.isLinked()||player.isTurnedOver())&&!player.storage.fire_bingyan;
  },
                content:function () {

            var targets=game.filterPlayer()
                "step 0"
        player.awakenSkill('fire_bingyan');
        player.storage.fire_bingyan=true;

        "step 1"
           targets.forEach(function (target) {
            target.link(false);
            target.turnOver(false);
           })
        player.storage.fire_sixue_rewrite=true;
        "step 2"
            targets.forEach(function (target) {
            target.damage(1,'ice',player)
           })
  },
                ai:{
                    order:8,
                    threaten:3.5,
                },
                "_priority":0,
            },
            "fire_old_bingyan":{
                audio:"ext:firewatch/audio:2",
                trigger:{
                    global:"phaseBegin",
                },
                check:function(event,player){
       
        return player.hp>2
    },
                filter:function (event, player) {
        var num = game.countPlayer(function (current) {
      return !current.isLinked(); // 计算所有未横置的角色
    }); 
    return player.isLinked()&&(player.countCards('h')>num); // 当前玩家已横置时触发技能
  },
                content:function () {
        
     var num = game.countPlayer(function (current) {
      return !current.isLinked(); // 计算所有未横置的角色
    });
    var targets = game.filterPlayer(function (current) {
      return !current.isLinked(); // 筛选所有未横置的角色作为目标
    });
        'step 0'
        player.link(false);
       //令你重置
        'step 1'
   targets.forEach(function (target) {
       var all=game.countPlayer(function (current) {
      return !current.isLinked(); // 计算所有未横置的角色作为目标
   })
      player.logSkill("冰焰", target);
      
        player.chooseToDiscard(1,'h',true).set('ai',function(card){
            
            return get.unuseful(card)+2.5*(5-get.player(card).hp);
        }); // 弃置当前玩家的一张手牌
     
   
     //target.damage(1,'ice',player)
       target.loseHp()
     // 目标角色流失点1体力
       
       
      });
        
   
  },
                ai:{
                    order:8,
                    threaten:3.5,
                },
                "_priority":0,
            },
            "fire_sixue":{
                audio:"ext:firewatch/audio:2",
                derivation:"fire_sixue_rewrite",
                group:"fire_sixue_rewrite",
                subSkill:{
                    rewrite:{
                        sub:true,
                        preHidden:true,
                        trigger:{
                            global:"damageEnd",
                        },
                        filter:function(event,player){
        return event.num > 0
        &&event.nature&&player.storage.fire_sixue_rewrite==true&&event.player.isAlive();
       
    },
                        locked:function(skill,player){
                    return player&&player.storage.fire_sixue_rewrite;
                },
                        check:function(event,player,card){
        return get.attitude(player,event.source)<=0;
    },
                        content:function(){
        'step 0'
        trigger.player.chooseTarget(get.prompt('fire_sixue_rewrite'),'令一名角色判定。若判定结果不为♦️，其受到一点寒冰伤害，若其手牌数大于你的手牌数，则此伤害+1。',true).set('ai',target=>{
                        return -get.attitude(_status.event.player,target);
                    });
        'step 1'
        if(result.bool)
        

            var    target=result.targets[0]
             event.target=target;
                        target.judge(function(card){
                            if(get.suit(card)!='diamond') return 1;
                            return 0;
                        })
            
            

        'step 2'

        if(result.suit!='diamond')
        {    
            if(target.countCards('h')!=0)
            {    
            player.line(target,'ice')
            target.damage(1,'ice',player)
            }
            else if(target.countCards('h')>player.countCards('h'))
            {
            player.line(target,'ice')
            target.damage(2,'ice',player)
            }
        }
        
        
    
                },
                        ai:{
                            maixie:true,
                            effect:{
                                target:function(card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')&&get.nature(card)) return [1,0.55];
            },
                            },
                            skillTagFilter:function(player){
                                return player.storage.fire_sixue_rewrite==true;
                            },
                        },
                        "_priority":0,
                    },
                },
                preHidden:true,
                trigger:{
                    global:"damageEnd",
                },
                filter:function(event,player){
        return event.num > 0
        &&event.nature
        &&event.source!=undefined
            &&event.source!=player
            &&!player.storage.fire_sixue_rewrite;
       
    },
                check:function(event,player){
        return get.attitude(player,event.source)<=0||event.card&&get.itemtype(event.cards)=='cards';
        //event.card&&get.itemtype(event.cards)=='cards';
    },
                content:function(){
        'step 0'
        if(trigger.delay==false) game.delay();
        'step 1'
        var cards=[];if(get.itemtype(trigger.cards)=='cards'
            ){
                for(var i=0;i<trigger.cards.length;i++){
                    if(get.position(trigger.cards[i],true)=='o')
                  { cards.push(trigger.cards[i])};
                    
                }
            }
        else{
            event.goto(3)
        }
        
        if(cards.length)
            player.chooseButton(['祀雪：选择要获得的牌',cards],[1,cards.length]).set('ai',function(button){
                        return get.value(button.link,_status.event.player,'raw');
                    }).set('ai',function(card){
                        var trigger=_status.event.getTrigger();
                        var player=_status.event.player;
                        var source=_status.event.source;
                        var attitude=get.attitude(player,trigger.source);
                        if(attitude==0) return 0;
                        if(attitude>0){
                            return get.value(card);
                        }
                        else{
                            return 0;
                        }
            });
        'step 2'
        if(result.bool)
        { player.gain(result.links,'gain2')
        event.finish()}
       
       
        
           else{  
               event.goto(3)
           };
		'step 3'
		trigger.source.damage(1,'ice',player)
		if(trigger.source.isAlive())
        {trigger.source.damage(1,'ice',trigger.player)};
		player.turnOver()
		event.finish();
        'step 4'
        trigger.source.judge(function(card){
            return 1
        })
        'step 5'
        switch(result.suit){
               
                case 'heart':player.draw(2);trigger.player.draw(2);
               player.turnOver();trigger.player.turnOver();
                break;
                case 'diamond':player.draw(2);trigger.player.draw(2);
               player.turnOver();trigger.player.turnOver();
                break;
                case 'club':trigger.source.damage(1,'ice',player);
                //if(trigger.source.isAlive())
                //{trigger.source.damage(1,'ice',trigger.player)};
                break;
                case 'spade':trigger.source.damage(1,'ice',player);
                //if(trigger.source.isAlive())
                //{trigger.source.damage(1,'ice',trigger.player)};
                break;
                }
    },
                ai:{
                    maixie:true,
                    effect:{
                        target:function(card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                if(get.tag(card,'damage')&&get.nature(card)) return [1,0.55];
            },
                    },
                },
                "_priority":0,
            },
            "fire_jiangsheng":{
                audio:"ext:firewatch/audio:2",
                group:["jiangsheng_tengjia1","jiangsheng_tengjia2","jiangsheng_tengjia3"],
                locked:true,
                "_priority":0,
            },
            "jiangsheng_tengjia1":{
                equipSkill:true,
                trigger:{
                    target:["useCardToBefore"],
                },
                forced:true,
                priority:6,
                audio:"ext:守林人:true",
                filter:function(event,player){
        if(!lib.skill.tengjia1.filter(event,player)) return false;
        if(!player.isEmpty(2)) return false;
        if(player.hasSkillTag('unequip2')) return false;
        if(event.player.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return false;
        if(event.card.name=='nanman') return true;
        if(event.card.name=='wanjian') return true;
        //if(event.card.name=='chuqibuyi') return true;
        return false;
    },
                content:function(){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function(card,player,target,current){
                if(target.hasSkillTag('unequip2')) return;
                if(player.hasSkillTag('unequip',false,{
                    name:card?card.name:null,
                    target:target,
                    card:card
                })||player.hasSkillTag('unequip_ai',false,{
                    name:card?card.name:null,
                    target:target,
                    card:card
                })) return;
                //if(card.name=='nanman'||card.name=='wanjian'||card.name=='chuqibuyi') return 'zerotarget';
                if(card.name=='nanman'||card.name=='wanjian') return 'zerotarget';
                if(card.name=='sha'){
                    var equip1=player.getEquip(1);
                    if(equip1&&equip1.name=='zhuque') return 1.9;
                    if(!card.nature) return 'zerotarget';
                }
            },
                    },
                },
                "_priority":575,
            },
            "jiangsheng_tengjia2":{
                equipSkill:true,
                trigger:{
                    player:"damageBegin3",
                },
                filter:function(event,player){
        if(!lib.skill.tengjia2.filter(event,player)) return false;
        if(!player.isEmpty(2)) return false;
        if(event.nature!='fire') return false;
        if(player.hasSkillTag('unequip2')) return false;
        if(event.source&&event.source.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return false;
        return true;
    },
                audio:"ext:守林人:true",
                forced:true,
                content:function(){
        trigger.num++;
    },
                ai:{
                    fireAttack:true,
                    effect:{
                        target:function(card,player,target,current){
                if(card.name=='sha'){
                    if(card.nature=='fire') return 2;
                    if(player.hasSkill('zhuque_skill')) return 1.9;
                }
                if(get.tag(card,'fireDamage')&&current<0) return 2;
            },
                    },
                },
                "_priority":-25,
            },
            "jiangsheng_tengjia3":{
                equipSkill:true,
                audio:"tengjia1",
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                filter:function(event,player){
        if(!lib.skill.tengjia3.filter(event,player)) return false;
        if(!player.isEmpty(2)) return false;
        if(player.hasSkillTag('unequip2')) return false;
        if(event.player.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return false;
        if(event.card.name=='sha'&&!event.card.nature) return true;
        return false;
    },
                content:function(){
        trigger.cancel();
    },
                "_priority":-25,
            },
            "fire_xinghuo":{
                audio:"fire_dunxing",
                trigger:{
                    global:"damageEnd",
                },
                filter:function(event,player){
        if(event.nature&&event.nature!='fire') return false;
        return event.nature=='fire';
    },
                content:function(){        
                    'step 0'
                    player.chooseTarget(get.prompt('fire_xinghuo'),'令一名角色判定。若判定结果为♥2~9，其受到2点火焰伤害，否则其回复1点体力。').set('ai',target=>{
                        var player=_status.event.player,sgn=_status.event.sgn;                        
                        if(sgn>0){
                            if(player.hasCard(function(card){return get.suit(card)=='heart'}))
                                {
                                    return get.damageEffect(target,target,player,'fire')
                            }
                            else{
                                return get.attitude(player,target);
                            }
                        }
                        else if(sgn==0){
                            return get.attitude(player,target);
                        }
                        return 0;
                    }).set('sgn',function(){
                        var sgn=0;
                        game.countPlayer(current=>{
                            if(!current.hasSkillTag('rejudge')) return;
                            sgn=get.sgnAttitude(player,current);
                        });
                        return sgn;
                    }())
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        event.target=target;
                        player.logSkill('fire_xinghuo',target);
                        target.judge(card=>{
                            var number=get.number(card);
                            if(get.suit(card)=='heart'&&number>=2&&number<=9) return -4;
                            return 2;
                        }).set('judge2',result=>{
                            return result.bool===false?true:false;
                        });
                    }
                    else event.finish();
                    'step 2'
                    if(result.bool){
                        target.recover();
                    }
                    else{
                        target.damage(2,'fire');
                    }
            
    },
                "_priority":0,
            },
            "fire_dongmu":{
                audio:"fire_kugu",
                trigger:{
                    global:"judgeFixing",
                },
                multitarget:true,
                multiline:true,
                subSkill:{
                    roundoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"冬",
                        intro:{
                            name:"冬幕",
                            content:"冬幕快降临了，我们这样还能坚持多久呢？",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                check:function(event,player,card){
        
        return event.result.judge*get.attitude(player,event.player)<0&&player.hp>1;
       
    
    },
                filter:function(event,player,card){
       if(player.countCards('h')>0) return false;
       if(player.hasSkill('fire_dongmu_roundoff')) return false;
       if(event.result&&event.result.color=='red') return true;
      
    
  },
                content:function (event, player, trigger, result) {
      
        
        //var all=player.countCards("h");
        //if(player.countCards('hes')<3) 
        
            //return false; 
            //event.finish();
        
        //else
        //player.chooseToDiscard('hes',3).set('ai',function(card){
            
            //return card.suit=='heart';
            //return true;
        
   'step 0'
   //player.addTempSkill('fire_dongmu_roundoff','roundStart');
   player.addTempSkill('fire_dongmu_roundoff','phaseAfter');
   event.num=0;
        var evt=trigger.getParent();
                player.loseHp(1);
        //if(result.bool){
        if(evt.name=='phaseJudge') 
            {evt.excluded=true;
             
            
            
            }
        else{
            evt.finish();
            evt._triggered=null;
            var nexts=trigger.next.slice();
            for(var next of nexts){
                if(next.name=='judgeCallback') trigger.next.remove(next);
            }
            var evts=game.getGlobalHistory('cardMove',function(evt){
                return evt.getParent(2)==trigger.getParent();
            });
            var cards=[];
            for(var i=evts.length-1;i>=0;i--){
                var evt=evts[i];
                for(var card of evt.cards){
                    if(get.position(card,true)=='o') cards.push(card);
                }
       }
            }
            
 
   'step 1'
   player.chooseTarget('选择至多三个目标各造成一点火焰伤害',[0,3],
                                function(card,player,target){return true}).set('ai',function(target){
            if(get.attitude(_status.event.player,target)<0){
                return 2;
            }
            
            return 0;
        }).animate=false;
   'step 2'
        
   if(result.bool)
       {
           if(event.num<result.targets.length){

    result.targets[event.num].damage(1, 'fire', player,'nocard'); 
     //player.removeSkill('fire_new_qinfeng_roundoff')      
       event.num++;
           }
       }
        else{event.finish()}
        if(event.num==result.targets.length) event.finish();
        else event.redo();
    
    
  },
                ai:{
                    order:8,
                    threaten:7,
                    result:{
                        target:1,
                        player:function(player,trigger){
        return (get.attitude(player,trigger.player)<0)},
                    },
                    effect:{
                        player:function(card){
            if(card.name=='fire_tacticaltransceiver') return 3},
                    },
                },
                "_priority":0,
            },
            "fire_rezhan":{
                audio:"fire_ranlie",
                trigger:{
                    global:"judge",
                },
                filter:function(event,player){
        return player.countCards('hes',{suit:'heart'})>0;
    },
                direct:true,
                content:function(){
        "step 0"
        player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
        get.translation(trigger.player.judging[0])+'，'+get.prompt('fire_rezhan'),'hes',function(card){
            if(get.suit(card)!='heart') return false;
            var player=_status.event.player;
            var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
            if(mod2!='unchanged') return mod2;
            var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
            if(mod!='unchanged') return mod;
            return true;
        }).set('ai',function(card){
            var trigger=_status.event.getTrigger();
            var player=_status.event.player;
            var judging=_status.event.judging;
            var result=trigger.judge(card)-trigger.judge(judging);
            var attitude=get.attitude(player,trigger.player);
            if(attitude==0||result==0) return 0;
            if(attitude>0){
                return result;
            }
            else{
                return -result;
            }
        }).set('judging',trigger.player.judging[0]);
        "step 1"
        if(result.bool){
            player.respond(result.cards,'highlight','fire_rezhan','noOrdering');
        }
        else{
            event.finish();
        }
        "step 2"
        if(result.bool){
            player.$gain2(trigger.player.judging[0]);
            player.gain(trigger.player.judging[0]);
            trigger.player.judging[0]=result.cards[0];
            trigger.orderingCards.addArray(result.cards);
            game.log(trigger.player,'的判定牌改为',result.cards[0]);
        }
        "step 3"
        game.delay(2);
    },
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                },
                "_priority":0,
            },
            "fire_qifeng":{
                zhuSkill:true,
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player,card) {
       if(event.player==player) return false;
                    if(!player.hasZhuSkill('fire_qifeng')) return false;
                    if(event.player.group!='kazimierz') return false;
        if(player.countCards('he',{type:'equip'})==0) return false;
                    return true;
           
       
    },
                check:function(event,player,card){
        if(player.countCards('he',{type:'equip'})>0)
        return (get.attitude(player,event.player)>0);
    },
                content:function () {
      
       
        "step 0"
       
           
            player.line(trigger.player);
            player.chooseCard("he","请选择一张装备牌交给"+get.translation(trigger.player),
               function(card){
                return get.type(card)=='equip'
            }).set("ai", function (card) {
                return get.value(card);
            });
           
       
        "step 1"
       if(result.bool)
         {   player.logSkill('fire_qifeng', trigger.player);
            trigger.player.gain(result.cards,'gain2',true);
            
      
           

       
        player.draw();}
    },
                ai:{
                    order:9,
                    result:{
                        player:function(player,target){
                if(get.attitude(player,target)>0){
                    return 2;
                }
                return 0;
            },
                    },
                },
                "_priority":0,
            },
            "fire_tuanhuo":{
                zhuSkill:true,
                trigger:{
                    global:"damageBegin",
                },
                check:function(event,player){
        return((get.attitude(player,event.source)-get.attitude(player,event.player))>0)&&player.hp>3;
    },
                filter:function(event, player) {
        // 判断source是不是ursus势力的角色且不是主公自己
        if(!player.hasZhuSkill('fire_tuanhuo')) return false;
        return event.source && event.source.group == 'ursus'
            &&event.player!=player&&event.source!=player
            &&event.player!=event.source;
    },
                content:function() {
        // 如果主公选择发动技能效果
  
            // 横置目标和主公
            trigger.player.link(true);
            player.link(true);
        
    },
                ai:{
                    order:9,
                    result:{
                        player:function(player,target){
                if(get.attitude(player,target)<0&&player.hp>2){
                    return 2;
                }
                return 0;
            },
                        threaten:2,
                    },
                },
                "_priority":0,
            },
            "fire_gushan":{
                group:["fire_gushan_discard"],
                zhuSkill:true,
                subSkill:{
                    discard:{
                        audio:2,
                        trigger:{
                            global:"loseAfter",
                        },
                        filter:function(event,player){
                if(!player.hasZhuSkill('fire_gushan')) return false;
        if(event.player.group!='sami') return false;

                if(event.type!='discard') return false;
                if(event.player==player) return false;
                for(var i=0;i<event.cards2.length;i++){
                    if(event.cards2[i].original!='j'&&get.position(event.cards2[i],true)=='d'){
                        return true;
                    }
                }
                return false;
            },
                        direct:true,
                        content:function(){
                "step 0"
                if(trigger.delay==false) game.delay();
                "step 1"
                var cards=[];
                for(var i=0;i<trigger.cards2.length;i++){
                    if(trigger.cards2[i].original!='j'&&get.position(trigger.cards2[i],true)=='d'){
                        cards.push(trigger.cards2[i]);
                    }
                }
                if(cards.length){
                            player.chooseButton(['孤山：是否将一张牌置于牌堆顶？',cards],1).set('ai',function(button){
                                if(get.color(button.link)=='red') return 1;
                                return 0;
                            });
                }
                        else event.finish();
                    'step 2'
                    if(result.bool){
                        var card=result.links[0];
                        card.fix();
                        ui.cardPile.insertBefore(card,ui.cardPile.firstChild);
                        game.updateRoundNumber();
                        game.log(player,'将',card,'置于牌堆顶');
                    }                
                
                //&&get.suit(event.cards2[i],event.player)=='diamond'
                //&&get.suit(trigger.cards2[i],trigger.player)=='diamond'
                //if(cards.length){
                  //  player.chooseButton(['孤山：选择要获得的牌',cards],[1,cards.length]).set('ai',function(button){
                    //    return get.value(button.link,_status.event.player,'raw');
                    //});
                //}
                //"step 2"
                //if(result.bool){
                  //  player.logSkill(event.name);
                   // player.gain(result.links,'gain2','log');
                //}
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_ronglin":{
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                zhuSkill:true,
                frequent:true,
                filter:function(event,player){
    if(!player.hasZhuSkill('fire_ronglin')) return false;
    if(event.player.group!='sargon') return false;
   
    if(event.player==player) return false;
        return true;
    },
                preHidden:true,
                content:function(){
            var num=game.countPlayer(function(current){
                                return (current.group=='sargon') ;
                            })
            player.chooseToGuanxing(num);                    
                },
                "_priority":0,
            },
            "fire_old_ronglin":{
                trigger:{
                    global:"phaseZhunbeiBegin",
                },
                zhuSkill:true,
                frequent:true,
                filter:function(event,player){
    if(!player.hasZhuSkill('fire_ronglin')) return false;
    if(event.player.group!='sargon') return false;
   
    if(event.player==player) return false;
        return true;
    },
                preHidden:true,
                content:function(){
        "step 0"
        var num=2;
        
        var cards=get.cards(num);
        game.cardsGotoOrdering(cards);
        var next=player.chooseToMove();
        next.set('list',[
            ['牌堆顶',cards],
            ['牌堆底'],
        ]);
        next.set('prompt','荣林：点击将牌移动到牌堆顶或牌堆底');
        next.processAI=function(list){
            var cards=list[0][1],player=_status.event.player;
            var top=[];
            var judges=player.getCards('j');
            var stopped=false;
            if(!player.hasWuxie()){
                for(var i=0;i<judges.length;i++){
                    var judge=get.judge(judges[i]);
                    cards.sort(function(a,b){
                        return judge(b)-judge(a);
                    });
                    if(judge(cards[0])<0){
                        stopped=true;break;
                    }
                    else{
                        top.unshift(cards.shift());
                    }
                }
            }
            var bottom;
            if(!stopped){
                cards.sort(function(a,b){
                    return get.value(b,player)-get.value(a,player);
                });
                while(cards.length){
                    if(get.value(cards[0],player)<=5) break;
                    top.unshift(cards.shift());
                }
            }
            bottom=cards;
            return [top,bottom];
        }
        "step 1"
        var top=result.moved[0];
        var bottom=result.moved[1];
        top.reverse();
        for(var i=0;i<top.length;i++){
            ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
        }
        for(i=0;i<bottom.length;i++){
            ui.cardPile.appendChild(bottom[i]);
        }
        player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
        game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
        game.updateRoundNumber();
        game.delayx();
    },
                ai:{
                    threaten:1.2,
                },
                "_priority":0,
            },
            "fire_jingdian":{
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                content:function(){
        var linked=trigger.target.isLinked();
        if(linked){
            trigger.directHit=true;
        }
        else if(!linked){
            
            trigger.target.link(true);
            trigger.cancel();
        }
    },
                "_priority":0,
            },
            "fire_chenxi":{
                selectTarget:1,
                audio:"ext:守林人:true",
                enable:"phaseUse",
                usable:1,
                direct:true,
                frequent:true,
                filterTarget:function(card,player,target){
        if(player==target) return false;
        return target.countCards('h');
    },
                content:function(){
    "step 0"
    if(!player.storage.fire_chenxi){
        player.storage.fire_chenxi=[];
    }
    player.storage.fire_chenxi.add(target);
    var controls=[];
    if(target.countCards('h')) controls.push('手牌');
    
    
    if(controls.length==0) event.finish();
    "step 1"
    var content;
    var str=get.translation(target)+'的';
    if(result.control){
        if(result.control=='手牌'){
            content=[str+'手牌',target.getCards('h')];
            game.log(player,'观看了',target,'的手牌');
        }
        
    }
    else if(target.countCards('h')){
        content=[str+'手牌',target.getCards('h')];
        game.log(player,'观看了',target,'的手牌');
    }
   player.chooseControl('ok').set('dialog',content);
     "step 2"
     if(!target.isLinked()&&player.canUse({name:'sha'},target,false))
         player.useCard({name:'sha'},target,false)
    },
                ai:{
                    order:20,
                    result:{
                        target:1,
                        player:function(player,target){
                if(get.attitude(player,target)>0){
                    return 0;
                }
                return 4;
            },
                    },
                },
                "_priority":0,
            },
            "fire_duxin":{
                forced:true,
                trigger:{
                    global:"recoverBegin",
                },
                filter:function(event, player) {
        // 判断是否是其他角色回复体力
        return event.player && event.player!= player;
    },
                content:function() {
                    //game.log(trigger.num)
        for(var i=0;i<trigger.num;i++)
        {                    
        // 摸一张牌
        player.draw(1);
        // 回复体力的角色也摸一张牌
       trigger.player.draw(1);
        }
    },
                "_priority":0,
            },
            "fire_chixia":{
                trigger:{
                    global:"damageAfter",
                },
                filter:function(event, player) {
        if(event.player.hasSkill('fire_chixia_caoyao'))return false;
        if(player.hasSkill('fire_chixia_roundoff'))return false;
        
        // 判断是否是其他角色受到伤害
        return event.player && event.player != player
            &&(!player.countCards('h')==0)&&(!event.player.countCards('h')==0);
        // 判断玩家和该角色是否有手牌
    },
                check:function(event,player){
return (get.attitude(player,event.player)>0);
    },
                subSkill:{
                    roundoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"黠",
                        intro:{
                            name:"赤黠",
                            content:"为什么总是执着于伤害他人......",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    caoyao:{
                        charlotte:true,
                        mark:true,
                        marktext:"药",
                        intro:{
                            name:"赤黠",
                            content:"良药苦口",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                content:function() {
        'step 0'
        trigger.player.addTempSkill('fire_chixia_caoyao','phaseAfter')
        player.chooseToCompare(trigger.player);
        'step 1'
        if(result.bool)
      
     
        {
            player.judge(function(card){
            // 若你赢，则令其进行一次判定
            if(get.suit(card) != 'spade'){
                player.recover();
                trigger.player.recover();
                event.finish();
            }
            else{
            event.finish();
            }
        });
         event.finish();
         }
        else{
         player.addTempSkill('fire_chixia_roundoff','roundStart');
                //trigger.player.loseHp();   
            event.finish()
        };
    },
                ai:{
                    order:9,
                    result:{
                        player:function(player,target){
                if(get.attitude(player,target)>0){
                    return 2;
                }
                return 0;
            },
                        target:function(player,target){
                
                if(target.hp==1) return 5;
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 2;
            },
                    },
                    threaten:4,
                },
                "_priority":0,
            },
            "fire_pengzhi":{
                trigger:{
                    source:"damageEnd",
                },
                filter:function(event) {
        return event.num > 0; // 只有当你造成了实际伤害时才触发
    },
                content:function() {
        // 令一名角色回复1点体力
        "step 0"
        player.chooseTarget(function(card, player, target) {
            return target.canUse({name:'tao'},target,false);;
        }).set('ai',function(target) {
            var player=get.player();
           
            return get.attitude(player, target) > 0;
        })
        "step 1"
        if (result.bool && result.targets && result.targets.length) {
           player.useCard({name:'tao'} ,result.targets[0],false);
        
    }
    },
                ai:{
                    order:9,
                    threaten:2,
                },
                "_priority":0,
            },
            "fire_buji":{
                trigger:{
                    global:"recoverEnd",
                },
                filter:function(event,player){
       return event.player.isLinked()&&event.player!=player;
        
    },
                content:function() {
        
       
        "step 0"
        if (trigger.player!=player&&trigger.player.countCards('h')>0) {
            var target = trigger.player;
            player.logSkill('fire_buji', target);
            player.gainPlayerCard(target, 1, 'h', true);
            }
         else if(player.hp<player.maxHp){
            player.recover();
            event.finish();
        }
        "step 1"
        game.delay();
    },
                "_priority":0,
            },
            "fire_haoling":{
                trigger:{
                    player:"shaBegin",
                },
                forced:true,
                content:function(){
         var targets=trigger.target
        targets.addTempSkill('fire_chaofeng',{player:'phaseBegin'})
    },
                "_priority":0,
            },
            "fire_new_haoling":{
                mod:{
                    cardname:function(card,player){
                        if(get.type(card,null,false)=='trick') return 'tiesuo';
                    },
                },
                "_priority":0,
            },
            "fire_bazhu":{
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                group:["fire_bazhu_dist"],
                locked:false,
                subSkill:{
                    dist:{
                        locked:false,
                        mod:{
                            maxHandcard:function (player,num){
                    var count=game.countPlayer(function(current){
                    return current.isLinked();
                });
               var half=Math.floor(count/2)
                    if(count>0)
                    return num+=count;
                    else return num+=1;
                },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                content:function () {
        var count=game.countPlayer(function(current){
                    return current.isLinked();
                });
        var half=Math.floor(count/2)
        if(count>0)
       trigger.num=trigger.num+count;
        else 
       trigger.num++;
    },
                "_priority":0,
            },
            "fire_yuehuo":{
                unique:true,
                global:"fire_yuehuo2",
                zhuSkill:true,
                "_priority":0,
            },
            "fire_chongfeng":{
                audio:"ext:守林人:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                subSkill:{
                    qingzhuang:{
                        charlotte:true,
                        sub:true,
                        "_priority":0,
                    },
                    short:{
                        silent:true,
                        sub:true,
                        mod:{
                            globalFrom:function(from,to,distance){
            return distance+1;
        },
                            globalTo:function(from,to,distance){
            return distance+1;
        },
                        },
                        forced:true,
                        popup:false,
                        "_priority":1,
                    },
                },
                mod:{
                    globalFrom:function(from,to,distance){
            return distance-1;
        },
                    globalTo:function(from,to,distance){
            return distance-1;
        },
                },
                content:function () {
        
        'step 0'
        if(player.hujia)
       trigger.num+=1
       else(
        trigger.player.chooseToDiscard('请选择弃置一张防具栏内的牌，否则'+get.translation(trigger.player)+'的〖轻装〗于本回合失效','e',{subtype:'equip2'},1).set('ai',function(card){
           
            return get.unuseful(card)+2.5*(5-get.player(card).hp);
        }));
        'step 1'
        if(result.bool){
            
            //trigger.source.draw();
        }
        else if(result.bool==false&&!player.hujia)
        {
       player.addTempSkill('fire_chongfeng_qingzhuang')
        }
    },
	ai:{
                    threaten:function(player,target){
						if(target.hujia) return 2
						else return 1
					},	
	},
                "_priority":0,
            },
            "fire_hunsuo":{
                trigger:{
                    player:"damageBegin3",
                },
                audio:"new_reyaowu",
                forced:true,
                filter:function(event){
        return event.card&&(get.color(event.card)!='red'||event.source&&event.source.isAlive());
    //&&event.card.isCard
    },
                content:function(){
        trigger[get.color(trigger.card)!='red'?'player':'source'].draw(2);
    },
                ai:{
                    maixie:true,
					effect:{
						target:function(card,player,target,current){
							if(get.tag(card,'damage')&&(get.color(card)=='red')){
								return [1,-2];
							}
							if(get.tag(card,'damage')&&(get.color(card)=='black'))
							{
                                if(target.hp<=2) return 0.8;
								if(target.hujia) return 1;
								return [1,2];
							}
						}					
					},
                },
                "_priority":0,
            },
            "fire_yinguang":{
                group:"fire_yinguang2",
                mod:{
                },
                enable:"phaseUse",
                filter:function(card,player){
        if(player.getEquip(1)) return false;
            return true;
    },
                filterCard:function(card){
        return get.name(card)=='sha'&&get.color(card)=='black';

    },
                position:"hes",
                viewAs:{
                    name:"jiedao",
                },
                viewAsFilter:function(player){
        if(!player.countCards('hes',{name:'sha'},{color:'black'})) return false;
        
    },
                prompt:"将一张黑杀当借刀杀人使用",
                ai:{
                    wuxie:function(target,card,player,viewer){
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
                    basic:{
                        order:8,
                        value:2,
                        useful:1,
                    },
                    result:{
                        target:-1.5,
                        player:function(player){
                if(player.getCards('he',{subtype:'equip1'}).length) return 0;
                return 1.5;
            },
                    },
                    tag:{
                        gain:1,
                        use:1,
                        useSha:1,
                        loseCard:1,
                    },
                },
                "_priority":0,
            },
            "fire_qianjun":{
                skillAnimation:true,
                animationColor:"wood",
                audio:"ext:守林人:2",
                unique:true,
                juexingji:true,
                zhuSkill:true,
                keepSkill:true,
                derivation:"fire_czcibor_qifeng",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                forced:true,
                filter:function(event,player){
        if(!player.hasZhuSkill('fire_qianjun'))return false;
        if(player.storage.fire_qianjun) return false;
        return player.isMinHp();
    },
                content:function(){
        'step 0'
        player.storage.fire_qianjun=true;
        player.changeHujia(1);
        'step 1'
        if(player.hasSkill('fire_qianjun')){
            player.addSkill('fire_czcibor_qifeng');
        }
        else{
            player.addAdditionalSkill('fire_qianjun','fire_czcibor_qifeng');
        }
        if(!player.isZhu){
            player.storage.zhuSkill_fire_qianjun=['fire_czcibor_qifeng'];
        }
        else{
            event.trigger('zhuUpdate');
        }
        player.awakenSkill('fire_qianjun');
    },
                "_priority":0,
            },
            "fire_liujin":{
                "_priority":0,
            },
            "fire_kuangfu":{
                "_priority":0,
            },
            "fire_tongxing":{
                trigger:{
                    global:"phaseEnd",
                },
                filter:function(event,player){
        if (event.player.isAlive()&&(event.player.countCards('hes')>=2)&&(event.player.hp<event.player.maxHp)) return true;
    },
                check:function(event,player){
        return (get.attitude(player,event.player)>0);
    },
                content:function () {
        "step 0"
        trigger.player.chooseToDiscard('hes',2).set('ai',function(card){
            
            return get.unuseful(card)+2.5*(5-get.player(card).hp);
        })
       "step 1"
       if(result.bool){
        
       //if(trigger.player!=player)
           player.recover()
       trigger.player.recover()
       player.removeSkill('fire_doushi_roundoff')
           //else {player.recover(2)}
       }
    },
                ai:{
                    order:9,
                    result:{
                        player:function(player,target){
                if(get.attitude(player,target)>0.5){
                    return 4;
                }
                return 0;
            },
                        target:function(player,target){
                
           
                if(player==target&&player.countCards('h')>player.hp) return 5;
                return 0;
            },
                    },
                    threaten:2,
                },
                "_priority":0,
            },
            "fire_doushi":{
                audio:"ext:守林人:2",
                subSkill:{
                    roundoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"斗",
                        intro:{
                            name:"斗士",
                            content:"阿丽娜，我的阿丽娜",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    global:"damageEnd",
                },
                logTarget:"source",
                filter:function(event,player){
        if(player.hasSkill('fire_doushi_roundoff')) return false;
        if((!player.countCards('h')==0)&&(event.source!=undefined)&&(event.source!=player)&&(!event.source.countCards('h')==0)) return true;
       
    },
                check:function(event,player){
        return(get.attitude(player,event.source)<=0);
    },
                content:function(){
        var targets=trigger.source
        "step 0"
        
        player.chooseToCompare(targets);
        player.addTempSkill('fire_doushi_roundoff','roundStart');
        "step 1"
       
        if(result.bool){
           var allh=targets.countCards("h");
            player.gainPlayerCard('h',allh,targets,true);
           
            event.finish();    
            
        }
        else{
            var alle=player.countCards("e");
            targets.gainPlayerCard('e',alle,player,true);
            event.finish();
        }
       
    },
                ai:{
                    order:9,
                    threaten:1.5,
                    result:{
                        target:function(player,target){
                var att=get.attitude(player,target);
                var oc=(target.countCards('h')==1);
                var hp=(target.hp==1);
                if(att>0&&oc) return 0;
                if(att>0&&hp) return 2;
                
            },
                        player:function(player,target){
                if(target.hasSkillTag('jueqing',false,target)) return -10;
                var mn=1;
                var hs=player.getCards('h');
                for(var i=0;i<hs.length;i++){
                    mn=Math.max(mn,get.number(hs[i]));
                }
                if(mn<=10&&player.hp<2) return -20;
                var hs=player.getCards('h');
                
                var max=player.maxHp-hs.length;
                
                switch(max){
                    case 0:return mn==13?0:-20;
                    case 1:return mn>=12?0:-15;
                    case 2:return 0;
                    case 3:return 1;
                    default:return max;
                }
            },
                    },
                },
                "_priority":0,
            },
            "fire_qianlu":{
                trigger:{
                    global:"phaseDiscard",
                },
                filter:function(event,player,card){
        //if(event.player.getCards('e').length)return false;
        return true;
    },
                prompt:"失去1点体力令其与你已损失的体力值数名你选择的角色各摸1张牌",
                check:function(event,player){
        return (get.attitude(player,event.player)>0)&&(player.hp>1);
    },
                content:function(){
        var target=trigger.player
        "step 0"
        
        player.loseHp(1);
        "step 1"
                var count=Math.ceil(player.maxHp-player.hp);
                var targets = game.filterPlayer();
        player.chooseTarget('选择'+ count +'名目标',[0,count],function(card, player, target) {
        return targets.contains(player);
    }).set('ai', function(target) {
        return get.attitude(_status.event.player, target);
        })
        "step 2"
        //trigger.cancel()
        //if(trigger.player!=player)
            if(result.bool){
                        var targets=result.targets;
                        player.line(targets);
                        targets.forEach(i=>i.draw());            
        trigger.player.draw();

            }
        //else player.draw(3);
        "step 3"
        
    if(!player.storage.fire_qianlu){
        player.storage.fire_qianlu=[];
    }
    player.storage.fire_qianlu.add(target);
    var controls=[];
    if(target.countCards('h')) controls.push('手牌');
    
    
    if(controls.length==0) event.finish();
    "step 4"
    var content;
    var str=get.translation(target)+'的';
    if(result.control){
        if(result.control=='手牌'){
            content=[str+'手牌',target.getCards('h')];
            game.log(player,'观看了',target,'的手牌');
        }
        
    }
    else if(target.countCards('h')){
        content=[str+'手牌',target.getCards('h')];
        game.log(player,'观看了',target,'的手牌');
    }
   player.chooseControl('ok').set('dialog',content);
    
    },
                ai:{
					expose:0.3,
                    basic:{
                        order:1,
                    },
                    result:{
                        player:function(player,target){
                if(get.attitude(player,target)>0){
                    return 2;
                }
                return 0;
                if(target.countCards('h')>=player.hp-1) return -1;
                if(player.hp<3) return -1;
              
            },
                    },
                },
                "_priority":0,
            },
            "fire_qiushui":{
                mod:{
                    aiValue:function(player,card,num){
            if(get.name(card)!='tao'&&get.type(card)!='equip') return;
            var cards=player.getCards('hes',function(card){
                return get.name(card)=='tao'||get.type(card)=='equip';
            });
            cards.sort(function(a,b){
                return (get.name(a)=='tao'?1:2)-(get.name(b)=='tao'?1:2);
            });
            var geti=function(){
                if(cards.contains(card)){
                    return cards.indexOf(card);
                }
                return cards.length;
            };
            return Math.max(num,[6.5,4,3,2][Math.min(geti(),2)]);
        },
                    aiUseful:function(){
            return lib.skill.kanpo.mod.aiValue.apply(this,arguments);
        },
                },
                locked:false,
                audio:"ext:守林人:2",
                enable:"chooseToUse",
                viewAsFilter:function(player){
        return player.countCards('hes',{type:'equip'})>0;
    },
                filterCard:function(card){
        return get.type(card)=='equip';
    },
                position:"hes",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张装备牌当桃使用",
                check:function(card){return 15-get.value(card)},
                ai:{
                    threaten:3,
                    basic:{
                        order:function(card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[6.5,4,3,2],
                        value:[6.5,4,3,2],
                    },
                    result:{
                        target:2,
                        "target_use":function(player,target){
                // if(player==target&&player.hp<=0) return 2;
                if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
                "_priority":0,
            },
            "fire_leitai":{
                enable:"phaseUse",
                selectTarget:1,
                filterTarget:function(card,player,target){
        return target!=player&&target.countCards('h')>0&&get.distance(player,target)<=1;
    },
                filter:function(event,player){
     var num=Math.ceil(player.maxHp-player.hp)
        if(player.countCards('h')<=num) return true;
        
    },
                content:function(){
   
    var hand=target.getCards('h');
    if(hand.length){
        event.card=hand.randomGet();
        player.gain(event.card,target);
        target.$giveAuto(event.card,player);
    }
    else{
        event.finish();
    }
    },
                ai:{
					maixie:true,
                    threaten:1,
                    order:20,
                    result:{
                        target:1,
                        player:function(player,target){
                if(get.attitude(player,target)>0){
                    return 0;
                }
                return 4;
            },
                    },
                    effect:{
                        target:function(card){
                if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
            },
                    },
                },
                "_priority":0,
            },
            "fire_jianxv":{
                "_priority":0,
            },
            "fire_junzhen":{
                "_priority":0,
            },
            "fire_xuezi":{
                mod:{
                    aiValue:function(player,card,num){
            if(get.name(card)!='tao'&&get.type(card)!='trick') return;
            if(get.name(card)!='tao'&&get.type(card)!='delay') return;
            var cards=player.getCards('hs',function(card){
                return get.name(card)=='tao'||get.type(card)=='trick'||get.type(card)=='delay';
            });
            cards.sort(function(a,b){
                return (get.name(a)=='tao'?1:2)-(get.name(b)=='tao'?1:2);
            });
            var geti=function(){
                if(cards.contains(card)){
                    return cards.indexOf(card);
                }
                return cards.length;
            };
            return Math.max(num,[6.5,4,3,2][Math.min(geti(),2)]);
        },
                    aiUseful:function(){
            return lib.skill.kanpo.mod.aiValue.apply(this,arguments);
        },
                },
                locked:false,
                audio:"ext:守林人:2",
                audioname:["re_huatuo"],
                enable:"chooseToUse",
                viewAsFilter:function(player){
        return player.countCards('hes',{type:'trick'})+player.countCards('hes',{type:'delay'})>0;
    },
                filterCard:function(card){
        return get.type(card)=='trick'||get.type(card)=='delay';
    },
                position:"hes",
                viewAs:{
                    name:"tao",
                },
                prompt:"将一张锦囊牌当桃使用",
                check:function(card){return 15-get.value(card)},
                ai:{
                    basic:{
                        order:function(card,player){
                if(player.hasSkillTag('pretao')) return 5;
                return 2;
            },
                        useful:[6.5,4,3,2],
                        value:[6.5,4,3,2],
                    },
                    result:{
                        target:2,
                        "target_use":function(player,target){
                // if(player==target&&player.hp<=0) return 2;
                if(player.hasSkillTag('nokeep',true,null,true)) return 2;
                var nd=player.needsToDiscard();
                var keep=false;
                if(nd<=0){
                    keep=true;
                }
                else if(nd==1&&target.hp>=2&&target.countCards('h','tao')<=1){
                    keep=true;
                }
                var mode=get.mode();
                if(target.hp>=2&&keep&&target.hasFriend()){
                    if(target.hp>2||nd==0) return 0;
                    if(target.hp==2){
                        if(game.hasPlayer(function(current){
                            if(target!=current&&get.attitude(target,current)>=3){
                                if(current.hp<=1) return true;
                                if((mode=='identity'||mode=='versus'||mode=='chess')&&current.identity=='zhu'&&current.hp<=2) return true;
                            }
                        })){
                            return 0;
                        }
                    }
                }
                if(target.hp<0&&target!=player&&target.identity!='zhu') return 0;
                var att=get.attitude(player,target);
                if(att<3&&att>=0&&player!=target) return 0;
                var tri=_status.event.getTrigger();
                if(mode=='identity'&&player.identity=='fan'&&target.identity=='fan'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='fan'&&tri.source!=target){
                        var num=game.countPlayer(function(current){
                            if(current.identity=='fan'){
                                return current.countCards('h','tao');
                            }
                        });
                        if(num>1&&player==target) return 2;
                        return 0;
                    }
                }
                if(mode=='identity'&&player.identity=='zhu'&&target.identity=='nei'){
                    if(tri&&tri.name=='dying'&&tri.source&&tri.source.identity=='zhong'){
                        return 0;
                    }
                }
                if(mode=='stone'&&target.isMin()&&
                player!=target&&tri&&tri.name=='dying'&&player.side==target.side&&
                tri.source!=target.getEnemy()){
                    return 0;
                }
                return 2;
            },
                    },
                    tag:{
                        recover:1,
                        save:1,
                    },
                },
                "_priority":0,
            },
            "fire_jianding":{
				derivation:"fire_diaowang",
                forced:true,
                charlotte:true,
                init:(player)=>{
                    game.addGlobalSkill("fire_jianding_one");
                    game.addGlobalSkill("fire_jianding_two");
                },
                onremove:(player)=>{
                    if(!game.hasPlayer(current=>current.hasSkill('fire_jianding'),true)) 
                    {
                        game.removeGlobalSkill("fire_jianding_one")
                        game.removeGlobalSkill("fire_jianding_two");
                    }
                },
                subSkill:{
                    one:{
                        forced:true,
                        charlotte:true,
                        trigger:{
                            player:"damageAfter",
                        },
                        filter:function(event,current,player,skill){
                             return (game.hasPlayer(current=>current.hasSkill('fire_jianding'),true)) 
                        },
                        content:function(){
                        'step 0'
                        player.chooseToDiscard("弃置一张【影】，否则获得一枚“暗”标记",'hs',{name:"ying"},1).set('ai',function(card){
            return get.name(card)=="ying";
        })
                        'step 1'
                        if(result.bool)
                        {
                        event.finish();
                        }
                        else
                        {
                        player.addSkill('fire_diaowang');
                        }
                    },
                        sub:true,
                        "_priority":0,
                    },
                    two:{
                        forced:true,
                        charlotte:true,
                        trigger:{
                            source:"damageBegin1",
                        },
                        filter:function(event,current,player,skill){
                        if(!game.hasPlayer(current=>current.hasSkill('fire_jianding'),true)) return false 
                        return event.num>0
                    },
                        content:function(){
                        player.gain(lib.card.ying.getYing(1),'gain2');
                    },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_shunxi":{
                group:["fire_shunxi1","fire_shunxi2","fire_shunxi3"],
                "_priority":0,
            },
            "fire_shunxi1":{
                trigger:{
                    player:"phaseJudgeBefore",
                },
                direct:true,
                usable:1,
                filter:function(event,player){
        return player.hp<player.maxHp
    },
                content:function(){
        "step 0"
        var check= player.countCards('h')>2;
        player.chooseTarget(get.prompt("fire_shunxi"),"跳过判定阶段和摸牌阶段，视为对一名其他角色使用一张冰【杀】",function(card,player,target){
            if(player==target) return false;
            return player.canUse({name:'sha'},target);
        }).set('check',check).set('ai',function(target){
            if(!_status.event.check) return 0;
            return get.effect(target,{name:'sha'},_status.event.player);
        }).setHiddenSkill('fire_shunxi1');
        "step 1"
        if(result.bool){
            player.logSkill('fire_shunxi',result.targets);
            player.useCard({name:'sha',nature:'ice',isCard:true},result.targets[0],false);
            trigger.cancel();
            player.skip('phaseDraw');
        }
    },
                "_priority":0,
            },
            "fire_shunxi2":{
                trigger:{
                    player:"phaseUseBefore",
                },
                direct:true,
                usable:1,
                filter:function(event,player){
        return player.hp==player.maxHp
    },
                content:function(){
        "step 0"
        var check= player.countCards('h')<player.maxhp;
        player.chooseTarget(get.prompt("fire_shunxi"),"跳过出牌阶段，视为对一名其他角色使用一张冰【杀】",function(card,player,target){
            if(player==target) return false;
            return player.canUse({name:'sha'},target);
        }).set('check',check).set('ai',function(target){
            if(!_status.event.check) return 0;
            return get.effect(target,{name:'sha'},_status.event.player);
        }).setHiddenSkill('fire_shunxi1');
        "step 1"
        if(result.bool){
            player.logSkill('fire_shunxi',result.targets);
            player.useCard({name:'sha',nature:'ice',isCard:true},result.targets[0],false);
            trigger.cancel();
            
        }
    },
                "_priority":0,
            },
            "fire_shunxi3":{
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                usable:1,
                filter:function(event,player){
        return player.countCards('hej',function(card){
            return true;
        })>0;
    },
                content:function(){
        "step 0"
        var check=player.needsToDiscard();
        player.chooseCardTarget({
            prompt:get.prompt('fire_shunxi'),
            prompt2:"弃置一张区域内的牌并与一名其他角色交换座次，视为对其使用一张冰【杀】",
            filterCard:function(card,player){
                return lib.filter.cardDiscardable(card,player)
            },
            position:'hej',
            filterTarget:function(card,player,target){
                if(player==target) return false;
                return player.canUse({name:'sha'},target);
            },
            ai1:function(card){
                if(_status.event.check) return 0;
                return 6-get.value(card);
            },
            ai2:function(target){
                if(_status.event.check) return 0;
                return get.effect(target,{name:'sha'},_status.event.player);
            },
            check:check
        }).setHiddenSkill('fire_shunxi3');
        "step 1"
        if(result.bool){
            player.logSkill('fire_shunxi',result.targets);
            player.discard(result.cards[0]);
            game.swapSeat(player,result.targets[0]);
            player.useCard({name:'sha',nature:'ice',isCard:true},result.targets[0],false);
        
        }
    },
                "_priority":0,
            },
            "fire_new_shunxi":{
                "_priority":0,
                audio:"jsrgpingrong",
                trigger:{
                    global:["loseAfter","loseAsyncAfter","cardsDiscardAfter"],
                },
                filter:function(event,player){
                    if(player.hasSkill('fire_new_shunxi_roundoff'))return false;
                    return event.getd().some(i=>get.name(i,false)=='ying');
                },
                content:function(){
                    player.addTempSkill('fire_new_shunxi_roundoff','roundStart');
                    player.insertPhase();
                    player.addSkill('fire_new_shunxi_check')

                },
                subSkill:{
                    roundoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"瞬",
                        intro:{
                            name:"瞬息",
                            content:"",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    check:{
                        trigger:{
                            player:"phaseAfter",
                        },
                        charlotte:true,
                        forced:true,
                        filter:function(event,player){
                            return event.skill=='fire_new_shunxi'&&!player.getHistory('sourceDamage').length;
                        },
                        content:function(){
                            player.loseHp();
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
            },
            "fire_yanmie":{
                audio:"ext:firewatch/audio:3",
                trigger:{
                    player:"phaseDiscardBefore",
                },
                skillAnimation:true,
                animationColor:"ice",
                forced:true,
                content:function () {
                    var hp=player.hp
                    'step 0'
                    player.showHandcards();
                    'step 1'
                    if(player.countCards('h',{name:'ying'})<hp)
                {    
                trigger.cancel();
                }
                else if(player.countCards('h',{name:'ying'})>=hp)
                    {
        player.loseMaxHp(true);    
        //player.recover();
                    }
    },
                "_priority":0,
            },
            "fire_muhen":{
                unique:true,
                group:"fire_muhen2",
                zhuSkill:true,
                "_priority":0,
            },
            "fire_yuanjian":{
				derivation:"fire_diaowang",
                audio:"ext:firewatch:2",
                trigger:{
                    player:"phaseZhunbeiBegin",
                },
                filter:function(event,player){
        return player.countCards('h',card=>get.color(card,player)=='black')>0;
    },
                usable:1,
                content:function(){
     
    'step 0'
    
    player.chooseToDiscard('h',1,{color:'black'},true).set('ai',function(card){
        return get.unuseful(card)+2.5*(5-get.player(card).hp);
       
    })
    'step 1'
    if(result.bool)
    {
    var cards=get.cards(8);
    event.cards=cards;
    game.log(player,'观看牌堆顶的'+get.cnNumber(cards.length)+'张牌');
    player.chooseControl('ok').set('dialog',['远视',cards]);
    }
     else event.finish    
    'step 2'
    if(result.bool)
        {
    while(cards.length){
    ui.cardPile.insertBefore(cards.pop(),ui.cardPile.firstChild);
    }
    game.updateRoundNumber();
          
            }
       
        'step 3'
       
                
        player.chooseTarget(get.prompt2('fire_yuanjian'),function(card,player,target){return !target.hasSkill('fire_diaowang')}).set('ai',function(target){
            if(get.attitude(_status.event.player,target)<0){
                return 2;
            }
            return 0;
        }).animate=false;
            
        'step 4'
        if(result.bool){
            var target=result.targets[0];
            player.logSkill('fire_yuanjian');
            target.storage.fire_diaowang=player;
            target.addSkill('fire_diaowang');
        }
    },
                ai:{
                    order:11,
                    result:{
                        player:1,
                    },
                },
                "_priority":0,
            },
            "fire_xianmen":{
                audio:"ext:firewatch:2",
                forced:true,
                trigger:{
                    global:"judgeEnd",
                },
                preHidden:true,
                frequent:function(event){
       
        return true;
    },
                check:function(event){
       
        return true;
    },
                filter:function(event,player){
        return get.position(event.result.card,true)=='o';
    },
                content:function(){
        player.gain(trigger.result.card,'gain2');
        if(trigger.player.hasSkill('fire_diaowang'))
            trigger.player.removeSkill('fire_diaowang');
    },
                "_priority":0,
            },
            "fire_youlin":{
                audio:"ext:守林人/audio:3",
                trigger:{
                    player:["phaseEnd","damageEnd"],
                },
                skillAnimation:false,
                animationColor:"wood",
                subSkill:{
                    "effect1":{
                        audio:0,
                        silent:true,
                        forced:true,
                        charlotte:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
       var evt=event.getParent('phaseEnd');
        if(event.getParent(1).name!='fire_youlin') return false;        
       if(player.hasHistory('useCard',function(evtx){
            return evtx!=event&&evtx.card.name=='sha'&&evtx.getParent('phaseEnd')==evt;
        },event)) return false
        if( get.name(event.card) == 'sha' && event.card.isCard) return true; 
    },
                        content:function(){
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_youlin=true;
        //trigger.baseDamage++;
        //player.addTempSkill('fire_youlin_effect2','phaseAfter'); 
        player.addTempSkill('fire_youlin_weapon','phaseAfter');        
        //player.addTempSkill('fire_youlin_health','phaseAfter');        
        //player.addTempSkill('fire_youlin_range','phaseAfter');   
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                    "effect2":{
                        audio:0,
                        charlotte:true,
                        silent:true,
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        forced:true,
                        filter:function(event,player){
            return event.card&&event.card.storage&&event.card.storage.fire_youlin
            },
                        content:function(){
                
               var id=trigger.target.playerid;
                    var map=trigger.getParent().customArgs;
                    if(!map[id]) map[id]={};
                    if(typeof map[id].shanRequired=='number'){
                        map[id].shanRequired++;
                    }
                    else{
                        map[id].shanRequired=2;
                    }
                
           
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                    health:{
                        sub:true,
                        popup:false,
                        silent:true,
                        charlotte:true,
                        trigger:{
                            source:"damageBegin1",
                        },
                        forced:true,
                        filter:function (event,player,name){
        if(event.getParent(3).name!='fire_youlin') return false;        
       if( get.name(event.card) != 'sha') return false; 
        if(!event.player) return false;        
        
        
        var health=event.player.hp;
        var  max=event.player.maxHp       
        return health==max;
       
    },
                        preHidden:true,
                        content:function (){
        trigger.num=trigger.num+1;
       //game.log(trigger.getParent(3).name)
    },
                        "_priority":1,
                    },
                    weapon:{
                        popup:false,
                        silent:true,
                        charlotte:true,
                        preHidden:true,
                        sub:true,
                        trigger:{
                            source:"damageBegin1",
                        },
                        forced:true,
                        filter:function(event,player){
        if(event.getParent(3).name!='fire_youlin') return false;        
       if( get.name(event.card) != 'sha') return false; 
        if(!event.player) return false;
        return event.player&&event.player.isIn()&&event.player.getEquip(1);
    },
                        content:function(){
        trigger.num++;
    },
                        "_priority":1,
                    },
                    range:{
                        sub:true,
                        popup:false,
                        charlotte:true,
                        trigger:{
                            source:"damageBegin1",
                        },
                        forced:true,
                        filter:function (event,player,name){
                if(event.getParent(1).name!='fire_youlin') return false;
       if( get.name(event.card) != 'sha') return false; 
        if(!event.player) return false;
        
        var range=event.player.getAttackRange();
        return range>2;
       
    },
                        preHidden:true,
                        content:function (){
        trigger.num=trigger.num+1;
                
       
    },
                        "_priority":0,
                    },
                },
                check:function(event,player,current,card){
        if(!player.getHistory("sourceDamage")
           &&!game.hasPlayer(function(current){
        return  current.player!=player&&player.canUse({name:'sha'},current,false)
            
           } ))return 0
        else
        {
            return 5
        };
    },
                content:function () {
        var check=game.hasPlayer(function(current){
                if(current.player==player) return false;
                return player.canUse({name:'sha'},current,false)
            
            })
        'step 0'
        player.turnOver();
       
        
              
      
        if(player.getHistory("sourceDamage").length){
           
            //player.addTempSkill('fire_ex_fuxue',{player:'phaseBegin'});
            player.draw();
                            }
        
        else{
             
        player.addTempSkill('fire_youlin_effect1','phaseAfter');   
        player.chooseTarget("选择【杀】的目标",function(card,player,target){
                        if(player==target) return false;
                        return player.canUse({name:'sha'},target,false);
                    }).set('check',check).set('ai',function(target){
                        if(!_status.event.check) return 0;
            
                        return get.effect(target,{name:'sha',nature:'stab'},_status.event.player);
                    });
            }
            
                    "step 1"
                    if(result.bool){
                       
       
                        
                        player.useCard({name:'sha',isCard:true,nature:'stab'},result.targets[0],false);
                        
                        
                    
                    }       
            
                    
                   
    },
                "_priority":0,
            },
            "fire_qinfeng":{
                audio:"fire_henhuo",
                group:["fire_qinfeng_damageadd"],
                ai:{
                    order:8,
                    threaten:2,
                    result:{
                        target:-1,
                        player:0.5,
                    },
                },
                subSkill:{
                    damageadd:{
                        audio:"ext:守林人/audio:2",
                        sub:true,
                        forced:true,
                        trigger:{
                            source:"damageBegin4",
                        },
                        filter:function(event,player){
        return event.player!=player&&event.source==player&&event.nature;
           
           
       
           },
                        content:function(){
             var num=get.distance(trigger.player,player)    
                player.turnOver();
                player.draw(1);
            if(num>0)
                player.addTempSkill('fire_ex_fuxue',{player:'phaseBegin'});
           if (num==3)
        trigger.num*=2;
        
                
    },
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_luling":{
                audio:"fire_youlin",
                trigger:{
                    player:"phaseAfter",
                },
                skillAnimation:false,
                animationColor:"wood",
                forced:true,
                content:function () {
        if(player.getHistory("sourceDamage").length)player.draw();
        else player.addTempSkill('fire_ex_fuxue',{player:'phaseBegin'});
    },
                "_priority":0,
            },
            "fire_knightshield1":{
                equipSkill:true,
                trigger:{
                    target:["useCardToBefore"],
                },
                forced:true,
                priority:6,
                audio:"ext:守林人:true",
                filter:function(event,player){
        if(player.hasSkillTag('unequip2')) return false;
        if(event.player.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return false;
        if(event.card.name=='nanman') return true;
        if(event.card.name=='wanjian') return true;
        //if(event.card.name=='chuqibuyi') return true;
        return false;
    },
                content:function(){
        trigger.cancel();
    },
                ai:{
                    effect:{
                        target:function(card,player,target,current){
                if(target.hasSkillTag('unequip2')) return;
                if(player.hasSkillTag('unequip',false,{
                    name:card?card.name:null,
                    target:target,
                    card:card
                })||player.hasSkillTag('unequip_ai',false,{
                    name:card?card.name:null,
                    target:target,
                    card:card
                })) return;
                //if(card.name=='nanman'||card.name=='wanjian'||card.name=='chuqibuyi') return 'zerotarget';
                if(card.name=='nanman'||card.name=='wanjian') return 'zerotarget';
                if(card.name=='sha'){
                    var equip1=player.getEquip(1);
                    if(equip1&&equip1.name=='zhuque') return 1.9;
                    if(!card.nature) return 'zerotarget';
                }
            },
                    },
                },
                "_priority":575,
            },
            "fire_knightshield2":{
                equipSkill:true,
                trigger:{
                    player:"damageBegin3",
                },
                filter:function(event,player){
        if(event.nature!='thunder') return false;
        if(player.hasSkillTag('unequip2')) return false;
        if(event.source&&event.source.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return false;
        return true;
    },
                audio:"ext:守林人:true",
                forced:true,
                content:function(){
        trigger.num++;
    },
                ai:{
                    fireAttack:true,
                    effect:{
                        target:function(card,player,target,current){
                if(card.name=='sha'){
                    if(card.nature=='thunder') return 2;
                    if(player.hasSkill('zhuque_skill')) return 1.9;
                }
                if(get.tag(card,'tunderDamage')&&current<0) return 2;
            },
                    },
                },
                "_priority":-25,
            },
            "fire_knightshield3":{
                equipSkill:true,
                audio:"tengjia1",
                trigger:{
                    target:"shaBefore",
                },
                forced:true,
                filter:function(event,player){
        if(player.hasSkillTag('unequip2')) return false;
        if(event.player.hasSkillTag('unequip',false,{
            name:event.card?event.card.name:null,
            target:player,
            card:event.card
        })) return false;
        if(event.card.name=='sha'&&!event.card.nature) return true;
        return false;
    },
                content:function(){
        trigger.cancel();
    },
                "_priority":-25,
            },
            "fire_diaowang":{
                charlotte:true,
                mark:true,
                marktext:"暗",
                forced:true,
                intro:{
                    content:"已获得暗标记<br>锁定技，摸牌阶段，你少摸一张牌并获得两张【影】；锁定技，当你受到伤害后，令你失去“暗”标记；移去时本轮非锁定技失效。",
                },
                group:["fire_diaowang_shao"],
                subSkill:{
                    shao:{
                        sub:true,
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        forced:true,
                        content:function () {
        
       trigger.num--;
           player.gain(lib.card.ying.getYing(2),'gain2');
    },
                        "_priority":0,
                    },
                },
                trigger:{
                    player:"damageEnd",
                },
                priority:15,
                filter:function(event,player){
        return player.hasSkill('fire_diaowang');
            
        
    },
                content:function(){
       
       player.removeSkill('fire_diaowang',1);
        
    },
                nopop:true,
                onremove:function(player){
       if(!player.hasSkill('fengyin')){
            player.addTempSkill('fengyin','roundStart');
        }
    },
                "_priority":1500,
            },
            "fire_muhen2":{
                audio:"ext:守林人:2",
                usable:1,
                trigger:{
                    global:"loseAfter",
                },
                filter:function(event,player){
        if(player.hp==player.maxHp) return false;
        if(event.player.group!='sami') return false;
                if(event.type!='discard') return false;
                if(event.player==player) return false;
        return player.hasZhuSkill('fire_muhen',event.player);
    },
                direct:true,
                content:function(){
        'step 0'
        trigger.player.chooseBool('是否摸一张牌并让'+get.translation(player)+'回复1点体力').set('choice',get.attitude(trigger.player,player)>0);
        'step 1'
        if(result.bool){
            player.logSkill('fire_muhen2');
            trigger.player.gain(lib.card.ying.getYing(1),'gain2');
            trigger.player.line(player,'green');
            
            player.recover();
        }
    },
                "_priority":0,
            },
            "fire_yuehuo2":{
                audio:"ext:守林人:2",
                enable:"phaseUse",
                discard:false,
                lose:false,
                delay:false,
                line:true,
                prepare:function(cards,player,targets){
        targets[0].logSkill('fire_yuehuo');
    },
                prompt:function(){
        var player=_status.event.player;
        var list=game.filterPlayer(function(target){
            return target!=player&&target.hasZhuSkill('fire_yuehuo',player);
        });
        var str='将一张手牌交给'+get.translation(list);
        if(list.length>1) str+='中的一人来解除横置'
        else str+='来解除横置';
        return str;
    },
                filter:function(event,player){
if(player.group!='ursus') return false;
  if(!player.isLinked())return  false;     
        if(player.countCards('h')==0) return 0;
        return game.hasPlayer(function(target){
            return target!=player&&target.hasZhuSkill('fire_yuehuo',player)&&!target.hasSkill('fire_yuehuo3');
        });
    },
                log:false,
                visible:true,
                filterTarget:function(card,player,target){
        return target!=player&&target.hasZhuSkill('fire_yuehuo',player)&&!target.hasSkill('fire_yuehuo3');
    },
                filterCard:function(card){
        return get.position(card)=='h'
    },
                content:function(){
      
        player.give(cards,target);
        
       
        target.addTempSkill('fire_yuehuo3','phaseUseEnd');
        player.link(false);
            
    },
                ai:{
                    expose:0.3,
                    order:10,
                    result:{
                        target:5,
                    },
                },
                "_priority":0,
            },
            "fire_yuehuo3":{
                "_priority":0,
            },
            "fire_new_youlin":{
                audio:"fire_youlin",
                trigger:{
                    player:"phaseEnd",
                },
                filter:function(event,player,card){
        //if(event.player.getHistory("sourceDamage").length) return false;
        //return true;
        if(player.getHistory('skipped').contains('phaseUse')) return true;
        var history=player.getHistory('useCard').concat(player.getHistory('respond'));
        for(var i=0;i<history.length;i++){
            if(get.tag(history[i].card,'damage')) return false;
        }
        return true;
    },
                skillAnimation:false,
                animationColor:"wood",
                subSkill:{
                    kill:{
                        charlotte:true,
                        mark:true,
                        marktext:"※",
                        intro:{
                            name:"幽林",
                            content:"致命空枪",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    "effect1":{
                        audio:0,
                        silent:true,
                        forced:true,
                        charlotte:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
       var evt=event.getParent('phaseEnd');
       if(event.getParent(1).name!='fire_new_youlin') return false;
       if(player.hasHistory('useCard',function(evtx){
            return evtx!=event&&evtx.card.name=='sha'&&evtx.getParent('phaseEnd')==evt;
        },event)) return false
        if(get.name(event.card) == 'sha' && event.card.isCard) return true; 
    },
                        content:function(){
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_new_youlin=true;
        //trigger.baseDamage++;
        //game.log('上个事件'+trigger.getParent(1).name),
        player.addTempSkill('fire_new_youlin_effect2','phaseAfter');        
           
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                    "effect2":{
                        audio:0,
                        charlotte:true,
                        silent:true,
                        trigger:{
                            source:"damageSource",
                        },
                        forced:true,
                        filter:function(event,player){
                if(!event.player.hasSkill('fire_new_youlin_kill'))return false;
                return event.card&&event.card.storage&&event.card.storage.fire_new_youlin&&event.player.isAlive();
            },
                        content:function(){
                event.player.removeSkill('fire_new_youlin_kill')
                player.turnOver();
                
           
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                },
                content:function () {
        var check= player.isAlive;
        'step 0'
       
        
              
      
        if(player.getHistory("sourceDamage").length){
        
            //player.draw();
            
            //player.tempHide();
                            }
        
        else{
            
               player.addTempSkill('fire_new_youlin_effect1','phaseAfter'); 
           
        player.chooseTarget("选择【杀】的目标",function(card,player,target){
                        if(player==target) return false;
                        return player.canUse({name:'sha',nature:'stab'},target,false);
                    }).set('check',check).set('ai',function(target){
                        if(!_status.event.check) return 0;
                        return get.effect(target,{name:'sha',nature:'stab'},_status.event.player);
                    });
            }
            
                    "step 1"
                    if(result.bool){
                       result.targets[0].addTempSkill('fire_new_youlin_kill','phaseAfter');
       
                        
                        player.useCard({name:'sha',nature:'stab',isCard:true},result.targets[0],false);
                        
                    
                    }       
            
                    
      
        
    },
                ai:{
                    order:9,
                    result:{
                        player:function(player,target){
                if(get.attitude(player,target)<0){
                    return 2;
                }
                return 0;
            },
                        threaten:2,
                    },
                },
                "_priority":0,
            },
            "fire_new_fuxue":{
                audio:"fire_fuxue",
                forced:true,
                skillAnimation:false,
                animationColor:"red",
                trigger:{
                    player:"damageEnd",
                },
                filter:function(event,player){
        return !(event.nature=='fire')&&(event.source!=undefined);
    },
                check:function(event,player){
        return (get.attitude(player,event.source)<=0);
    },
                logTarget:"source",
                content:function(){
        var num=trigger.num
        "step 0"
        trigger.source.chooseToDiscard('请选择弃置'+2*num+'张手牌，否则'+get.translation(trigger.player)+'翻面并获得〖覆雪〗直到下回合结束','h',2*num).set('ai',function(card){
           
            return get.unuseful(card)+2.5*(5-get.player(card).hp);
        });
        "step 1"
        if(result.bool==false&&player.hasSkill('fire_youlin')){
            player.useSkill('fire_youlin');
            //player.turnOver();
            //player.addTempSkill('qianxing',{player:'phaseEnd'});
        }
    
    },
                "_priority":0,
            },
            "fire_tianma":{
                priority:8,
                enable:"phaseUse",
                usable:1,
                select:1,
                check:function(card,player,target){
       return get.name(card)=='sha'
    },
                mark:true,
                locked:true,
                zhuanhuanji:true,
                marktext:"☯",
                intro:{
                    content:function(storage,player,skill){
            if(player.storage.fire_tianma==true) return '出牌阶段限一次，你可以将一张【杀】置入牌堆底并从另一端摸一张牌。';
            return '出牌阶段限一次，你可以将一张【杀】置入牌堆顶并从另一端摸一张牌。';
        },
                },
                audio:"ext:守林人:2",
                log:false,
                delay:false,
                frequent:true,
                discard:false,
                lose:false,
                group:["fire_tianma_mark","fire_tianma_add","fire_tianma_dam"],
                filterCard:function(card,player,target){
        return get.name(card)=='sha';
    },
                filter:function(event,player){
    game.hasPlayer(function(current){
                        return current.hasSkill('fire_tianma');
                    })
        if(player.countCards('h')>0) return true;
        
        
    },
                subSkill:{
                    change:{
                        locked:true,
                        trigger:{
                            player:"phaseUseBegin",
                        },
                        forced:true,
                        content:function(){    
        player.changeZhuanhuanji('fire_tianma');
        },
                        sub:true,
                        "_priority":0,
                    },
                    dam:{
                        trigger:{
                            player:"useCardToBegin",
                        },
                        filter:function(event,player){
        if(event.card&&event.card.name=='sha'&&get.name(event.card) == 'sha' && event.card.isCard) return true; 
         if(!player. hasMark('fire_tianma_mark'))return false;       
    
    },
                        forced:true,
                        charlotte:true,
                        content:function(){
       var all=player.countMark('fire_tianma_mark')
        trigger.baseDamage+=all;
       
       
        game.broadcastAll(function(player){
            player.removeMark('fire_tianma_mark',all);
        },player);
    },
                        sub:true,
                        "_priority":0,
                    },
                    mark:{
                        marktext:"天",
                        intro:{
                            name:"天马",
                            content:"mark",
                        },
                        sub:true,
                        mod:{
                            attackFrom:function(from,to,distance){
                    var num=from.countMark('fire_tianma_mark')
           if(from.hasMark('fire_tianma_mark')) return distance-num
        },
                        },
                        "_priority":0,
                    },
                    add:{
                        trigger:{
                            player:["gainAfter"],
                        },
                        frequent:true,
                        preHidden:true,
                        filter:function(event,player){
        if(event.name=='discard') return false;
       if(player.countMark('fire_tianma_mark')>=3) return false
      var evt=event.getParent('phaseUse')
      if(!evt||!evt.player) return false;
      var cards=event.cards.slice(0);
                var evt=event.getl(player);
                if(evt&&evt.cards) cards.removeArray(evt.cards);
                for(var i=0;i<cards.length;i++){
                    if(cards[i].original!='j'&&get.name(cards[i],event.player)=='sha'
                       &&get.position(cards[i],true)=='h'){
                        return true;
                    }
                }
                return false;           
       
        
        
    },
                        content:function(){ 
            "step 0"
                if(trigger.delay==false) game.delay();
                "step 1"
                var cards=[],cards2=trigger.cards.slice(0),evt=trigger.getl(player);
                if(evt&&evt.cards) cards2.removeArray(evt.cards);
                for(var i=0;i<cards2.length;i++){
                    if(cards2[i].original!='j'&&get.name(cards2[i],trigger.player)=='sha'
                       &&get.position(cards2[i],true)=='h'){
                        cards.push(cards2[i]);
                    }
                }
                if(cards.length){    
              
          player.addMark('fire_tianma_mark',1);  }    
        
        
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                content:function(){ 
        var target=player
      "step 0"
                   
                    "step 1"
                   player.changeZhuanhuanji('fire_tianma');
                     event.target=player;
                   
                    "step 2"
                    if(player.isAlive){
                        player.logSkill('fire_tianma',player);
                       
                        event.card=cards[0];
                       
                    }
                    else{
                        event.finish();
                    }
                    delete _status.noclearcountdown;
                    game.stopCountChoose();
                    "step 3"
                    if(player.storage.fire_tianma!=true){
           player.chooseControlList('天马','将'+get.translation(event.card)+'置于牌堆顶',
                                        
                                                 function(){
                            
                            return 2;
                       });
                    }
                    else{
         player.chooseControlList('天马','将'+get.translation(event.card)+'置于牌堆底',
                                        
                                                 function(){
                            
                            return 2;
                        });
                    }
                    "step 4"
                    
                    event.index=result.index;
                    if(event.index==0){
                        var next=player.lose(event.card,ui.cardPile);
                        if(player.storage.fire_tianma!=true) next.insert_card=true;
                        game.broadcastAll(function(player){
                        var cardx=ui.create.card();
                            cardx.classList.add('infohidden');
                            cardx.classList.add('infoflip');
                            player.$throw(cardx,1000,'nobroadcast');
                        },player);
                    }
                    else event.finish();
                    "step 5"
                    game.delay();
                    "step 6"
                    if(player.storage.fire_tianma==true){
                        game.log(player,'将获得的牌置于牌堆底');
                        if(ui.cardPile.childElementCount==1||player==event.target){
                            player.draw();
                        }
                        else{
                            game.asyncDraw([player,target],null,null);
                        }
                    }
                    else if(player.storage.fire_tianma!=true){
                        game.log(player,'将获得的牌置于牌堆顶');
                        if(ui.cardPile.childElementCount==1||player==event.target){
                            player.draw('bottom');
                        }
                        else{
                            game.asyncDraw([player,target],null,null,true);
                        }
                    }
        
      
        
        
    },
                ai:{
                    order:2,
                    threaten:1.5,
                    result:{
                        player:function(player){
                if (player.countCards('h')>0) return true;
               
            },
                    },
                },
                "_priority":800,
            },
            "fire_lvxing":{
                group:["fire_lvxing_block","fire_lvxing_clear","fire_lvxing_count"],
                intro:{
                    content:"已记录花色：$",
                    onunmark:true,
                },
                subSkill:{
                    clear:{
                        trigger:{
                            player:"phaseZhunbeiBegin",
                        },
                        forced:true,
                        charlotte:true,
                        popup:false,
                        filter:function(event,player){
               return true 
            },
                        content:function(){
                player.unmarkSkill('fire_lvxing');
            },
                        sub:true,
                        "_priority":0,
                    },
                    count:{
                        trigger:{
                            player:"useCard",
                        },
                        forced:true,
                        filter:function(event,player,name){
              if(name!='useCard'&&player==event.player) return false;  
             var suit=get.suit(event.card);
                if(!lib.suit.contains(suit)) return false;
                if(player.storage.fire_lvxing&&player.storage.fire_lvxing.contains(suit)) return false;
                return true;    
                
            },
                        content:function(){
                player.markAuto('fire_lvxing',[get.suit(trigger.card)]);
            },
                        sub:true,
                        "_priority":0,
                    },
                    block:{
                        mod:{
                            targetEnabled:function(card,player,target,now)
                {if(!target.storage.fire_lvxing) return;
                    var suit=get.suit(card);
                    if(suit=='none') return;
                    var evt=_status.event;
                   
if(target.storage.fire_lvxing.contains(suit)) return false;
                },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_chongneng":{
                audio:"ext:守林人/audio:3",
                forced:true,
                trigger:{
                    player:["damageEnd","loseHpEnd"],
                },
                filterCard:true,
                filterTarget:function(card,player,target){
        return get.distance(player,target)<=1;
    },
                content:function () {
        var num=trigger.num;
      'step 0'
     
      player.draw(2*num)
      'step 1'
                    player.chooseCardTarget({
                        prompt:'是否选择一个目标，交给其'+num+'张牌？',
                        filterCard:true,
                        selectCard:num,
                        position:'he',
                        discard:false,
                        filterTarget:function(card,player,target){
                            return target!=player;
                        },
                        selectTarget:1,
                        ai:function(player,target){
                            var card=ui.selected.cards[0];
                            if(player.isTurnedOver())return
                            return get.value(card,target)*get.attitude(_status.event.player,target);
                        },
                    });
        "step 2"

        if(result.bool&&result.targets.length){
            event.target=result.targets[0];
            player.give(result.cards,event.target);
            event.card=result.cards[0];
            player.line(result.targets,'green');
            game.delay();
        }
        else{
          player.turnOver();
         // player.chooseToDiscard('请选择弃置一张手牌','h',num,true).set('ai',function(card){
           
           // return get.unuseful(card)+2.5*(5-get.player(card).hp);});
         
        }
            
      
           
       
    
    },
                ai:{
                    maixie:true,
                    effect:{
                        target:function(card,player,target){
                if(get.tag(card,'damage')) return [1,0.55];
            },
                    },
                },
                "_priority":0,
            },
            "fire_dianhu":{
                audio:"ext:守林人:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                direct:true,
                usable:1,
                filter:function(event,player){
        return (event.card.name=='sha')&&(!event.card.nature)&&event.targets.length==1&&
        (player.hasCard(function(i){
            return _status.connectMode||lib.filter.cardDiscardable(i,player,'fire_dianhu');
        },'h'));
    },
                content:function(){
        'step 0'
        var target=trigger.target;
       
        
        event.target=target;
       
        var list=[];
        var a=(player.hasCard(function(i){
            return lib.filter.cardDiscardable(i,player,'fire_dianhu');
        },'h'))
       if(a)
         {list.push('选项一');
        list.push('选项二');
          if(player.countCards('h')>1){
       list.push('背水！');
              }
          }
          
        list.push('cancel2');
        player.chooseControl(list).set('choiceList',[
            '弃置一张手牌，若你没有护甲则获得一点护甲，与'+get.translation(target)+'横置',
            '弃置一张手牌并将'+get.translation(trigger.card)+'改为雷电',
            '背水！翻面并执行所有选项',
        ]).set('prompt',get.prompt('fire_dianhu',target)).set('ai',function(){
            var evt=_status.event.getTrigger(),player=evt.player,target=evt.target,card=evt.card;
            if(get.attitude(player,target)>0) return 'cancel2';
            
            var bool0=player.hasCard(function(i){
                return lib.filter.cardDiscardable(i,player,'fire_dianhu')&&get.value(card,player)<5;
            },'h')&&!target.hasSkillTag('filterDamage',null,{
                player:player,
                card:card,
            });
            var bool1=bool0&&(!target.isLinked()||!player.hujia)
            var bool2=bool0&&trigger.card.nature!='thunder'
            if(bool1&&bool2&&(target.hp<=2||(player.isDamaged()&&player.maxHp>3))) return '背水！';
            if(bool1) return '选项一';
            if(bool2) return '选项二';
            return 'cancel2';
        });
        'step 1'
        if(result.control!='cancel2'){
            player.logSkill('fire_dianhu',target);
            event.control=result.control;
            if(event.control=='背水！') 
               {player.turnOver();
                target.turnOver();
                }
        }
        else{
            player.storage.counttrigger.fire_dianhu--;
            event.finish();
        }
        'step 2'
        if((event.control=='选项一'||event.control=='背水！')&&player.hasCard(function(i){
            return lib.filter.cardDiscardable(i,player,'fire_dianhu');
        },'h')){
            player.chooseToDiscard('h','弃置一张手牌',true);
            if(!player.hujia)
            {player.changeHujia()};
            player.link(true);
            target.link(true);
        }
        
            
        'step 3'
        if((event.control=='选项二'||event.control=='背水！')&&player.hasCard(function(i){
            return lib.filter.cardDiscardable(i,player,'fire_dianhu');
        },'h')){
            player.chooseToDiscard('h','弃置一张手牌',true);
            trigger.card.nature='thunder';
        }
        
        
    },
                ai:{
                    skillTagFilter:function(player,tag,arg){
            if(!arg||!arg.card||!arg.target||(arg.card.name!='sha')) return false;
            if(player.storage.counttrigger&&player.storage.counttrigger.fire_dianhu&&player.storage.counttrigger.fire_dianhu>0) return false;
            if(arg.target.countCards('h')==1&&(arg.card.name!='sha'||!arg.target.getEquip('bagua')||player.hasSkillTag('unequip',false,{
                name:arg.card?arg.card.name:null,
                target:arg.target,
                card:arg.card
            })||player.hasSkillTag('unequip_ai',false,{
                name:arg.card?arg.card.name:null,
                target:arg.target,
                card:arg.card
            }))) return true;
            return false;
        },
                },
                "_priority":0,
            },
            "fire_re_soufeng":{
                audio:"fire_soufeng",
                group:["fire_re_soufeng_lieren"],
                subSkill:{
                    benzhuo:{
                        forced:true,
                        trigger:{
                            player:"damageBegin2",
                        },
                        filter:function(event,player,card){
        if(event.card&&event.source!=player) return true;
    },
                        content:function(){
           trigger.player.draw(2);
                trigger.player.turnOver();
            
    },
                        sub:true,
                        "_priority":0,
                    },
                    lieren:{
                        forced:true,
                        trigger:{
                            player:"damageBegin2",
                        },
                        filter:function(event,player){
            if(event.card&&(event.source!=undefined)) return true;
    },
                        content:function(){
                var target=trigger.source
                "step 0"
          
                
                 player.judge();
               
        "step 1"
       
        switch(result.color){
                
                case 'red': trigger.player.recover();break;
                case 'black':target.chooseToDiscard('请选择弃置一张装备区里的装备牌','e',1,{type:'equip'},true);break;
               
                }
            
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_yibo":{
                audio:"ext:守林人:2",
                mod:{
                    globalFrom:function(from,to,distance){
       var num=game.countPlayer(function(current){
                    return current.isLinked();
                });        
            if(to.isLinked()) return distance-num;
        },
                    globalTo:function(from,to,distance){
       var num=game.countPlayer(function(current){
                    return current.isLinked();
                });
            if(from.isLinked()) return distance+num; 
        },
                },
                "_priority":0,
            },
            "fire_suiding":{
                shaRelated:true,
                forced:true,
                trigger:{
                    source:"damageBegin4",
                },
                check:function(event,player){
        return get.attitude(player,event.target)<=0;
    },
                filter:function(event,player,card){
        return get.name(event.card) == 'sha'
            &&(event.player.countCards('hej')>=player.hp
              ||event.player.countCards('hej')>=player.countCards('h')) 
        ;
    },
                logTarget:"damagebouns",
                content:function(){
       var cardes=trigger.player.countCards('hej');
       var counte=game.countPlayer(function(current){
                    return current.isLinked();
                });
       var half=Math.floor(counte/2)
       var list=[];
       var targetp=trigger.player
       var a=(cardes>=player.hp||cardes>=player.countCards('h'))
        'step 0'
       
            if(a&&counte>0){list.push('选项一')}  
        if(a&&!targetp.isLinked()){list.push('选项二')} 
        
             
        list.push('cancel2');
        player.chooseControl(list).set('choiceList',[
            '令'+get.translation(trigger.card)+'伤害对'+get.translation(targetp)+'+'+counte,
            '令目标横置',
           
        ]).set('prompt',get.prompt('fire_suiding',target))
        'step 1'
        if(result.control!='cancel2'){
            player.logSkill('fire_suiding',targetp);event.control=result.control;
           
        }
        else{
            
            event.finish();
        }
        'step 2'
        if((event.control=='选项一')){
            if(counte!=0)
            {trigger.num=+counte}
            //else {trigger.num=1}
        }
        
            
        'step 3'
        if((event.control=='选项二')){
            //trigger.cancel();
            trigger.player.link(true)
        }
      
       
        
        
       
        
       
        
  
  },
                "_priority":0,
            },
            "qishi_skill":{
                equipSkill:true,
                trigger:{
                    player:"useCard1",
                },
                filter:function(event,player){
        if(event.card.name=='sha'&&!event.card.nature) return true;
    },
                audio:"ext:守林人:true",
                check:function(event,player){
        var eff=0;
        for(var i=0;i<event.targets.length;i++){
            var target=event.targets[i];
            var eff1=get.damageEffect(target,player,player);
            var eff2=get.damageEffect(target,player,player,'thunder');
            eff+=eff2;
            eff-=eff1;
        }
        return eff>=0;
    },
                "prompt2":function(event,player){
        return '将'+get.translation(event.card)+'改为雷电';
    },
                content:function(){
        trigger.card.nature='thunder';
        if(get.itemtype(trigger.card)=='card'){
            var next=game.createEvent('qishi_clear');
            next.card=trigger.card;
            event.next.remove(next);
            trigger.after.push(next);
            next.setContent(function(){
                delete card.nature;
            });
        }
    },
                "_priority":-25,
            },
            "fire_new_fanshen":{
                enable:"phaseUse",
                usable:1,
                selectTarget:-1,
                filter:function(event,player){
        return game.hasPlayer(function(current){
                    return current.isLinked();
                })
    },
                filterTarget:function(event,player,target){
        return target.isLinked();
        
    },
                content:function(){
        var numb=game.countPlayer(function(current){
                    return current.isLinked();
                });
        var num=Math.ceil(numb)
        var half=Math.floor(num/2)
        var result = game.filterPlayer(function (current) {
      return player.canUse('wugu',current);

    });
        
       
       'step 0'
       
       player.useCard({name:'wugu'},result,num,true)
        'step 1'
        target.link(false);
    
        
    },
                ai:{
                    order:8,
                    threaten:0.5,
                    result:{
                        target:1,
                        player:0.5,
                    },
                },
                "_priority":0,
            },
            "_doublegroup_choice":{
                trigger:{
                    global:"gameStart",
                    player:"enterGame",
                },
                forced:true,
                charlotte:true,
                firstDo:true,
                popup:false,
                filter:function(event,player){
                    return get.mode()!='guozhan'&&get.is.double(player.name1)&&!player._groupChosen;
                },
                content:function(){
                    'step 0'
                    player._groupChosen=true;
                    player.chooseControl(get.is.double(player.name1,true)).set('prompt','请选择你的势力');
                    'step 1'
                    player.changeGroup(result.control);
                },
                "_priority":0,
            },
            "fire_sp_qifeng":{
                zhuSkill:true,
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player,card) {
       if(event.player==player) return false;
                    if(!player.hasZhuSkill('fire_sp_qifeng')) return false;
                    if(event.player.group!='kazimierz') return false;
        if(player.countCards('he',{type:'equip'})==0) return false;
                    return true;
           
       
    },
                check:function(event,player,card){
        if(player.countCards('he',{type:'equip'})>0)
        return (get.attitude(player,event.player)>0);
    },
                content:function () {
      
       
        "step 0"
       
           
            player.line(trigger.player);
            player.chooseCard("he","请选择一张装备牌交给"+get.translation(event.player),
               function(card){
                return get.type(card)=='equip'
            }).set("ai", function (card) {
                return get.value(card);
            });
           
       
        "step 1"
       if(result.bool)
         {   player.logSkill('fire_sp_qifeng', trigger.player);
            trigger.player.gain(result.cards,'gain2',true);
            
      
           

       
        player.recover();}
    },
                ai:{
                    order:9,
                    result:{
                        player:function(player,target){
                if(get.attitude(player,target)>0){
                    return 2;
                }
                return 0;
            },
                    },
                },
                "_priority":0,
            },
            "fire_liying":{
                unique:true,
                global:"fire_liying1",
                zhuSkill:true,
                "_priority":0,
            },
            "fire_liying1":{
                audio:"ext:守林人:2",
                trigger:{
                    player:"useCardAfter",
                },
                filter:function(event,player){
        var max=player.maxHp
        if(player.hp<Math.ceil(max/2)) return false;
        //if(event.player==player)return false;
        if(event.card.name!='sha'||player.group!='minos') return false;
        if(player.hasSkill('fire_liying2')) return false;
        if(!player.isPhaseUsing()) return false;
        if(!game.hasPlayer(function(target){
            return target.hasZhuSkill('fire_liying',player);
        })) return false;
        for(var i=0;i<event.cards.length;i++){
            if(get.position(event.cards[i],true)=='o'){
                return true;
            }
        }
    return false;
    },
                direct:true,
                content:function(){
        'step 0'
        var list=game.filterPlayer(function(target){
            return target.hasZhuSkill('fire_liying',player);
        });
        player.chooseTarget(get.prompt('fire_liying'),'将'+get.translation(trigger.cards)+'交给'+get.translation(list)+(list.length>1?'中的一人':''),function(card,player,target){
            return target.hasZhuSkill('fire_liying',player);
        }).ai=function(target){
        return get.attitude(_status.event.player,target);
        };
        'step 1'
        if(!result.bool) event.finish();
        else{
            player.addTempSkill('fire_liying2','phaseUseEnd');
            var zhu=result.targets[0];
            player.line(zhu,'green');
            zhu.logSkill('fire_liying');
            var list=[];
            for(var i=0;i<trigger.cards.length;i++){
                if(get.position(trigger.cards[i],true)=='o'){
                    list.push(trigger.cards[i]);
                }
            }
            zhu.gain(list,'gain2').giver=player;
            zhu.chooseBool().set('ai',function(){
                if(get.attitude(zhu,player)>0) return true;
                return false;
            }).set('prompt','是否回复1点体力并令'+get.translation(player)+'本阶段使用【杀】的次数上限+1？');
        }
        'step 2'
        if(result.bool){
            player.recover();
            player.addMark('fire_liying2',1,false);
        }
    },
                "_priority":0,
            },
            "fire_liying2":{
                mod:{
                    cardUsable:function(card,player,num){
            if(card.name=='sha') return num+player.countMark('fire_liying2');
        },
                },
                onremove:true,
                "_priority":0,
            },
            "fire_tianma2":{
                global:"fire_tianma",
                audio:"ext:守林人:2",
                "_priority":0,
            },
            "fire_qingzhuang":{
                audio:"ext:守林人:2",
                trigger:{
                    player:"loseAfter",
                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                },
                frequent:true,
                filter:function(event,player){
        var evt=event.getl(player);
        return evt&&evt.player==player&&!player.hasSkill('fire_chongfeng_qingzhuang')&&evt.es&&evt.es.length>0;
    },
                content:function(){
        var count=trigger.getl(player).es.length;
        "step 0"
        player.storage.num=count;        
        "step 1"
        player.storage.num--;
                var list=[];
                if(lib.filter.cardUsable({name:'sha'},player)&&game.hasPlayer(function(current){
                    return player.canUse('sha',current);
                }))
                {
                    list.push(['基本','','sha']);
                }
                for(var i of lib.inpile_nature){
                 if(lib.filter.cardUsable({name:'sha',nature:i},player)&&game.hasPlayer(function(current){
                            return player.canUse({name:'sha',nature:i},current);
                        })){
                        list.push(['基本','','sha',i]);
                    }}
                if(lib.filter.cardUsable({name:'tao'},player)&&game.hasPlayer(function(current){
                    return player.canUse('tao',current);
                })){
                    list.push(['基本','','tao']);
                }
                if(lib.filter.cardUsable({name:'jiu'},player)&&game.hasPlayer(function(current){
                    return player.canUse('jiu',current);
                })){
                    list.push(['基本','','jiu']);
                }
                if(lib.filter.cardUsable({name:'fire_supplement'},player)&&game.hasPlayer(function(current){
                    return player.canUse('fire_supplement',current);
                })){
                    list.push(['基本','','fire_supplement']);
                }
                if(lib.filter.cardUsable({name:'fire_originium'},player)&&game.hasPlayer(function(current){
                    return player.canUse('fire_originium',current);
                })){
                    list.push(['基本','','fire_originium']);
                }
                if(list.length){
                    player.chooseButton(['是否视为使用一张基本牌？',[list,'vcard']]).set('ai',function(button){
                        var player=_status.event.player;
                        var card={name:button.link[2],nature:button.link[3],isCard:true};
                        if(card.name=='tao'){
                            if(player.hp==1||(player.hp==2&&!player.hasShan())||player.needsToDiscard()){
                                return 5;}
                            return 1;
                        }
                        if(card.name=='sha'){
                            if(game.hasPlayer(function(current){
                                return player.canUse(card,current)&&get.effect(current,card,player,player)>0
                            })){
                                if(card.nature=='fire') return 2.95;
                                if(card.nature=='thunder'||card.nature=='ice') return 2.92;
                                return 2.9;
                            }
                            return 0;
                        }
                        if(card.name=='jiu'){
                            return 0.5;
                        }
                        if(card.name=='fire_supplement'){
                            
                            return 6;
                        }
                        if(card.name=='fire_originium'){
                            
                            return -1;
                        }
                        return 0;
                    })
               } 
            
        "step 2"
        
        if(result&&result.bool&&result.links[0]){
            var card={name:result.links[0][2],nature:result.links[0][3]}
            player.chooseUseTarget(card,true)
            }
        "step 3"
        if(player.storage.num>0){
            player.chooseBool(get.prompt2('fire_qingzhuang')).set('frequentSkill','fire_qingzhuang').ai=lib.filter.all;
        }
        "step 4"
        if(result.bool&&player.storage.num>0){
            player.logSkill('fire_qingzhuang');
           event.goto(1);
        }
    },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function(card,player,target,current){
                if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
            },
                    },
                },
                "_priority":0,
            },
            "fire_huangye":{
                audio:"ext:守林人:2",
                group:["fire_huangye_mark","fire_huangye_add","fire_huangye_lose"],
                subSkill:{
                    mark:{
                        marktext:"荒",
                        intro:{
                            name:"荒野",
                            content:"mark",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    add:{
                        trigger:{
                            global:"gameStart",
                            player:"enterGame",
                        },
                        forced:true,
                        charlotte:true,
                        firstDo:true,
                        popup:false,
                        content:function(){
                        player.addMark('fire_huangye_mark',3);

                },
                        sub:true,
                        "_priority":0,
                    },
                    marksha:{
                        onremove:true,
                        marktext:"野",
                        intro:{
                            content:"出杀次数+#",
                        },
                        sub:true,
                        "_priority":0,
                        mod:{
                            cardUsable:function(card,player,num){
                        if(card.name=='sha') return num+player.countMark('fire_huangye_marksha');
                    },
                        },
                        charlotte:true,
                    },
                    lose:{
                        forced:true,
                        trigger:{
                            player:"phaseEnd",
                        },
                        filter:function(event,player){
                        return player.hasSkill('fire_huangye_marksha')||player.hasMark('fire_huangye_marksha')
                    },
                        content:function(){
                        var all=player.countMark('fire_huangye_marksha')
                        player.removeSkill('fire_huangye_marksha');
                        player.removeMark('fire_huangye_marksha',all);
                    },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                logTarget:"target",
                filter:function(event,player){
                    return event.card.name=='sha'&&event.targets.length==1;
                },
                content:function(){

                    var card=get.translation(trigger.card);
                    var target=get.translation(trigger.target);
                    var list=[];
                    var num=player.countMark('fire_huangye_mark')
                    'step 0'                    
                    player.turnOver();
                    player.draw();
                    'step 1'
                    event.num=num

                    if(event.num>0)
                        list.push("选项一");
                    if(event.num>1)
                        list.push("选项二");
                    if(event.num>2)
                        list.push("选项三");
                    if(event.num!=0){                    
                    player.chooseControl(list).set('prompt','荒野：请选择一项').set('choiceList',[
                        '摸一张牌',
                        '【杀】的使用次数+1',
                        '失去〖幼牙〗，令'+get.translation(trigger.card)+'的伤害值基数+1并删去此项',
                    ]).set('ai',function(){
                        var target=_status.event.getTrigger().target;
                        var player=_status.event.player;
                        var number=target.mayHaveShan()?0:1;
                        if(get.attitude(player,target)>0) number=1-number;
                        return number;
                    });
                    }
                    else event.finish();
                    'step 2'
                    if(result.index==0){
                        game.log(player,'令',player,'摸一张牌');
                        player.draw();                    
                    
                    }
                    else if(result.index==1){
                        game.log(player,'令',player,'本回合内【杀】的使用次数+1');
                        player.addSkill('fire_huangye_marksha');
                        player.addMark('fire_huangye_marksha',1,false);        
                    }
                    else if(result.index==2){
                        game.log(player,'令',trigger.card,'对',trigger.target,'的伤害+1');
                        var id=trigger.target.playerid;
                        var map=trigger.customArgs;
                        if(!map[id]) map[id]={};
                        if(!map[id].extraDamage) map[id].extraDamage=0;
                        map[id].extraDamage++;
                        player.removeSkill('fire_oxenfree');
                        player.removeMark('fire_huangye_mark',1);                
                    }
                },
                ai:{
                    skillTagFilter:function(player,tag,arg){
                        if(!arg||!arg.card||!arg.target||arg.card.name!='sha'||arg.target.inRange(player)||get.attitude(player,arg.target)>0) return false;
                    },
                },
                "_priority":0,
            },
            "fire_old_dianhu":{
                audio:"ext:守林人/audio:3",
                group:["fire_old_dianhu_cancel"],
                subSkill:{
                    roundoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"电",
                        intro:{
                            name:"电弧",
                            content:"麻蛇",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    cancel:{
                        trigger:{
                            player:"damageBegin4",
                        },
                        priority:-11,
                        filter:function(event,player){
                if(player.hasSkill('fire_old_dianhu_roundoff')) return false;
                return event.num>1&&event.source!=undefined;
            },
                        check:function(event,player){
        return (get.attitude(player,event.source)<=0);
            },
                        content:function(){
                player.turnOver();
                trigger.source.turnOver();
                trigger.num=0;
                player.addTempSkill('fire_old_dianhu_roundoff','roundStart');
            },
                        sub:true,
                        "_priority":-1100,
                    },
                },
                "_priority":0,
            },
            "fire_jidong":{
                audio:"ext:守林人/audio:2",
                trigger:{
                    player:"useCardToPlayered",
                },
                forced:true,
                filter:function(event,player){
        return event.card.name=='sha'&&event.target.isLinked();
    },
                content:function(){
    if(player.stat[player.stat.length-1].card.sha>0){
            player.stat[player.stat.length-1].card.sha--;
        }
    trigger.addCount=false;
        
    },
                "_priority":0,
            },
            "fire_benchu":{
                trigger:{
                    global:"recoverBegin",
                },
                filter:function(event, player) {
        if (player.countCards('hes')==0) return false;
        // 判断是否是其他角色回复体力
        return event.player && event.player!= player;
    },
                check:function(event,player){
        return (get.attitude(player,event.player)>0);
    },
                content:function() {
        // 弃两张牌
        "step 0"
        player.chooseToDiscard('hes',2).set('ai',function(card){
            
            return get.unuseful(card)+2.5*(5-get.player(card).hp);
        })
       "step 1"
       if(result.bool){
        player.judge()}
        
        "step 2"
        var num=trigger.player.hp
        switch(result.suit){
          case 'heart': trigger.num++;
                break;      
         case 'club':
                                    player.chooseToGuanxing(num);
         player.draw(3);
                break;
        case 'diamond':
                                    player.chooseToGuanxing(num);
        player.draw(3);
                break;        
        case 'spade':
                                    player.chooseToGuanxing(num);
        player.draw(3);
                break;
        }
    },
                "_priority":0,
            },
            "fire_oxenfree":{
                group:["fire_oxenfree_micai"],
                subSkill:{
                    micai:{
                        forced:true,
                        sub:true,
                        mod:{
                            targetEnabled:function(card,player,target,now){
                        if(!target.isTurnedOver()){
                    if(card.name=='sha'){
                        if(get.distance(target,player)>1){
                            return false;
                        }
                    }
                        }
                    },
                        },
                        "_priority":0,
                    },
                },
                forced:true,
                trigger:{
                    player:"turnOverAfter",
                },
                filter:function(event,player){    
                    return !player.isTurnedOver()
                },
                content:function(){
                            var check=game.hasPlayer(function(current){
                if(current.player==player) return false;
                return player.canUse({name:'sha'},current,false)
            })
            var filterTarget=function(card,player,target){
                            return player.canUse({name:'sha'},target,false,'nodistance');
                        }    
                'step 0'
                player.chooseToUse('使用一张无距离限制的【杀】',{name:'sha'}).set('filterTarget',filterTarget).set('check',check);
                'step 1'
                if(result.bool)
                event.finish()    
                
                else 
                {
                    player.removeMark('fire_huangye_mark',1);    
                }
                },
                "_priority":0,
            },
            "fire_new_lingxiu":{
                forced:true,
                charlotte:true,
                init:(player)=>{
                    game.addGlobalSkill("fire_new_lingxiu_disable");
                    game.addGlobalSkill("fire_new_lingxiu_usedis");
                },
                onremove:(player)=>{
                    if(!game.hasPlayer(current=>current.hasSkill('fire_new_lingxiu'),true)) 
                    {
                        game.removeGlobalSkill("fire_new_lingxiu_disable")
                        game.removeGlobalSkill("fire_new_lingxiu_usedis");
                    }
                },
                unique:true,
                intro:{
                    content:"锁定技，横置角色的【闪】均视为【杀】，只能选择你为出杀或决斗目标",
                },
                subSkill:{
                    usedis:{
                        mod:{
                            cardname:function(card,player){
                    if(game.hasPlayer(current=>current.hasSkill('fire_new_lingxiu'),true))                         
                                {            
                        if(card.name=='shan') 
                        {if(game.hasPlayer(function(current){
                            return (current.hasSkill('fire_new_lingxiu')
                                    &&player.isLinked());
                        })){
                            return 'sha';
                        }
                        }
                                }
                    },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    disable:{
                        mod:{
                            targetEnabled:function(card,player,target){
                    if(game.hasPlayer(current=>current.hasSkill('fire_new_lingxiu'),true)){
                    if(player.hasSkill('fire_new_lingxiu')) return;
                    if(card.name=='sha'||card.name=='juedou'){
                        if(target.hasSkill('fire_new_lingxiu')) return;
                        if(game.hasPlayer(function(current){
                            return (current.hasSkill('fire_new_lingxiu')
                                    &&player.isLinked());
                        })){
                            return false;
                        }
                    }
                    }
                },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_czcibor_qifeng":{
                zhuSkill:true,
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function (event,player,card) {
       if(event.player==player) return false;
                    if(!player.hasZhuSkill('fire_czcibor_qifeng')) return false;
                    if(event.player.group!='kazimierz') return false;
        if(player.countCards('he',{type:'equip'})==0) return false;
        if(player.hujia) return false;
                    return true;
           
       
    },
                check:function(event,player,card){
        if(player.countCards('he',{type:'equip'})>0)
        return (get.attitude(player,event.player)>0);
    },
                content:function () {
      
       
        "step 0"
       
           
            player.line(trigger.player);
            player.chooseCard("he","请选择一张装备牌交给"+get.translation(trigger.player),
               function(card){
                return get.type(card)=='equip'
            }).set("ai", function (card) {
                return get.value(card);
            });
           
       
        "step 1"
       if(result.bool)
         {   player.logSkill('fire_czcibor_qifeng', trigger.player);
            trigger.player.gain(result.cards,'gain2',true);
            
      
           

       
        player.changeHujia();}
    },
                ai:{
                    order:9,
                    result:{
                        player:function(player,target){
                if(get.attitude(player,target)>0){
                    return 2;
                }
                return 0;
            },
                    },
                },
                "_priority":0,
            },
            "fire_qianmo":{
                trigger:{
                    player:"phaseJieshuBegin",
                },
                group:"fire_qianmo_hujia",
                subSkill:{
                    hujia:{
                        trigger:{
                            player:"damageEnd",
                        },
                        filter:function(event){
                return event.hujia==event.num;
            },
                        forced:true,
                        content:function(){
                player.draw();
                //player.turnOver();
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                forced:true,
                filter:function(event,player){
     //return player.getHistory('sourceDamage').length==0&&event.player==player
     //return player.hujia<player.hp  
     return !player.hujia
    },
                content:function(){
        player.turnOver();
        player.changeHujia(1);
        player.update();
    },
                "_priority":0,
            },
            "fire_yiyuan":{
                audio:"ext:守林人/audio:3",
                trigger:{
                    global:"phaseJieshuBegin",
                },
                check:function(event,player){
return (get.attitude(player,event.player)<0);
    },
                filter:function(event,player){
        if(!player.hujia)return false;
        if(event.player.getHistory("sourceDamage").length)return false;
        if(event.player==player) return false;
        return true;
    },
                popup:false,
                skillAnimation:false,
                animationColor:"wood",
                subSkill:{
                    "effect1":{
                        forced:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
       var evt=event.getParent('phaseJieshuBegin');
                if(event.getParent(1).name!='fire_yiyuan') return false;
       if(player.hasHistory('useCard',function(evtx){
            return evtx!=event&&evtx.card.name=='juedou'&&evtx.getParent('phaseJieshuBegin')==evt;
        },event)) return false
        if( get.name(event.card) == 'juedou' && event.card.isCard) return true; 
    },
                        content:function(){
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_yiyuan=true;
                
        trigger.baseDamage++;
            
                
           
            },
                        sub:true,
                        "_priority":0,
                    },
                    "effect2":{
                        forced:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
                if(event.getParent(1).name!='fire_yiyuan') return false;
       var evt=event.getParent('phaseJieshuBegin');
       if(player.hasHistory('useCard',function(evtx){
            return evtx!=event&&evtx.card.name=='sha'&&evtx.getParent('phaseJieshuBegin')==evt;
        },event)) return false
        if( get.name(event.card) == 'sha' && event.card.isCard) return true; 
    },
                        content:function(){
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_yiyuan=true;
        trigger.directHit.addArray(game.players);        
       
            
                
           
            },
                        sub:true,
                        "_priority":0,
                    },
                },
                content:function () {
        var check= player.hp>1;
        'step 0'
       
       
        
              
     
        if(!trigger.player.getHistory("sourceDamage").length){
           player.addTempSkill('fire_yiyuan_effect1','phaseJieshuAfter');
            player.logSkill('fire_yiyuan',trigger.player);
            if(player.canUse({name:'juedou'},trigger.player,false))
           { player.useCard({name:'juedou',isCard:true},trigger.player,false);
            player.changeHujia(-1) }           
            
                            }
        
        else{
             
        player.addTempSkill('fire_yiyuan_effect2','phaseJieshuAfter');   
        player.chooseTarget("选择【杀】的目标",function(card,player,target){
                        if(player==target) return false;
            if(trigger.player==target) return false;
                        return player.canUse({name:'sha'},target,false);
                    }).set('check',check).set('ai',function(target){
                        if(!_status.event.check) return 0;
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
            }
            
                    "step 1"
                    if(result.bool&&trigger.player.getHistory("sourceDamage").length){
                       
       player.changeHujia(-1)
                        player.logSkill('fire_yiyuan',result.targets);
                        player.useCard({name:'sha',isCard:true},result.targets[0],false);
                        
                        
                    
                    }       
            
                    
                   
    },
                "_priority":0,
            },
            "fire_fuyong":{
                audio:"ext:守林人/audio:3",
                subSkill:{
                    shuqun:{
                        enable:["chooseToUse","chooseToRespond"],
                        filterCard:function(card){
        return get.name(card)=='shan';

    },
                        position:"hs",
                        viewAs:{
                            name:"caochuan",
                        },
                        viewAsFilter:function(player){
        if(!player.countCards('hs',{name:'shan'})) return false;
        
    },
                        prompt:"将一张闪当草船借箭使用",
                        sub:true,
                        ai:{
                            basic:{
                                useful:[6,4],
                                value:[6,4],
                            },
                            result:{
                                player:1,
                            },
                        },
                        "_priority":0,
                    },
                },
                mod:{
                    maxHandcard:function (player,num){
            var count=player.hujia
            var num=num+count     
            return num;
        },
                },
                trigger:{
                    global:"phaseEnd",
                },
                forced:true,
                filter:function(event,player){
        return event.player.hujia&&event.player!=player&&!player.hujia
        
    },
                content:function(){
        var num=player.hp
        trigger.player.damage('nosource');
        player.changeHujia(num);
        player.update();
    },
                "_priority":0,
            },
            "fire_old_chengying":{
                trigger:{
                    source:"damageEnd",
                },
                usable:3,
                filter:function(event) {
        return event.num > 0; // 只有当你造成了实际伤害时才触发
    },
                content:function() {
        // 令一名角色获得一点护甲
        "step 0"
        player.chooseTarget(1,true,function(card, player,target) {
            return target!=player&&!target.hujia;
        }).set('ai',function(player,target){
            return get.attitude(player,target) > 0;
        })
        "step 1"
        if (result.bool && result.targets && result.targets.length) {
            result.targets[0].changeHujia();
        
    }
    },
                ai:{
                    order:9,
                    result:{
                        player:function(player,target){
                if(get.attitude(player,target)>0){
                    return 4;
                }
                return 0;
            },
                        target:function(player,target){
                if(get.attitude(player,target)>0){
                    return 4;
                }
                if(player==target) return 5;
                return 0;
            },
                    },
                    threaten:2,
                },
                "_priority":0,
            },
            "fire_chengying":{
                audio:"ext:守林人/audio:2",
                trigger:{
                    global:"useCardToTarget",
                },
                check:function(event,card){
        var player=_status.event.player;
        if(get.attitude(player,event.target)>2){
            return 4;
        }
        return 0;
    },
                filter:function (event, player,card) {
        return event.target!=player&&player.hujia&&(get.name(event.card)=='sha'||get.name(event.card)=='juedou')
            &&event.target.isAlive();
    //&&!event.target.hujia
    },
                content:function () {
        player.changeHujia(-1);
        trigger.target.changeHujia();
    },
                "_priority":0,
            },
            "fire_gravel_qifeng":{
                "_priority":0,
            },
            "fire_mojin":{
                audio:"ext:守林人/audio:3",
                trigger:{
                    global:"phaseBefore",
                },
                subSkill:{
                    roundoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"没",
                        intro:{
                            name:"没金",
                            content:"我带你们打",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    "effect1":{
                        sub:true,
                        silent:true,
                        popup:false,
                        direct:true,
                        enable:"chooseToUse",
                        discard:false,
                        filter:function (event,player){
        if(player.hasJudge('bingliang')) return false;
        return player.countCards('hes',{suit:'spade'})>0;
    },
                        viewAs:{
                            name:"bingliang",
                        },
                        position:"hes",
                        filterCard:function(card,player,event){
        return get.suit(card)=='spade'&&player.canAddJudge({name:'bingliang',cards:[card]});
    },
                        selectTarget:-1,
                        filterTarget:function (card,player,target){
        return player==target;
    },
                        ai:{
                            basic:{
                                order:1,
                                useful:1,
                                value:4,
                            },
                            result:{
                                target:function(player,target){
                        if(target.hasJudge('caomu')) return 0;
                        return -1.5/Math.sqrt(target.countCards('h')+1);
                    },
                            },
                            tag:{
                                skip:"phaseDraw",
                            },
                        },
                        forced:true,
                        "_priority":1,
                    },
                    "effect2":{
                        silent:true,
                        forced:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
               
       var evt=event.getParent('phaseEnd');
       if(event.getParent(2).name!='fire_mojin') return false;         
                
       
        if( get.name(event.card) == 'sha') return true; 
    },
                        content:function(){
                            
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_mojin=true;
        trigger.baseDamage++;
        player.addTempSkill('fire_mojin_effect3','phaseAfter');        
           
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                    "effect3":{
                        charlotte:true,
                        silent:true,
                        trigger:{
                            source:"damageSource",
                        },
                        forced:true,
                        filter:function(event,player){
            return event.card&&event.card.storage&&event.card.storage.fire_mojin
            },
                        content:function(){
               player.turnOver();
               //trigger.player.turnOver();
               //player.removeSkill('fire_mojin_roundoff'); 
           
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                },
                check:function(event,player){
return (get.attitude(player,event.player)<0)&&event.player.countCards('e',function(card){
                                return player.canEquip(card)&&get.value(card,event.player)>=4;
                            })>0;
    },
                filter:function(event,player){
        //if(player.hasSkill('fire_mojin_roundoff'))return false;
       //if(event.player.getHistory("sourceDamage").length&&player.hasJudge('bingliang')) return false;
        if(event.player==player) return false;
        return get.distance(event.player,player)>1;
    },
                popup:false,
                content:function(){
                    'step 0'
        player.addTempSkill('fire_mojin_effect2','phaseAfter');
    //if(!trigger.player.getHistory("sourceDamage").length){}
            //if(trigger.player.countGainableCards(player,'e')>0)
            
            //{player.gainPlayerCard(trigger.player,true,'e')}
                    player.choosePlayerCard(trigger.player,'ej',true).set('ai',get.buttonValue);
                    'step 1'
                    if(result.bool){
                        var card=result.cards[0];
                        trigger.player.$give(card,player,false);
                        game.delayx();
                        if(get.position(card)=='e') player.equip(card);
                        else player.addJudge(card);
                    }        
        
        
        
            'step 2'
            player.logSkill('fire_mojin',trigger.player);
            if(player.canUse({name:'sha'},trigger.player,false))
            player.chooseToUse('对其使用一张【杀】',{name:'sha'},trigger.player,false);
        //player.addTempSkill('fire_mojin_roundoff','roundStart');
            
                            
        
        //else{player.addTempSkill("fire_mojin_effect1",'phaseAfter');
            //if(!player.hasJudge('bingliang')&&player.countCards('hes',{suit:'spade'})>0)
         //player.chooseToUse({name:'bingliang'},player);
            //player.addTempSkill('fire_mojin_roundoff','roundStart');}
               
    },
                "_priority":0,
            },
            "fire_yunqi":{
                trigger:{
                    player:"phaseBegin",
                },
                mod:{
                    globalTo:function(from,to,distance){
        if(to.isTurnedOver()) return distance+1; 
                    },
                },
                subSkill:{
                    range:{
                        sub:true,
                        mod:{
                            targetInRange:function(card){
           return true;
      },
                        },
                        "_priority":0,
                    },
                },
                filter:function(event,player,card){
        if(!player.countCards('j')) return false;
        return player.countCards('j')
    },
                forced:true,
                direct:true,
                content:function(){
        //player.skip('phaseUse');
        player.skip('phaseDiscard');
        player.addTempSkill('fire_yunqi_range')
        //game.log('hello')
        //player.turnOver();
        //player.draw(2);
        
        
        
    },
                "_priority":0,
            },
            "fire_rust_lantern_skill":{
                enable:"phaseUse",
                selectCard:2,
                filterCard:function(card){
        return get.type(card)=='basic';

    },
                position:"hs",
                viewAs:{
                    name:"juedou",
                },
                viewAsFilter:function(player){
        if(player.countCards('hs',{type:'basic'})>1
           ) return true;
        
    },
                prompt:"将两张基本牌当决斗使用",
                check:function(card){return 4-get.value(card)},
                ai:{
                    wuxie:function(target,card,player,viewer){
            if(player==game.me&&get.attitude(viewer,player)>0){
                return 0;
            }
        },
                    basic:{
                        order:5,
                        useful:1,
                        value:5.5,
                    },
                    result:{
                        target:-1.5,
                        player:function(player,target,card){
                if(player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)){
                    return 0;
                }
                if(get.damageEffect(target,player,target)>0&&get.attitude(player,target)>0&&get.attitude(target,player)>0){
                    return 0;
                }
                var hs1=target.getCards('h','sha');
                var hs2=player.getCards('h','sha');
                if(hs1.length>hs2.length+1){
                    return -2;
                }
                var hsx=target.getCards('h');
                if(hsx.length>2&&hs2.length==0&&hsx[0].number<6){
                    return -2;
                }
                if(hsx.length>3&&hs2.length==0){
                    return -2;
                }
                if(hs1.length>hs2.length&&(!hs2.length||hs1[0].number>hs2[0].number)){
                    return -2;
                }
                return -0.5;
            },
                    },
                    tag:{
                        respond:2,
                        respondSha:2,
                        damage:1,
                    },
                },
                "_priority":0,
            },
            "fire_zhurong":{
                forced:true,
                trigger:{
                    player:"gainEnd",
                },
                filter:function(event,player){
        return player.hasCard(function(card){
            return get.type(card)=='equip'
                &&player.canRecast(card,player);
        },'he')
    },
                content:function(){
      var  cards=player.getCards('he', function (card) {
            return(get.type(card)=='equip'&&player.canRecast(card,player))
        })
        if(cards.length)
        {player.recast(cards)
        
        player.changeHujia(cards.length)
        };
    },
                "_priority":0,
            },
            "fire_tieshi":{
                trigger:{
                    source:"damageBegin2",
                },
                forced:true,
                filter:function (event,player,card){
       if(!player.hujia) return false;
       return player.hujia 
    },
                preHidden:true,
                content:function (){
        var hu=player.hujia
        player.changeHujia(-hu)
        trigger.num=trigger.num+hu
        player.recover(hu)
    },
                mod:{
                    targetEnabled:function(card,player,target,now){
            
                if(card.name=='tao') return false;
            
            
        },
                },
                "_priority":0,
            },
            "fire_shushou":{
                trigger:{
                    global:"shaBegin",
                },
                priority:10,
                filter:function(event,player,targets){
        if(get.distance(player,event.target)>1) return false;
    //event.player!=player
if(event.target.contains(player))return false;
    return (event.target!=undefined)
        &&(event.target!=player)
        
      &&event.targets.length==1
   
    },
                content:function(){
        "step 0"
        trigger.target.addTempSkill('fire_shushou2','shaEnd')
        trigger.player.addTempSkill('fire_shushou2','shaEnd')
        "step 1"
          var targets = game.filterPlayer(current=>{return current.hasSkill('fire_shushou2')});
        player.chooseTarget(true,function(card, player, target) {
            return target.hasSkill('fire_shushou2')&&(target.canUse({name:'juedou'},player,false))}).set('ai', function(target) {
            return -get.attitude(_status.event.player, target);
        });
        "step 2"
        player.logSkill('fire_shushou', result.targets);
        result.targets[0].useCard({name: 'juedou'},player,true,1);
       
        if(result.targets[0]==trigger.target){
           trigger.directHit=true;
           player.draw();
            event.finish();
            
        }
        else{
            trigger.cancel();
          player.draw();
            event.finish();
        }
 
        
    },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
                "_priority":0,
            },
            "fire_shushou2":{
                silent:true,
                popname:false,
                locked:true,
                forced:true,
                popup:false,
                "_priority":1,
            },
            "fire_guxiang":{
                trigger:{
                    player:"phaseUseBefore",
                },
                forced:true,

                check:function(event,player){
        var num=player.countCards('hes')
        var ban=Math.ceil(num/2)
        return player.maxHp<1+ban
    },
                content:function(){
        var num=player.countCards('hes')
        var ban=Math.ceil(num/2)
        var all=player.maxHp
        var half=Math.floor(all/2)
        var hp=player.hp
        'step 0'
        player.maxHp=2+ban
        player.update();
        'step 1'
        if(hp<half)    
        {  player.recover() 
        }
     },
                "_priority":0,
            },
            "fire_qinlue":{
				
                priority:100,
                trigger:{
                    source:"damageBegin1",
                },
                forced:true,
                skillAnimation:true,
                animationColor:"thunder",
                filter:function(event,player){
        return (event.player.hasSkill('fire_diaowang')&&event.card&&!event.nature)
            
    },
                content:function(){
      
           'step 0'
            trigger.player.die();
           'step 1'  
        if(!trigger.player.isAlive()){
            trigger.cancel(true);
            } 
        
    },
                "_priority":10000,
            },
            "fire_xvgong":{

                enable:"chooseToUse",
                selectCard:-1,
                filterCard:function(event,card){
        return true
    },
                filter:function(event,player){
        return player.countCards('hes')?true:false;
    },
                position:"hes",
                viewAs:{
                    name:"wanjian",
                },
                prompt:"将所有牌当万箭齐发使用",
                ai:{
                    order:1,
                    wuxie:function(target,card,player,viewer){
            if(get.attitude(viewer,target)>0&&target.countCards('h','shan')){
                if(!target.countCards('h')||target.hp==1||Math.random()<0.7) return 0;
            }
        },
                    basic:{
                        order:1,
                        useful:1,
                        value:5,
                    },
                    result:{
                        "target_use":function(player,target){
                if(player.hasUnknown(2)&&get.mode()!='guozhan') return 0;
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                        target:function(player,target){
                var nh=target.countCards('h');
                if(get.mode()=='identity'){
                    if(target.isZhu&&nh<=2&&target.hp<=1) return -100;
                }
                if(nh==0) return -2;
                if(nh==1) return -1.7
                return -1.5;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:1,
                        multitarget:1,
                        multineg:1,
                    },
                },
                "_priority":0,
            },
            "fire_dianguo":{
				derivation:"fire_diaowang",
                audio:"ext:守林人/audio:2",
                forced:true,
                ai:{
                    effect:{
                        target:function(card,player,target){
                if(!card.nature) return player.countCards('h',{name:'shan'})>1;
            },
                    },
                },
                maixie:true,
                trigger:{
                    player:"damageEnd",
                },
                filter:function(event,player){
        if(event.source==undefined) return false;
        if(!player.canUse({name:'sha'},event.source,false))return false;
        
        if(event.nature) return false;
        
        return true;
    },
                check:function(event,player){
        return (get.attitude(player,event.source)<=0);
    },
                logTarget:"source",
                content:function(){
        
   
     player.useCard({name:'sha'},trigger.source,false)
     trigger.source.addSkill('fire_diaowang')  
    },
                "_priority":0,
            },
            "fire_new_qinfeng":{
                audio:"fire_youlin",
                trigger:{
                    global:"phaseEnd",
                },
                subSkill:{
                    roundoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"琴",
                        intro:{
                            name:"琴风",
                            content:"总有一天，我会找出来，究竟是谁——",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    "effect1":{
                        frequent:true,
                        audio:0,
                        enable:"chooseToUse",
                        sub:true,
                        silent:true,
                        popup:false,
                        direct:true,
                        discard:false,
                        filter:function (event,player){
        
        return player.countCards('hes',{color:'red'})>0;
    },
                        viewAs:{
                            name:"fire_tacticaltransceiver",
                        },
                        position:"hes",
                        filterCard:function(card,player,event){
        return get.color(card)=='red'&&player.canAddJudge({name:'fire_tacticaltransceiver',cards:[card]});
    },
                        selectTarget:-1,
                        filterTarget:function (card,player,target){
        return player==target},
                        check:function(card){
        
        if(card.name=='shan') return 15;
        if(card.name=='tao') return 10;
        return 9-get.value(card);
    },
                        ai:{
                            result:{
                                target:1,
                                ignoreStatus:true,
                            },
                            order:12,
                            basic:{
                                order:1,
                                useful:1,
                                value:8,
                            },
                            tag:{
                            },
                        },
                        forced:true,
                        "_priority":1,
                    },
                    "effect2":{
                        audio:0,
                        silent:true,
                        forced:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
               
       var evt=event.getParent('phaseEnd');
       if(event.getParent(1).name!='fire_new_qinfeng') return false;         
                
       
        if( get.name(event.card) == 'sha' && event.card.isCard) return true; 
    },
                        content:function(){
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_new_qinfeng=true;
       
        player.addTempSkill('fire_new_qinfeng_effect3','phaseAfter');        
           player.addTempSkill('fire_new_qinfeng_roundoff','roundStart');
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                    "effect3":{
                        audio:0,
                        charlotte:true,
                        silent:true,
                        trigger:{
                            source:"damageSource",
                        },
                        forced:true,
                        filter:function(event,player){
            return event.card&&event.card.storage&&event.card.storage.fire_new_qinfeng
            },
                        content:function(){
                player.turnOver();
               //player.tempHide();
               //player.draw();
                player.addTempSkill('fire_ex_fuxue',{player:'phaseBegin'});
           
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                },
                check:function(event,player){
return (get.attitude(player,event.player)<0);
    },
                filter:function(event,player){
        if(player.hasSkill('fire_new_qinfeng_roundoff'))return false;
        if(!event.player.getHistory("sourceDamage").length&&player.hasJudge('fire_tacticaltransceiver')) return false;
        if(event.player==player) return false;
        return true;
    },
                popup:false,
                content:function(){
        'step 0'
        player.addTempSkill('fire_new_qinfeng_effect2','phaseAfter');
    if(trigger.player.getHistory("sourceDamage").length){
           
            
            if(player.canUse({name:'sha',nature:'stab'},trigger.player,false))
            player.useCard({name:'sha',nature:'stab',isCard:true},trigger.player,false);
           
        
            
                            }
        
        else{
           player.addTempSkill("fire_new_qinfeng_effect1",'phaseAfter');
            if(!player.hasJudge('fire_tacticaltransceiver')
               &&player.countCards('hes',{color:'red'})>0)
               
        {//player.useSkill("fire_new_qinfeng2");
         player.chooseToUse({name:'fire_tacticaltransceiver'},player);
         player.addTempSkill('fire_new_qinfeng_roundoff','roundStart');
           }
        
      
        
        
        
        
        
        
        
        }
        
           
               
    },
                "_priority":0,
            },
            "fire_sxq":{
                trigger:{
                    player:"useCardAfter",
                },
                usable:1,
                filter:function(event,player){
        
        if(!event.targets||!event.card) return false;
        
        var like=get.tag(event.card, 'damage');
        if(!like) return false;
        var card=game.createCard(event.card.name,event.card.suit,event.card.number,event.card.nature);
        var targets=event._targets||event.targets;
        for(var i=0;i<targets.length;i++){
            if(!targets[i].isIn()) return false;
            if(!player.canUse({name:event.card.name},targets[i],false,false)){
                return false;
            }
        }
        return true;
    },
                check:function(event,player){
       
        return true;
    },
                content:function(){
        var card=game.createCard(trigger.card.name,trigger.card.suit,trigger.card.number,trigger.card.nature);
        player.useCard(card,(trigger._targets||trigger.targets).slice(0));
    },
                ai:{
                    threaten:1.3,
                },
                "_priority":0,
            },
            "fire_mianmeng":{
                derivation:"fire_keshou",
                "_priority":0,
            },
            "fire_keshou":{
                trigger:{
                    player:"useCard",
                },
                mod:{
                    selectTarget:function(card,player,range){
            if(card.name!='sha') return;
            if(card.color!='red') return;
            if(range[1]==-1) return;
            range[1]+=1;
        },
                },
                forced:true,
                filter:function (event, player) {
            return event.card.name == "sha"&&event.card.color=="black";
        },
                content:function(){
            if(trigger.addCount!==false){
                            trigger.addCount=false;
                            trigger.player.getStat().card.sha--;
                        }
        },
                "_priority":0,
            },
            "fire_sanchun":{
                trigger:{
                    player:"damageBegin3",
                },
                audio:"ext:守林人:2",
                filter:function(event,player){
        return player.hujia;
    },
                content:function(){
        var number=3*trigger.num
        'step 0'
        player.changeHujia(-1);
        trigger.cancel();
        'step 1'
            
            event.cards=get.cards(number);
             
            player.chooseTarget(true).set('ai',function(target){
                return get.attitude(player,target)/Math.sqrt(1+target.countCards('h'));
            }).set('createDialog',['请选择一名角色获得这些牌',event.cards]);
        'step 2'
        var targets=result.targets[0]
        player.line(result.targets);
        targets.gain(event.cards,'draw');
    },
                "_priority":0,
            },
            "fire_zhiheng":{
                forced:true,
                charlotte:true,
                init:(player)=>{
                    game.addGlobalSkill("fire_zhiheng_disable");
                },
                onremove:(player)=>{
                    if(!game.hasPlayer(current=>current.hasSkill('fire_zhiheng'),true)) game.removeGlobalSkill("fire_zhiheng_disable");
                },
                unique:true,
                mod:{
                    selectTarget:function(card,player,range){
            if(card.name!='sha') return;
            if(range[1]==-1) return;
            range[1]+=Infinity;
        },
                    targetEnabled:function(card,player,target){
                    if(card.name=='sha'){
                        if(get.distance(target,player)==1){
                            return false;
                        }
                    }
                },
                },
                subSkill:{
                    disable:{
                        mod:{
                            targetEnabled:function(card,player,target){
if(game.hasPlayer(current=>current.hasSkill('fire_zhiheng'),true)){
                            if(!player.hasSkill('fire_zhiheng'))return;
                    //if(target.hasSkill('fire_zhiheng'))return;
                    if(card.name=='sha'){
                        if(player.hasSkill('fire_zhiheng')&&get.distance(player,target)>1){
                            return false;
                        }
                    }
}
                },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                audio:"ext:守林人:2",
                trigger:{
                    player:"useCard",
                },
                filter:function(event,player){
        return event.card&&(get.name(event.card)=='sha')&&game.hasPlayer(function(current){
            return current!=player&&get.distance(player,current,'pure')==1;
        });
    },
                content:function(){
        trigger.directHit.addArray(game.filterPlayer(function(current){
            return current!=player&&get.distance(player,current,'pure')==1;
        }));
    },
                ai:{
                    "directHit_ai":true,
                    skillTagFilter:function(player,tag,arg){
            return get.distance(player,arg.target,'pure')==1;
        },
                },
                "_priority":0,
            },
            "fire_qingzang":{
                mod:{
                    selectTarget:function(card,player,range){
            if(card.name!='sha') return;
            if(range[1]==-1) return;
            range[1]+=1;
        },
                },
                trigger:{
                    source:"damageBegin1",
                },
                forced:true,
                filter:function(event,player){    
       if( get.name(event.card) != 'sha') return false; 
        if(!event.player) return false;
        return event.player&&event.player.isIn()&&(event.player.getEquip(3)||event.player.getEquip(4));
    },
                content:function(){
        trigger.num++;
    },
                "_priority":0,
            },
            "fire_shuli":{
                unique:true,
                group:"fire_shuli2",
                zhuSkill:true,
                "_priority":0,
            },
            "fire_shuli2":{
                audio:"ext:守林人:2",
                trigger:{
                    global:"dying",
                },
                filter:function(event,player){
        if(event.player.group!='laterano') return false;
                if(event.player==player) return false;

        return player.hasZhuSkill('fire_shuli',event.player);
    },
                direct:true,
                content:function(){
        'step 0'
        if(trigger.delay==false) game.delay();
                        if(!trigger.player.hasCard('h')) {
                            event.finish();
                        };
        'step 1'
        trigger.player.chooseBool('是否交给'+get.translation(player)+'所有手牌并与其交换座次').set('choice',get.attitude(trigger.player,player)>0);
        'step 2'            
        if(result.bool) {
        var cards=trigger.player.getCards('h');
            trigger.player.give(cards,player);
            trigger.player.line(player,'green');
            game.swapSeat(trigger.player,player);
            game.delayx();
                    }

        
    },
                "_priority":0,
            },
            "fire_huijin":{
                trigger:{
                    global:"dying",
                },
                filter:function(event,player){
        return event.player!=player;
    },
                content:function(){
            'step 0'
           // var max=trigger.player.maxHp
            //player.maxHp+=1;
            player.draw();
            
            //player.update();
            'step 1'
            player.hp+=1;
            player.update();
    
    },
                "_priority":0,
            },
            "fire_sheshen":{
                derivation:"fire_yanmeng",
                init:function(player,skill){

player.storage.fire_sheshen=false
},
                skillAnimation:true,
                animationColor:"wood",
                mark:true,
                marktext:"舍",
                intro:{
                    name:"灰烬公主",
                    content:"limited",
                },
                trigger:{
                    player:"dying",
                },
                limited:true,
                filter:function(event,player){
        return event.player==player&&!player.storage.fire_sheshen;
    },
                content:function(){
                            'step 0'
                player.chooseTarget('是否令一名其他角色获得技能【灰烬】？',lib.filter.notMe).set('ai',function(target){
                    var player=_status.event.player;
                    if(player.hasUnknown()&&!target.isZhu) return 0;
                    if(player.getEnemies().contains(target)) return 0;
                    return get.attitude(player,target);
                });
                'step 1'
                if(result.bool){
                    player.awakenSkill('fire_sheshen');
            player.storage.fire_sheshen=true;
                    var target=result.targets[0];
                    player.line(target,'fire');
                    player.removeSkill('fire_huijin')
                    target.addSkillLog('fire_huijin');
                    player.addSkill('fire_yanmeng');
                    game.delayx();
                }
    },
                "_priority":0,
            },
            "fire_yanmeng":{
                direct:true,
                trigger:{
                    source:"damageEnd",
                    player:"damageEnd",
                },
                filter:function (event, player) {
        var target = event.source == player ? event.player : event.source;
        return target != player;
    },
                content:function(){    
        'step 0'
        event.count--;
        var list=[];
        if(lib.filter.cardUsable({name:'sha'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
            return player.canUse('sha',current);
        }))
        {
            list.push(['基本','','sha']);
        }
        for(var i of lib.inpile_nature){
         if(lib.filter.cardUsable({name:'sha',nature:i},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
                    return player.canUse({name:'sha',nature:i},current);
                })){
                list.push(['基本','','sha',i]);
            }}
        if(lib.filter.cardUsable({name:'tao'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
            return player.canUse('tao',current);
        })){
            list.push(['基本','','tao']);
        }
        if(lib.filter.cardUsable({name:'jiu'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
            return player.canUse('jiu',current);
        })){
            list.push(['基本','','jiu']);
        }
        if(lib.filter.cardUsable({name:'fire_supplement'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
            return player.canUse('fire_supplement',current);
        })){
            list.push(['基本','','fire_supplement']);
        }
        if(lib.filter.cardUsable({name:'fire_originium'},player)&&game.hasPlayer(function(current){
            return player.canUse('fire_originium',current);
        })){
            list.push(['基本','','fire_originium']);
        }
        if(list.length){
            player.chooseButton(['是否视为使用一张基本牌？',[list,'vcard']]).set('ai',function(button){
                var player=_status.event.player;
                var card={name:button.link[2],nature:button.link[3],isCard:true};
                if(card.name=='tao'){
                    if(player.hp==1||(player.hp==2&&!player.hasShan())||player.needsToDiscard()){
                        return 5;}
                    return 1;
                }
                if(card.name=='sha'){
                    if(game.hasPlayer(function(current){
                        return player.canUse(card,current)&&get.effect(current,card,player,player)>0
                    })){
                        if(card.nature=='fire') return 2.95;
                        if(card.nature=='thunder'||card.nature=='ice') return 2.92;
                        return 2.9;
                    }
                    return 0;
                }
                if(card.name=='jiu'){
                    return 0.5;
                }
                if(card.name=='fire_supplement'){
                    return 0.5;
                }
                if(card.name=='fire_originium'){
                    return -1;
                }
                return 0;
            })
       }
        "step 1"
        
        if(result&&result.bool&&result.links[0]){
            var card={name:result.links[0][2],nature:result.links[0][3]};
            player.chooseUseTarget(card,true);}
        "step 2"
        if(event.count>0){
            player.chooseBool(get.prompt2('fire_yanmeng')).set('frequentSkill','fire_yanmeng').ai=lib.filter.all;
        }
        "step 3"
        if(result.bool&&event.count>0){player.logSkill('fire_yanmeng');
           event.goto(0);
                                      }
    },
                ai:{
                    maixie:true,
                    effect:{
                        target:function(card,player,target){
                if(get.tag(card,'damage')) return [1,0.55];
            },
                    },
                },
                "_priority":0,
            },
            "fire_yingxi":{
                "_priority":0,
            },
            "fire_ex_fuxue":{
                audio:"fire_fuxue",
                forced:true,
                logTarget:"source",
                trigger:{
                    target:"useCardToTargeted",
                },
                preHidden:true,
                filter:function(event,player){
        return event.card&&event.player!=player;
    },
                content:function(){
                    "step 0"
                    var eff=get.effect(player,trigger.card,trigger.player,trigger.player);
                    trigger.player.chooseToDiscard('覆雪：弃置一张手牌，否则'+get.translation(event.card)+'对'+get.translation(player)+'无效','h').set('ai',function(card){
                        if(_status.event.eff>0){
                            return 10-get.value(card);
                        }
                        return 0;
                    }).set('eff',eff);
                    "step 1"
                    if(result.bool==false){
                        trigger.getParent().excluded.add(player);
                    }
                },
                ai:{
                    effect:{
                        "target_use":function(card,player,target,current){
                            if(get.attitude(player,target)<0){
                                if(_status.event.name=='fire_ex_fuxue') return;
                                if(get.attitude(player,target)>0&&current<0) return 'zerotarget';
                                var bs=player.getCards('h');
                                bs.remove(card);
                                if(card.cards) bs.removeArray(card.cards);
                                else bs.removeArray(ui.selected.cards);
                                if(!bs.length) return 'zerotarget';
                                if(player.hasSkill('jiu')||player.hasSkill('tianxianjiu')) return;
                                if(bs.length<=2){
                                    for(var i=0;i<bs.length;i++){
                                        if(get.value(bs[i])<7){
                                            return [1,0,1,-0.5];
                                        }
                                    }
                                    return [1,0,0.3,0];
                                }
                                return [1,0,1,-0.5];
                            }
                        },
                    },
                },
                "_priority":0,
            },
            "fire_sb_fuxue":{
                audio:"fire_fuxue",
                derivation:"fire_ex_fuxue",
                filter:function(event,player){
        return event.card&&event.targets&&event.targets.length>1;
    },
                logTarget:"source",
                check:function(event,player){
        return event.getParent().excluded.contains(player)||get.tag(event.card,'multineg')||get.effect(player,event.card,event.player,player)<=0;
    },
                trigger:{
                    target:"useCardToTargeted",
                },
                content:function(){
        trigger.getParent().excluded.add(player);
        player.addTempSkill('fire_ex_fuxue',{player:'phaseEnd'})
    },
                ai:{
                    effect:{
                        target:function(card){
                if(get.type(card)!='trick') return;
                if(card.name=='tiesuo') return [0,0];
                if(card.name=='yihuajiemu') return [0,1];
                if(get.tag(card,'multineg')) return [0,2];
            },
                    },
                },
                "_priority":0,
            },
            "fire_sb_youlin":{
                audio:"fire_youlin",
                trigger:{
                    player:["phaseEnd","damageEnd"],
                },
                filter:function(event,player){
        if(event.player.getHistory("sourceDamage").length) return false;
        return true;
    },
                frequent:true,
                skillAnimation:false,
                animationColor:"wood",
                subSkill:{
                    kill:{
                        charlotte:true,
                        mark:true,
                        marktext:"※",
                        intro:{
                            name:"幽林",
                            content:"致命空枪",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    "effect1":{
                        audio:false,
                        silent:true,
                        forced:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
       var evt=event.getParent('phaseEnd');
        if(event.getParent(1).name!='fire_sb_youlin') return false;
       if(player.hasHistory('useCard',function(evtx){
            return evtx!=event&&evtx.card.name=='sha'&&evtx.getParent('phaseEnd')==evt;
        },event)) return false
        if(get.name(event.card) == 'sha' && event.card.isCard) return true; 
    },
                        content:function(){
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_sb_youlin=true;
        //trigger.baseDamage++;
        //game.log('上个事件'+trigger.getParent(1).name),
        player.addTempSkill('fire_sb_youlin_effect2','phaseAfter');        
        player.addTempSkill('fire_sb_youlin_effect3','phaseAfter');   
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                    "effect2":{
                        audio:false,
                        charlotte:true,
                        silent:true,
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        forced:true,
                        filter:function(event,player){
            return event.card&&event.card.storage&&event.card.storage.fire_sb_youlin
            },
                        content:function(){
                
               var id=trigger.target.playerid;
                    var map=trigger.getParent().customArgs;
                    if(!map[id]) map[id]={};
                    if(typeof map[id].shanRequired=='number'){
                        map[id].shanRequired++;
                    }
                    else{
                        map[id].shanRequired=2;
                    }
                
           
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                    "effect3":{
                        audio:0,
                        charlotte:true,
                        silent:true,
                        trigger:{
                            source:"damageSource",
                        },
                        forced:true,
                        filter:function(event,player){
                if(!event.player.hasSkill('fire_sb_youlin_kill'))return false;
                return event.card&&event.card.storage&&event.card.storage.fire_sb_youlin&&event.player.isAlive();
            },
                        content:function(){
               
                player.turnOver();
                player.addTempSkill('fire_sb_youlin_effect4',{player:'phaseEnd'});
                
           
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                    "effect4":{
                        audio:"fire_kugu",
                        forced:true,
                        silent:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player,card){
       if(get.name(event.card) == 'sha' && event.card.isCard) return true;
    },
                        content:function(){
       trigger.baseDamage++ 
    },
                        "_priority":0,
                        popup:false,
                        sub:true,
                    },
                },
                content:function () {
        var check= player.isAlive;
        'step 0'
       
        
              
      
        if(player.getHistory("sourceDamage").length){
        
            //player.draw();
            
            //player.tempHide();
                            }
        
        else{
            
               player.addTempSkill('fire_sb_youlin_effect1','phaseAfter'); 
           
        player.chooseTarget("选择【杀】的目标",function(card,player,target){
                        if(player==target) return false;
                        return player.canUse({name:'sha'},target,false);
                    }).set('check',check).set('ai',function(target){
                        if(!_status.event.check) return 0;
                        return get.effect(target,{name:'sha'},_status.event.player);
                    });
            }
            
                    "step 1"
                    if(result.bool){
                       result.targets[0].addTempSkill('fire_sb_youlin_kill','phaseAfter');
       
                        
                        player.useCard({name:'sha',isCard:true},result.targets[0],false);
                        
                    
                    }       
            
                    
      
        
    },
                ai:{
                    order:9,
                    result:{
                        player:function(player,target){
                if(get.attitude(player,target)<0){
                    return 2;
                }
                return 0;
            },
                        threaten:2,
                    },
                },
                "_priority":0,
            },
            "fire_sb_fumu":{
                audio:"fire_kugu",
                forced:true,
                derivation:"fire_ex_fuxue",
                silent:true,
                trigger:{
                    player:"useCard",
                },
                filter:function(event,player,card){
       if(!player.hasSkill('fire_ex_fuxue'))return false;
       if(get.name(event.card) == 'sha' && event.card.isCard) return true;
    },
                content:function(){
       trigger.baseDamage++ 
    },
                "_priority":0,
                popup:false,
            },
            "fire_lanshan":{
                "_priority":0,
            },
            "fire_xvshi":{
                "_priority":0,
            },
            "fire_shengyu":{
                "_priority":0,
            },
            "fire_jianbie":{
                subSkill:{
                    roundoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"别",
                        intro:{
                            name:"饯别",
                            content:"已发动〖饯别〗",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                unique:true,
                trigger:{
                    global:"phaseEnd",
                },
                check:function(event,player){
        
        if(get.attitude(player,event.player)>1){
            return 4;
        }
        return 0;
    },
                filter:function(event,player){
                    if(player.hasSkill("fire_jianbie_roundoff")) return false;
        return event.player&&player.countCards('hes')>0&&event.player!=player;
    },
                filterCard:true,
                discard:false,
                lose:false,
                delay:false,
                content:function(){
        var all=player.countCards('h')
        var half=Math.ceil(all/2)
       
       'step 0'
        player.chooseCard('hes',[0,Infinity],'饯别：将任意张非锦囊牌置于'+get.translation(trigger.player)+'武将牌上',false,function(card){
            return get.type(card)!='trick'
        });
        'step 1'
        
        if(result.bool){
            var cards=result.cards;
                    trigger.player.addToExpansion(cards,'giveAuto',player).gaintag.add('fire_jianbie2');
            
                    trigger.player.addSkill('fire_jianbie2');
            player.addTempSkill("fire_jianbie_roundoff","roundStart")
            //player.give(result.cards,trigger.player);
            //player.addTempSkill('fire_micai','phaseBegin');
        }
       
    },
                ai:{
					expose:0.3,
                    order:1,
                    result:{
                        target:function(player,target){
                if(target.hasSkillTag('nogain')) return 0;
                if(player.countCards('h')==player.countCards('h','du')) return -1;
                if(target.hasJudge('lebu')) return 0;
                if(get.attitude(player,target)>3){
                    var basis=get.threaten(target);
                    if(player==get.zhu(player)&&player.hp<=2&&player.countCards('h','shan')&&!game.hasPlayer(function(current){
                        return get.attitude(current,player)>3&&current.countCards('h','tao')>0;
                    })) return 0;
                    if(target.countCards('h')+player.countCards('h')>target.hp+2) return basis*0.8;
                    return basis;
                }
                return 0;
            },
                    },
                },
                "_priority":0,
            },
            "fire_jianbie2":{
                trigger:{
                    player:"phaseBegin",
                },
                forced:true,
                audio:"ext:守林人:false",
                content:function(){
                    var cards=player.getExpansions('fire_jianbie2');
                    if(cards.length) player.gain(cards,'draw');
                    player.removeSkill('fire_jianbie2');
                },
                intro:{
                    mark:function(dialog,storage,player){
                        var cards=player.getExpansions('fire_jianbie2');
                        if(player.isUnderControl(true)) dialog.addAuto(cards);
                        else return '共有'+get.cnNumber(cards.length)+'张牌';
                    },
                    markcount:"expansion",
                },
                "_priority":0,
            },
            "fire_new_xieli":{
                audio:"ext:守林人:2",
                group:["fire_new_xieli2"],
                trigger:{
                    player:"useCardAfter",
                },
                filter:function(event,player){
                    return get.type(event.card)=='trick'&&event.cards.filterInD().length>0
                },
                content:function(){
                    'step 0'
                    player.chooseTarget(get.prompt('fire_new_xieli'),'将'+get.translation(trigger.cards)+'交给一名手牌数全场惟一最少的角色',function(card,player,target){
                        return target.isMinHandcard(true);
                    }).set('ai',function(target){
                        if(target.hasJudge('lebu')) return 0;
                        var att=get.attitude(_status.event.player,target);
                        if(att<3) return 0;
                        if(target.hasSkillTag('nogain')) att/=10;
                        if(target.hasSha()&&_status.event.sha){
                            att/=5;
                        }
                        if(event.wuxie&&target.needsToDiscard(1)){
                            att/=5;
                        }
                        return att/(1+get.distance(player,target,'absolute'));
                    }).set('wuxie',trigger.cards[0].name=='wuxie');
                    'step 1'
                    if(result.bool){
                        result.targets[0].draw();
                        player.logSkill('fire_new_xieli',result.targets[0]);
                        result.targets[0].gain(trigger.cards.filterInD(),'gain2');
                    }
                },
                "_priority":0,
            },
            "fire_new_xieli2":{
                audio:"ext:守林人:2",
                trigger:{
                    target:"useCardToTarget",
                },
                direct:true,
                preHidden:true,
                filter:function(event,player){
                    if(get.type(event.card)!='trick') return false;
                    return game.hasPlayer(function(current){
                        return current!=player&&lib.filter.targetEnabled(event.card,event.player,current)&&current.isMaxHandcard();
                    });
                },
                content:function(){
                    'step 0'
                    player.chooseTarget(get.prompt('fire_new_xieli'),'将'+get.translation(trigger.cards)+'转移给一名手牌数全场最多的其他角色',function(card,player,target){
                        return target!=player&&target!=trigger.source&&target.isMaxHandcard()
                    }).set('ai',function(target){
                        var att=get.attitude(_status.event.player,target);
                        if(_status.event.player.countCards('h','wuxie')){
                                return -att;
                            }
                            if(get.attitude(_status.event.player,target)<5){
                                return 6-att;
                            }
                            if(_status.event.player.hp==1&&player.countCards('h','wuxie')==0){
                                return 10-att;
                            }
                            if(_status.event.player.hp==2&&player.countCards('h','wuxie')==0){
                                return 8-att;
                            }
                            return -1;
                    });
                    'step 1'
                    if(result.bool){
                        var target=result.targets[0];
                        player.logSkill(event.name,target);
                        var evt=trigger.getParent();
                        evt.triggeredTargets2.remove(player);
                        evt.targets.remove(player);
                        evt.targets.push(target);
                        player.draw();

                    }
                },
                ai:{
                    effect:{
                        target:function(card,player,target){
                            if(card.type!='trick') return;
                            var min=1;
                            var friend=get.attitude(player,target)>0;
                            var players=game.filterPlayer();
                            for(var i=0;i<players.length;i++){
                                if(player!=players[i]&&
                                    get.attitude(target,players[i])<0&&
                                    target.canUse(card,players[i])){
                                    if(!friend) return 0;
                                    if(get.effect(players[i],card,player,player)>0){
                                        if(!player.canUse(card,players[0])){
                                            return [0,0.1];
                                        }
                                        min=0;
                                    }
                                }
                            }
                            return min;
                        },
                    },
                },
                "_priority":0,
            },
            "fire_xieli":{
                audio:"ext:守林人:2",
                audioname:["daxiaoqiao","re_xiaoqiao","ol_xiaoqiao"],
                trigger:{
                    player:"damageBegin3",
                },
                direct:true,
                filter:function(event,player){
                    var dude=game.hasPlayer(current=>{
                        var cards=current.getExpansions('fire_jianbie2');
                        return cards.length
                        }
                        )
                        
                    return dude&&event.source!=undefined&&player.countCards('h')<event.source.countCards('h')&&event.num>0;
                },
                content:function(){
                    "step 0"
                    player.chooseTarget({
                        filterTarget:lib.filter.notMe,
                        ai:function(target){
                            var att=get.attitude(_status.event.player,target);
                            var trigger=_status.event.getTrigger();
                            var da=0;
                            if(_status.event.player.hp==1){
                                da=10;
                            }
                            if(trigger.num>1){
                                if(target.maxHp>5&&target.hp>1) return -att/10+da;
                                return -att+da;
                            }
                            var eff=get.damageEffect(target,trigger.source,target,trigger.nature);
                            if(att==0) return 0.1+da;
                            if(eff>=0&&trigger.num==1){
                                return att+da;
                            }
                            if(target.hp==target.maxHp) return -att+da;
                            if(target.hp==1){
                                if(target.maxHp<=4&&!target.hasSkillTag('maixie')){
                                    if(target.maxHp<=3){
                                        return -att+da;
                                    }
                                    return -att/2+da;
                                }
                                return da;
                            }
                            if(target.hp==target.maxHp-1){
                                if(target.hp>2||target.hasSkillTag('maixie')) return att/5+da;
                                if(att>0) return 0.02+da;
                                return 0.05+da;
                            }
                            return att/2+da;
                        },
                        prompt:get.prompt2('fire_xieli')
                    });
                    "step 1"
                    if(result.bool){
                        player.logSkill(event.name,result.targets);
                        trigger.player=result.targets[0];
                        if(trigger.player!=player)
                        {
                        trigger.player.addSkill('fire_xieli2');     
                        }                        
                    }
                },
                ai:{
                    "maixie_defend":true,
                    effect:{
                        target:function(card,player,target){
                            if(player.hasSkillTag('jueqing',false,target)) return;
                            if(get.tag(card,'damage')&&target.countCards('h')<player.countCards('h')) return 0.7;
                        },
                    },
                },
                "_priority":0,
            },
            "fire_xieli2":{
                trigger:{
                    player:["damageAfter","damageCancelled","damageZero"],
                },
                forced:true,
                popup:false,
                audio:"ext:守林人:false",
                vanish:true,
                charlotte:true,
                content:function(){
                    var targets=game.filterPlayer(current=>{
                        var cards=current.getExpansions('fire_jianbie2');
                        return cards.length
                    })
                    //targets.sortBySeat();
                    event.targets=targets;
                    var target=targets.shift();
                    var cards=target.getExpansions('fire_jianbie2');
                    if(cards.length) player.gain(cards,'draw');
                    target.removeSkill('fire_jianbie2');
                    player.removeSkill('fire_xieli2');
                    player.popup('fire_xieli');
                },
                "_priority":0,
            },
            "fire_tani":{
                forced:true,
                locked:true,
                silent:true,
                popname:false,
                trigger:{
                    player:"phaseUseEnd",
                },
                firstDo:true,
                content:function(){
                    var cards=player.getCards('h')
                    "step 0"
                    if(!player.isMinHandcard()){
                    player.chooseTarget(get.prompt('fire_tani'),'将所有手牌交给一名手牌数全场最少的其他角色',true,function(card,player,target){
                        return target!=player&&target.isMinHandcard();
                    }).set('ai',function(target){
                        if(target.hasJudge('lebu')) return 0;
                        var att=get.attitude(_status.event.player,target);
                        if(att<3) return 0;
                        if(target.hasSkillTag('nogain')) att/=10;
                        if(target.hasSha()&&_status.event.sha){
                            att/=5;
                        }
                        if(event.wuxie&&target.needsToDiscard(1)){
                            att/=5;
                        }
                        return att/(1+get.distance(player,target,'absolute'));
                    })    
                    }
                    else event.finish();
                    "step 1"
                    if(result.bool)
                        result.targets[0].gain(cards,'gain2');                        
                },
                popup:false,
                "_priority":1,
            },
            "fire_heyun":{
                forced:true,
                locked:true,
                silent:true,
                popname:false,
                popup:false,
                trigger:{
                    player:"useCard",
                },
                content:function(){
                    "step 0"
                    player.judge()
                    "step 1"
                    if(result.color=='red')
                        trigger.cancel()
                    else if(result.color=='black')
                        player.chooseToDiscard('hes',1,true)
                },
                "_priority":1,
            },
            "fire_weiyi":{
                forced:true,
                locked:true,
                silent:true,
                popname:false,
                mod:{
                    cardname:function(card,player){
                        if(get.type(card,null,false)=='basic'&&player.storage.suijiyingbian) return player.storage.suijiyingbian;
                    },
                    cardnature:function(card,player){
                        if(get.type(card,null,false)=='basic'&&player.storage.suijiyingbian_nature) return player.storage.suijiyingbian_nature;
                    },
                },
                trigger:{
                    player:["useCard1"],
                    global:"phaseBeginStart",
                },
                firstDo:true,
                filter:function(event,player,name){
                    if(name=='phaseBeginStart') return true;
                    var type=get.type(event.card);
                    return type=='trick';
                },
                content:function(){
                    if(event.triggername=='phaseBeginStart'){
                        delete player.storage.suijiyingbian;
                        delete player.storage.suijiyingbian_nature;
                    }
                    else{
                        player.storage.suijiyingbian=trigger.card.name;
                        player.storage.suijiyingbian_nature=trigger.card.nature;
                    }
                },
                "_priority":0,
                popup:false,
            },
            "fire_liming":{
				derivation:["fire_weiyi","fire_tani","fire_heyun"],
                mod:{
                    aiValue:function (player, card, num) {
                        if (get.name(card) != 'wuxie') return;
                        var cards = player.getCards('hs', function (card) {
                            return get.name(card) == 'wuxie';
                        });
                        cards.sort(function (a, b) {
                            return (get.name(b) == 'wuxie' ? 1 : 2) - (get.name(a) == 'wuxie' ? 1 : 2);
                        });
                        var geti = function () {
                            if (cards.contains(card)) return cards.indexOf(card);
                            return cards.length;
                        };
                        if (get.name(card) == 'wuxie') return Math.min(num, [6, 4, 3][Math.min(geti(), 2)]) * 0.6;
                        return Math.max(num, [6, 4, 3][Math.min(geti(), 2)]);
                    },
                    aiUseful:function () {
                        return lib.skill['fire_liming'].mod.aiValue.apply(this, arguments);
                    },
                },
                enable:"chooseToUse",
                viewAsFilter:function (player) {
                    return player.countCards('hes') >1;
                },
                filterCard:true,
                selectCard:2,
                position:"hes",
                check:function (card) {
                    var trigger = _status.event.getTrigger();
                    if (trigger && trigger.card && trigger.card.name == 'chiling') return -1;
                    return 8 - get.value(card)
                },
                prompt:"将两张牌当作无懈可击使用",
                viewAs:{
                    name:"wuxie",
                },
                threaten:1.2,
                group:"fire_liming_weiyi",
                subSkill:{
                    weiyi:{
                        silent:true,
                        trigger:{
                            global:"eventNeutralized",
                        },
                        filter:function (event, player) {
                            if (event.player.classList.contains('unseen')) return false;
                            return player.getHistory('useCard', evt => evt.skill == 'fire_liming'  && evt.respondTo[0] == event.player && evt.respondTo[1] == event.card).length;
                        },
                        content:function () {
                            'step 0'
                            if(player.getHistory('useCard', trig => trig.skill == 'fire_liming' && get.color(trig.cards) == 'red' && trig.respondTo[0] == trigger.player && trig.respondTo[1] == trigger.card).length)
                            player.chooseBool('立命：是否令' + get.translation(trigger.player) + '获得〖逶迤〗？').set('ai', function () {
                                if(trigger.player.hasSkill('fire_new_xieli')&&get.attitude(player, trigger.player) > 0||get.attitude(player, trigger.player) > 1) return true;
                            })                            
                            else if(player.getHistory('useCard', trig => trig.skill == 'fire_liming' && get.color(trig.cards) == 'black' && trig.respondTo[0] == trigger.player && trig.respondTo[1] == trigger.card).length)
                            player.chooseBool('立命：是否令' + get.translation(trigger.player) + '获得〖踏泥〗？').set('ai', function () {
                                if(trigger.player.hasSkill('fire_new_xieli')&&get.attitude(player, trigger.player) > 0||get.attitude(player, trigger.player) < 0) return true;
                            })
                            else if(player.getHistory('useCard', trig => trig.skill == 'fire_liming' && get.color(trig.cards) == 'none' && trig.respondTo[0] == trigger.player && trig.respondTo[1] == trigger.card).length)
                            player.chooseBool('立命：是否令' + get.translation(trigger.player) + '获得〖和云〗？').set('ai', function () {
                                if(get.attitude(player, trigger.player) < 0) return true;
                            })
                            'step 1'
                            if (result.bool) {
                                player.line(trigger.player);
                                if(player.getHistory('useCard', trig => trig.skill == 'fire_liming' && get.color(trig.cards) == 'red' && trig.respondTo[0] == trigger.player && trig.respondTo[1] == trigger.card).length)
                                trigger.player.addTempSkill('fire_weiyi','roundStart');                                
                                else if(player.getHistory('useCard', trig => trig.skill == 'fire_liming' && get.color(trig.cards) == 'black' && trig.respondTo[0] == trigger.player && trig.respondTo[1] == trigger.card).length)                                
                                trigger.player.addTempSkill('fire_tani','roundStart');
                                else if(player.getHistory('useCard', trig => trig.skill == 'fire_liming' && get.color(trig.cards) == 'none' && trig.respondTo[0] == trigger.player && trig.respondTo[1] == trigger.card).length)
                                trigger.player.addTempSkill('fire_heyun','roundStart');
                            }
                        },
                        sub:true,
                        forced:true,
                        popup:false,
                        "_priority":1,
                    },
                },
                ai:{
                    basic:{
                        useful:[6,4,3],
                        value:[6,4,3],
                    },
                    result:{
                        player:1,
                    },
                    expose:0.2,
                },
                "_priority":0,
            },
            "fire_new_yizhi":{
                "_priority":0,
            },
            "fire_new_jianhu":{
                forced:true,
                filter:function (event,player){
        return (event.player!=undefined)&&!get.nature(event.card)&&(event.player.isLinked())&&get.tag(event.card,'damage');
    },
                trigger:{
                    target:"useCardToBefore",
                },
                priority:9,
                audio:"fire_jianhu",
                content:function (){
        trigger.cancel();
        player.draw();
    },
                ai:{
                    effect:{
                        target:function (card,player,target){
                if(!get.tag(card,'damage')) return;
                if(get.nature(card)) return;
                if(!player.isLinked()) return;
                if(card.name=='juedou') return [0,0];
                if(card.name=='sha') return [0,0];
                if(get.tag(card,'multineg')) return [0,2];
            },
                    },
                },
                "_priority":900,
            },
            "fire_new_gaosi":{
                "_priority":0,
            },
            "fire_pipan":{
                "_priority":0,
            },
            "fire_chuncui":{
                "_priority":0,
            },
            "fire_dianjing":{
                trigger:{
                    global:"useCardToPlayer",
                },
                filter:function (event){
                    if(event.card.nature)return false;
        return event.card.name=="sha";
    },
                check:function (event, player) {
        return get.attitude(player,event.target)<=0;
    },
                logTarget:"target",
                content:function(){
        "step 0"
           player.draw();
           player.chooseControl('fire', 'thunder', 'ice', 'cancel2',  function () {
                var card=_status.event.card,target=_status.event.target,player=get.player(),nature=["fire","thunder","ice",card.nature].map(function (n){
                    var c=Object.assign({},card);     
                    if(n)c.nature=n;                                  
                    return [get.effect(target,c,player,player),n];
                });
                //nature=player.getMaxCard("card[0]",nature)[1];
                if(["fire","thunder","ice"].contains(nature))return nature;                                   
            }).set('prompt','为'+get.translation(trigger.parent.card)+'附魔一种属性').set("target",trigger.target).set("card",trigger.parent.card);
       "step 1"
        if (result.control) {
            player.popup(result.control,result.control);
            trigger.parent.card.nature=result.control;
        };
    
    
    },
                "_priority":0,
            },
            "fire_chunli":{
                audio:"ext:守林人:2",
                trigger:{
                    global:"judge",
                },
                filter:function(event,player){
                    return player.countCards('hes',{color:'black'})>0;
                },
                direct:true,
                content:function(){
                    "step 0"
                    player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
                    get.translation(trigger.player.judging[0])+'，'+get.prompt('fire_chunli'),'hes',function(card){
                        if(get.color(card)!='black') return false;
                        var player=_status.event.player;
                        var mod2=game.checkMod(card,player,'unchanged','cardEnabled2',player);
                        if(mod2!='unchanged') return mod2;
                        var mod=game.checkMod(card,player,'unchanged','cardRespondable',player);
                        if(mod!='unchanged') return mod;
                        return true;
                    }).set('ai',function(card){
                        var trigger=_status.event.getTrigger();
                        var player=_status.event.player;
                        var judging=_status.event.judging;
                        var result=trigger.judge(card)-trigger.judge(judging);
                        var attitude=get.attitude(player,trigger.player);
                        if(attitude==0||result==0) return 0;
                        if(attitude>0){
                            return result;
                        }
                        else{
                            return -result;
                        }
                    }).set('judging',trigger.player.judging[0]);
                    "step 1"
                    if(result.bool){
                        player.respond(result.cards,'highlight','fire_chunli','noOrdering');
                    }
                    else{
                        event.finish();
                    }
                    "step 2"
                    if(result.bool){
                        player.$gain2(trigger.player.judging[0]);
                        player.gain(trigger.player.judging[0]);
                        trigger.player.judging[0]=result.cards[0];
                        trigger.orderingCards.addArray(result.cards);
                        game.log(trigger.player,'的判定牌改为',result.cards[0]);
                    }
                    "step 3"
                    game.delay(2);
                },
                ai:{
                    rejudge:true,
                    tag:{
                        rejudge:1,
                    },
                },
                "_priority":0,
            },
            "fire_yishi":{
                "_priority":0,
            },
            "fire_xunlie":{
                "_priority":0,
            },
            "fire_junu":{
                "_priority":0,
            },
            "fire_junu1":{
                "_priority":0,
            },
            "fire_guidao":{
                "_priority":0,
            },
            "fire_mingtu":{
                "_priority":0,
            },
            "fire_jiangzhan":{
                "_priority":0,
            },
            "fire_jiangzhan1":{
                "_priority":0,
            },
            "fire_qiji":{
                forced:true,
                trigger:{
                    player:"phaseDrawBegin",
                },
                group:["fire_qiji_dist"],
                locked:false,
                subSkill:{
                    dist:{
                        locked:false,
                        mod:{
                            maxHandcard:function (player,num){
                    var count=Math.ceil(player.maxHp-player.hp);    
                    return num=num+count;
                },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                content:function () {
        var count=Math.ceil(player.maxHp-player.hp);    
       trigger.num=trigger.num+count;
    },
                "_priority":2,
            },
            "fire_shenghui":{
                usable:1,
                trigger:{
                    player:["damageBegin3","phaseDrawBegin"],
                },
                audio:"ext:守林人:2",
                filter:function(event,player){
        return event.player==player;
    },
                check:function(event,player){
        return player.maxHp-player.hp>0&&player.hp>1;
    },
                content:function(){
        var count=Math.ceil(trigger.player.maxHp-trigger.player.hp);

        'step 0'
        trigger.cancel()
        player.loseHp(1);
        game.delayx()
        'step 1'
        player.storage.num=count;
        'step 2'
        player.storage.num--
        game.log('还剩'+player.storage.num+'张群体锦囊牌')
        
        var list=[];
        if(lib.filter.cardUsable({name:'wanjian'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
            return player.canUse('wanjian',current);
        }))
        {
            list.push(['群体锦囊','','wanjian']);
        }
        if(lib.filter.cardUsable({name:'taoyuan'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
            return player.canUse('taoyuan',current);
        })){
            list.push(['群体锦囊','','taoyuan']);
        }
        if(lib.filter.cardUsable({name:'wugu'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
            return player.canUse('wugu',current);
        })){
            list.push(['群体锦囊','','wugu']);
        }
        if(lib.filter.cardUsable({name:'nanman'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
            return player.canUse('nanman',current);
        })){
            list.push(['群体锦囊','','nanman']);
        }
        if(lib.filter.cardUsable({name:'fire_buwei'},player,event.getParent('chooseToUse'))&&game.hasPlayer(function(current){
            return player.canUse('fire_buwei',current);
        })){
            list.push(['群体锦囊','','fire_buwei']);
        }
        if(list.length){
            player.chooseButton(['是否视为使用一张群体锦囊牌？',[list,'vcard']]).set('ai',function(button){
                var player=_status.event.player;
                var card={name:button.link[2],isCard:true};
                if(card.name=='taoyuan'){
                    return 0;
                }
                if(card.name=='wanjian'){
                    if(game.hasPlayer(function(current){
                        return player.canUse(card,current)&&get.effect(current,card,player,player)>0
                    })){
                        return 2.9;
                    }
                    return 0;
                }
                if(card.name=='wugu'){
                    return 0.5;
                }
                if(card.name=='nanman'){
                    return 0.5;
                }
                if(card.name=='buwei'){
                    return 0.5;
                }
                return 0;
            })
       }
        "step 3"
        
        if(result&&result.bool&&result.links[0]){
            var card2={name:result.links[0][2]};
                    var choosen = game.filterPlayer(function(current){
                    return player.canUse(card2,current);
                });
            player.useCard(card2,choosen,true);
            }

        "step 4"
        if(player.storage.num>0){
            
            player.chooseBool(get.prompt2('fire_shenghui')).set('frequentSkill','fire_shenghui').ai=lib.filter.all;
        }
        "step 5"
        if(result.bool&&player.storage.num>0){player.logSkill('fire_shenghui');
           event.goto(2);
                                      }
        
        
        
        
        
    },
                "_priority":0,
            },
            "fire_wenxue":{
                audio:"ext:守林人/audio:3",
                trigger:{
                    player:"useCardToPlayered",
                },
                filter:function(event,player){
        return event.card&&get.color(event.card)=='red'&&event.isFirstTarget&&get.name(event.card)=='sha';
    },
                content:function(){
   'step 0'
trigger.target.chooseCard('交给'+get.translation(trigger.player)+
                          '一张红色牌，否则'+get.translation(trigger.card)+'的效果额外结算一次','hes',1,{color:'red'}).set('ai',function(card){
            var player=_status.event.player;
            if(player.hasShan()) return false;
            return Math.max(1,20-get.value(card));
        });
   'step 1'
   if(result.bool)
{trigger.target.line(player);
trigger.target.give(result.cards,player);
 
}
else {trigger.player.line(target);
    //trigger.directHit=true;
      //trigger.target.addTempSkill('fire_adddamage','phaseEnd')
                    trigger.getParent().effectCount++;      
      }
    },
                "_priority":0,
            },
            "fire_shanwu":{
                trigger:{
                    global:"damageBefore",
                },
                filter:function(event,player){
   
    return player.hasCard({color:'red'},'hes')
    &&event.card
        &&get.color(event.card)!='red'
   
        &&(event.source!=player)
    &&(event.source!=event.player)
    //&&(event.player!=player)
        &&(event.source!=undefined)
    &&player.inRange(event.source)
   },
                check:function(event,player){
        return get.attitude(player,event.player)>0&&get.attitude(player,event.source)<0;
    },
                content:function(){
        'step 0'
        
            //{player.chooseCard('hes',2,{color:'red'},true)}
                    player.chooseCardTarget({
                        prompt:'两张红色牌当做冰【杀】对伤害来源使用并取消此伤害。',
                        filterCard:function(card,player,target){
                            return get.color(card)=='red'
                        },
                        selectCard:2,
                        position:'hes',
                        discard:false,
                        filterTarget:function(card,player,target){
                            return target==trigger.source;
                        },
                        selectTarget:1,
	            ai1:function(card){
                return 10-get.value(card);
            },
            ai2:function(target){
                return get.effect(target,{name:'sha',nature:'ice'},_status.event.player);
            },
                    });
        'step 1'
       if(result.bool)
       {player.line(trigger.source);
   if(player.canUse({name:'sha',isCard:true,nature:'ice'},trigger.source,true)){
        player.useCard(result.cards,{name:'sha',isCard:true,nature:'ice'},trigger.source,true);
        trigger.cancel();
   }
       }
    },
	ai:{
		threaten:function(player,target){
			return target.getAttackRange()*0.7;
		},
	},
                "_priority":0,
            },
            "fire_riyuan":{
                group:["fire_riyuan_qianxun"],
                subSkill:{
                    qianxun:{
                        sub:true,
                        audio:2,
                        trigger:{
                            target:"useCardToTarget",
                        },
                        filter:function(event,player){
                    
                    if(player.countCards('h')==0) return false;
                    //if(!get.tag(event.card,'damage')) return false;
                    if(event.player.hasSkill('fire_riyuan1')&&event.player!=player) return true;
                },
                        content:function(){
                    var cards=player.getCards('h');
                    player.addToExpansion(cards,'giveAuto',player).gaintag.add('fire_riyuan_qianxun2');
                    player.addSkill('fire_riyuan_qianxun2');
                    //trigger.getParent().targets.remove(player);
                },
                        ai:{
                            effect:function(card,player,target){
                        if(!target.hasFriend()) return;
                        if(player==target) return;
                        var type=get.type(card);
                        var nh=target.countCards();
                        if(type=='trick'){
                                if(get.tag(card,'damage')){
                                    if(nh<3||target.hp<=2) return 0.8;
                                }
                                return [1,nh];
                        }
                        else if(type=='delay'){
                            return [0.5,0.5];
                        }
                    },
                        },
                        "_priority":0,
                    },
                    "qianxun2":{
                        sub:true,
                        trigger:{
                            player:"phaseEnd",
                        },
                        forced:true,
                        audio:false,
                        content:function(){
                    var cards=player.getExpansions('fire_riyuan_qianxun2');
                    if(cards.length) player.gain(cards,'draw');
                    player.removeSkill('fire_riyuan_qianxun2');
                },
                        intro:{
                            mark:function(dialog,storage,player){
                        var cards=player.getExpansions('fire_riyuan_qianxun2');
                        if(player.isUnderControl(true)) dialog.addAuto(cards);
                        else return '共有'+get.cnNumber(cards.length)+'张牌';
                    },
                            markcount:"expansion",
                        },
                        "_priority":0,
                    },
                },
                check:function(event,player){
                    return (get.attitude(player,event.player)>=0.2);
                },
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function(event,player){
                    if(_status.currentPhase==player||event.player==player) return false;
                    return (get.distance(event.player,player)>1);
                },
                content:function(){
                        player.line(trigger.player,'green');
                        trigger.player.addTempSkill('fire_riyuan1','phaseUseEnd');
                        game.delayx();
                    
                    
                },
                "_priority":0,
            },
            "fire_riyuan1":{
                charlotte:true,
                mark:true,
                marktext:"九",
                mod:{
                    targetInRange:()=>true,
                },
                intro:{
                    name:"日远",
                    content:"使用牌无距离限制",
                },
                "_priority":0,
            },
            "fire_linping":{
                trigger:{
                    global:"useCardToTarget",
                },
                subSkill:{
                    phaseoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"林",
                        intro:{
                            name:"林平",
                            content:"",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                check:function(event,player,target){
                    return (get.attitude(player,event.target)>0);
                },
                logTarget:"target",
                filter:function(event,player,card){
                var evt=event.getParent('chooseToUse');
                    if(event.target.hasSkill('fire_linping_phaseoff')) return false;
                    if(player.countCards('h')>0) return false;
                    if(event.player==player) return false; 
                    return evt&&get.tag(event.card,'damage')
                },
                content:function(){
                    trigger.getParent().targets.remove(trigger.target);
                    trigger.target.addTempSkill('fire_linping_phaseoff',{global:'phaseBegin'});
                },
                group:"fire_linping1",
                ai:{
                    noe:true,
                    skillTagFilter:function(player,tag){
                        if(tag=='noe'){
                            if(player.countCards('h')!=1) return false;
                        }
                    },
                },
                "_priority":0,
            },
            "fire_linping1":{
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                firstDo:true,
                filter:function(event,player){
        if(player.countCards('h')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') return true;
        }
        return false;
    },
                content:function(){},
                "_priority":0,
            },
            "fire_hexin":{
                check:function(event,player){
                        return(get.attitude(player,event.player)>0);
                },
                trigger:{
                    global:"phaseUseBegin",
                },
                filter:function(event,player){
                    return event.player!=player
                },
                content:function(){
                    var list=[];
                    var num=trigger.player.countCards('hes')
                    'step 0'
                    game.log("你好")
                    if(num>=2)
                    {list.push("选项一")}
                    list.push("选项二");                
                    trigger.player.chooseControl(list).set('prompt','和心：请选择一项').set('choiceList',[
                        '此阶段结束时，若未造成过伤害，则摸一张牌。',
                        '展示所有手牌，并弃置至少两张牌，本阶段内使用牌不可被响应。',
                    ]);
                    'step 1'
                    if(result.index!=0&&num>=2){
                        game.log(player,'令',trigger.player,'展示所有手牌，并弃置至少两张牌，本阶段内使用牌不可被响应。');    
                        trigger.player.showHandcards();            
                        trigger.player.chooseToDiscard(2,'hes',true)
                        trigger.player.addTempSkill("fire_hexin_show")
                        
                    }
                    else{
                        game.log(player,'令',trigger.player,'此阶段结束时，若未造成过伤害，则摸两张牌。');
                        trigger.player.addTempSkill("fire_hexin_peaceful")
                    }            
                },
                subSkill:{
                    show:{
                        sub:true,
                        forced:true,
                        locked:true,
                        unique:true,
                        silent:true,
                        popname:false,
                        trigger:{
                            player:"useCard",
                        },
                        content:function(){
                trigger.directHit.addArray(game.players);                  
                },
                        popup:false,
                        "_priority":1,
                    },
                    peaceful:{
                        sub:true,
                        trigger:{
                            player:"phaseUseAfter",
                        },
                        forced:true,
                        locked:true,
                        unique:true,
                        silent:true,
                        popname:false,
                        content:function () {
                    if(!player.getHistory("sourceDamage").length)
                        player.draw();
                },
                        "_priority":0,
                        popup:false,
                    },
                },
                "_priority":0,
            },
            "fire_senling":{
                trigger:{
                    player:"enterGame",
                    global:["phaseUseAfter","phaseBegin"],
                },
                forced:true,
                locked:true,
                unique:true,
                silent:true,
                popname:false,
                content:function(){
                    var targets=game.filterPlayer();
                    for(var target of targets){
                        target.addTempSkill('fire_senling_peace','phaseUseBefore');
                    }                
                },
                subSkill:{
                    peace:{
                        forced:true,
                        locked:true,
                        unique:true,
                        silent:true,
                        popname:false,
                        mod:{
                            targetEnabled:function(card,player,target,now){
                    //if(target.hasSkill('fire_senling'))return
                if(card.name=='sha'||card.name=='juedou')
                {
                    return false;
                }
            
        },
                        },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                },
                "_priority":0,
                popup:false,
            },
            "fire_mianqing":{
                derivation:"fire_mushi",
                group:"fire_mianqing_recover",
                filter:function(event,player){
        return player.group=='siracusa';
    },
                subSkill:{
                    recover:{
                        sub:true,
                        trigger:{
                            global:"recoverBegin",
                        },
                        filter:function(event,player){
        return player.group=='siracusa'&&event.player && event.player == player;;
    },
                        content:function(){
                            
        if(player.hasSkill('fire_mushi')){
            for(var i=0;i<trigger.num;i++){
            player.useSkill('fire_mushi');
            }
        }
    
    },
                        "_priority":0,
                    },
                },
                trigger:{
                    player:"phaseBegin",
                },
                direct:true,
                content:function () {    
    player.draw();
    if (!player.hasSkill("fire_mushi")) 
    {
      player.addTempSkill("fire_mushi", "phaseEnd");
    }
  },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
                "_priority":0,
            },
            "fire_qinfeng_ex":{
                audio:"fire_youlin",
                trigger:{
                    global:"phaseEnd",
                },
                subSkill:{
                    roundoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"琴",
                        intro:{
                            name:"琴风",
                            content:"总有一天，我会找出来，究竟是谁——",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    "effect1":{
                        frequent:true,
                        audio:0,
                        enable:"chooseToUse",
                        sub:true,
                        silent:true,
                        popup:false,
                        direct:true,
                        discard:false,
                        filter:function (event,player){
        
        return player.countCards('hes',{suit:'heart'})>0;
    },
                        viewAs:{
                            name:"fire_tacticaltransceiver",
                        },
                        position:"hes",
                        filterCard:function(card,player,event){
        return get.suit(card)=='heart'&&player.canAddJudge({name:'fire_tacticaltransceiver',cards:[card]});
    },
                        selectTarget:-1,
                        filterTarget:function (card,player,target){
        return player==target},
                        check:function(card){
        
        if(card.name=='shan') return 15;
        if(card.name=='tao') return 10;
        return 9-get.value(card);
    },
                        ai:{
                            result:{
                                target:1,
                                ignoreStatus:true,
                            },
                            order:12,
                            basic:{
                                order:1,
                                useful:1,
                                value:8,
                            },
                            tag:{
                            },
                        },
                        forced:true,
                        "_priority":1,
                    },
                    "effect2":{
                        audio:0,
                        silent:true,
                        forced:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
               
       var evt=event.getParent('phaseEnd');
       if(event.getParent(1).name!='fire_new_qinfeng') return false;         
                
       
        if( get.name(event.card) == 'sha' && event.card.isCard) return true; 
    },
                        content:function(){
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_new_qinfeng=true;
       
        player.addTempSkill('fire_new_qinfeng_effect3','phaseAfter');        
           player.addTempSkill('fire_new_qinfeng_roundoff','roundStart');
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                    "effect3":{
                        audio:0,
                        charlotte:true,
                        silent:true,
                        trigger:{
                            source:"damageSource",
                        },
                        forced:true,
                        filter:function(event,player){
            return event.card&&event.card.storage&&event.card.storage.fire_new_qinfeng
            },
                        content:function(){
               //player.turnOver();
               //player.tempHide();
                player.draw();
           
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                },
                check:function(event,player){
return (get.attitude(player,event.player)<0);
    },
                filter:function(event,player){
        if(player.hasSkill('fire_new_qinfeng_roundoff'))return false;
        if(!event.player.getHistory("sourceDamage").length&&player.hasJudge('fire_tacticaltransceiver')) return false;
        //if(event.player==player) return false;
        return true;
    },
                popup:false,
                content:function(){
        'step 0'
        player.addTempSkill('fire_new_qinfeng_effect2','phaseAfter');
    if(player.getHistory("sourceDamage").length){
           
            
            if(player.canUse({name:'sha'},trigger.player,false))
            player.useCard({name:'sha',isCard:true},trigger.player,false);
           
        
            
                            }
        
        else{
           player.addTempSkill("fire_new_qinfeng_effect1",'phaseAfter');
            if(!player.hasJudge('fire_tacticaltransceiver')
               &&player.countCards('hes',{suit:'heart'})+player.countCards('hes',{name:'fire_tacticaltransceiver'})>0)
               
        {//player.useSkill("fire_new_qinfeng2");
         player.chooseToUse({name:'fire_tacticaltransceiver'},player);
         player.addTempSkill('fire_new_qinfeng_roundoff','roundStart');
           }
        
      
        
        
        
        
        
        
        
        }
        
           
               
    },
                "_priority":0,
            },
            "fire_new_yiyuan":{
                audio:"ext:守林人/audio:3",
                trigger:{
                    global:"phaseJieshuBegin",
                },
                check:function(event,player){
return (get.attitude(player,event.player)<0);
    },
                filter:function(event,player){
        //if(event.player.getHistory("sourceDamage").length)return false;
        if(event.player==player) return false;
        return player.hujia&&event.player.getCards('e').length>0
    },
                popup:false,
                skillAnimation:false,
                animationColor:"wood",
                content:function () {
        //var cards=trigger.player.getCards('e')
        var check= player.hp>1;
        'step 0'
        trigger.player.chooseCard('e',1,true).set('ai',function(card){
            return Math.max(1,20-get.value(card));
        });
        //if(trigger.player.getHistory("sourceDamage").length){}
        'step 1'
           trigger.player.addTempSkill('fire_new_yiyuan_effect1','phaseJieshuAfter');
           player.addTempSkill('fire_new_yiyuan_effect2','phaseJieshuAfter');
           trigger.player.addTempSkill('fire_new_yiyuan_effect2','phaseJieshuAfter');
            player.logSkill('fire_new_yiyuan',trigger.player);
            if(trigger.player.canUse({name:'juedou'},player,false))
           { trigger.player.useCard(result.cards,{name:'juedou',isCard:true},player,false)}                        
    },
                "_priority":0,
                subSkill:{
                    "effect1":{
                        charlotte:true,
                        forced:true,
                        silent:true,
                        popname:false,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
       var evt=event.getParent('phaseJieshuBegin');
                if(event.getParent(1).name!='fire_new_yiyuan') return false;
        if( get.name(event.card) == 'juedou' && event.card.isCard) return true; 
    },
                        content:function(){
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_new_yiyuan=true;           
            },
                        sub:true,
                        "_priority":0,
                        popup:false,
                    },
                    "effect2":{
                        charlotte:true,
                        silent:true,
                        popname:false,
                        trigger:{
                            source:"damageSource",
                        },
                        forced:true,
                        filter:function(event,player){
        if(event.cards){
            for(var i=0;i<event.cards.length;i++){
                if(get.position(event.cards[i],true)=='o') return event.card&&event.card.storage&&event.card.storage.fire_new_yiyuan;
            }
        }
        return false;
                        },
                        content:function(){
        var cards=trigger.cards.slice(0);
        for(var i=0;i<cards.length;i++){
            if(get.position(cards[i],true)!='o'){
                cards.splice(i--,1);
            }
        }
        game.delay(0.5);
        trigger.player.gain(cards,'gain2');
    },
                        sub:true,
                        popup:false,
                        "_priority":1,
						ai:{
	                    threaten:function(player,target){
						if(target.hujia&&player.hasCard('e')) return 2.5
						else return 1							
						},			
			        expose:0.3,				
						},
                    },
                },
            },
            "fire_jiyu":{
                trigger:{
                    player:"useCardToPlayer",
                },
                check:function(event,player,target){
return (get.attitude(player,event.target)<0)&&(player.hp>=1);
    },
                filter:function(event,player){
       if(!player.hujia)return false;
        
        if( (get.name(event.card) == 'juedou'||get.name(event.card) == 'sha')&&event.targets.length==1) return true; 
    },
                content:function(){
                     var count=Math.ceil(player.maxHp-player.hp);
                     var num=get.distance(player,trigger.target)                 
                     if(trigger.target.countGainableCards(player,'e')>0)
            {player.gainPlayerCard(trigger.target,true,'e')}
      game.log(trigger.player,trigger.target)
      if(get.name(trigger.card) == 'juedou')
     {  
                player.changeHujia(-1);
                trigger.directHit.addArray(game.players);  
                

     }
        else if(get.name(trigger.card) == 'sha')
            {
                player.changeHujia(-1);
                if(num!=0)
                {
                    trigger.getParent().baseDamage==num;  
                }
                else 
                {
                    trigger.getParent().baseDamage=1;
                }
            }
        
   
    },
                "_priority":0,
            },
            "fire_new_jiyu":{
                enable:["chooseToUse","chooseToRespond"],
                viewAsFilter:function(player){
        return player.countCards('hes',{type:'equip'})>0;
    },
                filterCard:function(card){
        return get.type(card)=='equip';
    },
                filter:function(card,player){
            return player.isTurnedOver();
    },
                viewAs:{
                    name:"sha",
                },
                position:"hes",
                prompt:"将一张装备牌当杀使用或打出",
                check:function(card){
        return 6-get.value(card);
    },
                ai:{
                    yingbian:function(card,player,targets,viewer){
                        if(get.attitude(viewer,player)<=0) return 0;
                        var base=0,hit=false;
                        if(get.cardtag(card,'yingbian_hit')){
                            hit=true;
                            if(targets.some(target=>{
                                return target.mayHaveShan(viewer,'use',target.getCards(i=>{
                                    return i.hasGaintag('sha_notshan');
                                }))&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.natureList(card))>0;
                            })) base+=5;
                        }
                        if(get.cardtag(card,'yingbian_add')){
                            if(game.hasPlayer(function(current){
                                return !targets.includes(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                            })) base+=5;
                        }
                        if(get.cardtag(card,'yingbian_damage')){
                            if(targets.some(target=>{
                                return get.attitude(player,target)<0&&(hit||!target.mayHaveShan(viewer,'use',target.getCards(i=>{
                                    return i.hasGaintag('sha_notshan');
                                }))||player.hasSkillTag('directHit_ai',true,{
                                target:target,
                                card:card,
                                },true))&&!target.hasSkillTag('filterDamage',null,{
                                    player:player,
                                    card:card,
                                    jiu:true,
                                })
                            })) base+=5;
                        }
                        return base;
                    },
                    canLink:function(player,target,card){
                        if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
                        if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
                        return true;
                    },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                    order:function(item,player){
                        if(player.hasSkillTag('presha',true,null,true)) return 10;
                        if(typeof item==='object'&&game.hasNature(item,'linked')){
                            if(game.hasPlayer(function(current){
                                return current!=player&&lib.card.sha.ai.canLink(player,current,item)&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0;
                            })&&game.countPlayer(function(current){
                                return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                            })>1) return 3.1;
                            return 3;
                        }
                        return 3.05;
                    },
                    result:{
                        target:function(player,target,card,isLink){
                            let eff=-1.5,odds=1.35,num=1;
                            if(isLink){
                                let cache=_status.event.getTempCache('sha_result','eff');
                                if(typeof cache!=='object'||cache.card!==get.translation(card)) return eff;
                                if(cache.odds<1.35&&cache.bool) return 1.35*cache.eff;
                                return cache.odds*cache.eff;
                            }
                            if(player.hasSkill('jiu')||player.hasSkillTag('damageBonus',true,{
                                target:target,
                                card:card
                            })){
                                if(target.hasSkillTag('filterDamage',null,{
                                    player:player,
                                    card:card,
                                    jiu:true,
                                })) eff=-0.5;
                                else{
                                    num=2;
                                    if(get.attitude(player,target)>0) eff=-7;
                                    else eff=-4;
                                }
                            }
                            if(!player.hasSkillTag('directHit_ai',true,{
                                target:target,
                                card:card,
                            },true)) odds-=0.7*target.mayHaveShan(player,'use',target.getCards(i=>{
                                return i.hasGaintag('sha_notshan');
                            }),'odds');
                            _status.event.putTempCache('sha_result','eff',{
                                bool:target.hp>num&&get.attitude(player,target)>0,
                                card:get.translation(card),
                                eff:eff,
                                odds:odds
                            });
                            return odds*eff;
                        },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function(card){
                            if(game.hasNature(card,'poison')) return;
                            return 1;
                        },
                        natureDamage:function(card){
                            if(game.hasNature(card,'linked')) return 1;
                        },
                        fireDamage:function(card,nature){
                            if(game.hasNature(card,'fire')) return 1;
                        },
                        thunderDamage:function(card,nature){
                            if(game.hasNature(card,'thunder')) return 1;
                        },
                        poisonDamage:function(card,nature){
                            if(game.hasNature(card,'poison')) return 1;
                        },
                    },
                },
                "_priority":0,
            },
            "fire_zhanyi1":{
                audio:"fire_youlin",
                trigger:{
                    player:"phaseEnd",
                },
                frequent:true,
                skillAnimation:false,
                animationColor:"wood",
                filter:function(event,player){
        if(player.getHistory('skipped').contains('phaseUse')) return true;
        var history=player.getHistory('useCard').concat(player.getHistory('respond'));
        for(var i=0;i<history.length;i++)
            {
        if(history[i].card.name=='sha'&&history[i].isPhaseUsing()) return false;
            }
        return player.group=='kazimierz'
            
    },
                content:function (){
                "step 9"                
                
                if(get.type(event.card2)=='equip'){ 
                 
                    player.chooseTarget("选择【杀】的目标",function(card,player,target){
                    if(player==target) return false;
                    return player.canUse({name:'sha',nature:'stab',isCard:true},target,false);
                }).set('check',check).set('ai',function(target){
                    if(!_status.event.check) return 0;
                    return get.effect(target,{name:'sha',nature:'stab'},_status.event.player);
                });                     
                } 
                "step 10"
                if(result.bool)
                player.useCard({name:'sha',nature:'stab',isCard:true},result.targets[0],true);    
                event.finish();
    },
                "_priority":0,
            },
            "fire_chou_youling":{
                audio:"fire_kugu",
                group:"fire_chou_youling1",
                trigger:{
                    source:"damageBegin1",
                },
                forced:true,
                filter:function (event,player,card){
    if(!event.player) return false;
    if(event.player.countCards('e')==0) return false;      
    return event.player&&event.player.isIn()
        &&event.player.getEquip(1)&&player.isTurnedOver();
    },
                preHidden:true,
                content:function (){

    trigger.num++
        if(trigger.player.countGainableCards(player,'he')>0)
            {player.gainPlayerCard(trigger.player,true,'he')}
    
    },
                "_priority":0,
            },
            "fire_chou_youling1":{
                audio:"fire_kugu",
                trigger:{
                    player:"damageBegin3",
                },
                forced:true,
                filter:function (event,player,card){
    if(!event.source) return false;
    if(event.source.countCards('e')==0) return false;      
    return event.source&&event.source.isIn()
        &&event.source.getEquip(1)&&player.isTurnedOver();
    },
                preHidden:true,
                content:function (){
    //player.turnOver()
        trigger.num++
    if(trigger.source.countGainableCards(player,'he')>0)
            {player.gainPlayerCard(trigger.source,true,'he')}
                
  
    
    },
                "_priority":0,
            },
            "fire_zhanyi":{
                audio:"fire_youlin",
                enable:"phaseUse",
                check:function(event,player){
        var list=game.filterPlayer(function(player,current){
            return current.hasCard('e')
        })
        
        if(player.hasCard({type:'equip'})) return true;
            
    },
                filter:function(event,player){
        //if(player.hasSkill('fire_zhanyi_roundoff')) return false;
        return player.group=='kazimierz'
    },
                subSkill:{
                    roundoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"毅",
                        intro:{
                            name:"战毅",
                            content:"冬幕快降临了，我们这样还能坚持多久呢？",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                filterTarget:function (card,player,target){
        var hes=target.getCards('e');
        if(target.hasSkill('fire_zhanyi_roundoff')) return false;
if(!hes.length) return false;
 return true
    },
                marktext:"战",
                intro:{
                    content:"expansion",
                    markcount:"expansion",
                },
                onremove:function(player,skill){
        var cards=player.getExpansions(skill);
        if(cards.length) player.loseToDiscardpile(cards);
        delete player.storage[skill];
    },
                content:function (){
        "step 0"
        player.loseHp();
        player.turnOver();
        var check= player.isAlive;
        var hes=target.getCards('hes');
        if(!hes.length){
            event.finish();
            return;
        }
        else target.chooseCard(true,'hes').set('ai',function(card){
            var self=_status.event.player;
            
            //if((get.attitude(self,player)>0&&player.hp<2)&&(get.type(card)=='trick'||get.type(event.card2)=='delay')) return 20;
            //if((get.attitude(self,player)>0&&player.hp<2)&&(get.type(card)=='trick'||get.type(event.card2)=='delay')) return 20;
            if((get.attitude(self,player)>0&&player.hp>1)&&get.type(card)=='equip') return 20-get.value(card);
            if((get.attitude(self,player)>0&&player.hp>1)&&get.subtype(card)=='equip1') return 10-get.value(card);
            if((get.attitude(self,player)<0&&self.hp>1)&&get.type(card)=='equip') return 0;
            return Math.max(1,20-get.value(card));
        });
        "step 1"
        //var history=player.getHistory('useCard').concat(player.getHistory('respond'));
        target.showCards(result.cards);
        event.card2=result.cards[0];
        if(get.type(event.card2)=='equip'){
        player.addToExpansion(event.card2,target,'give').gaintag.add('fire_zhanyi');    
        
        //player.addTempSkill("fire_new_youlin", "phaseBegin");
        //player.useSkill("fire_new_youlin");                
        }
        //else if(get.type(event.card2)=='basic'){
            //player.gain(event.card2,'gain2');
            //player.loseMaxHp(true)
            //target.addTempSkill('fire_zhanyi_roundoff','roundStart')
            //event.finish();            
        //}
        //else if(get.type(event.card2)=='trick'||get.type(event.card2)=='delay'){
        //else if(get.type(event.card2)!='equip'){    
            //player.changeGroup('rhodes');
            //var cards=player.getExpansions('fire_zhanyi');
            //if(cards.length) player.gain(cards,'gain2');
            //event.finish();
        //}
        else if((event.card2)!='equip')
        {
            player.changeGroup('rhodes');
            var cards=player.getExpansions('fire_zhanyi');
            if(cards.length) player.gain(cards,'gain2');
            event.finish();
        }
        "step 2"
        if(get.type(event.card2)=='equip'){
        //target.addTempSkill('fire_ex_fuxue',{player:'phaseBegin'})
        //player.addTempSkill('qianxing',{player:'phaseBegin'})
        target.recover();
        }
        "step 3"
        if(get.type(event.card2)=='equip')
        
        {
            player.chooseTarget("选择【决斗】的目标",function(card,player,target){
            if(player==target) return false;
            return player.canUse({name:'juedou'},target,true);
            }).set('ai',function(target){
            if(!_status.event.check) return 0;
            return get.effect(target,{name:'juedou'},_status.event.player,true);
        });
        }
        "step 4"
        if(result.bool&&get.type(event.card2)=='equip')
        {
            player.useCard({name:'juedou',isCard:true},result.targets[0],true);
            event.finish();
        }
        
        else{
        
        event.finish();
        }
        
    },
                ai:{
                    order:15,
                },
                "_priority":0,
            },
            "fire_chou_fuxue":{
                audio:"fire_fuxue",
                subSkill:{
                    kill:{
                        charlotte:true,
                        mark:true,
                        marktext:"※",
                        intro:{
                            name:"复血",
                            content:"报仇雪恨",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    effect:{
                        audio:0,
                        charlotte:true,
                        silent:true,
                        trigger:{
                            source:"damageSource",
                        },
                        forced:true,
                        filter:function(event,player){
                if(event.getParent(1).name!='fire_chou_fuxue') return false;
                if(!event.player.hasSkill('fire_chou_fuxue_kill'))return false;
                return true
            },
                        content:function(){
               
                if(event.player.isAlive())
                {
                    player.recover()
                    //player.loseMaxHp(true)
                    event.player.removeSkill('fire_chou_fuxue_kill')
                }
                else
                {    
                    event.finish();
                    //player.changeGroup('kazimierz')
                }
                
                
           
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                },
                trigger:{
                    player:["dying","dyingAfter"],
                },
                filter:function(event,player){
        var eq=player.getCards('hes',{type:'equip'});
        if(eq.length<2) return false;
        return player.group=='rhodes';
    },
                content:function(){
        "step 0"
        event.num=0;
        player.chooseToDiscard('选择弃置一张装备牌，然后对两名角色造成一点火焰伤害','hes',{type:'equip'},2).set('ai',function(card){
   
return get.unuseful(card)+25;
});
"step 1"
player.addTempSkill('fire_chou_fuxue_effect','phaseUseAfter'); 
if(result.bool)
{
player.turnOver();
player.chooseTarget('选择两个目标造成一点火焰伤害',[0,2],function(card,player,target){return true}).set('ai',function(target){
if(get.attitude(_status.event.player,target)<0){
    return 2;
}
return 0;
}).animate=false;
}
else{event.finish()}
"step 2"
if(result.bool)
       {
           if(event.num<result.targets.length){
    player.line(result.targets, 'fire');
    result.targets[event.num].addTempSkill('fire_chou_fuxue_kill','phaseUseAfter');
    result.targets[event.num].damage(1, 'fire', player,'nocard');     
       event.num++;
           }
       }
        else{event.finish()}
        if(event.num==result.targets.length) event.finish();
        else event.redo();
    },
                "_priority":0,
            },
            "fire_sp_qinfeng":{
                audio:"fire_youlin",
                enable:"phaseUse",
                discard:false,
                filter:function(event,player){
        var hs=player.getCards('h',{type:'basic'});
        if(!hs.length) return false;
        return true
    },
                filterCard:function(card){
         return get.type(card)=='basic';
    },
                viewAsFilter:function(player){
         if(player.countCards('h',{type:'basic'})) return true;
    },
                selectCard:[1,Infinity],
                popname:true,
                prompt:"将手牌中的任意张基本牌当刺【杀】使用",
                viewAs:{
                    name:"sha",
                    nature:"stab",
                },
                position:"h",
                filterTarget:function(card,player,target){
        return player.canUse({name:'sha',nature:'stab'},target,false)
    },
                onuse:function(links,player)
    {
        var next=game.createEvent('fire_sp_qinfeng_qianxing',false,_status.event.getParent())
        next.player=player;
        next.setContent(function(player){ 
            'step 0'
            player.judge();
            'step 1'
            if(result.suit!='heart')
            {
            player.turnOver();
   
    player.addTempSkill('qianxing',{player:'phaseBegin'});
        }
        });
    },
                popup:false,
                "_priority":0,
                ai:{
                    yingbian:function(card,player,targets,viewer){
            if(get.attitude(viewer,player)<=0) return 0;
            var base=0,hit=false;
            if(get.cardtag(card,'yingbian_hit')){
                hit=true;
                if(targets.filter(function(target){
                    return target.hasShan()&&get.attitude(viewer,target)<0&&get.damageEffect(target,player,viewer,get.nature(card))>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_all')){
                if(game.hasPlayer(function(current){
                    return !targets.contains(current)&&lib.filter.targetEnabled2(card,player,current)&&get.effect(current,card,player,player)>0;
                })) base+=5;
            }
            if(get.cardtag(card,'yingbian_damage')){
                if(targets.filter(function(target){
                    return get.attitude(player,target)<0&&(hit||!target.mayHaveShan()||player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                    },true))&&!target.hasSkillTag('filterDamage',null,{
                        player:player,
                        card:card,
                        jiu:true,
                    })
                })) base+=5;
            }
            return base;
        },
                    canLink:function(player,target,card){
            if(!target.isLinked()&&!player.hasSkill('wutiesuolian_skill')) return false;
            if(target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                target:target,
                card:card,
            },true)) return false;
            if(player.hasSkill('jueqing')||player.hasSkill('gangzhi')||target.hasSkill('gangzhi')) return false;
            return true;
        },
                    basic:{
                        useful:[5,3,1],
                        value:[5,3,1],
                    },
                    order:function(item,player){
            if(player.hasSkillTag('presha',true,null,true)) return 10;
            if(game.hasNature(item,'linked')){
                if(game.hasPlayer(function(current){
                    return current!=player&&current.isLinked()&&player.canUse(item,current,null,true)&&get.effect(current,item,player,player)>0&&lib.card.sha.ai.canLink(player,current,item);
                })&&game.countPlayer(function(current){
                    return current.isLinked()&&get.damageEffect(current,player,player,get.nature(item))>0;
                })>1) return 3.1;
                return 3;
            }
            return 3.05;
        },
                    result:{
                        target:function(player,target,card,isLink){
                var eff=function(){
                    if(!isLink&&player.hasSkill('jiu')){
                        if(!target.hasSkillTag('filterDamage',null,{
                            player:player,
                            card:card,
                            jiu:true,
                        })){
                            if(get.attitude(player,target)>0){
                                return -7;
                            }
                            else{
                                return -4;
                            }
                        }
                        return -0.5;
                    }
                    return -1.5;
                }();
                if(!isLink&&target.mayHaveShan()&&!player.hasSkillTag('directHit_ai',true,{
                    target:target,
                    card:card,
                },true)) return eff/1.2;
                return eff;
            },
                    },
                    tag:{
                        respond:1,
                        respondShan:1,
                        damage:function(card){
                if(game.hasNature(card,'poison')) return;
                return 1;
            },
                        natureDamage:function(card){
                if(game.hasNature(card)) return 1;
            },
                        fireDamage:function(card,nature){
                if(game.hasNature(card,'fire')) return 1;
            },
                        thunderDamage:function(card,nature){
                if(game.hasNature(card,'thunder')) return 1;
            },
                        poisonDamage:function(card,nature){
                if(game.hasNature(card,'poison')) return 1;
            },
                    },
                },
            },
            "fire_sp_xinghuo":{
                audio:"fire_dunxing",
                forced:true,
                trigger:{
                    player:"damageBegin1",
                },
                filter:function(event,player){
        if(event.nature=='fire') return true;
    },
                content:function(){
           
                trigger.cancel();
        player.recover()
            
    },
                ai:{
                    effect:{
                        target:function(card){
                if(card.name=='fire_tacticaltransceiver'||card.name=='zhuque'||card.name=='huogong') return 0;
                if(card.nature=='fire') return 0;
            },
                        player:function(card){
            if(card.name=='fire_tacticaltransceiver'||card.name=='tengjia') return 5;},
                    },
                },
                "_priority":0,
            },
            "fire_shenlin":{
                audio:"ext:守林人:2",
                trigger:{
                    player:"phaseDrawBegin",
                },
                forced:true,
                content:function () {
    'step 0'
    trigger.cancel();
    player.judge()
              
        
        'step 1'
        
        player.gain(result.card,'gain2');
        //if(result.color=='black')
           // player.turnOver()
        //player.addTempSkill('qianxing',{player:'phaseBegin'});
        //trigger.num-=1
        
    },
                "_priority":0,
            },
            "fire_sp_qinfeng_qianxing":{
                "_priority":0,
            },
            "fire_group_fuxue":{
                group:"fire_sb_fumu",
                forced:true,
                audio:"fire_fuxue",
                filter:function(event,player){
        return event.card&&event.targets&&event.targets.length>1;
    },
                logTarget:"source",
                check:function(event,player){
        return event.getParent().excluded.contains(player)||get.tag(event.card,'multineg')||get.effect(player,event.card,event.player,player)<=0;
    },
                trigger:{
                    target:"useCardToTargeted",
                },
                content:function(){
        trigger.getParent().excluded.add(player);
        player.addTempSkill('fire_ex_fuxue',{player:'phaseEnd'})
    },
                ai:{
                    effect:{
                        target:function(card){
                if(get.type(card)!='trick') return;
                if(card.name=='tiesuo') return [0,0];
                if(card.name=='yihuajiemu') return [0,1];
                if(get.tag(card,'multineg')) return [0,2];
            },
                    },
                },
                "_priority":0,
            },
            "fire_new_chenxi":{
                check:function(event,player,target){
return (get.attitude(player,target)<=0);
    },
                selectTarget:1,
                audio:"ext:守林人:true",
                enable:"phaseUse",
                group:"fire_new_chenxi_liansuo",
                subSkill:{
                    yao:{
                        charlotte:true,
                        sub:true,
                        "_priority":0,
                    },
                    liansuo:{
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        filter:function(event,player){
                //if(event.getParent(0).name!='useSkill') return false;
                if(!get.name(event.card) == 'sha') return false;
                //if(!get.nature(event.card))return false;
                return event.target.hasSkill("fire_new_chenxi_yao")&&get.name(event.card) == 'sha'&&event.isFirstTarget;
            },
                        forced:true,
                        content:function(){
                //game.log(trigger.getParent(0).name)
                //game.log(trigger.getParent(1).name)
                //game.log(trigger.getParent(2).name)
        var linked=trigger.target.isLinked();    
        if(linked){
            //trigger.directHit=true;
            trigger.getParent().effectCount++;    
        }
        else if(!linked){
            
            trigger.target.link(true);
            trigger.getParent().excluded.add(trigger.target);
        }
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                usable:1,
                direct:true,
                frequent:true,
                filterTarget:function(card,player,target){
        if(player==target) return false;
        return target.countCards('h');
    },
                content:function(){
    "step 0"
    if(!player.storage.fire_new_chenxi){
        player.storage.fire_new_chenxi=[];
    }
    player.storage.fire_new_chenxi.add(target);
    var controls=[];
    if(target.countCards('h')) controls.push('手牌');
    
    
    if(controls.length==0) event.finish();
    "step 1"
    var content;
    var str=get.translation(target)+'的';
    if(result.control){
        if(result.control=='手牌'){
            content=[str+'手牌',target.getCards('h')];
            game.log(player,'观看了',target,'的手牌');
        }
        
    }
    else if(target.countCards('h')){
        content=[str+'手牌',target.getCards('h')];
        game.log(player,'观看了',target,'的手牌');
    }
   player.chooseControl('ok').set('dialog',content);
     "step 2"
     target.addTempSkill('fire_new_chenxi_yao')
     "step 3"
     if(player.canUse({name:'sha'},target,false))
         player.chooseToUse({name:'sha'},target,false,-1)     
    },
                ai:{
                    order:20,
                    result:{
                        target:1,
                        player:function(player,target){
                if(get.attitude(player,target)>0){
                    return 0;
                }
                return 4;
            },
                    },
                },
                "_priority":0,
            },
            "fire_standard_youlin":{
                usable:1,
                check:function(event,player){
                    return player.hasSha();
                },
                subSkill:{
                    "effect1":{
                        audio:0,
                        silent:true,
                        forced:true,
                        charlotte:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
       var evt=event.getParent('phaseEnd');
       if(event.getParent(2).name!='fire_standard_youlin') return false;        
        if( get.name(event.card) == 'sha' && event.card.isCard) return true; 
    },
                        content:function(){
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_standard_youlin=true;
        trigger.baseDamage++;
        //player.addTempSkill('fire_standard_youlin_weapon','shaAfter');        
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                        ai:{
                            unequip:true,
                            "unequip_ai":true,
                            skillTagFilter:function(player,tag,arg){
                        if(arg&&arg.name=='sha') return true;
                        return false;
                    },
                        },
                    },
                    weapon:{
                        popup:false,
                        silent:true,
                        charlotte:true,
                        preHidden:true,
                        sub:true,
                        trigger:{
                            source:"damageBegin1",
                        },
                        forced:true,
                        filter:function(event,player){
        if(event.getParent(5).name!='fire_standard_youlin') return false;        
       if( get.name(event.card) != 'sha') return false; 
        if(!event.player) return false;
        return event.player&&event.player.isIn()&&event.player.getEquip(1);
    },
                        content:function(){
        trigger.num++;
    },
                        "_priority":1,
                    },
                    roundoff:{
                        sub:true,
                        charlotte:true,
                        mark:true,
                        marktext:"幽",
                        intro:{
                            name:"幽林",
                            content:"",
                        },
                        "_priority":0,
                    },
                },
                audio:"ext:守林人:2",
                trigger:{
                    player:"loseAfter",
                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                },
                filter:function(event,player){
        var evt=event.getl(player);
        //if(player.hasSkill('fire_standard_youlin_roundoff'))return false;
        return evt&&evt.player==player&&evt.es&&evt.es.length>0;
    },
                content:function(){
                //'step 0'
            var check=game.hasPlayer(function(current){
                if(current.player==player) return false;
                return player.canUse({name:'sha'},current,false)
            })
            var filterTarget=function(card,player,target){
                            return player.canUse({name:'sha'},target,false,'nodistance');
                        }        
                'step 0'
                player.draw();
                player.turnOver();
                player.addTempSkill('fire_standard_youlin_effect1','phaseAfter');  
                'step 1'
                if(trigger.delay==false) game.delay();
                'step 2'
                player.chooseToUse('使用一张无距离限制的【杀】',{name:'sha'}).set('filterTarget',filterTarget).set('check',check);
                //player.chooseUseTarget('视为使用一张无距离限制的【杀】',{name:'sha'},'nodistance');
                //'step 1'
                //if(result.bool)
                //{player.addTempSkill('fire_standard_youlin_roundoff','roundStart')};

    },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function(card,player,target,current){
                if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
            },
                    },
                },
                "_priority":0,
            },
            "fire_re_standard_youlin":{
                usable:true,
                trigger:{
                    player:"turnOverAfter",
                },
                subSkill:{
                    "effect1":{
                        audio:0,
                        silent:true,
                        forced:true,
                        charlotte:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
       var evt=event.getParent('phaseEnd');
       if(event.getParent(2).name!='fire_re_standard_youlin') return false;        
        if( get.name(event.card) == 'sha' && event.card.isCard) return true; 
    },
                        content:function(){
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_re_standard_youlin=true;
        trigger.baseDamage++;
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                        ai:{
                            unequip:true,
                            "unequip_ai":true,
                            skillTagFilter:function(player,tag,arg){
                        if(arg&&arg.name=='sha') return true;
                        return false;
                    },
                        },
                    },
                    roundoff:{
                        sub:true,
                        charlotte:true,
                        mark:true,
                        marktext:"幽",
                        intro:{
                            name:"幽林",
                            content:"",
                        },
                        "_priority":0,
                    },
                },
                filter:function(event,player){
                    //if(player.hasSkill('fire_re_standard_youlin_roundoff'))return false;        
                    return !player.isTurnedOver()&&player.getExpansions('fire_trap').length>1
                },
                content:function(){
                            var check=game.hasPlayer(function(current){
                if(current.player==player) return false;
                return player.canUse({name:'sha'},current,false)
            })
            var filterTarget=function(card,player,target){
                            return player.canUse({name:'sha'},target,false,'nodistance');
                        }    
                'step 0'
                player.addTempSkill('fire_re_standard_youlin_effect1','phaseAfter');  
                'step 1'
        var choose = player.chooseButton(['将两张罠牌当做一张无距离限制的【杀】使用',player.getExpansions('fire_trap')],2,true)
        var player = _status.event.player;
        var cards=player.getExpansions('fire_trap');
        'step 2'
        var cards2 = result.links; // 获取牌	
		game.log(cards2)
				player.chooseUseTarget(cards2,'将'+get.translation(cards2)+'当做一张无距离限制的【杀】使用',{name:'sha'},'nodistance');		
                //player.chooseToUse('使用一张无距离限制的【杀】',{name:'sha'}).set('filterTarget',filterTarget).set('check',check);
                //{player.addTempSkill('fire_re_standard_youlin_roundoff','roundStart')};                
                //player.chooseUseTarget('视为使用一张无距离限制的刺【杀】',{name:'sha',nature:'stab'},'nodistance');
                'step 3'
                if(result.bool)
                player.turnOver();
                
				
				},
                audio:"fire_youlin",
                "_priority":0,
            },
            "fire_standard_fuxue":{
                trigger:{
                    player:"turnOverAfter",
                },
                forced:true,
                filter:function(event,player){
                    return !player.isTurnedOver()&&player.hasCard(function(card){
//!get.tag(card,'damage')
    return player.canRecast(card,player);
},'he')
                },
                content:function(){
                    var cards=player.getCards('he', function (card) {
    return player.canRecast(card,player)
})
                    "step 0"
                    if(cards.length){
                    player.chooseCard('he',1,true,function (card) {
    return player.canRecast(card,player)
})
                    }
                    "step 1"
                    if(result.bool)
                    {
                    player.recast(result.cards)
                
                    }
                },
                mod:{
                    targetEnabled:function(card,player,target,now){
                        if(target.isTurnedOver()){
                            if(get.tag(card,'damage')){
                                    //if(player.inRange(target)){
									//if(target!=player){
									if(player.getAttackRange()<=target.getAttackRange()){	
										return false
                                    }
                                
                            }
        
                        }
                    },
                },
                audio:"fire_fuxue",
				ai:{
                    threaten:function(player,target){     
            if(target.isTurnedOver()) return 0;
        },					
				},
                "_priority":0,
            },
            "fire_standard_fuxue1":{
                audio:"fire_fuxue",
                trigger:{
                    player:"loseEnd",
                },
                forced:true,
                firstDo:true,
                filter:function(event,player){
        if(player.countCards('e')) return false;
        for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='e') return true;
        }
        return false;
    },
                content:function(){},
                "_priority":0,
            },
            "fire_re_standard_fuxue":{
                audio:"ext:守林人:2",
                group:["fire_re_standard_fuxue_damage"],
                subSkill:{
                    damage:{
                        trigger:{
                            player:"damageBegin3",
                        },
                        filter:function(event,player){
                    return player.isTurnedOver()
                },
                        forced:true,
                        content:function(){
                    //game.log('work')
                    trigger.cancel();
                    var cards=player.getCards('hej', function (card) {
    return(!get.tag(card,'damage'))
})
                    if(cards.length){
					player.addToExpansion(cards,'giveAuto',player).gaintag.add('fire_trap');             
					player.addSkill('fire_trap')
                    }
                },
                        sub:true,
                        ai:{
                            "maixie_defend":true,
                            effect:{
                                target:function(card,player,target){
                if(player.hasSkillTag('jueqing',false,target)) return [1,-1];
                            if(get.tag(card,'damage')){
                                if(target.isTurnedOver()) return [1,2];
                                }
                            },
                            },
                        },
                        "_priority":0,
                    },
                },
                trigger:{
                    player:["loseAfter"],
                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                },
                forced:true,
                filter:function(event,player){
        var evt=event.getl(player);
        return evt&&evt.player==player&&evt.es&&evt.es.length>0;
    },
                content:function(){
				var num=trigger.getl(player).es.length
					var cards=get.cards(num);
					player.$gain2(cards,false);
					player.addToExpansion(cards,'giveAuto',player).gaintag.add('fire_trap');             
					player.addSkill('fire_trap')					
                player.turnOver();
    },
                ai:{
                    noe:true,
                    reverseEquip:true,
                    effect:{
                        target:function(card,player,target,current){
                if(player.hasSkillTag('jueqing',false,target)) return;
				if(!target.isTurnedOver())return
                if(get.type(card)=='equip'&&!get.cardtag(card,'gifts')) return [1,3];
                if(get.tag(card,'damage')) return [0,2];
            },
                    },
                    threaten:function(player,target){     
            if(target.isTurnedOver()) return 0;
        },					
                },
                "_priority":0,
            },
            "fire_old_fuxue":{
                priority:9,
                audio:"fire_fuxue",
                filter:function (event,player){
        return get.type(event.card)=='trick'&&event.targets&&event.targets.length>1;
    },
                check:function (event,player){
        return get.tag(event.card,'multineg')||get.effect(player,event.card,event.player,player)<=0;
    },
                trigger:{
                    target:"useCardToBefore",
                },
                content:function (){
        trigger.cancel();
        player.draw();
    },
                ai:{
                    effect:{
                        target:function (card){
                if(get.type(card)!='trick') return;
                if(card.name=='tiesuo') return [0,0];
                if(card.name=='yihuajiemu') return [0,1];
                if(get.tag(card,'multineg')) return [0,2];
            },
                    },
                },
                "_priority":900,
            },
            "fire_final_youlin":{
                audio:"fire_youlin",
                usable:1,
                check:function(event,player){
        var evt=event.getParent('phaseDraw')
      if(evt&&evt.player) return false;
        if( player.getExpansions('fire_trap').length>=2) return false;
        return player.getExpansions('fire_trap').length<=3;
    },
                trigger:{
                    player:["gainAfter"],
                },
                preHidden:true,
                filter:function(event,player){
    if(event.name=='discard') return false;
    if( player.getExpansions('fire_trap').length>=10) return false;     
    return event.getg(event.player).length>0;

    },
                content:function (){
        var check=game.hasPlayer(function(current){
                if(current.player==player) return false;
                return player.canUse({name:'sha'},current,false)
            
            })
        "step 0"
        
       
         event.card2=trigger.cards;
        player.chooseBool('是否将'+get.translation(event.card2)+'置于武将牌前？').ai=function(){return true};
       'step 1'
        if(result.bool&&!event.directbool)
        {
        player.turnOver();
        player.addToExpansion(event.card2,player,'give').gaintag.add('fire_trap');             
        player.addSkill('fire_trap')
        }
       'step 2'
       if(result.bool&&!event.directbool)
        player.chooseTarget("选择【杀】的目标",function(card,player,target){
                        if(player==target) return false;
                        return player.canUse({name:'sha',nature:'stab'},target,false);
                    }).set('check',check).set('ai',function(target){
                        if(!_status.event.check) return 0;
            
                        return get.effect(target,{name:'sha',nature:'stab'},_status.event.player);
                    });
        "step 3"
        if(result.bool&&!event.directbool)
        {
            player.useCard({name:'sha',nature:'stab'},result.targets[0],true);
            event.finish();
        }
        
        else{
        
        event.finish();
        }

    },
                "_priority":0,
            },
            "fire_final_fuxue":{
                audio:"fire_fuxue",
                filter:function(event,player,card){
                    if(event.player==undefined) return false
        var hand = player.countCards('h')
        var ext = player.getExpansions('fire_trap').length
        var absnum = Math.abs(hand-ext)
        var atk = event.player.getAttackRange()
        var hands = event.player.countCards('h')
        var absnums =Math.abs(hands-atk)
        if(event.player==player)return false;
        //if(get.distance(player,event.player)==1) return false;
        return get.tag(event.card,'damage')&&hands>hand&&hands>ext;
    },
                check:function(event,player){
        return event.getParent().excluded.contains(player)||get.effect(player,event.card,event.player,player)<=0;
    },
                trigger:{
                    target:"useCardToTargeted",
                },
                content:function(){
    player.logSkill('fire_final_fuxue',trigger.player);            
    trigger.getParent().excluded.add(player);
    trigger.player.gain(lib.card.ying.getYing(1),'gain2');
    player.gain(lib.card.ying.getYing(1),'gain2');
    },
                ai:{
                    effect:{
                        target:function(card,player,target){
                var hand = target.countCards('h')
                var atk = player.getAttackRange()
                var ext = target.getExpansions('fire_trap').length
                var absnum = Math.abs(hand-ext)
                var hands = player.countCards('h')
                var absnums =Math.abs(hands-atk)
                if(player.hasSkillTag('jueqing',false,target)) return;
                if(hands>hand&&hands>ext) return 0.5;
            },
                    },
                    threaten:function(player,target){
            var hand = target.countCards('h')
            var ext = target.getExpansions('fire_trap').length    
            var absnum = Math.abs(hand-ext)            
            if(hand==0&&ext==0) return 0.2;
        },
                },
                "_priority":0,
            },
            "fire_final_dongmu":{
                audio:"fire_kugu",
                trigger:{
                    global:["loseAfter","loseAsyncAfter","cardsDiscardAfter"],
                },
                filter:function(event,player){
        return player.getExpansions('fire_trap').length>0&&event.getd().some(i=>get.name(i,false)=='ying');
    },
                content:function(){
        "step 0"   
        player.chooseButton(['移去任意张罠牌',player.getExpansions('fire_trap')],[1,player.getExpansions('fire_trap').length],true)
        var player=_status.event.player;
        var cards=player.getExpansions('fire_trap');
        "step 1"
        var cards2 = result.links; // 获取弃牌
var total = 0;
player.loseToDiscardpile(result.links);
for (var i = 0; i < cards2.length; i++) {
total += get.number(cards2[i]); // 计算牌点数的总和
}
game.log(total) 
var average = Math.floor(total/cards2.length); // 计算均值    
game.log(average)                
var list=game.filterPlayer(function(current){
    //return get.position(current) == average; // 获取座位号等于均值的玩家
    if(current==player) return false ;
   return get.distance(player,current)== total;//获取距离等于总和的玩家
});
list.sortBySeat();
event.list=list;
if(event.list.length){
for (var i = 0; i < event.list.length; i++) 
{
    player.line(event.list[i], 'fire');
    event.list[i].damage('fire', 1, player);
}
}
else{
    event.finish();
}


    },
                "_priority":0,
            },
            "fire_kuye":{
                "_priority":0,
                audio:"ext:守林人:2",
                trigger:{
                    player:"damageBegin3",
                },
                direct:true,
                check:function(event,player){
        return get.effect(player,event.card,event.player,player)<=0;
    },
                filter:function(event,player){
                            if(event.source==undefined) return false
        var hand = player.countCards('h')
        var ext = player.getExpansions('fire_trap').length
        var absnum = Math.abs(hand-ext)
        var atk = event.source.getAttackRange()
        var hands = event.source.countCards('h')
        var absnums =Math.abs(hands-atk)
        var dis = get.distance(event.source,player)
        //if(event.source==player)return false;
       
        return (hands>hand)&&(hands>ext)&&event.num>0;
    },
                content:function(){
            player.logSkill(event.name,event.source);
            trigger.player=trigger.source;
            //trigger.cancel();     
            //player.draw();
            //trigger.source.draw();
            player.gain(lib.card.ying.getYing(1),'gain2');
            
                    
                
            //trigger.source.draw();
    },
                ai:{
                    effect:{
                        target:function(card,player,target){
                var hand = target.countCards('h')
                var atk = player.getAttackRange()
                var ext = target.getExpansions('fire_trap').length
                var absnum = Math.abs(hand-ext)
                var hands = player.countCards('h')
                var dis = get.distance(player,target)
                if(player.hasSkillTag('jueqing',false,target)) return;
                if(get.tag(card,'damage')&&hands>hand&&hands>ext) return 0;
            },
                    },
                    threaten:function(player,target){
            var hand = target.countCards('h')
            var ext = target.getExpansions('fire_trap').length        
            if(hand==0&&ext==0) return 0;
        },
                },
            },
            "fire_re_kuye":{
                audio:"ext:守林人:2",
                trigger:{
                    player:"damageBegin3",
                },
                direct:true,
                check:function(event,player){
        return get.effect(player,event.card,event.player,player)<=0;
    },
                filter:function(event,player){
                            if(event.source==undefined) return false
        var hand = player.countCards('h')
        var ext = player.getExpansions('fire_trap').length
        var absnum = Math.abs(hand-ext)
        var atk = event.source.getAttackRange()
        var hands = event.source.countCards('h')
        var absnums =Math.abs(hands-atk)
        var dis=get.distance(event.source,player)
        //if(event.source==player)return false;
       
        return (hands>hand&&hands>ext)&&event.num>0;
    },
                content:function(){

            player.logSkill(event.name,event.source);
            //trigger.player=trigger.source;
            trigger.cancel();
            player.gain(lib.card.ying.getYing(1),'gain2');
            trigger.source.gain(lib.card.ying.getYing(1),'gain2');
            //player.draw();
            //trigger.source.draw();

    
    },
                ai:{
                    effect:{
                        target:function(card,player,target){
                var hand = target.countCards('h')
                var atk = player.getAttackRange()
                var ext = target.getExpansions('fire_trap').length
                var absnum = Math.abs(hand-ext)
                var hands = player.countCards('h')
                var dis = get.distance(player,target)
                if(player.hasSkillTag('jueqing',false,target)) return;
                if(get.tag(card,'damage')&&hands>hand&&hands>ext) return 0.6;
            },
                    },
                    threaten:function(player,target){
            var hand = target.countCards('h')
            var ext = target.getExpansions('fire_trap').length    
            var absnum = Math.abs(hand-ext)            
            if(hand==0&&ext==0) return 0.1;
        },
                },
                "_priority":0,
            },
            "fire_zhujian":{
                audio:"ext:守林人/audio:3",
                usable:1,
                trigger:{
                    global:"useCardToTargeted",
                },
                filter:function(event,player){
        if(player.countCards('he')==0) return false;
        //if(get.distance(player,event.target)>1) return false;
            if( player.getExpansions('fire_trap').length>=10) return false;     
            if(event.target==player) return false
        return event.card&&get.tag(event.card,'damage')&&(get.distance(player,event.target,'pure')==1);
    },
                content:function(){
        "step 0"
        player.chooseControl(lib.suit.slice(0).reverse()).set('prompt','请选择一个花色')
       
        "step 1"
        var suit=result.control;
                    event.suit=suit;
        player.chooseCard('he',{suit:suit},[0,Infinity],"选择要伏置的"+get.translation(event.suit)+"牌")
                "step 2"
        if(result.bool)
        event.card2=result.cards
        player.showCards(event.card2);
        player.addToExpansion(event.card2,'giveAuto',player).gaintag.add('fire_trap');
        player.addSkill('fire_trap')
        player.addSkill('fire_zhujian2');
    },
                "_priority":0,
            },
            "fire_zhujian2":{
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,
                audio:"ext:守林人:false",
                content:function(){
        var cards=player.getExpansions('fire_trap');
        
        
        "step 0"
        if(cards.length) {
          player.storage.num=cards.length
            player.gain(cards,'draw');
            
        }
        else{event.finish()}
        "step 1"
        if(player.storage.num>0)
        {
        var targets = game.filterPlayer();
        var number=player.storage.num
        player.chooseTarget('选择等量的【火攻】目标',[0,number], function(card, player, target) {
        return targets.contains(target)&&player.canUse({name:'huogong'},target,true);
    }).set('ai', function(target) {
        return -get.attitude(_status.event.player, target);
        })
        //player.storage.num--
        }
        else {
            event.finish()
        
        }
        "step 2"
        if(result.bool&&player.storage.num>0)
        //{player.useCard({name:'huogong'},result.targets[0],true)
        //player.storage.num=0
       {
           //if(event.num<result.targets.length){}
      player.line(result.targets, 'fire');
      player.useCard({name:'huogong'},result.targets,true)
     //player.removeSkill('fire_new_qinfeng_roundoff')      
       //event.num++;
           
       }
        else{
        player.storage.num=0
        event.finish()
        }
        //if(event.num==result.targets.length) event.finish();
        //else event.redo();
        //event.goto(1)
        
        //'step 3'
        //player.removeSkill('fire_zhujian2');
    },
                ai:{
                },
                "_priority":0,
            },
            "fire_re_zhujian":{
                audio:"ext:守林人/audio:3",
                usable:1,
                trigger:{
                    global:"useCardToTargeted",
                },
                filter:function(event,player){
        if(player.countCards('he')==0) return false;
        if(event.target=player) return false;
        if(get.distance(player,event.target)>1) return false;
            if( player.getExpansions('fire_trap').length>=10) return false;     
        return event.card&&get.tag(event.card,'damage');
    },
                content:function(){
        "step 0"
        player.chooseControl(lib.suit.slice(0).reverse()).set('prompt','请选择一个花色')
       
        "step 1"
        var suit=result.control;
                    event.suit=suit;
        player.chooseCard('he',{suit:suit},[0,Infinity],"选择要伏置的"+get.translation(event.suit)+"牌")
        "step 2"
        if(result.bool)
        event.card2=result.cards
        player.showCards(event.card2);
        player.addToExpansion(event.card2,'giveAuto',player).gaintag.add('fire_trap');
        player.addSkill('fire_trap')
        player.addSkill('fire_re_zhujian2');
    },
                "_priority":0,
            },
            "fire_re_zhujian2":{
                trigger:{
                    player:"phaseJieshuBegin",
                },
                forced:true,
                audio:"ext:守林人:false",
                content:function(){
        var cards=player.getExpansions('fire_trap');
        
        
        "step 0"
        if(cards.length) {
          player.storage.num=cards.length
            player.gain(cards,'draw');
            
        }
        else{event.finish()}
        "step 1"
        if(player.storage.num>0)
        {
        var targets = game.filterPlayer();
        var number=player.storage.num
        player.chooseTarget('选择等量的【火攻】目标',[0,number], function(card, player, target) {
        return targets.contains(target)&&player.canUse({name:'huogong'},target,true);
    }).set('ai', function(target) {
        return -get.attitude(_status.event.player, target);
        })
        //player.storage.num--
        }
        else {
            event.finish()
        
        }
        "step 2"
        if(result.bool&&player.storage.num>0)
        //{player.useCard({name:'huogong'},result.targets[0],true)
        //player.storage.num=0
       {
           //if(event.num<result.targets.length){}
      player.line(result.targets, 'fire');
      player.useCard({name:'huogong'},result.targets,true)
     //player.removeSkill('fire_new_qinfeng_roundoff')      
       //event.num++;
           
       }
        else{
        player.storage.num=0
        event.finish()
        }
            },
                "fire_test_bingniang":{
                    trigger:{
                        global:["useCardAfter"],
                    },
                    filter:function(event,player,cards){
        //if (get.type(event.cards)!='delay')return false
            
        return get.itemtype(event.cards)=='cards'
    },
                    content:function(){
        player.gain(trigger.cards,'gain2')
    },
                    "_priority":0,
                },
                "_priority":0,
            },
            "fire_new_mihang":{
                trigger:{
                    global:["useCard"],
                },
                filter:function(event,player){
                    if(_status.currentPhase==player||event.player==player) return false;
                    return player.getExpansions('fire_trap').length
                },
                direct:true,
                content:function(){
                    "step 0"
                    game.log('helloworld')
                    var effect=0;
                    if(trigger.card.name=='wuxie'||trigger.card.name=='shan'){
                        if(get.attitude(player,trigger.player)<-1){
                            effect=-1;
                        }
                    }
                    else if(trigger.targets&&trigger.targets.length){
                        for(var i=0;i<trigger.targets.length;i++){
                            effect+=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
                        }
                    }
                    var str='迷航：是否令'+get.translation(trigger.player);
                    if(trigger.targets&&trigger.targets.length){
                        str+='对'+get.translation(trigger.targets);
                    }
                    str+='使用的'+get.translation(trigger.card)+'失效？'
                    var next=player.chooseBool(str,function(){
                        var player=_status.event.player;
                        var trigger=_status.event.getTrigger();
                        if(_status.event.effect<0){
                            if(trigger.card.name=='sha'){
                                var target=trigger.targets[0];
                                if(target==player){
                                    return !player.countCards('h','shan');
                                }
                                else{
                                    return target.hp==1||(target.countCards('h')<=2&&target.hp<=2);
                                }
                            }
                            else{
                                return true;
                            }
                        }
                        return false;
                    });
                    next.set('effect',effect);
                    "step 1"
                    if(result.bool){
                        var cards=player.getExpansions('fire_trap')
                        player.logSkill('fire_trap',trigger.player);
                        game.log(trigger.card.name)
                        var index=cards.indexOf(trigger.card.name);
                        game.log(index)
                        if(index!=-1){
                            var card=cards[index];
                            player.loseToDiscardpile(card);
                            cards.splice(index,1);
                            if(cards.length==0){
                                player.unmarkSkill('fire_trap');
                            }
                            else{
                                player.syncStorage('fire_trap');
                                player.markSkill('fire_trap');
                                if(player.isOnline2()){
                                    player.send(function(storage){
                                        game.me.getExpansions('fire_trap')=storage;
                                    },player.getExpansions('fire_trap'));
                                }
                            }
                        }
                        trigger.targets.length=0;
                        trigger.all_excluded=true;
                    }
                },
                ai:{
                    threaten:1.8,
                    expose:0.3,
                },
                "_priority":0,
            },
            "fire_adddamage":{
                charlotte:true,
                mark:true,
                forced:true,
                trigger:{
                    player:"damageBegin4",
                },
                content:function(){trigger.num++},
                marktext:"易",
                intro:{
                    content:"受到伤害+1",
                },
                "_priority":0,
            },
            "fire_yinguang2":{
                enable:["chooseToUse","chooseToRespond"],
                viewAsFilter:function(player){
        return player.countCards('hes',{type:'equip'})>0;
    },
                filterCard:function(card){
        return get.type(card)=='equip';
    },
                filter:function(card,player){
        if(player.getEquip(2)) return false;
            return true;
    },
                viewAs:{
                    name:"shan",
                },
                position:"hes",
                prompt:"将一张装备牌当闪使用或打出",
                check:function(card){
        return 6-get.value(card);
    },
                ai:{
                    respondShan:true,
                    skillTagFilter:function(player){
            if(!player.countCards('hs')) return false;
        },
                    effect:{
                        target:function(card,player,target,current){
                if(get.tag(card,'respondShan')&&current<0&&target.countCards('hs')) return 0.59
            },
                    },
                    order:4,
                    useful:-0.5,
                    value:-0.5,
                    basic:{
                        useful:[7,5.1,2],
                        value:[7,5.1,2],
                    },
                    result:{
                        player:1,
                    },
                },
                "_priority":0,
            },
            "fire_new_tianma":{
                group:["fire_new_tianma_mark","fire_new_tianma_add","fire_new_tianma_shan"],
                forced:true,
                charlotte:true,
                subSkill:{
                    dam:{
                        trigger:{
                            player:"useCardToBegin",
                        },
                        filter:function(event,player){
        if(event.card&&event.card.name=='sha'&&get.name(event.card) == 'sha' && event.card.isCard) return true; 
         if(!player. hasMark('fire_new_tianma_mark'))return false;       
    
    },
                        forced:true,
                        charlotte:true,
                        content:function(){
       var all=player.countMark('fire_new_tianma_mark')
        trigger.baseDamage+=all;
       
       
        game.broadcastAll(function(player){
            player.removeMark('fire_new_tianma_mark',all);
        },player);
    },
                        sub:true,
                        "_priority":0,
                        ai:{
                            unequip:true,
                            "unequip_ai":true,
                            skillTagFilter:function(player,tag,arg){
                        if(arg&&arg.name=='sha') return true;
                        return false;
                    },
                        },
                    },
                    shan:{
                        forced:true,
                        charlotte:true,
                        trigger:{
                            player:"useCardToPlayered",
                        },
                        filter:function(event,player){
                    if(!player. hasMark('fire_new_tianma_mark'))return false;     
                    return event.card.name=='sha'&&!event.getParent().directHit.contains(event.target);
                },
                        logTarget:"target",
                        content:function(){
                    var all=player.countMark('fire_new_tianma_mark')
                    var id=trigger.target.playerid;
                    var map=trigger.getParent().customArgs;
                    if(!map[id]) map[id]={};
                    if(typeof map[id].shanRequired=='number'){
                        map[id].shanRequired+=all;
                    }
                    else{
                        map[id].shanRequired=1+all;
                    }
                game.broadcastAll(function(player){
                player.removeMark('fire_new_tianma_mark',all);
                },player);            
                },
                        ai:{
                            "directHit_ai":true,
                            skillTagFilter:function(player,tag,arg){
                        var all=player.countMark('fire_new_tianma_mark')+1
                        if(arg.card.name!='sha'||arg.target.countCards('h','shan')>all) return false;
                    },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    mark:{
                        marktext:"天",
                        intro:{
                            name:"天马",
                            content:"mark",
                        },
                        sub:true,
                        mod:{
                            attackFrom:function(from,to,distance){
                    var num=from.countMark('fire_new_tianma_mark')
           if(from.hasMark('fire_new_tianma_mark')) return distance-num
        },
                        },
                        "_priority":0,
                    },
                    add:{
                        usable:2,
                        forced:true,
                        charlotte:true,
                        trigger:{
                            player:["gainAfter"],
                        },
                        frequent:true,
                        preHidden:true,
                        filter:function(event,player){
        if(event.name=='discard') return false;
       //if(player.countMark('fire_new_tianma_mark')>=3) return false
      //var evt=event.getParent('phaseUse')
      //if(!evt||!evt.player) return false;
            var evt=event.getParent('phaseDraw')
      if(evt&&evt.player) return false;
      var cards=event.cards.slice(0);
                var evt=event.getl(player);
                if(evt&&evt.cards) cards.removeArray(evt.cards);
                for(var i=0;i<cards.length;i++){
                    if(cards[i].original!='j'&&get.name(cards[i],event.player)=='sha'
                       &&get.position(cards[i],true)=='h'){
                        return true;
                    }
                }
                return false;           
       
        
        
    },
                        content:function(){ 
            "step 0"
                if(trigger.delay==false) game.delay();
                "step 1"
                var cards=[],cards2=trigger.cards.slice(0),evt=trigger.getl(player);
                if(evt&&evt.cards) cards2.removeArray(evt.cards);
                for(var i=0;i<cards2.length;i++){
                    if(cards2[i].original!='j'&&get.name(cards2[i],trigger.player)=='sha'
                       &&get.position(cards2[i],true)=='h'){
                        cards.push(cards2[i]);
                    }
                }
                if(cards.length){
            player.showCards(cards);                    
              
            player.addMark('fire_new_tianma_mark',1);  
            //player.addTempSkill('fire_new_tianma_dam','shaAfter')
            }    
        
        
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_new_lvxing":{
                priority:8,
                enable:"phaseUse",
                usable:1,
                selectCard:function(){
                    var player=_status.event.player,len=(player.countMark('fire_new_tianma_mark'));
                    if(len>1) return len;
                    else return 1
                    return [0,len];                    
                },
                position:"he",
                check:function(card){
                    var player=_status.event.player;
                    if(get.is.altered('xinzhiheng')&&get.position(card)=='h'&&!player.countCards('h',function(card){
                        return get.value(card)>=8;
                    })){
                        return 8-get.value(card);
                    }
                    return 6-get.value(card)
                },
                mark:true,
                zhuanhuanji:true,
                marktext:"☯",
                intro:{
                    content:function(storage,player,skill){
            if(player.storage.fire_new_lvxing!=true) return '出牌阶段限一次，你可以将X张牌置入牌堆底并从另一端摸等量张牌(X为〖天马〗标记数且至少为1)。';
            return '出牌阶段限一次，你可以将X张牌牌置入牌堆顶并从另一端摸等量张牌(X为〖天马〗标记数且至少为1)。';
        },
                },
                audio:"ext:守林人:2",
                log:false,
                frequent:true,
                discard:false,
                lose:false,
                filterCard:true,
                filter:function(event,player){
    game.hasPlayer(function(current){
                        return current.hasSkill('fire_new_lvxing');
                    })
        if(player.countCards('he')>0) return true;
        
        
    },
                subSkill:{
                    change:{
                        locked:true,
                        trigger:{
                            player:"phaseUseBegin",
                        },
                        forced:true,
                        content:function(){    
        player.changeZhuanhuanji('fire_new_lvxing');
        },
                        sub:true,
                        "_priority":0,
                    },
                },
                content:function(){ 
        var target=player
        var num=cards.length
                     
                    "step 0"
                   player.changeZhuanhuanji('fire_new_lvxing');
                     event.target=player;
                   
                    "step 1"
                    if(player.isAlive){
                        player.logSkill('fire_new_lvxing',player);

                        event.card=cards;
                       
                    }
                    else{
                        event.finish();
                    }
                    delete _status.noclearcountdown;
                    game.stopCountChoose();
                    "step 2"

                    

                        var next=player.lose(event.card,ui.cardPile);
                        if(player.storage.fire_new_lvxing!=true) next.insert_card=true;
                        game.broadcastAll(function(player){
                        var cardx=ui.create.card();
                            cardx.classList.add('infohidden');
                            cardx.classList.add('infoflip');
                            player.$throw(cardx,1000,'nobroadcast');
                        },player);

                    "step 3"
                    game.delay();
                    "step 4"
                    if(player.storage.fire_new_lvxing==true){
                        game.log(player,'将获得的牌置于牌堆底');
                        if(ui.cardPile.childElementCount==1||player==event.target){
                            player.draw(num);
                        }
                        else{
                            game.asyncDraw([player,target],null,null);
                        }
                    }
                    else if(player.storage.fire_new_lvxing!=true){
                        game.log(player,'将获得的牌置于牌堆顶');
                        if(ui.cardPile.childElementCount==1||player==event.target){
                            player.draw('bottom',num);
                        }
                        else{
                            game.asyncDraw([player,target],null,null,true);
                        }
                    }
        
      
        
        
    },
                ai:{
                    order:1,
                    threaten:1.5,
                    result:{
                        player:1,
                    },
                },
                "_priority":800,
            },
            "fire_canyun":{
                audio:"ext:守林人:2",
                chargeSkill:true,
                group:"fire_canyun_backflow",
                contentAfter:function(){
                    player.removeMark('charge',1);
                },
                discard:false,
                lose:false,
                delay:0,
                subSkill:{
                    backflow:{
                        preHidden:true,
                        forced:true,
                        trigger:{
                            player:["gainAfter","enterGame"],
                            global:["phaseBefore"],
                        },
                        locked:false,
                        filter:function(event,player){
                            if(player.countMark('charge')>=4) return false;
                            //var evt=event.getParent('phaseDraw');
                                //if(evt&&evt.name=='phaseDraw') return false;
                        if(player==_status.currentPhase)return false;
                            if(event.getParent().name=='draw') return true;
                            return (event.name!='phase'||game.phaseNumber==0);
                        },
                        content:function(){

                            player.addMark('charge',1);
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                enable:"chooseToUse",
                selectCard:1,
                filterCard:true,
                position:"h",
                hiddenCard:function(player,name){
                    if(name=='jiu') return player.hasMark('charge');
                    return false;
                },
                filter:function(event,player){
                    return player.getExpansions('fire_trap').length<10&&player.countCards('h')>0&&event.filterCard({name:'jiu',isCard:true},player,event)&&player.hasMark('charge');
                },
                content:function(){
                    'step 0'
                    player.addToExpansion(cards,'giveAuto',player).gaintag.add('fire_trap');
                    player.addSkill('fire_trap')
                    'step 1'
                    if(_status.event.getParent(2).type=='dying'){
                        event.dying=player;
                        event.type='dying';
                    }
                    player.useCard({name:'jiu',isCard:true},player);
                },
                ai:{
                    order:5,
                    result:{
                        player:function(player){
                            if(_status.event.parent.name=='phaseUse'){
                                if(player.countCards('h','jiu')>0) return 0;
                                if(player.getEquip('zhuge')&&player.countCards('h','sha')>1) return 0;
                                if(!player.countCards('h','sha')) return 0;
                                var targets=[];
                                var target;
                                var players=game.filterPlayer();
                                for(var i=0;i<players.length;i++){
                                    if(get.attitude(player,players[i])<0){
                                        if(player.canUse('sha',players[i],true,true)){
                                            targets.push(players[i]);
                                        }
                                    }
                                }
                                if(targets.length){
                                    target=targets[0];
                                }
                                else{
                                    return 0;
                                }
                                var num=get.effect(target,{name:'sha'},player,player);
                                for(var i=1;i<targets.length;i++){
                                    var num2=get.effect(targets[i],{name:'sha'},player,player);
                                    if(num2>num){
                                        target=targets[i];
                                        num=num2;
                                    }
                                }
                                if(num<=0) return 0;
                                var e2=target.getEquip(2);
                                if(e2){
                                    if(e2.name=='tengjia'){
                                        if(!player.countCards('h',{name:'sha',nature:'fire'})&&!player.getEquip('zhuque')) return 0;
                                    }
                                    if(e2.name=='renwang'){
                                        if(!player.countCards('h',{name:'sha',color:'red'})) return 0;
                                    }
                                    if(e2.name=='baiyin') return 0;
                                }
                                if(player.getEquip('guanshi')&&player.countCards('he')>2) return 1;
                                return target.countCards('h')>3?0:1;
                            }
                            if(player==_status.event.dying||player.isTurnedOver()) return 3;
                        },
                    },
                    effect:{
                        target:function(card,player,target){
                            if(card.name=='guiyoujie') return [0,0.5];
                            if(target.isTurnedOver()){
                                if(get.tag(card,'damage')){
                                    if(player.hasSkillTag('jueqing',false,target)) return [1,-2];
                                    if(target.hp==1) return;
                                    return [1,target.countCards('h')/2];
                                }
                            }
                        },
                    },
                },
                "_priority":0,
            },
            "fire_chunyu":{
                filter:function(event,player,card){
                            var hand = player.countCards('h')
        var cardx = player.getExpansions('fire_trap')
        if(player==_status.currentPhase)return false;
        if(player.countCards('h')>cardx.length)return false
                for(var i=0;i<event.cards.length;i++){
            if(event.cards[i].original=='h') 
            return event.player==player;
        }
        if(player.classList.contains('turnedover')) return false;
    },
                trigger:{
                    player:"loseAfter",
                    global:"loseAsyncAfter",
                },
                content:function(){
                    var cards=player.getExpansions('fire_trap');
        
        
        "step 0"
        if(cards.length) {
          player.storage.num=cards.length
            player.gain(cards,'draw');       
            player.draw(cards.length);
            player.turnOver();
        }
        else{event.finish()}

    },
                ai:{
                    noh:true,
                    skillTagFilter:function(player,tag){
            if(tag=='noh'){
                if(player.countCards('h')!=1) return false;
            }
        },
                },
                "_priority":0,
            },
            "fire_shixuan":{
                trigger:{
                    global:"phaseDrawAfter",
                },
				forced:true,
				charlotte:true,
                check:function(event,player){
                    return get.attitude(player,event.player)<0
                },
                filter:function(event,player){
					if(get.distance(player,event.player)>1) return false;				
                    return event.player.getCards('h').length>0;
                },
                content:function(){
                "step 0"
                trigger.player.chooseCard('hes',1,{color:'red'})
                "step 1"
                if(result.bool)
                {
                    player.addToExpansion(result.cards,'gain2').gaintag.add('fire_trap');
                    player.addSkill('fire_trap')
                }
                else
                {
                    trigger.player.turnOver();
                }        
                },
                sub:true,
                "_priority":0,
            },
            "fire_test_shixuan":{
                forced:true,
                charlotte:true,
                init:(player)=>{
                    game.addGlobalSkill("fire_shixuan_poetry");
                },
                onremove:(player)=>{
                    if(!game.hasPlayer(current=>current.hasSkill('fire_shixuan'),true)) 
                    {
                        game.removeGlobalSkill("fire_shixuan_poetry")
                    }
                },
                subSkill:{
                    poetry:{
                        forced:true,
                        charlotte:true,
                        locked:true,
                        trigger:{
                            player:"phaseDrawAfter",
                        },
                        filter:function(event,player){
                        if(player.hasSkill('fire_shixuan'))return false;
                        return true
                    },
                        content:function(){
                        "step 0"
                        player.chooseCard('hes',1,{color:'red'})
                        "step 1"
                        var target=game.filterPlayer(function(current){
                            return current.hasSkill('fire_shixuan')
                        })
                        if(result.bool)
                        {
                            event.target=target;                            
                            player.give(result.cards,event.target);
                        }
                        else
                        {
                            player.turnOver();
                        }        
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    player:"phaseDrawAfter",
                },
                filter:function(){
                    return player.getExpansions('fire_trap').length>0;
                },
                content:function(){
                    var num=player.getExpansions('fire_trap').length
                    "step 0"
                    player.chooseCardTarget({
                        prompt:'是否选择'+num+'个目标各一张牌？',
                        filterCard:true,
                        selectCard:1,
                        position:'hes',
                        discard:false,
                        filterTarget:function(card,player,target){
                            return target!=player;
                        },
                        selectTarget:num,
                        ai:function(target){
                            var card=ui.selected.cards[0];
                            return get.value(card,target)*get.attitude(_status.event.player,target);
                        },
                    });
        "step 1"
        if(result.bool&&result.targets.length){
            var target=event.targets.shift();
            event.target=target;
            player.give(result.cards,event.target);
            event.card=result.cards[0];
            player.line(result.targets,'green');
            
            game.delay();
        }
        else{
            var target=game.filterPlayer()
            
            targets.forEach(function (target) {
            target.turnOver();
           })
            }
        },
                "_priority":0,
            },
            "fire_manshu":{
                usable:1,
                forced:true,
                filter:function (event,player){
        var ext = player.getExpansions('fire_trap').length
        var hands = event.player.countCards('h')
        if (event.player==undefined)return false
        if(event.player==player)return false
        if(ext==0)return false
        return hands!=ext;
    },
                trigger:{
                    target:"useCardToTargeted",
                },
                priority:9,
                audio:"fire_manshu",
                content:function (){
        var hands = trigger.player.countCards('h')
        var ext=player.getExpansions('fire_trap').length
        var cards=player.getExpansions('fire_trap')
        var targets=game.filterPlayer()
                "step 0"
                game.log(hands)
                if(hands>ext&&ext!=0){
                player.logSkill('fire_manshu');               
                player.insertPhase();                    
                }
                else if(hands<ext&&ext!=0)
                {
                targets.forEach(function (target) {
                target.link(false);
                target.turnOver(false);
                })                
                trigger.player.gain(cards,'draw')
                }
    },
	                        ai:{
                            effect:function(card,player,target){
                        if(player==target) return;
                        var hands = player.countCards('h')
                        var ext=target.getExpansions('fire_trap').length
                        if(ext>hands){
                                if(get.tag(card,'damage')){
                                    if(ext<3||target.hp<=2) return 0.8;
                                }
                                return [1,-ext];
                        }
                        else if(ext<hands){
                            return [0.5,0.5];
                        }
                    },
                        },
                "_priority":900,
            },
            "fire_konggu":{
                priority:9,
                forced:true,
                filter:function (event,player){
        return get.type(event.card)=='trick'&&event.targets&&event.targets.length>1&&player.getCards('h').length==0;
    },
                check:function (event,player){
        return get.tag(event.card,'multineg')||get.effect(player,event.card,event.player,player)<=0;
    },
                trigger:{
                    target:"useCardToBefore",
                },
                content:function (){
        trigger.cancel();
    },
                ai:{
                    noh:true,
                    skillTagFilter:function(player,tag){
            if(tag=='noh'){
                if(player.countCards('h')!=1) return false;
            }                    
                    },
                    effect:{
                        target:function (player,card){
                if(get.type(card)!='trick') return;
                if(card.name=='tiesuo') return [0,0];
                if(card.name=='yihuajiemu') return [0,1];
                if(get.tag(card,'multineg')) return [0,2];
                else return;
            },
                    },
                },
                "_priority":900,
            },
            "fire_zhifou":{
                trigger:{
                    player:"phaseUseEnd",
                },
                check:function(event,player){
                var num=player.countCards('h',{name:'sha'})+player.countCards('h',{name:'shan'})
                    //if(num>1)return false;
                    return player.hasSha()||player.hasShan();
                },
                filter:function(event,player,card){
                    if(player.getCards('h').length==0)return false;
                    return player.hasSha()||player.hasShan();
                },
                content:function(){
                    var num=player.countCards('h',{name:'sha'})+player.countCards('h',{name:'shan'})
                    "step 0"
					if(num!=0)
                    player.chooseCardTarget({
            prompt:get.prompt('fire_zhifou'),
            prompt2:"将所有【杀】或【闪】视为一张指定等量目标的【桃园结义】使用",
            filterCard:function(card,player){
                return get.name(card)=='sha'||get.name(card)=='shan'
            },
            position:'hs',
            filterTarget:function(card,player,target){
                return player.canUse({name:'taoyuan'},target);
            },
            selectCard:num,
            selectTarget:num,
            ai1:function(card){
                return 8-get.value(card);
            },
            ai2:function(target){
                return get.effect(target,{name:'taoyuan'},_status.event.player);
            },
        })
        "step 1"
        if(result.bool){
            player.logSkill('fire_konggu',result.targets);
            player.useCard(result.cards,{name:'taoyuan',isCard:true},result.targets,false);
        
        }                
                },
                "_priority":0,
            },
            "fire_test":{
                "_priority":0,
                trigger:{
                    global:"phaseBefore",
                    player:"enterGame",
                },
                forced:true,
                locked:false,
                filter:function(event,player){
                    return event.name!='phase'||game.phaseNumber==0;
                },
                content:function(){
                for(var i=0;i<1;i++){
                    player.gain(game.createCard2('fire_originium','spade',1),'gain2');
                }
                for(var i=0;i<1;i++){
                    player.gain(game.createCard2('zhuge','diamond',1),'gain2');
                }
                for(var i=0;i<1;i++){
                    player.gain(game.createCard2('tao','heart',1),'gain2');
                }
                for(var i=0;i<1;i++){
                    player.gain(game.createCard2('sha','club',1),'gain2');
                }
                for(var i=0;i<1;i++){
                    player.gain(game.createCard2('sha','club',1),'gain2');
                }
                for(var i=0;i<1;i++){
                    player.gain(game.createCard2('sha','club',1),'gain2');
                }				
                },
            },
            "fire_new_zhixing":{
                audio:"fire_zhixing",
                trigger:{
                    player:"useCardToPlayered",
                },
                check:function(event,player){
                    if(get.damageEffect(event.target,player,event.target)>=0) return false;
                    return get.attitude(player,event.target)<0&&player.isDamaged()||get.attitude(player,event.target)>0;
                },
                filter:function(event,player){
                    return event.card&&event.card.name=='sha'&&event.target.getCards('e').length>0;
                },
                content:function(){
                    "step 0"
                    trigger.targets.remove(trigger.target);
            trigger.getParent().triggeredTargets2.remove(trigger.target);
            trigger.untrigger();
            trigger.finish();
                    "step 1"
                    if(trigger.target.countDiscardableCards(player,'e')){
                        player.line(trigger.target);
                        player.discardPlayerCard('e',trigger.target,true);
                    }
                    "step 2"
                    player.recover()
                    player.addTempSkill('fire_new_zhixing_add','phaseUseAfter');
                    player.addMark('fire_new_zhixing_add',1,false);
                    player.markSkill('fire_new_zhixing_add');
                },
                subSkill:{
                    add:{
                        charlotte:true,
                        marktext:"知",
                        onremove:true,
                        intro:{
                            content:"本阶段使用杀次数上限+$",
                        },
                        mod:{
                            cardUsable:function(card,player,num){
                                if(card.name=='sha') return num+player.countMark('fire_new_zhixing_add');
                            },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_re_zhanhou":{
                audio:"fire_zhanhou",
                subSkill:{
                    phaseoff:{
                        charlotte:true,
                        mark:true,
                        marktext:"战",
                        intro:{
                            name:"战吼",
                            content:"白帝圣剑华夏第一剑御剑跟着我",
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                trigger:{
                    global:"useCardToTarget",
                },
                priority:15,
                filter:function(event,player){
        if(event.target.hasSkill('fire_re_zhanhou_phaseoff')) return false
        //if(event.nature)return false;
		if(event.target==player)return false;
        return (event.card.name=='sha')&&
            //get.distance(player,event.targets[0])<=1&&
			player.inRange(event.target)&&
            event.targets.length==1;
    },
                direct:true,
                content:function(){
        "step 0"
        player.draw();
        trigger.target.addTempSkill('fire_re_zhanhou_phaseoff',{global:'phaseBegin'})
        var effect=0;
        for(var i=0;i<trigger.targets.length;i++){
            effect+=get.effect(trigger.targets[i],trigger.card,trigger.player,player);
        }
        var str='战吼：是否打出一张杀抵消'+get.translation(trigger.player);
        if(trigger.targets&&trigger.targets.length){
            str+='对'+get.translation(trigger.targets);
        }
        str+='的'+get.translation(trigger.card)+'并使使用者横置？';
        var next=player.chooseToRespond({name:'sha'},str);
        
        next.ai=function(card){
            if(effect<0){
                return 9-get.value(card);
            }
            return -1;
        }
        next.autodelay=true;
        next.logSkill=['fire_zhanhou',trigger.targets];
        "step 1"
        if(result.bool){
            trigger.getParent().excluded.add(trigger.target);
            trigger.player.link(true);

        }
    },
                ai:{
                    threaten:1.5,
                    expose:0.2,
                },
                "_priority":1500,
            },
            "fire_new_re_zhixing":{
                audio:"fire_zhixing",
                trigger:{
                    player:["useCard","respond"],
                },
                filter:function(event,player){
                    if(game.hasPlayer(function(current){
                            return current.countDiscardableCards(player,'e')>0;
                        }))return event.card&&get.name(event.card)=='sha';
                        
                        //&&get.type(event.card)=='basic';
                },
                content:function(){
                    "step 0"
                    if(game.hasPlayer(function(current){
                            return current.countDiscardableCards(player,'e')>0;
                        }))
                     player.chooseTarget('弃置一名角色装备区内的一张牌',function(card,player,target){
                            return player.inRange(target)&&target.countCards('e')>0;
                        },false).set('ai',function(target){
                            var player=_status.event.player;
                            var att=get.attitude(player,target);
                            if(att<0){
                                att=-Math.sqrt(-att);
                            }
                            else{
                                att=Math.sqrt(att);
                            }
                            return att*lib.card.guohe.ai.result.target(player,target);
                        });
                    "step 1"
                    if(result.bool){
                        var target=result.targets[0];
                        player.line(target,'green');
                    player.discardPlayerCard(target,'e',true);
                    player.recover();
                    player.addTempSkill('fire_new_re_zhixing_add','phaseUseAfter');
                    player.addMark('fire_new_re_zhixing_add',1,false);
                    player.markSkill('fire_new_re_zhixing_add');
                    target.recover();
                    target.addTempSkill('fire_new_re_zhixing_add','phaseUseAfter');
                    target.addMark('fire_new_re_zhixing_add',1,false);
                    target.markSkill('fire_new_re_zhixing_add');
                    }
                },
                subSkill:{
                    add:{
                        charlotte:true,
                        marktext:"知",
                        onremove:true,
                        intro:{
                            content:"本阶段使用杀次数上限+$",
                        },
                        mod:{
                            cardUsable:function(card,player,num){
                                if(card.name=='sha') return num+player.countMark('fire_new_re_zhixing_add');
                            },
                        },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_new_soufeng":{
                forced:true,
                trigger:{
                    source:"damageBegin2",
                },
                filter:function(event,player){
        return event.player&&event.player.isIn()&&event.player.hujia;
    },
                content:function(){
           
                trigger.num++;
            
    },
                subSkill:{
                    benzhuo:{
                        forced:true,
                        trigger:{
                            player:"damageBegin3",
                        },
                        filter:function(event,player){                    
        if(event.nature=='thunder') return true;
    },
                        content:function(){
                trigger.cancel()
                player.turnOver()
            
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                group:"fire_new_soufeng_benzhuo",
                "_priority":0,
            },
            "fire_new_re_soufeng":{
                forced:true,
                trigger:{
                    source:"damageBegin2",
                },
                filter:function(event,player){
                    if( get.name(event.card) != 'sha') return false; 
        return event.player&&event.player.isIn()&&event.player.hujia;
    },
                content:function(){
           
                trigger.num++;
            
    },
                subSkill:{
                    benzhuo:{
                        forced:true,
                        trigger:{
                            player:"damageBegin3",
                        },
                        filter:function(event,player){
        if( get.name(event.card) != 'sha') return false; 
        if(event.nature=='thunder') return true;
    },
                        content:function(){
           
                trigger.num++;
            
    },
                        sub:true,
                        "_priority":0,
                    },
                },
                group:"fire_new_re_soufeng_benzhuo",
                "_priority":0,
            },
            "fire_re_tuanhuo":{
                audio:"fire_tuanhuo",
                zhuSkill:true,
                trigger:{
                    global:"shaBegin",
                },
                check:function(event,player){
        return((get.attitude(player,event.player)-get.attitude(player,event.target))>0)&&player.hp>3;
    },
                filter:function(event, player) {
        // 判断source是不是ursus势力的角色且不是主公自己
        if(!player.hasZhuSkill('fire_tuanhuo')) return false;
        return event.player && event.player.group == 'ursus'
            &&event.player!=player&&event.player!=player
            &&event.player!=event.player;
    },
                content:function() {
        // 如果主公选择发动技能效果
  
            // 横置目标和主公
            trigger.target.link(true);
            player.link(true);
        
    },
                ai:{
                    order:9,
                    result:{
                        player:function(player,target){
                if(get.attitude(player,target)<0&&player.hp>2){
                    return 2;
                }
                return 0;
            },
                        threaten:2,
                    },
                },
                "_priority":0,
            },
            "fire_anxiang":{
                direct:true,
                trigger:{
                    global:"damageBegin4",
                },
				filter:function(event,player){
		        return get.distance(player,event.player)<=1&&event.player!=player;			
				},
                forced:true,
                content:function(){           
                player.draw()
                trigger.player.draw()
                },
                "_priority":0,
            },
            "fire_jingshao":{
                forced:true,
                audio:"fire_jingshao",
                trigger:{
                    global:["useCard","respond"],
                },
                filter:function(event,player){
					if(get.distance(player,event.player)>1) return false;
                    if(event.player==player)return false;
                    return event.card&&get.name(event.card)=='shan';                  
                },
                content:function(){
                    player.draw();
                    trigger.player.draw();
                },
                "_priority":0,
            },
            "fire_jianshou":{
                audio:"ext:守林人:2",
                audioname:["fire_jianshou"],
                trigger:{
                    global:["chooseToRespondBefore","chooseToUseBefore"],
                },
                filter:function(event,player){
                    if(event.responded) return false;
                    if(event.player==player) return false;
                    if(!event.filterCard({name:'shan'},player,event)) return false;
                    return player.hasShan()
                },
                check:function(event,player){
                    return get.attitude(player,event.player)>0;
                },
                content:function(){
                    "step 0"
                            var next=player.chooseToRespond('是否替'+get.translation(trigger.player)+'打出一张闪？',{name:'shan'});
                            next.set('ai',function(){
                                var event=_status.event;
                                return (get.attitude(player,event.player));
                            });
                            next.set('skillwarn','替'+get.translation(trigger.player)+'打出一张闪');
                            next.autochoose=lib.filter.autoRespondShan;
                            next.set('source',player);                    
                    "step 1"
                    if(result.bool){
                        event.finish();
                        trigger.result={bool:true,card:{name:'shan',isCard:true}};
                        trigger.responded=true;
                        trigger.animate=false;
                        if(typeof player.ai.shown=='number'&&player.ai.shown<0.95){
                            player.ai.shown+=0.3;
                            if(player.ai.shown>0.95) player.ai.shown=0.95;
                        }
                    }
                    else{
                        event.finish();
                    }
                },
                ai:{
					expose:0.2,
                    respondShan:true,
					threaten:1.4,
                },
                "_priority":0,
            },
            "fire_huanying":{
                priority:9,
                forced:true,
                filter:function (event,player){
        if(event.target==player)return false;
        return get.type(event.card)=='trick'&&event.targets&&event.targets.length>1&&player.getCards('h').length>0;
    },
                check:function (event,player){
        return get.tag(event.card,'multineg')||get.effect(event.target,event.card,event.player,player)<=0;
    },
                trigger:{
                    global:"useCardToTargeted",
                },
                content:function (){
        "step 0"
        player.chooseToDiscard('请选择弃置一张手牌令'+get.translation(trigger.card)+'对'+get.translation(trigger.target)+'无效并令你获得一点护甲','h',1).set('ai',function(card){
           
            return get.unuseful(card)+2.5*(5-get.player(card).hp);
        });
        "step 1"
        if(result.bool)
        {
            trigger.getParent().excluded.add(trigger.target);
            player.changeHujia();
        }
    },
                ai:{
                    noh:true,
                    effect:{
                        target:function (player,card){
                if(get.type(card)!='trick') return;
                if(card.name=='tiesuo') return [0,0];
                if(card.name=='yihuajiemu') return [0,1];
                if(get.tag(card,'multineg')) return [0,2];
                else return;
            },
                    },
                },
                "_priority":0,
            },
            "fire_tideng":{
				derivation:"fire_huli",
                skillAnimation:true,
                animationColor:"water",
                audio:"ext:守林人:2",
                audioname:["fire_tideng"],
                unique:true,
                limited:true,
                mark:true,
                init:function(player){
                    player.storage.fire_tideng=false;
                },
                enable:"phaseUse",
                filter:function(event,player){
                    if(!player.hujia) return false;
                    return !player.storage.fire_tideng;
                },
                intro:{
                    content:"limited",
                },
                filterTarget:function(event,player,target){return target!=player},
                selectTarget:function(event,player){
                var player = _status.event.player
                var hu = player.hujia
                return [1,hu]
                },
                multiline:true,
                multitarget:true,
                content:function(){
                var hu=trugger.target.length
                "step 0"
                player.awakenSkill('fire_tideng');
                player.storage.fire_tideng=true;
                "step 1"
                targets.sortBySeat();
                player.changeHujia(-hu)
                for(var i of targets) i.changeHujia(1);        
                player.addSkill('fire_huli')                    
                },
                ai:{
                    order:5,
                },
                "_priority":0,
            },
            "fire_huli":{
                forced:true,
                charlotte:true,
                init:(player)=>{
                    game.addGlobalSkill("fire_huli_ttk");
                    game.addGlobalSkill("fire_huli_help")
                    game.addGlobalSkill("fire_huli_noway");
                },
                onremove:(player)=>{
                    if(!game.hasPlayer(current=>current.hasSkill('fire_huli'),true)) 
                    {
                        game.removeGlobalSkill("fire_huli_ttk")
                        game.removeGlobalSkill("fire_huli_help");
                        game.removeGlobalSkill("fire_huli_noway");
                    }
                },
                subSkill:{
                    ttk:{
                        intro:{
                            content:"使用牌无距离和次数限制",
                        },
                        mod:{
                            targetInRange:()=>true,
                            cardUsable:function(card,player,num){
								if(player.hujia){
                    if(game.hasPlayer(current=>current.hasSkill('fire_huli'),true)){
                        return Infinity;
                    }
								}
                    },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    help:{
                        trigger:{
                            player:"damageBefore",
                        },
                        filter:function(event,player){
					
                    if(event.nature) return player.hujia;
                },
                        forced:true,
                        content:function(){
                    trigger.cancel();
                },
                        ai:{
                            nofire:true,
                            nothunder:true,
                            effect:{
                                target:function(card,player,target,current){
									if(target.hujia){
                            if(card.name=='tiesuo'||get.tag(card,'natureDamage')) return 'zeroplayertarget';
									}
						},
                            },
                        },
                        sub:true,
                        "_priority":0,
                    },
                    noway:{
                        trigger:{
                            player:"phaseUseEnd",
                        },
                        forced:true,
                        audio:false,
                        charlotte:true,
                        filter:function(event,player){
                    return player.hujia;
                },
                        content:function(){
                        var current=game.filterPlayer(current => current.hasSkill("fire_huli"))
                        "step 0"
                        if(player.getCards(1,'h').length>0){
                        player.chooseCard(1,'h',true).set('ai',function(card,player,target){})
                        }
                        "step 1"
                        if(result.bool)
                        {
                        player.give(result.cards,current)
                        }
                        current.loseHp();
                },
                        sub:true,
                        "_priority":0,
                    },
                },
                "_priority":0,
            },
            "fire_originium2":{
                popname:false,
                charlotte:true,
                silent:true,
                forced:true,
                subSkill:{
                    heart:{
                        forced:true,
                        charlotte:true,
                        intro:{
                            content:"体力上限加1",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    "heart2":{
                        forced:true,
                        charlotte:true,
                        intro:{
                            content:"体力上限加2，流失1点体力",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    spade:{
                        forced:true,
                        charlotte:true,
                        intro:{
                            content:"废除武器栏，回复2点体力",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    "spade2":{
                        forced:true,
                        charlotte:true,
                        intro:{
                            content:"废除防具栏，回复2点体力",
                        },
                        sub:true,
                        "_priority":0,
                    },
                    diamond:{
                        forced:true,
                        charlotte:true,
                        intro:{
                            content:"锁定技，手牌上限减1，摸牌阶段，你多摸一张牌。",
                        },
                        mark:true,
                        marktext:"贪",
                        mod:{
                            maxHandcard:function (player,num){    
                    return num-1;
                },
                        },
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        content:function () {
        
       trigger.num+=1;
    },
                        "_priority":0,
                        sub:true,
                    },
                    "diamond2":{
                        forced:true,
                        charlotte:true,
                        intro:{
                            content:"锁定技，手牌上限始终为0，摸牌阶段，你多摸X张牌（X为你的体力值）。",
                        },
                        mark:true,
                        marktext:"痴",
                        mod:{
                            maxHandcard:function (player,num){    
                    return num==0;
                },
                        },
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        content:function () {
        var max=player.hp
       trigger.num+=max;
    },
                        "_priority":0,
                        sub:true,
                    },
                    club:{
                        forced:true,
                        charlotte:true,
                        intro:{
                            content:"锁定技，摸牌阶段，你获得一张【影】，你所有的【影】均视为【杀】。",
                        },
                        mark:true,
                        marktext:"嗔",
                        mod:{
                            cardname:function (card,player){    
                        if(card.name=='ying') return 'sha';
                },
                        },
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        content:function () {
           player.gain(lib.card.ying.getYing(1),'gain2');
    },
                        "_priority":0,
                        sub:true,
                    },
                    "club2":{
                        forced:true,
                        charlotte:true,
                        intro:{
                            content:"锁定技，摸牌阶段，你流失1点体力并获得一张【影】，你所有的【影】均视为【酒】。",
                        },
                        mark:true,
                        marktext:"疯",
                        mod:{
                            cardname:function (card,player){    
                        if(card.name=='ying') return 'jiu';
                },
                        },
                        trigger:{
                            player:"phaseDrawBegin",
                        },
                        content:function () {
            player.loseHp();
           player.gain(lib.card.ying.getYing(1),'gain2');
    },
                        "_priority":0,
                        sub:true,
                    },
                },
                "_priority":3,
                popup:false,
            },
            "fire_change":{
                marktext:"病",
                popname:false,
                charlotte:true,
                intro:{
                    content:"病变",
                },
                "_priority":0,
            },
            "du_originium":{
                trigger:{
                    player:["loseAfter","compare"],
                    global:["equipAfter","addJudgeAfter","gainAfter","loseAsyncAfter","addToExpansionAfter"],
                    target:"compare",
                },
                cardSkill:true,
                filter:function(event,player,name){
                    if(name=='compare'){
                        if(player==event.player){
                            if(event.iwhile>0) return false;
                            return event.card1.name=='fire_originium';
                        }
                        return event.card2.name=='fire_originium';
                    }
                    if(event.name!='equip'&&event.name!='addJudge'&&!event.visible) return false;
                    var evt=event.getl(player);
                    if(!evt||!evt.hs||!evt.hs.filter(function(i){
                        return get.name(i,player)=='fire_originium';
                    }).length) return false;
                    return true;
                },
                forced:true,
                charlotte:true,
                popup:false,
                content:function(){
                    'step 0'
                    if(trigger.delay===false) game.delayx();
                    'step 1'
                    game.log(player,'触发了','#g【石】','的效果');
                    var num=1;
                    if(typeof trigger.getl=='function'){
                        num=trigger.getl(player).hs.filter(function(i){
                            return get.name(i,player)=='fire_originium';
                        }).length;
                    }
                    player.loseHp(num).type='du';
                },
                "_priority":2,
            },
            "fire_moji":{
                trigger:{
                    player:"turnOverAfter",
                },
                forced:true,
                filter:function(event,player){
                    return !player.isTurnedOver()&&player.isDamaged();
                },
                content:function(){
                    player.recover();
                },
                mod:{
                    targetEnabled:function(card,player,target,now){
                        if(target.isTurnedOver()){
                            if(get.tag(card,'damage')){
									if(player.hp<=target.hp){
										return false
                                    }
                                
                            }
        
                        }
                    },
                },
                audio:"fire_moji",
				ai:{
                    threaten:function(player,target){     
            if(target.isTurnedOver()&&player.hp<=target.hp) return 0;
			if(player.hp>target.hp) return 1.5
        },					
				},
                "_priority":0,
            },
            "fire_baizhi":{
                usable:1,
                subSkill:{
                    "effect1":{
                        audio:0,
                        silent:true,
                        forced:true,
                        charlotte:true,
                        trigger:{
                            player:"useCard",
                        },
                        filter:function(event,player){
		//if(event.getParent(4).name!='fire_baizhi') return false;        
        if( get.name(event.card) == 'sha' &&get.nature(event.card)=='stab'&& event.card.isCard) return true; 
    },
                        content:function(){
                if(!trigger.card.storage)
        trigger.card.storage={};
        trigger.card.storage.fire_baizhi=true;
        trigger.baseDamage++;   
            },
                        sub:true,
                        popup:false,
                        "_priority":1,
                    },
                },
                audio:"fire_baizhi",
				check:function(event,player){
					return player.countCards('h')>=2||player.hp<2;
				},
                trigger:{
                    player:["recoverEnd","useCardEnd"]
                },
				filter:function(event,player){
					if(event.name=="useCard") return event.card.name=='jiu';
					else if(event.name!="useCard") return event.num>0
				},
                content:function(){    
                'step 0'
                player.turnOver();
                player.addTempSkill('fire_baizhi_effect1','shaAfter');  
                'step 1'
                if(trigger.delay==false) game.delay();
                'step 2'
				player.chooseCardTarget({
                        prompt:'将一张相同颜色的手牌当做刺【杀】使用。',
				filterCard:function(card){
					if(ui.selected.cards.length){
						return get.color(card)==get.color(ui.selected.cards[0]);
					}
					return true;
				},
				complexCard:true,
                        selectCard:2,
                        position:'hs',
                        discard:false,
                        filterTarget:function(card,player,target){
                            return player.canUse({name:'sha',nature:'stab'},target,false,'nodistance');
                        },
                        selectTarget:1,
	            ai1:function(card){
                return 10-get.value(card);
            },
            ai2:function(target){
                return get.effect(target,{name:'sha',nature:'stab'},_status.event.player);
            },
                    });
        'step 3'
       if(result.bool)
       {player.line(result.targets);
        player.useCard(result.cards,{name:'sha',isCard:true,nature:'stab'},result.targets,true);
       }

    },
                "_priority":0,
            },
        },
        translate:{
            "fire_old_youlin":"幽林",
            "fire_old_youlin_info":"「<font color=#757F60>暗杀之影</font>」<br><li>锁定技，回合结束时，若你本回合未造成过伤害，则你摸一张牌。",
            "fire_youlin":"幽林",
            "fire_youlin_info":"「<font color=#899338>林海飘荡</font>」<br><li>回合结束时或受到伤害后，你可以翻面，若你本回合造成过伤害/未造成过伤害，则你摸一张牌/视为使用一张无距离限制的刺【杀】，此【杀】对武器栏内有牌的角色造成伤害+1。",
            "fire_new_youlin":"幽林",
            "fire_new_youlin_info":"「<font color=#899338>林海飘荡</font>」<br><li>回合结束时，若你于本回合的出牌阶段未使用或打出过伤害类牌，则可以视为使用一张无距离限制的刺【杀】，造成伤害后若目标角色存活，你将武将牌翻面。",
            "fire_ranlie":"燃烈",
            "fire_ranlie_info":"「<font color=#CC7D12>山雷惊火</font>」<br><li>你可以将一张【杀】当作【过河拆桥】使用。",
            "fire_henhuo2":"火",
            "fire_henhuo2_info":"锁定技，你的手牌上限-1；当你回复体力后，则你失去“火”标记；锁定技，失去此技能时流失1点体力。",
            "fire_kugu":"枯骨",
            "fire_kugu_info":"「<font color=#899338>骨冢还乡</font>」<br><li>锁定技，当你对拥有“火”标记的一名其他角色造成伤害时/当你进入濒死状态时，移去其“火”标记/移去所有“火”标记，令失去“火”标记的角色立即流失1点体力。",
            "fire_henhuo":"恨火",
            "fire_henhuo_info":"「<font color=#899338>幽愁暗恨</font>」<br><li>当你受到/造成伤害前，你可以令没有“火”标记的伤害来源/目标获得一枚“火”标记，然后失去1点体力并取消此伤害。",
            "fire_fuxue":"覆血",
            "fire_fuxue_info":"「<font color=#899338>以血洗血</font>」<br><li>锁定技，当你受到伤害后，你令伤害来源需弃两张手牌，否则你将武将牌翻面并获得〖覆雪〗直到下回合开始。",
            "fire_new_fuxue":"覆血",
            "fire_new_fuxue_info":"「<font color=#899338>以血洗血</font>」<br><li>锁定技，当你受到一点非火焰伤害后，你令伤害来源需弃两张手牌，否则你发动一次〖幽林〗。",
            "fire_old_soufeng":"蒐风",
            "fire_old_soufeng_info":"「<font color=#439C6A>聆风遐迩</font>」<br><li>锁定技，当你受到雷电伤害时，你将武将牌翻面；当你使用【杀】指定一名角色为目标后进行一次判定：若判定结果为红桃或黑桃，令你回复1点体力；若判定结果为方块或梅花，令你重置。",
            "fire_soufeng":"蒐风",
            "fire_soufeng_info":"「<font color=#439C6A>聆风遐迩</font>」<br><li>锁定技，当你受到非雷电【杀】或【决斗】造成的伤害后，你令伤害来源需弃置一张装备区里的装备牌，否则令你回复1点体力。",
            "fire_re_soufeng":"蒐风",
            "fire_re_soufeng_info":"「<font color=#439C6A>聆风遐迩</font>」<br><li>锁定技，当你受到其他角色的牌造成的伤害时，进行一次判定：若判定结果为红色，令你回复1点体力；若判定结果为黑色，令伤害来源弃置其装备区的一张装备牌。",
            "fire_zhixing":"知星",
            "fire_zhixing_info":"「<font color=#439C6A>解甲归心</font>」<br><li>出牌阶段限一次，你可以弃置攻击范围内的一名其他角色装备区里的一张防具牌，令你与其同时回复1点体力。",
            "fire_dunxing":"钝星",
            "fire_dunxing_info":"「<font color=#CC7D12>无名钝镝</font>」<br><li>出牌阶段限一次，你可以将一张装备区里的武器牌当作【南蛮入侵】使用，当其他角色响应你使用的【南蛮入侵】而打出的【杀】结算后，你可以获得此牌对应的实体牌。",
            "fire_yizhi":"遗志",
            "fire_yizhi_info":"「<font color=#751400>连携执法</font>」<br><li>当你受到伤害后，你可以令伤害来源横置。",
            "fire_buce":"卜测",
            "fire_buce_info":"「<font color=#DD9999>占星卜山</font>」<br><li>一名角色摸牌阶段开始时限一次，你可以弃置一张手牌来令其进行一次判定：<br>若判定结果为♥️，其回复1点体力并跳过此阶段；<br>若判定结果为♣️，其将武将牌复原并跳过此阶段；<br>若判定结果为♠️，其流失1点体力并摸两张牌；<br>若判定结果为♦️，其将武将牌翻面并摸两张牌。",
            "fire_fuxue2":"换将",
            "fire_fuxue2_info":"「<font color=#899338>林深见鹿</font>」<br><li>测试技，回合开始前，你可以选择是否转变为守林人/☆守林人形态。",
            "fire_gaosi":"告死",
            "fire_gaosi_info":"「<font color=#751400>终结连射</font>」<br><li>限定技，一名角色死亡时，你可失去〖监护〗，令其选择其武将牌上的一个技能（主公技，限定技，觉醒技，隐匿技、使命技等特殊技能除外），然后你获得其选择的技能。",
            "fire_jianhu":"监护",
            "fire_jianhu_info":"「<font color=#751400>单兵作战</font>」<br><li>锁定技，当你受到无属性伤害时，若伤害来源已横置，则其需弃置一张装备区内的牌，否则取消此伤害。",
            "fire_xianqv":"先驱",
            "fire_xianqv_info":"「<font color=#0CB3B4>承先启后</font>」<br><li>锁定技，你的回合内，其他角色不能使用或打出黑色牌；你的回合外，你不能成为【顺手牵羊】或【过河拆桥】的目标。",
            "fire_qiusheng":"求胜",
            "fire_qiusheng_info":"「<font color=#DD9999>制胜法则</font>」<br><li>你的判定牌生效前，你可以打出一张手牌代替之，然后回复1点体力。",
            "fire_femboy":"受伤",
            "fire_femboy_info":"",
            "fire_leisibian1":"蕾丝",
            "fire_leisibian1_info":"",
            "fire_zhanhou":"战吼",
            "fire_zhanhou_info":"「<font color=#AC2F2E>怒血狂焰</font>」<br><li>每回合限一次，当距离你1以内的一名角色成为【杀】或【决斗】的惟一目标时，若【杀】或【决斗】的使用者不是你，你可以打出一张【杀】抵消此【杀】并使使用者横置，然后你摸一张牌。",
            "fire_chaofeng":"嘲讽",
            "fire_chaofeng_info":"锁定技，与你相邻的角色只能选择你为出杀或决斗目标",
            "fire_chaofeng_disable":"嘲讽2",
            "fire_chaofeng_disable_info":"",
            "fire_lingxiu":"领袖",
            "fire_lingxiu_info":"「<font color=#AC2F2E>率先垂范</font>」<br><li>锁定技，结束阶段，若你没有护甲，你获得1+X点护甲，X为场上横置的角色数的一半；每当你的护甲抵消一次伤害，你摸一张牌。",
            "fire_new_lingxiu":"领袖",
            "fire_new_lingxiu_info":"「<font color=#AC2F2E>率先垂范</font>」<br><li>锁定技，横置角色的【闪】均视为【杀】，只能选择你为出杀或决斗目标。",
            "fire_shehun":"摄魂",
            "fire_shehun_info":"「<font color=#4DB09F>魂牵梦萦</font>」<br><li>当其他角色的黑【杀】因弃置而进入弃牌堆后/打出的【杀】在结算结束后，你可以获得此牌/此牌对应的所有实体牌。",
            "fire_yuzhi":"羽织",
            "fire_yuzhi_info":"「<font color=#4DB09F>羽翼渐丰</font>」<br><li>一名角色出牌阶段结束后，你可以弃置两张黑色手牌令其判定，若判定结果不为红色，其将武将牌翻面。",
            "fire_old_luling":"鹿铃",
            "fire_old_luling_info":"「<font color=#899338>深谷鹿铃</font>」<br><li>锁定技，结束阶段前，若你本回合造成过伤害/未造成过伤害，则你摸一张牌/获得〖覆雪〗直到下回合开始。",
            "fire_panbing":"攀冰",
            "fire_panbing_info":"「<font color=#AAAAAA>意行合一</font>」<br><li>当你对一名角色造成伤害前，若其没有/有“浮空”标记，你可以摸一张牌并防止此伤害，并令其获得一枚“浮空”标记/并弃置一张手牌令其失去1点体力上限。",
            "fire_zhuixue":"坠雪",
            "fire_zhuixue_info":"「<font color=#AAAAAA>雪如山崩</font>」<br><li>出牌阶段限一次，你可以弃置一张手牌，移去所有“浮空”标记，令失去“浮空”标记的角色流失1点体力。",
            "fire_fukong":"浮空",
            "fire_fukong_info":"锁定技，你和其他角色相互计算距离+1；出牌阶段结束后，若你的手牌数大于你的体力值，则你失去“浮空”标记；失去此技能时流失1点体力。",
            "fire_liechao":"裂潮",
            "fire_liechao_info":"「<font color=#CC8989>心如明镜</font>」<br><li>当你使用【决斗】对有“浮空”标记/没有“浮空”标记的角色造成伤害时，你可以令此【决斗】的伤害+1/你可以防止此伤害并令其获得一枚“浮空”标记。",
            "fire_bingzhu":"秉烛",
            "fire_bingzhu_info":"「<font color=#CC8989>秉烛铭志</font>」<br><li>出牌阶段限一次，你可以将一张【闪】或一张【杀】当作【决斗】使用。",
            "fire_bifeng":"避锋",
            "fire_bifeng_info":"「<font color=#1AAF9A>轻身无痕</font>」<br><li>锁定技，其他角色计算与你的距离+1；你的攻击范围始终为1。",
            "fire_xianshan":"显山",
            "fire_xianshan_info":"「<font color=#1AAF9A>锋鸟毕露</font>」<br><li>锁定技，当你对一名角色使用【杀】时，若你的手牌数少于你体力值，此【杀】不计入次数限制，其需打出一张【杀】，否则你对其额外造成一次伤害。",
            "fire_jianai":"坚爱",
            "fire_jianai_info":"「<font color=99A348>兼爱非攻</font>」<br><li>每回合每名角色限一次，当一名其他角色成为【杀】的惟一目标后，你可以失去1点体力令你和该角色各摸一张牌。",
            "fire_qiangxin":"强心",
            "fire_qiangxin_info":"「<font color=#D3A95F>枯泉新芽</font>」<br><li>限定技，一名已受伤的角色回合结束时，你可以令其减少X点护甲，回复X点体力，X为其护甲值。",
            "fire_yinshui":"引水",
            "fire_yinshui_info":"「<font color=#D3A95F>环流玉砌</font>」<br><li>出牌阶段限一次，你可以弃置一张【酒】，令一名攻击范围内的角色获得两点护甲。",
            "fire_yiwu":"易物",
            "fire_yiwu_info":"「<font color=#D3A95F>黠傲深兰</font>」<br><li>出牌阶段限一次，你可以与一名其他角色拼点，若你赢，则你重置〖强心〗。若你没赢，该角色与你先后从弃牌堆获得一张【酒】。",
            "fire_micai":"迷彩",
            "fire_micai_info":"锁定技，你不能成为【杀】或指定单名角色为目标的牌的目标，当你成为一张普通锦囊牌的目标时，若你是此牌的唯一目标，你令此牌对你无效。",
            "fire_yinshan":"隐山",
            "fire_yinshan_info":"「<font color=#99A348>义薄云天</font>」<br><li>锁定技，每当你失去1点体力后，你获得一点护甲。",
            "fire_jiu":"酒",
            "fire_jiu_info":"出牌阶段，对自己使用，令自己的下一张使用的【杀】造成的伤害+1（每回合限使用1次）；濒死阶段，对自己使用，回复1点体力",
            "fire_xunyi":"徇义",
            "fire_xunyi_info":"「<font color=#99A348>义重如山</font>」<br><li>限定技，当你进入濒死状态时，你可以弃置所有的牌令你的体力上限增加当前体力上限的一半，然后令你的体力调整至当前体力上限的一半并获得技能〖隐山〗。",
            "fire_xvmin":"恤民",
            "fire_xvmin_info":"「<font color=#6430A7>四瀛载舟</font>」<br><li>每轮限一次，任意一名角色出牌阶段开始时，你可以交给其手牌中的一张【酒】并令其使用之，然后其可以对另一名由你指定的其他角色使用一张【杀】。",
            "fire_fanshen":"翻身",
            "fire_fanshen_info":"「<font color=#0CB3B4>豁然冰解</font>」<br><li>出牌阶段限一次，你可以与一名已横置的其他角色将武将牌重置，若你这么做，则该角色与你各摸X张牌，X为场上横置的角色数。",
            "fire_new_fanshen":"翻身",
            "fire_new_fanshen_info":"「<font color=#0CB3B4>豁然冰解</font>」<br><li>出牌阶段限一次，你可以重置所有武将牌，若你这么做，视为使用X张【五谷丰登】，X为场上横置的角色数。",
            "fire_jiefang":"解放",
            "fire_jiefang_info":"「<font color=#6430A7>恩深似海</font>」<br><li>锁定技，你的攻击范围+1；当你使用花色为/不为♥️的【杀】对一名角色造成伤害时，其需交给你一张【杀】，否则令此伤害+1/令你回复1点体力。",
            "fire_new_jiefang":"解放",
            "fire_new_jiefang_info":"「<font color=#6430A7>恩深似海</font>」<br><li>锁定技，所有角色的攻击范围+1；所有角色的【桃】均视为【酒】；所有角色使用【酒】无次数限制。",
            "fire_old_qinfeng":"琴风",
            "fire_old_qinfeng_info":"「<font color=#899338>黯然神伤</font>」<br><li>锁定技，你的【杀】无视距离且对装备区有武器牌的角色造成伤害时，令此伤害翻倍。",
            "fire_zhencang":"珍藏",
            "fire_zhencang_info":"「<font color=#C3A354>藏龙卧虎</font>」<br><li>伏罠技，当你于摸牌阶段外获得牌时，你可以进行一次判定，将判定牌伏置。锁定技，你的手牌上限+X（X为你武将牌前罠牌的数目）。",
            "fire_trap":"罠",
            "fire_trap_info":"当你成为锦囊牌的目标后，展示一张同名罠牌令此牌无效。",
            "fieldsniper_skill":"野战狙击",
            "fieldsniper_skill_info":"锁定技，当你成为【杀】的目标后，你令使用者武器技能无效直到此【杀】被抵消或造成伤害。",
            "fieldsniper2":"野战狙击",
            "fieldsniper2_info":"",
            "bulin_skill":"捕鳞蓑",
            "bulin_skill_info":"锁定技，你防止即将受到的属性伤害。",
            "mihang_bulin":"救赎",
            "mihang_bulin_info":"锁定技，若你的防具栏内没有牌且没有被废除，则你视为装备着【捕鳞蓑】。",
            "fire_duijiao":"对焦",
            "fire_duijiao_info":"「<font color=#C3A354>照门对焦</font>」<br><li>出牌阶段，你可以将任意一张罠牌当做【过河拆桥】或【铁锁连环】使用",
            "fire_lantern_skill":"提灯",
            "fire_lantern_skill_info":"你可以将一张【闪】或【杀】当作【决斗】使用。",
            "fire_scout_skill":"狙击镜",
            "fire_scout_skill_info":"锁定技，当你因执行【杀】的效果而对目标角色造成伤害时，若其装备区内没有牌，则此伤害+1。",
            "fire_shenpan":"审判",
            "fire_shenpan_info":"「<font color=#CC8989>踏石合印</font>」<br><li>锁定技，当你使用【决斗】指定目标后，你令此牌需要依次打出两张【杀】响应",
            "fire_mihang":"迷航",
            "fire_mihang_info":"「<font color=#C3A354>星际迷航</font>」<br><li>锁定技，若你的防具栏内没有牌且没有被废除，则你视为装备着【捕鳞蓑】。",
            "fire_jiushu":"救赎",
            "fire_jiushu_info":"「<font color=#C3A354>大地惊雷</font>」<br><li>觉醒技，准备阶段，若你罠牌的数量达到5张或更多，则你失去1点体力上限并获得技能〖对焦〗和〖迷航〗。",
            "fire_shangjin":"赏金",
            "fire_shangjin_info":"「<font color=#C3A354>黄金镖客</font>」<br><li>锁定技，结束阶段，若你本回合造成过伤害/未造成过伤害，则你摸与伤害次数等量次数的牌/重铸手牌中的所有装备牌。",
            "fire_shangjin_old":"旧赏金",
            "fire_shangjin_old_info":"锁定技，你杀死一名武将后，令你摸两张牌",
            "fire_shanghe":"商合",
            "fire_shanghe_info":"「<font color=#BBC4BD>商贸纵横</font>」<br><li>出牌阶段限一次，你可以与距离1以内的一名其他角色交换一张手牌，并可以将交换来的牌交给任意一名角色，若交给其他角色，你回复1点体力。",
            "fire_daibiao":"代表",
            "fire_daibiao_info":"「<font color=#BBC4BD>提亚卡乌</font>」<br><li>摸牌阶段，你可以改为依次移动场上的两张牌。",
            "fire_baopo":"爆破",
            "fire_baopo_info":"「<font color=#299C3D>困兽之斗</font>」<br><li>你可以将一张装备区里的牌当作【万箭齐发】使用。",
            "fire_mucha":"暮察",
            "fire_mucha_info":"「<font color=#999999>默语微视</font>」<br><li>结束阶段，你获得技能〖暮时〗直到下回合开始，你摸一张牌并可以使用一张无距离限制的【杀】。",
            "fire_mushi":"暮时",
            "fire_mushi_info":"「<font color=#999999>暮时已到</font>」<br><li>锁定技，你对其他角色造成伤害后，进行一次判定，若为♥️/不为♥️，视为你使用一张无距离限制的【杀】/你摸一张牌。",
            "fire_juqian":"距遣",
            "fire_juqian_info":"「<font color=#C381D2>遣狱之化</font>」<br><li>每轮限一次，当一名角色结束阶段，你令其可以对另一名由你指定的其他角色使用一张无距离限制的【杀】。",
            "fire_suya":"肃雅",
            "fire_suya_info":"「<font color=#C381D2>肃心逮逮</font>」<br><li>当一名其他角色回复体力后，你可以摸一张牌，然后对其使用一张【杀】。",
            "fire_bingyan":"冰焰",
            "fire_bingyan_info":"「<font color=#192CCD>巫泪檀木</font>」<br><li>限定技，当一名角色回合开始时，若你已横置或背面朝上，你可以复原场上所有武将牌并修改〖祀雪〗，然后对所有角色造成一点寒冰伤害。",
            "fire_old_bingyan":"冰焰",
            "fire_old_bingyan_info":"「<font color=#192CCD>巫泪檀木</font>」<br><li>",
            "fire_sixue":"祀雪",
            "fire_sixue_info":"「<font color=#192CCD>累业如雪</font>」<br><li>当有角色受到其他角色造成的属性伤害后，你可以获得对该角色造成伤害的牌或令你和该角色各对伤害来源造成一点寒冰伤害并将你的武将牌翻面。",
            "fire_sixue_rewrite":"祀雪·改",
            "fire_sixue_rewrite_info":"「<font color=#192CCD>累业如雪</font>」<br><li>当有角色受到属性伤害后，你可以令该角色选择任意名角色进一次判定，若判定结果不为♦️，则其受到一点寒冰伤害，若其没有手牌，则此伤害+1。",
            "fire_jiangsheng":"降生",
            "fire_jiangsheng_info":"「<font color=#192CCD>生于寒冰</font>」<br><li>锁定技，若你的防具栏内没有牌且没有被废除，则你视为装备着【藤甲】。",
            "jiangsheng_tengjia1":"藤甲",
            "jiangsheng_tengjia1_info":"降生技能一",
            "jiangsheng_tengjia2":"藤甲",
            "jiangsheng_tengjia2_info":"降生技能一",
            "jiangsheng_tengjia3":"藤甲",
            "jiangsheng_tengjia3_info":"降生技能一",
            "fire_xinghuo":"星火",
            "fire_xinghuo_info":"「<font color=#CC7D12>寂寥星火</font>」<br><li>当有角色受到火焰伤害后，你可以令一名角色判定，若判定结果为♥2~9，其受到2点火焰伤害，否则其回复1点体力。",
            "fire_dongmu":"冬幕",
            "fire_dongmu_info":"「<font color=#899338>焦土静穆</font>」<br><li>每回合限一次，当一名角色的判定牌的判定结果确定时，若结果为红色且你没有手牌，你可以失去1点体力终止导致此判定发生的上级事件。若如此做，你可以选择至多三名角色对其各造成一点火焰伤害。",
            "fire_rezhan":"热战",
            "fire_rezhan_info":"「<font color=#CC7D12>冬云压城</font>」<br><li>一名角色的判定牌生效前，你可以打出一张♥️牌替换之。",
            "fire_qifeng":"骑风",
            "fire_qifeng_info":"「<font color=#439C6A>骑士之风</font>」<br><li>主公技，其他卡西米尔势力角色的出牌阶段限一次，你可以将一张装备牌交给该角色并令你摸一张牌。",
            "fire_tuanhuo":"团火",
            "fire_tuanhuo_info":"「<font color=#AC2F2E>团团烈火</font>」<br><li>主公技，其他乌萨斯势力角色对其他角色目标造成伤害时你可以令目标和你横置。",
            "fire_gushan":"孤山",
            "fire_gushan_info":"「<font color=#192CCD>孤峻寒山</font>」<br><li>主公技，当其他萨米势力角色的牌因弃置而进入弃牌堆时，则你可将其中一张牌置于牌堆顶。",
            "fire_ronglin":"荣林",
            "fire_ronglin_info":"「<font color=#BBC4BD>荣日繁林</font>」<br><li>主公技，其他萨尔贡势力角色的准备阶段，你可以卜算X（X为场上萨尔贡势力角色的数目）。",
            "fire_jingdian":"敬电",
            "fire_jingdian_info":"「<font color=#EBC20D>窃光链缚</font>」<br><li>锁定技，当你出杀指定目标后，若目标已横置，则此【杀】不可被响应；若目标未横置，则取消此【杀】令其横置。",
            "fire_chenxi":"晨曦",
            "fire_chenxi_info":"「<font color=#EBC20D>晨曦明星</font>」<br><li>出牌阶段限一次，对一名有手牌的其他角色使用，令你观看其手牌，若其未横置，则视为对其使用一张【杀】。",
            "fire_duxin":"笃信",
            "fire_duxin_info":"「<font color=#C37210>笃信希望</font>」<br><li>锁定技，当有其他角色回复1点体力时，令你和该角色各摸一张牌。",
            "fire_chixia":"赤黠",
            "fire_chixia_info":"「<font color=#C37210>逆耳利行</font>」<br><li>当有其他角色受到伤害后，本回合内该角色限一次，你可以与该角色进行拼点，若你赢，则令其进行一次判定，若判定结果不为♠️则令该角色和你各回复1点体力。若你没赢，本轮不能再发动此技能。",
            "fire_pengzhi":"烹制",
            "fire_pengzhi_info":"「<font color=#E55C00>战场食粮</font>」<br><li>当你造成伤害后，可以视为对一名角色使用一张【桃】。",
            "fire_buji":"后勤",
            "fire_buji_info":"「<font color=#E55C00>交际花朵</font>」<br><li>锁定技，当一名其他角色回复体力后，若其已横置，你获得其一张手牌，否则你回复1点体力。",
            "fire_haoling":"号令",
            "fire_haoling_info":"「<font color=#FFCC00>听我号令</font>」<br><li>锁定技，当你使用【杀】指定目标后，该角色获得“嘲讽”直到其回合开始。",
            "fire_new_haoling":"号令",
            "fire_new_haoling_info":"「<font color=#EEAA22>歃血为盟</font>」<br><li>锁定技，你的锦囊牌均视为铁索连环。",
            "fire_bazhu":"霸主",
            "fire_bazhu_info":"「<font color=#EEAA22>鲜衣怒马</font>」<br><li>锁定技，摸牌阶段，你多摸X张牌；你的手牌上限+X（X为场上横置的角色数且至少为1）",
            "fire_yuehuo":"跃火",
            "fire_yuehuo_info":"「<font color=#EEAA22>跃生奋火</font>」<br><li>主公技，一名其他乌萨斯势力角色出牌阶段限一次，若其已横置，则其可交给你一张手牌来解除横置。",
            "fire_chongfeng":"冲锋",
            "fire_chongfeng_info":"「<font color=#346C9A>二次冲锋</font>」<br><li>锁定技，你和其他角色相互计算距离-1，摸牌阶段若你没有护甲/有护甲，则需弃置一张防具栏内的牌，否则〖轻装〗于本回合失效/多摸一张牌。",
            "fire_qingzhuang":"轻装",
            "fire_qingzhuang_info":"「<font color=#346C9A>轻装上阵</font>」<br><li>当你失去一张装备区内的牌后，你可以视为使用一张基本牌。",
            "fire_hunsuo":"昏索",
            "fire_hunsuo_info":"「<font color=#34BC9C>昏瞑求索</font>」<br><li>锁定技，当你受到牌造成的伤害时，若此牌为红色，则伤害来源摸两张牌，否则你摸两张牌。",
            "fire_yinguang":"银光",
            "fire_yinguang_info":"「<font color=#34BC9C>往日银枪</font>」<br><li>锁定技，当你没装备武器时，你可以将一张黑【杀】当做【借刀杀人】使用;当你没装备防具时，你可以将一张装备牌当做【闪】使用或打出。",
            "fire_qianjun":"千军",
            "fire_qianjun_info":"「<font color=#34BC9C>千军万马</font>」<br><li>主公技，觉醒技，准备始阶段开始时，若你是体力值最小的角色，你获得一点护甲，并获得〖骑风〗。",
            "fire_czcibor_qifeng":"骑风",
            "fire_czcibor_qifeng_info":"「<font color=#34BC9C>骑士之风</font>」<br><li>主公技，其他卡西米尔势力角色的出牌阶段限一次，若你没有护甲，你可以将一张装备牌交给该角色并令你获得一点护甲。",
            "fire_tongxing":"同行",
            "fire_tongxing_info":"「<font color=#B52927>朴道同行</font>」<br><li>一名角色结束阶段，若其已受伤，你可以令其选择是否弃置两张牌来令你与其各回复1点体力并视为你未发动过〖斗士〗。",
            "fire_doushi":"斗士",
            "fire_doushi_info":"「<font color=#B52927>浴血斗争</font>」<br><li>每轮限一次，当有角色受到其他角色的伤害时，你可与伤害来源发起拼点，若你赢，你获得其全部手牌；若你没赢，令其获得你装备区全部的牌。",
            "fire_qianlu":"前路",
            "fire_qianlu_info":"「<font color=#A2A8A6>前路漫漫</font>」<br><li>一名角色弃牌阶段时，你可以失去1点体力令其与至多X名角色各摸1张牌，然后观看其手牌（X为你已损失的体力值）。",
            "fire_qiushui":"秋水",
            "fire_qiushui_info":"「<font color=#A2A8A6>秋水明镜</font>」<br><li>你可以将一张装备牌当做【桃】使用。",
            "fire_leitai":"擂台",
            "fire_leitai_info":"「<font color=#EEC700>十</font><font color=#111111>振</font><font color=#EEC700>钟</font><font color=#111111>摆</font>」<br><li>出牌阶段，当你手牌数不大于你已损失的体力值时，你可以获得距离1以内的一名其他角色的一张手牌。",
            "fire_jidong":"机动",
            "fire_jidong_info":"「<font color=#EEC700>竞</font><font color=#111111>技</font><font color=#EEC700>专</font><font color=#111111>注</font>」」<br><li>锁定技，你对横置的目标使用的【杀】不计入次数限制。",
            "fire_jianxv":"坚序",
            "fire_jianxv_info":"「<font color=#357CBC>永不后退</font>」<br><li>当你受到伤害时，你可以弃置两张手牌，若这两张牌的点数：①和为10，令你摸两张牌；②乘积为12，令你回复1点体力；③不大于你的体力值，令此伤害-1",
            "fire_junzhen":"骏珍",
            "fire_junzhen_info":"「<font color=#357CBC>珍瑰藏宝</font>」<br><li>锁定技，准备阶段时，若你的体力大于你的手牌数，则令你摸与体力值相等的牌。",
            "fire_jianding":"坚视",
            "fire_jianding_info":"「<font color=#446D65>终有一日</font>」<br><li>锁定技，所有角色造成伤害时获得一张【影】，受到伤害后需弃置一张【影】，否则获得一枚“暗”标记。",
            "fire_shunxi":"瞬息",
            "fire_shunxi_info":"「<font color=#446D65>鹿奔焪息</font>」<br><li>你可以做出如下选择：1.当你的体力值等于/小于最大值时，你可以选择一名其他角色并跳过出牌阶段/判定阶段和摸牌阶段；2.弃置一张区域内的牌并选择一名其他角色交换座次。你每选择一项，便视为你对选择的目标使用一张冰【杀】。",
            "fire_new_shunxi":"瞬息",
            "fire_new_shunxi_info":"「<font color=#446D65>鹿奔焪息</font>」<br><li>每轮限一次，当有牌进入弃牌堆后，若其中有【影】，你于本回合结束后获得一个额外回合。该回合结束后，若你于此回合未造成过伤害，你失去1点体力。",
            "fire_yanmie":"湮灭",
            "fire_yanmie_info":"「<font color=#446D65>自生湮灭</font>」<br><li>锁定技，弃牌阶段前你展示所有手牌，若其中的【影】数：1.小于体力值，则令你跳过弃牌阶段；2.不小于体力值，则减少1点体力上限。",
            "fire_muhen":"木痕",
            "fire_muhen_info":"「<font color=#446D65>旋踵共志</font>」<br><li>主公技，锁定技，每回合限一次，其他萨米势力角色的牌因弃置而进入弃牌堆时，若你已受伤，该角色可以令你回复1点体力并令自己获得一张【影】。",
            "fire_yuanjian":"远视",
            "fire_yuanjian_info":"「<font color=#002BC8>忆久视远</font>」<br><li>准备阶段，你可以弃一张黑色手牌观看牌堆顶的八张牌，并可以选择一名没有“暗”标记的角色作为目标，令其获得一枚“暗”标记。",
            "fire_xianmen":"见门",
            "fire_xianmen_info":"「<font color=#002BC8>凋决现门</font>」<br><li>锁定技，其他角色判定阶段的判定牌生效后，你获得此牌，若其拥有“暗”标记，则移去其“暗”标记并令其本轮非锁定技失效。",
            "fire_diaowang":"暗",
            "fire_diaowang_indo":"锁定技，摸牌阶段，你少摸一张牌并获得两张【影】；锁定技，当你造成伤害后，令你失去“暗”标记；移去时本轮非锁定技失效。",
            "fire_xuezi":"学子",
            "fire_xuezi_info":"「<font color=#DFC6AD>殷殷学子</font>」<br><li>你可以将一张锦囊牌当做【桃】使用。",
            "fire_benchu":"本初",
            "fire_benchu_info":"「<font color=#DFC6AD>原初之雪</font>」<br><li>当有其他角色回复体力时，你可以弃置两张牌进行一次判定，若判定结果为♥️，令此回复量+1；若判定结果不为♥️，卜算X，然后摸三张牌（X为该角色的体力值）。",
            "fire_qinfeng":"琴风",
            "fire_qinfeng_info":"「<font color=#899338>黯然神伤</font>」<br><li>锁定技，其他角色受到你造成的属性伤害时，你将武将牌翻面并摸1张牌，然后执行下列效果：1.若X大于0，你获得〖覆雪〗直到下回合开始；2.若X等于3，令此伤害翻倍（X为你至其的距离）。",
            "fire_luling":"鹿铃",
            "fire_luling_info":"「<font color=#899338>深谷百合</font>」<br><li>未实装，回合结束时，若你本回合造成过伤害/未造成过伤害，你可以弃一枚“星”标记来发动【热战】/你获得一枚“星”标记并获得〖覆雪〗直到下回合开始。",
            "fire_knightshield1":"骑士盾牌",
            "fire_knightshield1_info":"骑士盾牌技能一",
            "fire_knightshield2":"骑士盾牌",
            "fire_knightshield2_info":"骑士盾牌技能二",
            "fire_knightshield3":"骑士盾牌",
            "fire_knightshield3_info":"骑士盾牌技能三",
            "fire_diaowang_info":"锁定技，摸牌阶段，你少摸一张牌；锁定技，当你受到伤害后，令你失去“暗”标记；移去时本回合非锁定技失效。",
            "fire_shunxi1":"瞬息",
            "fire_shunxi1_info":"",
            "fire_shunxi2":"瞬息",
            "fire_shunxi2_info":"瞬息",
            "fire_shunxi3":"瞬息",
            "fire_shunxi3_info":"瞬息",
            "fire_muhen2":"木痕",
            "fire_muhen2_info":"",
            "fire_yuehuo2":"跃火",
            "fire_yuehuo2_info":"",
            "fire_yuehuo3":"跃火",
            "fire_yuehuo3_info":"",
            "fire_tianma":"天马",
            "fire_tianma_info":"「<font color=#333330>浮影长将</font>」<br><li>转换技，阴：出牌阶段限一次，你可以将一张【杀】置入牌堆底并从另一端摸一张牌。阳：出牌阶段限一次，你可以将一张【杀】置入牌堆顶并从另一端摸一张牌。若你在此阶段摸到至少一张【杀】，令你的下一张【杀】造成的伤害+1，攻击范围+1。你以此法获得的伤害加成不能大于3。",
            "fire_lvxing":"旅行",
            "fire_lvxing_info":"「<font color=#333330>通路旅程</font>」<br><li>锁定技，当你使用牌时，若此牌的花色未被“旅行”记录，则记录此种花色。你不能成为“旅行”记录花色的牌的目标。准备阶段开始时，清除“旅行”记录的花色。",
            "fire_chongneng":"充能",
            "fire_chongneng_info":"「<font color=#125CCF>闪电充能</font>」<br><li>锁定技，每当你受到一点伤害或失去1点体力后，你摸两张牌，并需交给一名其他角色一张手牌，否则你将武将牌翻面。",
            "fire_old_dianhu":"电弧",
            "fire_old_dianhu_info":"「<font color=#125CCF>反击电弧</font>」<br><li>每轮限一次，当你受到大于一点的伤害时，你可以令你和伤害来源各自翻面，然后取消此伤害。",
            "fire_dianhu":"电弧",
            "fire_dianhu_info":"「<font color=#125CCF>反击电弧</font>」<br><li>每回合限一次，当你使用普通【杀】指定唯一目标后，你可以选择一项：1.弃置一张手牌，若你没有护甲则获得一点护甲，与其横置。2.弃置一张手牌并将此【杀】改为雷【杀】。3.背水：你与其将武将牌翻面，然后依次执行上述所有选项。",
            "fire_yibo":"衣钵",
            "fire_yibo_info":"「<font color=#4682B4>纯洁压制</font>」<br><li>锁定技，若一名角色已横置，你计算与其的距离-X，其计算与你的距离+X（X为场上横置的角色数）。",
            "fire_suiding":"髓钉",
            "fire_suiding_info":"「<font color=#4682B4>挫髓轧骨</font>」<br><li>当你使用【杀】造成伤害时，若目标区域内的牌数不小于你的体力值或手牌数，你可以选择：1.令此伤害+X（X为场上横置的角色数）；2.令目标横置。",
            "qishi_skill":"骑士",
            "qishi_skill_info":"",
            "_doublegroup_choice":"",
            "_doublegroup_choice_info":"",
            "fire_sp_qifeng":"骑风",
            "fire_sp_qifeng_info":"「<font color=#439C6A>骑士之风</font>」<br><li>主公技，其他卡西米尔势力角色的出牌阶段限一次，你可以将一张装备牌交给该角色并令你回复1点体力。",
            "fire_liying":"立英",
            "fire_liying_info":"「<font color=#6430A7>群峦恩泽</font>」<br><li>主公技，米诺斯势力角色的出牌阶段限一次，其使用【杀】结算后，若其体力不小于其体力值上限的一半，可以将此【杀】对应的实体牌交给你，然后你可以回复1点体力并令其本阶段内使用【杀】的次数上限+1。",
            "fire_liying1":"立英",
            "fire_liying1_info":"",
            "fire_liying2":"立英",
            "fire_liying2_info":"",
            "fire_tianma2":"天马",
            "fire_tianma2_info":"",
            "fire_huangye":"荒野",
            "fire_huangye_info":"「<font color=#994328>荒野伏行</font>」<br><li>锁定技，当你使用【杀】指定惟一目标时，你将武将牌翻面并摸一张牌，然后你选择一项：①摸一张牌。②本回合内【杀】的使用次数+1。③失去〖幼牙〗，令此【杀】的伤害值基数+1并删去此项。",
            "fire_oxenfree":"幼牙",
            "fire_oxenfree_info":"「<font color=#994328>狼奔豕突</font>」<br><li>锁定技，你的武将牌正面朝上时，你不能成为距离1以外的角色的【杀】的目标。当你的武将牌从背面翻至正面时，你需使用一张无距离限制的【杀】，否则移除〖荒野〗的最后一项。",
            "fire_qianmo":"阡陌",
            "fire_qianmo_info":"「<font color=#8A2C2D>旷野归居</font>」<br><li>锁定技，结束阶段，若你没有护甲，则你将武将牌翻面并获得一点护甲；每当你的护甲成功抵消一次伤害，你摸一张牌。",
            "fire_yiyuan":"异源",
            "fire_yiyuan_info":"「<font color=#89A338>浸入尘嚣</font>」<br><li>一名其他角色结束阶段，若你有护甲且其本回合造成过伤害/未造成过伤害，则你可以视为对另一名角色使用一张无距离限制的【杀】后减少一点护甲，此【杀】不可被响应/视为对其使用一张【决斗】后减少一点护甲，此【决斗】伤害+1。",
            "fire_fuyong":"附庸",
            "fire_fuyong_info":"「<font color=#EEAAAA>中剑从邑</font>」<br><li>锁定技，手牌上限+X，X为你的护甲值；其他角色结束阶段，若其有护甲且你没有护甲，其受到1点无来源伤害并令你获得Y点护甲（Y为你的体力值）。",
            "fire_old_chengying":"承影",
            "fire_old_chengying_info":"「<font color=#EEAAAA>掠行承影</font>」<br><li>当你造成伤害后，你可以令一名没有护甲的其他角色获得一点护甲。",
            "fire_chengying":"承影",
            "fire_chengying_info":"「<font color=#EEAAAA>掠行承影</font>」<br><li>当有其他角色成为【杀】或【决斗】的目标后，你可以将一点护甲分给该角色。",
            "fire_gravel_qifeng":"骑风",
            "fire_gravel_qifeng_info":"「<font color=#EEAAAA>骑士之风</font>」<br><li>未实装主公技，其他卡势力角色的出牌阶段限一次，该角色可以将一张装备牌交给你并令其获得一点护甲。",
            "fire_mojin":"没金",
            "fire_mojin_info":"「<font color=#FF88AA>金石可镂</font>」<br><li>一名其他角色回合开始前，若其至你的距离大于1，你可以将其区域内中的一张牌移动到你的区域内并对其使用一张【杀】，此【杀】伤害值基数+1且造成伤害后你将武将牌翻面。",
            "fire_yunqi":"蕴奇",
            "fire_yunqi_info":"「<font color=#FF88AA>蕴奇待价</font>」<br><li>锁定技，若你的武将牌背面朝上，其他角色计算与你的距离+1。回合开始时，若你的判定区内有牌，令你本回合跳过弃牌阶段，且使用手牌无视距离。",
            "fire_rust_lantern_skill":"锈蚀提灯",
            "fire_rust_lantern_skill_info":"你可以将两张基本牌当作【决斗】使用。",
            "fire_zhurong":"祝融",
            "fire_zhurong_info":"「<font color=#C92828>火神</font>」<br><li>锁定技，当你获得牌后，你重铸所有的装备牌，然后获得对应牌数的护甲。",
            "fire_tieshi":"铁誓",
            "fire_tieshi_info":"「<font color=#C92828>火神</font>」<br><li>锁定技，你不是【桃】的合法目标；你对距离1以内的其他角色造成伤害时，减少X点护甲，回复X点体力，令此伤害加X，X为你的护甲值。",
            "fire_shushou":"戍守",
            "fire_shushou_info":"「<font color=#8A3E21>坚戈礼羽</font>」<br><li>当有距离1以内的其他角色成为【杀】的惟一目标后，你可以令目标/伤害来源视为对你使用一张【决斗】，令前者不能响应/无效，然后你摸一张牌。",
            "fire_guxiang":"古香",
            "fire_guxiang_info":"「<font color=#8928AA>古雅香调</font>」<br><li>锁定技，出牌阶段前，你将体力上限调整为2+X，X为你的牌数的一半，回复1点体力，至多回复至体力上限的一半。",
            "fire_qinlue":"坍缩",
            "fire_qinlue_info":"「<font color=#5E5E5E>内核坍缩</font>」<br><li>锁定技，对一名其他角色造成非属性伤害时，若其拥有“暗”标记，则其立即死亡。",
            "fire_xvgong":"虚恭",
            "fire_xvgong_info":"「<font color=#5E5E5E>荣光万丈</font>」<br><li>出牌阶段，你可以将所有牌视为【万箭齐发】使用。",
            "fire_dianguo":"癫国",
            "fire_dianguo_info":"「<font color=#5E5E5E>智哲启民</font>」<br><li>锁定技，受到其他角色造成的非属性伤害后，视为对其使用一张【杀】并令其获得一枚“暗”标记。",
            "fire_new_qinfeng":"琴风",
            "fire_new_qinfeng_info":"「<font color=#899338>黯然神伤</font>」<br><li>每轮限一次，一名其他角色回合结束时，若其本回合造成过伤害/未造成过伤害，则你可以视为对其使用一张刺【杀】，此【杀】造成伤害后，你将武将牌翻面并获得〖覆雪〗直到下回合开始/将一张红牌视为【战术电台】对你使用。",
            "fire_sxq":"测试",
            "fire_sxq_info":"每回合限一次，你可以令你的伤害类牌额外结算一次。",
            "fire_mianmeng":"眠梦",
            "fire_mianmeng_info":"「<font color=#999999>长眠一梦</font>」<br><li>未实装，出牌阶段限一次，你可以废除一个装备栏并于本回合获得对应的效果：武器栏，使用【杀】不能响应；防具栏，♦️判定牌的花色视为♥牌；坐骑栏，摸四张牌并跳过弃牌阶段；宝具栏，获得〖恪守〗。",
            "fire_keshou":"恪守",
            "fire_keshou_info":"「<font color=#F2A223>恪守不渝</font>」<br><li>锁定技，你使用的【杀】：1.若为红色则可以额外选择至多一个角色。2.若为黑色则不计入次数限制。",
            "fire_sanchun":"三春",
            "fire_sanchun_info":"「<font color=#F2A223>几度光阴</font>」<br><li>当你受到伤害时，可以减少一点护甲并取消之，若你这么做，你观看牌堆顶的X张牌，然后将这些牌交给任意一名角色，X为此伤害的三倍。",
            "fire_zhiheng":"智恒",
            "fire_zhiheng_info":"「<font color=#333333>启道恒索</font>」<br><li>锁定技，你使用的【杀】可以额外选择任意名仅距离1以内的角色，相邻角色无法响应你的【杀】。你不能成为距离1以内的角色的【杀】的目标。",
            "fire_qingzang":"清葬",
            "fire_qingzang_info":"「<font color=#333333>终局送葬</font>」<br><li>锁定技，你使用的【杀】：1.可以额外选择至多一个角色。2.对装备区内至少有1张坐骑牌的角色造成伤害+1。",
            "fire_shuli":"署理",
            "fire_shuli_info":"「<font color=#333333>终路旅程</font>」<br><li>主公技，拉特兰势力角色濒死时，其可以交给你所有手牌，然后与你交换座次。",
            "fire_huijin":"灰烬",
            "fire_huijin_info":"「<font color=#9BBB22>灰烬公主</font>」<br><li>当一名其他角色进入濒死状态时，你可以摸一张牌并回复1点体力。",
            "fire_sheshen":"舍身",
            "fire_sheshen_info":"「<font color=#9BBB22>小鳄鱼喵</font>」<br><li>限定技，当你进入濒死状态时，你可以将〖灰烬〗交给一名其他角色，然后获得〖嫣梦〗。",
            "fire_yanmeng":"嫣梦",
            "fire_yanmeng_info":"「<font color=#9BBB22>如梦如泡</font>」<br><li>你造成/受到伤害后，可以视为使用一张基本牌。",
            "fire_yingxi":"盈希",
            "fire_yingxi_info":"其他角色每轮限一次，其成为锦囊牌的目标后，若其不是此牌的惟一目标，则其需交给你X张暗置的牌，否则你对其造成X点火焰伤害（X为其明置的牌数且至少为1）。",
            "fire_ex_fuxue":"覆雪",
            "fire_ex_fuxue_info":"「<font color=#899338>落叶如雪</font>」<br><li>锁定技，当其他角色使用牌指定你为目标时，其需弃置一张手牌，否则此牌对你无效。",
            "fire_sb_fuxue":"覆血",
            "fire_sb_fuxue_info":"「<font color=#899338>以血洗血</font>」<br><li>当你成为牌的目标后，若此牌的目标数大于1，你可以获得〖覆雪〗直到下回合结束并令此牌对你无效。",
            "fire_sb_youlin":"幽林",
            "fire_sb_youlin_info":"「<font color=#899338>林海飘荡</font>」<br><li>回合结束时或受到伤害后，若你本回合未造成过伤害，则视为使用一张无距离限制且需要依次使用两张【闪】响应的【杀】，造成伤害后若目标角色存活，你将武将牌翻面并令你的【杀】伤害值基数+1直到下回合结束。",
            "fire_sb_fumu":"浮木",
            "fire_sb_fumu_info":"「<font color=#899338>往事随风</font>」<br><li>锁定技，当你使用【杀】时，若你已获得〖覆雪〗，此【杀】伤害+1。",
            "fire_lanshan":"阑珊",
            "fire_lanshan_info":"当一名其他角色于摸牌阶段外获得牌后，你可以选择明置其至多一张暗置的手牌，然后令其选择交给你一张暗置的手牌并回复1点体力，若其没有暗置的手牌，则令你获得其所有明置的手牌。",
            "fire_xvshi":"虚实",
            "fire_xvshi_info":"每当一名角色的体力值发生变化时，若此变化大于1，则你可将此变化值扣减至一点并摸等同于此变化值的牌。",
            "fire_shengyu":"圣域",
            "fire_shengyu_info":"限定技，出牌阶段，你可以废除你的判定区和装备栏，然后指定至多三名角色，令这些角色获得一点护甲，拥有护甲的其他角色本轮使用牌无次数限制，且受到属性伤害时，取消此伤害。",
            "fire_xieli":"谢礼",
            "fire_xieli_info":"「<font color=#A74330>玲心会意</font>」<br><li>当你受到伤害时，若伤害来源的手牌数大于你的手牌数，你可以将此伤害转移给一名其他角色并交给其一名角色的所有“饯别”牌。",
            "fire_jianbie":"饯别",
            "fire_jianbie_info":"「<font color=#A74330>宾饯日月</font>」<br><li>每轮限一次，其他角色回合结束时，你可以将任意张非锦囊牌置于其武将牌上。若如此做，其回合开始时获得这些牌。",
            "fire_new_xieli":"谢礼",
            "fire_new_xieli_info":"「<font color=#A74330>玲心会意</font>」<br><li>当你使用的锦囊牌结算完成后，你可以将之交给一名手牌数全场惟一最少的角色并令其摸一张牌；当你成为锦囊牌的目标后，你可以将此牌的目标转移给手牌数全场最多且不为此牌使用者的其他角色并摸一张牌。",
            "fire_weiyi":"逶迤",
            "fire_weiyi_info":"「<font color=#A74330>逶迤山尽</font>」<br><li>锁定技，当你使用一张锦囊牌时，你手牌中所有基本牌的牌名均视为此牌直到回合结束。",
            "fire_tani":"踏泥",
            "fire_tani_info":"「<font color=#A74330>踏泥清平</font>」<br><li>锁定技，出牌阶段结束时，将所有手牌交给一名手牌数全场最少的其他角色。",
            "fire_heyun":"和云",
            "fire_heyun_info":"「<font color=#A74330>挥袖和云</font>」<br><li>锁定技，你每使用一张牌时进行一次判定，若判定结果为红色/黑色则令此牌无效/弃置一张牌。",
            "fire_liming":"立命",
            "fire_liming_info":"「<font color=#A74330>天道无亲</font>」<br><li>你可以将两张牌当作【无懈可击】使用，若此牌为红色/黑色/无色，你可以令被你抵消了目标锦囊效果的角色获得〖逶迤〗/〖踏泥〗/〖和云〗直到本轮结束。",
            "fire_new_yizhi":"遗志",
            "fire_new_yizhi_info":"「<font color=#751400>连携执法</font>」<br><li>未实装，当你受到伤害后，你可以令伤害来源与另一名你选择的其他角色横置。",
            "fire_new_jianhu":"监护",
            "fire_new_jianhu_info":"「<font color=#751400>单兵作战</font>」<br><li>锁定技，当其他横置的角色使用伤害牌指定你为目标时，摸一张牌并令此牌对你无效。",
            "fire_new_gaosi":"告死",
            "fire_new_gaosi_info":"「<font color=#751400>终结连射</font>」<br><li>未实装，你的回合内，当有横置角色进入濒死状态时，你令其需交给你一件装备牌并回复1点体力，否则该角色失去所有武将技能并立即死亡。",
            "fire_pipan":"批判",
            "fire_pipan_info":"锁定技，当其他角色/你使用黑色牌指定你/一名角色为目标时，若你/其为此牌的惟一目标，令你观看其手牌，若其中有黑色牌，其须选择一项：1.将所有手牌交给你。2.将武将牌横置。3.受到你造成的两点雷电伤害。",
            "fire_chuncui":"纯粹",
            "fire_chuncui_info":"主公技，锁定技，场上每有一名其他哥伦比亚角色存活，你的防具栏便+1。",
            "fire_dianjing":"点睛",
            "fire_dianjing_info":"「<font color=#EF8AA9>点睛之笔</font>」<br><li>当一名角色使用普【杀】指定目标后，你可以摸一张牌并为此【杀】附魔一种属性。",
            "fire_chunli":"纯理",
            "fire_chunli_info":"「<font color=#EF8AA9>纯粹理性</font>」<br><li>当一名角色的判定牌生效前，你可以打出一张黑色牌替换之。",
            "fire_yishi":"衣食",
            "fire_yishi_info":"「<font color=#A544A3></font>」<br><li>若你的武器栏内没有牌且没有被废除，则视为你装备着【■■■■】。",
            "fire_xunlie":"寻猎",
            "fire_xunlie_info":"「<font color=#A544A3></font>」<br><li>锁定技，当你使用【杀】指定唯一目标后，若其拥有“暗”标记，此【杀】伤害+X（X为为场上拥有“暗”标记的角色数）；当你使用【杀】对其他角色造成伤害后，令其获得一枚“暗”标记。",
            "fire_junu":"■■■■",
            "fire_junu_info":"你使用【杀】额外指定所有拥有“暗”标记的角色为目标。",
            "fire_junu1":"■■■■",
            "fire_junu1_info":"你使用【杀】额外指定所有拥有“暗”标记的角色为目标。",
            "fire_guidao":"诡道",
            "fire_guidao_info":"「<font color=#752209></font>」<br><li>转换技，你使用或打出基本牌后：1.回复1点体力。2.本轮内可以将【杀】视为【闪】使用。3.可以视为使用X张【杀】（X为你已损失的体力值）。",
            "fire_mingtu":"命途",
            "fire_mingtu_info":"「<font color=#752209></font>」<br><li>使命技，当你造成伤害前，你弃一张牌并防止之。 成功：准备阶段，若你已经受伤且你的武器栏没有被废除，你从牌堆中获得一张【降斩】并使用之。 失败：你成功达成使命前，对其他角色造成伤害，将你的血量减扣至一点。",
            "fire_jiangzhan":"降斩",
            "fire_jiangzhan_info":"锁定技，若你已经受伤，你于出牌阶段使用【杀】或【酒】不计入次数限制。",
            "fire_jiangzhan1":"降斩",
            "fire_jiangzhan1_info":"锁定技，若你已经受伤，你于出牌阶段使用【杀】或【酒】不计入次数限制。",
            "fire_qiji":"弃疾",
            "fire_qiji_info":"「<font color=#DB6A09>忿疾忿音</font>」<br><li>锁定技，摸牌阶段，你的摸牌数+X；手牌上限+X（X为你已损失的体力）。",
            "fire_shenghui":"声廻",
            "fire_shenghui_info":"「<font color=#DB6A09>如雷贯耳</font>」<br><li>每回合限一次，你于摸牌阶段开始或受到伤害时，你可以取消之并流失1点体力，视为使用X张群体锦囊（X为你已损失的体力）。",
            "fire_wenxue":"问雪",
            "fire_wenxue_info":"「<font color=#BD394A>潭泥语冰</font>」<br><li>当你使用红【杀】指定目标后，其需交给你一张红色牌，否则令此【杀】的效果额外结算一次。",
            "fire_shanwu":"善恶",
            "fire_shanwu_info":"「<font color=#BD394A>善善恶恶</font>」<br><li>当有角色受到另一其他角色的非红色牌造成的伤害前，若此伤害来源在你的攻击范围内，你可以将两张红色牌当做冰【杀】对伤害来源使用并取消此伤害。",
            "fire_riyuan":"日远",
            "fire_riyuan_info":"「<font color=#700010>长虹日远</font>」<br><li>一名至你距离1以外的其他角色的出牌阶段，你可以令其本阶段内使用牌无距离限制，若其使用牌指定你为目标，你可以将所有手牌置于你的武将牌上。若如此做，你的回合结束时，你获得你武将牌上的所有牌。",
            "fire_linping":"林平",
            "fire_linping_info":"「<font color=#700010>平林逾静</font>」<br><li>每个出牌阶段内每名角色限一次，当有角色成为其他角色的伤害类牌的目标时，若你没有手牌，则可以令此牌对其无效。",
            "fire_hexin":"和心",
            "fire_hexin_info":"「<font color=#330053>干戈玉帛</font>」<br><li>其他角色出牌阶段开始时，你可以令其选择一项：1.此阶段结束时，若未造成过伤害，则摸一张牌；2.展示所有手牌，并弃置至少两张牌，本阶段内使用牌不可被响应。",
            "fire_senling":"森灵",
            "fire_senling_info":"「<font color=#330053>森森唤灵</font>」<br><li>锁定技，所有角色于任意出牌阶段外不能成为【杀】或【决斗】的目标。",
            "fire_mianqing":"眠清",
            "fire_mianqing_info":"「<font color=#999999>长眠一清</font>」<br><li>叙拉古势力技，回合开始时，你获得技能〖暮时〗直到回合结束，你每回复1点体力可以发动一次〖暮时〗。",
            "fire_qinfeng_ex":"琴风",
            "fire_qinfeng_ex_info":"「<font color=#899338>黯然神伤</font>」<br><li>每轮限一次，一名角色回合结束，若你本回合造成过伤害/未造成过伤害，则你可以视为对其使用一张【杀】，此【杀】造成伤害后摸一张牌/将一张♥牌视为【战术电台】对你使用。",
            "fire_new_yiyuan":"异源",
            "fire_new_yiyuan_info":"「<font color=#89A338>浸入尘嚣</font>」<br><li>其他角色结束阶段，若你有护甲且其装备区内有牌，则你可以令其将所有装备区内的牌当做【决斗】对你使用，你或其受到此牌造成的伤害后获得此牌对应的实体牌。",
            "fire_jiyu":"戢羽",
            "fire_jiyu_info":"「<font color=#BBBB99>翻翮求心</font>」<br><li>当你使用【决斗】/【杀】指定唯一目标后，若你有护甲，则可以减少一点护甲并获得其装备区内的一张牌，令此【决斗】不可被响应/令此【杀】伤害值基数改为X（X为你至其的距离且至少为1）。",
            "fire_new_jiyu":"戢羽",
            "fire_new_jiyu_info":"「<font color=#BBBB99>翻翮求心</font>」<br><li>若你的武将牌背面向上，你可以将一张装备牌当【杀】使用或打出。",
            "fire_zhanyi1":"战毅",
            "fire_zhanyi1_info":"「<font color=#899338>抗争意志</font>」<br><li>卡西米尔势力技。出牌阶段限一次，令一名角色展示一张牌。1.装备牌，你将其置于自己的武将牌上并与其获得〖覆雪〗至下回合开始，然后视为使用一张【决斗】。2.锦囊牌，你变更势力为罗德岛并获得所有的“战毅”牌。",
            "fire_chou_youling":"幽灵",
            "fire_chou_youling_info":"「<font color=#899338>麋山幽语</font>」<br><li>锁定技，若你的武将牌背面朝上，当武器栏内有牌的角色受到你造成的伤害或对你造成的伤害时，令此伤害+1并获得其一张牌。",
            "fire_zhanyi":"战毅",
            "fire_zhanyi_info":"「<font color=#899338>竭战驽守</font>」<br><li>卡西米尔势力技。你可以将武将牌翻面并失去1点体力，令一名装备区有牌的角色展示一张牌。1.装备牌，你将其置于自己的武将牌上并令其回复1点体力，然后视为使用一张【决斗】。2.非装备牌，你变更势力为罗德岛并获得所有的〖战毅〗牌。",
            "fire_chou_fuxue":"覆雪",
            "fire_chou_fuxue_info":"「<font color=#899338>血林雪仇</font>」<br><li>罗德岛势力技。当你进入或脱离濒死状态时，你可以弃置两张装备牌并将武将牌翻面，然后对至多两名角色各造成一点火焰伤害。以此法造成伤害后若目标角色存活，你回复1点体力。",
            "fire_sp_qinfeng":"琴风",
            "fire_sp_qinfeng_info":"「<font color=#899338>黯然神伤</font>」<br><li>你可以将手牌中的任意张基本牌当做一张无距离限制的刺【杀】使用。若如此做，你进行一次判定，若判定结果不为♥️，你将武将牌翻面且不能成为其他角色使用牌的目标至下回合开始。",
            "fire_sp_xinghuo":"星火",
            "fire_sp_xinghuo_info":"「<font color=#CC7D12>锋镝之苦</font>」<br><li>当你获得/弃置牌时，你可令至多三名角色依次进行判定，然后比较判定结果来执行对应的效果：若颜色相同，其弃两张牌/受到的火焰伤害+1直到其回合开始，若颜色不同，其造成的火焰伤害+1直到其回合结束/其摸一张牌。",
            "fire_shenlin":"深林",
            "fire_shenlin_info":"「<font color=#899338>不知林深</font>」<br><li>锁定技",
            "fire_sp_qinfeng_qianxing":"潜行",
            "fire_sp_qinfeng_qianxing_info":"琴声的潜行判定。",
            "fire_group_fuxue":"覆血",
            "fire_group_fuxue_info":"「<font color=#899338>以血洗血</font>」<br><li>锁定技，当你成为牌的目标后，若此牌的目标数大于1，你获得〖覆雪〗直到下回合结束并令此牌对你无效。当你使用【杀】时，若你已获得〖覆雪〗，此【杀】伤害+1。",
            "fire_new_chenxi":"晨曦",
            "fire_new_chenxi_info":"「<font color=#EBC20D>晨曦明星</font>」<br><li>出牌阶段限一次，对一名有手牌的其他角色使用，令你观看其手牌，并可以对其使用一张无距离限制的【杀】。每当你对其使用一张【杀】时，若其已横置，则此【杀】额外结算一次，反之则取消此【杀】令其横置。",
            "fire_chou_youling1":"幽灵",
            "fire_chou_youling1_info":"",
            "fire_standard_youlin":"幽林",
            "fire_standard_youlin_info":"「<font color=#899338>林海飘荡</font>」<br><li>每回合限一次，当你失去装备区内的牌后，你可以将武将牌翻面并摸一张牌，然后使用一张无距离限制的【杀】，此【杀】无视防具且伤害值基数+1。",
            "fire_standard_fuxue":"覆血",
            "fire_standard_fuxue_info":"「<font color=#899338>以血洗血</font>」<br><li>锁定技，当你的武将牌背面朝上时，攻击范围不大于你的角色使用伤害类牌不能指定你为目标。当你的武将牌从背面翻至正面时，你重铸一张牌。",
            "fire_re_standard_youlin":"幽林",
            "fire_re_standard_youlin_info":"「<font color=#899338>林海飘荡</font>」<br><li>每回合限一次，你的武将牌从背面翻至正面时，你可以将两张罠牌当做一张无距离限制的【杀】使用并将武将牌翻面，此【杀】无视防具且伤害值基数+1。",
            "fire_re_standard_fuxue":"覆血",
            "fire_re_standard_fuxue_info":"「<font color=#899338>以血洗血</font>」<br><li>伏罠技，锁定技，当你失去装备区内的牌后，你将牌堆顶的等量张牌伏置并将武将牌翻面。当你受到伤害时，若你的武将牌背面朝上，你防止此伤害并伏置区域内所有非伤害牌。",
            "fire_old_fuxue":"覆血",
            "fire_old_fuxue_info":"「<font color=#757F60>环境伪装</font>」<br><li>当你成为一张指定了多个目标的锦囊牌的目标时，你可以取消之，并摸一张牌。",
            "fire_final_youlin":"幽灵.终",
            "fire_final_youlin_info":"「<font color=#899338>麋山幽语</font>」<br><li>伏罠技，每回合限一次，当你获得牌时，你可以将其伏置并将武将牌翻面，视为使用一张无距离限制的刺【杀】。",
            "fire_final_dongmu":"冬幕.终",
            "fire_final_dongmu_info":"「<font color=#899338>千秋为谋</font>」<br><li>当一张【影】被置入弃牌堆时，你可以移去任意张罠牌，然后对与你距离为罠牌点数之和的其他角色各造成一点火焰伤害。",
            "fire_final_fuxue":"覆血.终",
            "fire_final_fuxue_info":"「<font color=#899338>泣血漆身</font>」<br><li>当你成为其他角色的伤害类牌的目标时，若其手牌数大于你的手牌数与罠牌数，则你可以取消之并令其与你各获得一张【影】。",
            "fire_kuye":"枯野",
            "fire_kuye_info":"「<font color=#899338>槐蚕上壁</font>」<br><li>锁定技，当你受到伤害时，若伤害来源的手牌数大于你的手牌数与罠牌数，你将伤害转移给伤害来源并获得一张【影】。",
            "fire_re_kuye":"枯野",
            "fire_re_kuye_info":"「<font color=#899338>槐蚕上壁</font>」<br><li>锁定技，当你受到伤害时，若伤害来源的手牌数大于你的手牌数与罠牌数，你防止此伤害并与伤害来源各获得一张【影】。",
            "fire_zhujian":"铸剑",
            "fire_zhujian_info":"「<font color=#899338>无血杀戮</font>」<br><li>伏罠技，每回合限一次，当相邻的角色成为伤害类牌的目标后，你可以将任意张花色相同的牌展示并伏置。若如此做，你结束阶段获得所有罠牌并可以对等量目标视为使用一张【火攻】。",
            "fire_zhujian2":"铸剑",
            "fire_zhujian2_info":"",
            "fire_re_zhujian":"铸剑",
            "fire_re_zhujian_info":"「<font color=#899338>无血杀戮</font>」<br><li>伏罠技，每回合限一次，当距离你1以内的其他角色成为伤害类牌的目标后，你可以将任意张花色相同的牌展示并伏置。若如此做，你结束阶段获得所有罠牌并可以对等量目标视为使用一张【火攻】。",
            "fire_test_bingniang":"测试",
            "fire_test_bingniang_info":"使用延时锦囊牌后，你获得之。",
            "fire_new_mihang":"迷航",
            "fire_new_mihang_info":"「<font color=#C3A354>星际迷航</font>」<br><li>锁定技，你的回合外，当有其他角色使用与你罠牌中牌名相同的手牌时，你可以取消此牌的所有目标，然后移去该罠牌。",
            "fire_adddamage":"易伤",
            "fire_adddamage_info":"",
            "fire_yinguang2":"银光",
            "fire_yinguang2_info":"",
            "fire_new_lvxing":"旅行",
            "fire_new_lvxing_info":"「<font color=#333330>通路旅程</font>」<br><li>转换技，阴：出牌阶段限一次，你可以将X张牌置入牌堆底并从另一端摸等量张牌。阳：出牌阶段限一次，你可以将X张牌置入牌堆顶并从另一端摸等量张牌。（X为〖天马〗标记数且至少为1）",
            "fire_new_tianma":"天马",
            "fire_new_tianma_info":"「<font color=#333333>浮影长将</font>」<br><li>锁定技，每回合限两次，当你于摸牌阶段外获得牌时，你展示其中的【杀】并令你的下一张【杀】无视防具，需要依次使用额外一张【闪】响应，攻击范围+1。",
            "fire_shuli2":"署理",
            "fire_shuli2_info":"",
            "fire_jianbie2":"饯别",
            "fire_jianbie2_info":"",
            "fire_riyuan1":"日远",
            "fire_riyuan1_info":"",
            "fire_linping1":"林平",
            "fire_linping1_info":"",
            "fire_standard_fuxue1":"覆血",
            "fire_standard_fuxue1_info":"",
            "fire_canyun":"餐云",
            "fire_canyun_info":"「<font color=#9266A2>世事荣枯</font>」<br><li>蓄力技(1/4)，伏罠技，当你需要使用【酒】时，你可以消耗一点蓄力值将一张手牌伏置，视为使用一张【酒】。你于回合外获得牌后，获得一点蓄力值。",
            "fire_chunyu":"醇雨",
            "fire_chunyu_info":"「<font color=#9266A2>酒酽春浓</font>」<br><li>当你于回合外失去手牌时，若你的武将牌正面向上且你的手牌数不大于你的罠牌数，你可以翻面，获得所有罠牌并摸等量的牌。",
            "fire_shixuan":"诗选",
            "fire_shixuan_info":"「<font color=#ECB358>一字千金</font>」<br><li>伏罠技，锁定技，一名距离1以内的角色的摸牌阶段结束时，其将一张牌伏置于你的武将牌前或将武将牌翻面。",
            "fire_manshu":"蔓书",
            "fire_manshu_info":"「<font color=#ECB358>书漫金花</font>」<br><li>锁定技，每回合限一次，其他角色使用牌指定你为目标后，若其手牌数大于/小于你的罠牌数，回合结束后你执行一个额外的回合/其获得你所有的罠牌并复原场上所有武将牌。",
            "fire_konggu":"空谷",
            "fire_konggu_info":"「<font color=#AA8888>空谷绝响</font>」<br><li>锁定技，当你成为一张指定了多个目标的锦囊牌的目标时，若你没有手牌，则取消之。",
            "fire_zhifou":"知否",
            "fire_zhifou_info":"「<font color=#AA8888>闻香知音</font>」<br><li>出牌阶段结束时，可以将所有【杀】或【闪】视为一张指定等量目标的【桃园结义】使用。",
            "fire_test":"测试",
            "fire_test_info":"测试用技能",
            "fire_new_zhixing":"知星",
            "fire_new_zhixing_info":"「<font color=#439C6A>解甲归心</font>」<br><li>当你使用【杀】指定目标后，若目标角色装备区内有牌，则你可以取消之，然后弃置其装备区内的一张牌，令你回复1点体力且本阶段内使用【杀】的次数上限+1。",
            "fire_re_zhanhou":"战吼",
            "fire_re_zhanhou_info":"「<font color=#AC2F2E>怒血狂焰</font>」<br><li>每回合每名角色限一次，当你攻击范围内的其他角色成为【杀】的惟一目标时，你摸一张牌，然后可以打出一张【杀】抵消此【杀】并使使用者横置。",
            "fire_new_re_zhixing":"知星",
            "fire_new_re_zhixing_info":"「<font color=#439C6A>解甲归心</font>」<br><li>你使用或打出【杀】后，可以弃置攻击范围内的一名角色装备区里的一张牌，令你与其各回复1点体力且本阶段内使用【杀】的次数上限+1。",
            "fire_new_soufeng":"蒐风",
            "fire_new_soufeng_info":"「<font color=#439C6A>聆风遐迩</font>」<br><li>锁定技，你防止即将受到的雷电伤害并翻面；当你对有护甲的角色造成伤害时，令此伤害+1。",
            "fire_new_re_soufeng":"蒐风",
            "fire_new_re_soufeng_info":"「<font color=#439C6A>聆风遐迩</font>」<br><li>锁定技，当你受到雷电【杀】造成的伤害时/当你使用【杀】对有护甲的角色造成伤害时，令此伤害+1。",
            "fire_re_tuanhuo":"团火",
            "fire_re_tuanhuo_info":"「<font color=#AC2F2E>团团烈火</font>」<br><li>主公技，其他乌萨斯势力角色使用【杀】指定其他角色为目标时，你可以令目标和你横置。",
            "fire_anxiang":"安香",
            "fire_anxiang_info":"「<font color=#6F1A6F>百香合一</font>」<br><li>锁定技，当有距离1以内的其他角色受到伤害时，令你和该角色各摸一张牌。",
            "fire_jingshao":"警哨",
            "fire_jingshao_info":"「<font color=#044C8C>兵临城下</font>」<br><li>锁定技，当距离1以内的其他角色使用或打出【闪】后，令你和该角色各摸一张牌。",
            "fire_jianshou":"坚守",
            "fire_jianshou_info":"「<font color=#044C8C>路见不平</font>」<br><li>当有其他角色需要使用或打出一张【闪】时，你可以打出一张【闪】，视为其使用了一张【闪】。",
            "fire_huanying":"幻影",
            "fire_huanying_info":"「<font color=#33C5CC>心暮幻日</font>」<br><li>当有其他角色成为了一张指定了多个目标的锦囊牌的目标时，你可以弃置一张牌取消之并令你获得一点护甲。",
            "fire_tideng":"提灯",
            "fire_tideng_info":"「<font color=#33C5CC>丈丝寻弦</font>」<br><li>限定技，出牌阶段，你可以将护甲分配给任意名其他角色，然后获得〖护理〗。",
            "fire_huli":"护理",
            "fire_huli_info":"「<font color=#33C5CC>著手成春</font>」<br><li>锁定技，场上拥有护盾的角色防止即将受到的属性伤害，使用牌无次数和距离限制。其出牌阶段结束时若于此阶段内未造成过伤害，则交给你一张手牌并令你流失1点体力。",
            "fire_moji":"墨迹",
            "fire_moji_info":"「<font color=#4545A3>笔墨书谋</font>」<br><li>锁定技，当你的武将牌背面朝上时，体力值不大于你的角色使用伤害类牌不能指定你为目标。当你的武将牌从背面翻至正面时，你回复1点体力。",
            "fire_baizhi":"百直",
            "fire_baizhi_info":"「<font color=#4545A3>曲折百直</font>」<br><li>每回合限一次，当你回复体力或使用【酒】后，你可以将武将牌翻面，然后将两张相同颜色的手牌视为一张无距离限制的刺【杀】使用，此【杀】伤害值基数+1。",
            "fire_originium2":"石",
            "fire_originium2_diamond":"贪",
            "fire_originium2_club":"嗔",
            "fire_originium2_diamond2":"痴",
            "fire_originium2_club2":"疯",
            "fire_originium2_info":"",
            "fire_change":"病",
            "fire_change_info":"病变",
        },
        dynamicTranslate:{
            "fire_sixue":function(player){
                if(player.storage.fire_sixue_rewrite) return '「<font color=#192CCD>累业如雪</font>」<br><li>当有角色受到属性伤害后，你可以令该角色选择任意名角色进一次判定，若判定结果不为♦️，则其受到一点寒冰伤害，若其手牌数大于你的手牌数，则此伤害+1。';
                return '「<font color=#192CCD>累业如雪</font>」<br><li>当有角色受到其他角色造成的属性伤害后，你可以获得对该角色造成伤害的牌或令你和该角色各对伤害来源造成一点寒冰伤害并将你的武将牌翻面。';
            },
        },
    },
    intro:"",
    author:"纸鸢函音",
    diskURL:"",
    forumURL:"",
    version:"1.1",
},files:{"character":["re_firewatch.jpg","sb_firewatch.jpg","standard_firewatch.jpg","meteor.jpg","re_meteor.jpg","catapult.jpg","fang.jpg","czcibor.jpg","platinum.jpg","fartooth.jpg","gravel.jpg","extilnir.jpg","ningciqiu.jpg","qiubai.jpg","talulah.jpg","liangxun.jpg","melantha.jpg","grani.jpg","andreana.jpg","absinthe.jpg","bibeak.jpg","gitano.jpg","qanipalaat.jpg","santalla.jpg","kumikupit.jpg","valarqvin.jpg","zima.jpg","istina.jpg","gumi.jpg","leto.jpg","poca.jpg","irene.jpg","beehunter.jpg","heavyrain.jpg","inam.jpg","tuye.jpg","pallas.jpg","flint.jpg","robin.jpg","tsukinogi.jpg","meteorite.jpg","sp_meteorite.jpg","sp_firewatch.jpg","wiltedcypress_firewatch.jpg","snowywatch_firewatch.jpg","alina.jpg","coldshot.jpg","greyy.jpg","breeze.jpg","dario.jpg","velliv.jpg","agenir.jpg","liskarm.jpg","lunacub.jpg","ambriel.jpg","plume.jpg","pursuer.jpg","archetto.jpg","estelle.jpg","executor.jpg","Pozëmka.jpg","czerny.jpg","nine_colored_deer.jpg","clement.jpg","vivia.jpg","nightingale.jpg","old_firewatch.jpg","star_firewatch.jpg","restar_firewatch.jpg","re_liskarm.jpg","re_istina.jpg","re_zima.jpg"],"card":["fire_leisibian.png","fire_fieldsniper.png","fire_bulinsuo.png","fire_lantern.png","fire_scout.png","fire_knightid.png","fire_camouflage.png","fire_tacticaltransceiver.png","fire_supplement.png","fire_knightshield.png","fire_bladeofblazingsun.png","fire_rust _lantern.png","fire_radio.png","fire_club.png","fire_armour.png","fire_originium.png","fire_nearl.png","fire_nearl_the_radiant.png","fire_buwei.png"],"skill":[],"audio":[]}}})