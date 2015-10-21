var NameGen = function(){
	
}


NameGen.prototype.rome_kata_list = {
		a:["ア","ア","ア","ア","ア"],
		b:["バ","ビ","ブ","ベ","ボ"],
		c:["カ","シ","ク","セ","コ"],
		d:["ダ","ジ","ズ","デ","ド"],
		e:["エ","エ","エ","エ","エ"],
		f:["ファ","フィ","フ","フェ","フォ"],
		g:["ガ","ギ","グ","ゲ","ゴ"],
		h:["ハ","ヒ","フ","ヘ","ホ"],
		i:["イ","イ","イ","イ","イ"],
		j:["ジャ","ジ","ジュ","ジェ","ジョ"],
		k:["カ","キ","ク","ケ","コ"],
		l:["ラ","リ","ル","ル","ロ"],
		m:["マ","ミ","ム","メ","モ"],
		n:["ナ","ニ","ヌ","ネ","ノ"],
		o:["オ","オ","オ","オ","オ"],
		p:["パ","ピ","プ","ペ","ポ"],
		q:["クゥ","クィ","クゥ","クェ","クォ"],
		r:["ラ","リ","ル","レ","ロ"],
		s:["サ","シ","ス","セ","ソ"],
		t:["タ","チ","ツ","テ","ト"],
		u:["ウ","ウ","ウ","ウ","ウ"],
		v:["ヴァ","ヴィ","ヴ","ヴェ","ヴォ"],
		w:["ワ","ウィ","ウ","ウェ","ウォ"],
		x:["クサ","クシ","ク","クセ","クソ"],
		y:["ヤ","ィ","ユ","イェ","ヨ"],
		z:["ザ","ジ","ズ","ゼ","ゾ"]
		
	}
	
