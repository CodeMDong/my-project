/*
 * @Author: wudongmei2
 * @Date: 2023-02-27 18:11:00
 * @LastEditors: wudongmei2
 * @LastEditTime: 2023-02-27 18:11:41
 * @Description:
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
/**
 *
 * @param {*} 金额格式化展示
 * @returns
 */
export function formatNumber(value: string) {
  value += "";
  const list = value.split(".");
  const prefix = list[0].charAt(0) === "-" ? "-" : "";
  let num = prefix ? list[0].slice(1) : list[0];
  let result = "";

  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }

  if (num) {
    result = num + result;
  }

  return `${prefix}${result}${list[1] ? `.${list[1]}` : ""}`;
}
