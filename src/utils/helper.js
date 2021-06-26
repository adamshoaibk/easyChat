export const getShortName = (name) => {
    let fullName = name;
        console.log(fullName);
        let shortText = '';
        if (fullName) {
            fullName = fullName.split(' ');
            if (fullName.length === 1) {
                shortText = fullName[0].charAt(0).toUpperCase();
            } else if (fullName.length > 1) {
                shortText = fullName[0].charAt(0).toUpperCase() + fullName[1].charAt(0).toUpperCase();
            }
            return shortText;
        } else {
            return 'X';
        }
}

export const randomTime =()=>{
    const hrs = Math.round(Math.random()*12);
    const mins = Math.round(Math.random()*60);
    const hFormat = hrs < 10 ? '0' : '';
    const mFormat = mins < 10 ? '0' : '';
    const amPm = hrs < 12 ? 'AM' : 'PM';
    return String(hFormat + hrs + ":"+ mFormat + mins + " " + amPm)
}