NameGen.prototype.name_base =
		{
			france: {
				pre_word : [
					"ルーn",
					"ルイt",
					"ランd",
					"ラn",
					"モンt",
					"ミューr",
					"ミューr",
					"ムーt",
					"ムースt",
					"ボワs",
					"マl",
					"マs",
					"マーk",
					"マーk",
					"マンテ",
					"ボn",
					"ブクs",
					"フジェーr",
					"フジュr",
					"フラーn",
					"フラーn",
					"フレーr",
					"フレッsh",
					"ブロn",
					"ブロn",
					"ベl",
					"ファヴァーg",
					"ファブレg",
					"フェn",
					"フェn",
					"フェr",
					"アm",
					"アv",
					"アイm",
					"アヴラn",
					"アヴラn",
					"アジェッt",
					"アリz",
					"アルジョンt",
					"ベルn",
					"ベルn",
					"ビd",
					"ピュイ",
					"ビュイr",
					"ビューr",
					"ビューr",
					"ブl",
					"ブs",
					"ファーv",
					"セルn",
					"バズーg",
					"バゼイl",
					"バゾッc",
					"バゾッq",
					"ダm",
					"タn",
					"タヴェルn",
					"ウーg",
					"ウーm",
					"ウーn",
					"ウーs",
					"ウーt",
					"ウーt",
					"ウーv",
					"フージェーr",
					"ブークs",
					"フォn",
					"エスターブl",
					"エターブl",
					"エトr",
					"エトゥーl",
					"オーb",
					"オーb",
					"オーm",
					"オーp",
					"チl",
					"チュイl",
					"テn",
					"ティl",
					"テイl",
					"デュー",
					"テル",
					"テルn",
					"ドm",
					"キャステl",
					"キャストr",
					"キャテl",
					"クーc",
					"グーn",
					"クードr",
					"グリs",
					"ケn",
					"コr",
					"ゴーn",
					"コリn",
					"コンd",
					"サl",
					"サヴェルn",
					"サヴォn",
					"サブl",
					"サンケトr",
					"シェn",
					"シェイズ",
					"シェズ",
					"シャn",
					"シャn",
					"シャn",
					"シャt",
					"シャートr",
					"シューs",
					"フレイs",
					"ストレs",
					"カスタn",
					"カスタn",
					"カトゥn",
					"ヴェルn",
					"ヴェルn",
					"ウールm",
					"エグリーs",
					"ヴェr",
				], //接頭辞
				post_word :[
					"aルグ",
					"ーシュ",
					"aン",
					"eイユ",
					"oン",
					"タル",
					"テル",
					"トワ",
					"フォー",
					"ベネ",
					"ボネ",
					"メール",
				], //接尾辞
				word:[
					"アリーズ",
					"ヴァーヴ",
					"ヴァル",
					"ヴィオ",
					"ウイユ",
					"ヴィラー",
					"ヴィリエ",
					"ヴィル",
					"ヴィレ",
					"ウーゾ",
					"ウーダン",
					"ウーダン",
					"ウーチ",
					"ウーロ",
					
					"ヴェシン",
					"ヴェルノ",
					"ヴォーヴ",
					"ヴォワ",
					"ヴォワ",
					"ヴォワザン",
					"ウッセ",
					"ウント",
					"エイダン",
					"エコ",
					"オゾ",
					"オラド",
					"オワッセ",
					"オンター",
					"カズ",
					"カペル",
					"カルージュ",
					"カルージュ",
					"シャペル",
					"シャルー",
					"シャロル",
					"セルヴ",
					"セルヴ",
					"ストラード",
					"セウブ",
					"セッル",
					"タル",
					"トルフ",
					"トルプ",
					"ドルフ",
					"トレ",
					"トレヴ",
					"トワ",
					"ナン",
					"バーク",
					"バーク",
					"チュー",
					"バック",
					"ブール",
					"ブイユ",
					"フー",
					"ブー",
					"フェイ",
					"フェール",
					"フォー",
					"フォージ",
					"フォント",
					"ブリ",
					"ブリーヴ",
					"ブリーヴァ",
					"ブリッグ",
					"ブリル",
					"プル",
					"ブレイユ",
					"ブレイユ",
					"ベクレル",
					"ベシュレル",
					"ベジン",
					"ベネ",
					"ベルク",
					"ベルグ",
					"ボ",
					"ボールド",
					"ボネ",
					"ボルド",
					"ポン",
					"ファイ",
					"ファイユ",
					"ムーラン",
					"メール",
					"メニル",
					"メニル",
					"モン",
					"モンテ",
					"ラン",
					"ラン",
					"コー",
					"ルー",
					"ルー",
					"ルク",
					"ロク",
					"ロク",
					"ロシュ",
				], //普通
            },
			
			german:{
				pre_word:[
					"テン",
					"ルレ",
					"ルト",
					"デト",
					"レン",
					"ハン",
					"ル",
					"ナウ",
					"ラー",
					"ファ",
					"ヴェ",
					"イル",
					"エー",
					"アン",
					"ドー",
					"フス",
					"ター"
				],
				word:[
					"ヴァルツ",
					"フォルスト",
					"ザウツ",
					"フランク",
					"ゲット",
					"ライ",
					"フィノ",
					"ザルツ",
					"オズ",
					"プラウ",
					"フランケン",
					"デリッツ",
					"トラウアー",
					"アルゴー",	
					"ヴァイス"		
				],
				post_word:[
					"aウ",
					"eン",
					"iッシュ",
					"iンゲン",
					"ヴァイク",
					"ヴァッサー",
					"ヴァルデ",
					"ヴァルト",
					"ヴェーゲ",
					"ヴェルト",
					"ガウ",
					"ガルト",
					"カンプ",
					"キルヒェン",
					"グルント",
					"ゲン",
					"ザッハ",
					"ザント",
					"シュタイン",
					"シュタット",
					"シュテット",
					"シュテット",
					"シュトック",
					"ツィヒ",
					"トゥルム",
					"ドルフ",
					"ナッハ",
					"ハーゲン",
					"バーデン",
					"ハーフェン",
					"ハイム",
					"ハウゼン",
					"バッハ",
					"バッハレ",
					"ヒェン",
					"ヒューゲル",
					"ビュール",
					"ビュッテル",
					"フート",
					"フェルス",
					"フェルデ",
					"フェルデン",
					"フェルト",
					"フォルト",
					"ブランデ",
					"ブリュック",
					"ブリュッケン",
					"ブルク",
					"ブルック",
					"ブルッフ",
					"フルト",
					"ブルン",
					"ブロン",
					"ベルク",
					"ベルグ",
					"ホーフ",
					"ホーフェン",
					"ホルスト",
					"ホルツ",
					"ホルン",
					"ボルン",
					"ミュンデ",
					"ムント",
					"モーア",
					"ラッヒェ",
					"ランゲン",
					"ラント",
					"リッヒ",
					"レーベン",
					"ローン",
					"ロット",
				]
				
			}
			
		};

