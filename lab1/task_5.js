function get_Days_Passed_Count (year) {
    let now = new Date();
    if (typeof year === 'undefined') { year = now.getFullYear(); }
    let date = new Date(year, 0, 1, 0, 0, 0, 0);
    let ms_passed = now.getTime() - date.getTime();
    let res = ms_passed / 1000 / 60 / 60 / 24;
    return Math.floor(res);

}
console.log(get_Days_Passed_Count());