

// ---------- script properties ----------

var include_num = 1;
var bold = 0;

// ---------- sites ----------


var s = new Array();

s[0] = "Mens Knitted Jumper^form.html^100% Wool Blue and White jumper ...^open source, free, client side";
s[1] = "Mens Formal Blazer^doc.txt^New to 2014, our latest collection of blazers has a great new addition with this...^ faq, docs, instructions";
s[2] = "Birthday Socks^form.html^Can't think of a stocking filler? Look no further...^open source, free, client side";
s[3] = "Cuff Links^form.html^100% Wool Blue and White jumper ...^open source, free, client side";
s[4] = "Suede Slippers^doc.txt^New to 2014, our latest collection of blazers has a great new addition with this...^ faq, docs, instructions";
s[5] = "Leather Wallet^form.html^Can't think of a stocking filler? Look no further...^open source, free, client side";
s[6] = "Armani Briefs^form.html^100% Wool Blue and White jumper ...^open source, free, client side";
s[7] = "Vans Trainers^doc.txt^New to 2014, our latest collection of blazers has a great new addition with this...^ faq, docs, instructions";
s[8] = "Ray Ban Reading Glasses^form.html^Can't think of a stocking filler? Look no further...^open source, free, client side";


// ---------- end of script properties and sites ----------


var cookies = document.cookie;
var p = cookies.indexOf("d=");

if (p != -1) {
	var st = p + 2;
	var en = cookies.indexOf(";", st);
	if (en == -1) {
		en = cookies.length;
	}
	var d = cookies.substring(st, en);
	d = unescape(d);
}
var od = d;
var m = 0;
if (d.charAt(0) == '"' && d.charAt(d.length - 1) == '"') {
	m = 1;
}

var r = new Array();
var co = 0;

if (m == 0) {
	var woin = new Array();
	var w = d.split(" ");
	for (var a = 0; a < w.length; a++) {
		woin[a] = 0;
		if (w[a].charAt(0) == '-') {
			woin[a] = 1;
		}
	}
	for (var a = 0; a < w.length; a++) {
		w[a] = w[a].replace(/^\-|^\+/gi, "");
	}
	a = 0;
	for (var c = 0; c < s.length; c++) {
		pa = 0;
		nh = 0;
		for (var i = 0; i < woin.length; i++) {
			if (woin[i] == 0) {
				nh++;
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa++;
				} else {
					pa = 0;
				}
			}
			if (woin[i] == 1) {
				var pat = new RegExp(w[i], "i");
				var rn = s[c].search(pat);
				if (rn >= 0) {
					pa = 0;
				}
			}
		}
		if (pa == nh) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;
}

if (m == 1) {
	d = d.replace(/"/gi, "");
	var a = 0;
	var pat = new RegExp(d, "i");
	for (var c = 0; c < s.length; c++) {
		var rn = s[c].search(pat);
		if (rn >= 0) {
			r[a] = s[c];
			a++;
		}
	}
	co = a;

}


function return_query() {
	document.jse_Form.d.value = od;
}

function num_jse() {
	document.write(co);
}

function out_jse() {
	if (co == 0) {
		document.write('<p>Make sure all keywords are spelt correctly.<br>Try searching again using the search button above.');
		return;
	}
	for (var a = 0; a < r.length; a++) {
		var os = r[a].split("^");
		if (bold == 1 && m == 1) {
			var br = "<b>" + d + "</b>";
			os[2] = os[2].replace(pat, br);
		}
		if (include_num == 1) {
			document.write(a + 1, '. <a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		} else {
			document.write('<a href="', os[1], '">', os[0], '</a><br>', os[2], '<p>');
		}
	}

}