NameGen.prototype.type_list = {
	
		OCEAN: ["海"],
        BEACH: ["海岸","浜"],
        LAKE:  ["湖","沼","海"],
        RIVER: ["川","河"],
        MARSH: ["湖","沼"],
        ICE:   [""],
        ROCK: [""],
        LAVA: [""],
        SNOW: ["雪原"],
        TUNDRA: ["凍土"],
        BARE: [""],
        SCORCHED: [""],
        TAIGA: ["森","の森"],
        SHRUBLAND: ["草原"],
        TEMPERATE_DESERT: ["砂丘","砂漠"],
        TEMPERATE_RAIN_FOREST: ["森","の森"],
        TEMPERATE_DECIDUOUS_FOREST: ["森","の森"],
        GRASSLAND: ["平原","草原"],
        TROPICAL_RAIN_FOREST: ["森","の森","樹海"],
        TROPICAL_SEASONAL_FOREST: ["森","の森"],
        SUBTROPICAL_DESERT: ["砂丘","砂漠"],

		castle:["城","要塞","砦","城塞","王城","王宮","宮殿","宮"],
		town:["街","の街","村","の村","都市","都"],
		load:["道","街道","道"],
		plain:["平原","草原"],
		mountain:["山","山脈","の山","火山","丘陵"]
	};


NameGen.prototype.search_from_kata = function( str ){
		var consonant;
		for(key in this.rome_kata_list ){
			consonant = this.rome_kata_list[key].indexOf(str);
			if ( consonant > -1){
				return { 'vowel':key, 'consonant':consonant };
			}
		}
		return null;
	};
	

NameGen.prototype.word_kata_marge = function ( w1 ,w2){
		var w1_end = w1.substr( (w1.length-1) );
		var w2_start = w2.substr( 0 , 1); 
		//console.log( w1_end ,w1_end.match(/[^a-z]/gi) );
		var consonant = 2;
		var vowel,sp;
		if( w1_end.match(/[^a-z]/gi) == null　){
			
			if( w2_start.match(/[^a-z]/gi) == null　){
				if( w2_start=="a" ) consonant = 0;
				if( w2_start=="b" ) consonant = 1;
				if( w2_start=="c" ) consonant = 2;
				if( w2_start=="d" ) consonant = 3;
				if( w2_start=="e" ) consonant = 4;
			}else{
				sp = this.search_from_kata( w2_start );
				if(sp) consonant = sp['consonant']
			}
			//console.log( w1_end ,consonant );
			return w1.substr(0,w1.length-1) + 
					 this.rome_kata_list[w1_end][consonant]
					 + w2.substr(1);
		}else{
			if( w2_start.match(/[^a-z]/gi) == null　){
				if( w2_start=="a" ) consonant = 0;
				if( w2_start=="b" ) consonant = 1;
				if( w2_start=="c" ) consonant = 2;
				if( w2_start=="d" ) consonant = 3;
				if( w2_start=="e" ) consonant = 4;
				sp =this.search_from_kata(w1_end);
				if(sp) vowel = sp['vowel'];
				else vowel = w2_start;
				return w1.substr(0,w1.length-1) + 
					 this.rome_kata_list[vowel][consonant]
					 + w2.substr(1);
			}else{
				return w1+w2;
			}
		}
	};

NameGen.prototype.getName = function(base_type , land_type){
		var name = "";
		var pre = base_type.pre_word; 
        var middle = base_type.word;
        var post = base_type.post_word.concat( base_type.word);
        if( Math.random() >0.5 ) {
			pre = pre.concat( base_type.word);
			name = this.word_kata_marge(
					pre[Math.floor(Math.random()*pre.length)] ,
					post[Math.floor(Math.random()*post.length)]
				);
		}else {
			name = this.word_kata_marge( 
				pre[Math.floor(Math.random()*pre.length)] ,
				middle[Math.floor(Math.random()*middle.length)]
			);
			this.word_kata_marge(
					name ,
					post[Math.floor(Math.random()*post.length)]
				);
		}
		var type_name_list =  this.type_list[land_type];
		//console.log(type_name_list,land_type);
		name += type_name_list[Math.floor(Math.random()*type_name_list.length)];
		return name;
	};



	