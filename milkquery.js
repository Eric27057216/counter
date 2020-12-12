// QuerySelectorAll
function MyQuerySelector (el){
	this.el = document.querySelectorAll(el)
}
MyQuerySelector.prototype.on = function (event, func) {
	for (var i = 0; i < this.el.length; i++) {
		this.el[i].addEventListener(event, func);
	}
};
MyQuerySelector.prototype.val = function (str) {
	for (var i = 0; i < this.el.length; i++) {
		if (str === undefined) {
			// 取出值
			value = this.el[i].value;
			return value;
		} else {
			// 填入值
			str = String(str);
			this.el[i].value = str;
		}
	}
};
MyQuerySelector.prototype.addClass = function (str) {
	for (var i = 0; i < this.el.length; i++) {
		// 取出舊的值
		exist_class = this.el[i].className;
		split_class = exist_class.split(" ");

		if (split_class.indexOf(str) == -1) {
			// 如果沒有存在，新增
			split_class.push(str);
			new_class = split_class.join(" ");
			this.el[i].className = new_class;
		}
	}
};
MyQuerySelector.prototype.removeClass = function (str) {
	for (var i = 0; i < this.el.length; i++) {
		// 取出舊的值
		exist_class = this.el[i].className;
		split_class = exist_class.split(" ");
		class_index = split_class.indexOf(str)
		if (class_index != -1) {
			split_class.splice(class_index, 1);
		}

		// 更新
		new_class = split_class.join(" ");
		this.el[i].className = new_class;
	}
};

// $("")
function $ (el) {
	return new MyQuerySelector(el)
}
