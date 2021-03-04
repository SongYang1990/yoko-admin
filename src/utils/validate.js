/**
 * 特殊字符,判断数据中是否存在特殊字符,包含空格
 */
export function regCharacters(param) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]");
    // 数据中包含特殊字符则返回true，否则返回false
    if(pattern.test(param)) {
        return true;
    }
    return false;
}

/**
 * 邮箱，判断数据是否符合邮箱格式
 */
export function regEmail(param) {
    var pattern = /^([a-zA-Z]|[0-9])(\w)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    // 符合则返回 false, 不符合则返回true
    if (pattern.test(param)) {
        return false;
    }
    return true;
}

/**
 * 密码校验，密码规则有数字与字母组成，最少6位，最长20位
 */
export function regPassword(param) {
    var pattern = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    if (pattern.test(param)) {
        return false;
    }
    return true;
}

/**
 * 短信验证码，6位数字与字母
 */
export function regCode(param) {
    var pattern = /^[a-z0-9]{6}$/;
    if (pattern.test(param)) {
        return false;
    }
    return true;
}
    
